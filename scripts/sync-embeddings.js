
const { QdrantClient } = require('@qdrant/js-client-rest');
const { VertexAI } = require('@google-cloud/vertexai');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const QDRANT_URL = process.env.QDRANT_URL;
const QDRANT_API_KEY = process.env.QDRANT_API_KEY;
const GCP_PROJECT_ID = process.env.GCP_PROJECT_ID;
const GCP_LOCATION = process.env.GCP_LOCATION || 'us-central1';
const COLLECTION_NAME = process.env.QDRANT_COLLECTION_NAME || 'documentation';

if (!QDRANT_URL || !QDRANT_API_KEY || !GCP_PROJECT_ID) {
    console.error('Missing required environment variables: QDRANT_URL, QDRANT_API_KEY, GCP_PROJECT_ID');
    process.exit(1);
}

const qdrant = new QdrantClient({
    url: QDRANT_URL,
    apiKey: QDRANT_API_KEY,
});

// Initialize Vertex AI
const vertexAI = new VertexAI({ project: GCP_PROJECT_ID, location: GCP_LOCATION });
const model = vertexAI.getGenerativeModel({ model: 'text-embedding-004' });

async function getEmbeddings(text) {
    try {
        // Vertex AI Node SDK 'embedContent' returns a different structure
        const result = await model.embedContent(text);
        if (result.response && result.response.embeddings && result.response.embeddings[0]) {
            return result.response.embeddings[0].values;
        }
        throw new Error('Unexpected embedding response structure');
    } catch (error) {
        console.error('Error generating embedding:', error);
        throw error;
    }
}

function chunkText(text, maxLength = 1000) {
    const chunks = [];
    let currentChunk = '';

    // Simple splitting by paragraphs or newlines
    const paragraphs = text.split(/\n\s*\n/);

    for (const paragraph of paragraphs) {
        if ((currentChunk + paragraph).length > maxLength) {
            if (currentChunk) chunks.push(currentChunk.trim());
            currentChunk = paragraph;
        } else {
            currentChunk += (currentChunk ? '\n\n' : '') + paragraph;
        }
    }
    if (currentChunk) chunks.push(currentChunk.trim());
    return chunks;
}

async function processFile(filePath) {
    console.log(`Processing ${filePath}...`);
    const content = fs.readFileSync(filePath, 'utf-8');
    const relativePath = path.relative(process.cwd(), filePath);

    // Skip small files or specific patterns if needed
    if (content.length < 50) return;

    const chunks = chunkText(content);

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        if (!chunk.trim()) continue;

        try {
            const vector = await getEmbeddings(chunk);

            // Create a deterministic ID based on file path and chunk index (simplified for demo)
            // Ideally use a hash, but for now we'll rely on Qdrant's UUID generation or let it be random 
            // if we don't care about overwriting exact chunks by ID.
            // For upserting to work well for updates, we should probably generate an ID.
            // Here we will just upsert. If we want to replace old file content, we might delete by filter first.

            const point = {
                id: require('crypto').createHash('md5').update(`${relativePath}-${i}`).digest('hex'),
                vector: vector,
                payload: {
                    content: chunk,
                    source: relativePath,
                    chunk_index: i
                }
            };

            await qdrant.upsert(COLLECTION_NAME, {
                wait: true,
                points: [point]
            });

        } catch (error) {
            console.error(`Failed to process chunk ${i} of ${filePath}:`, error.message);
        }
    }
}

async function main() {
    // Ensure collection exists
    try {
        await qdrant.getCollection(COLLECTION_NAME);
    } catch (e) {
        console.log(`Collection ${COLLECTION_NAME} not found. Creating...`);
        // Dimension for text-embedding-004 is 768
        await qdrant.createCollection(COLLECTION_NAME, {
            vectors: {
                size: 768,
                distance: 'Cosine',
            },
        });
    }

    // Find all markdown files (excluding node_modules)
    const files = glob.sync('**/*.md', { ignore: 'node_modules/**' });

    console.log(`Found ${files.length} markdown files.`);

    const processedFiles = new Set();

    for (const file of files) {
        await processFile(file);
        // Normalize path to match what we store in Qdrant (relative path)
        processedFiles.add(path.relative(process.cwd(), file));
    }

    // Cleanup deleted files
    try {
        // Scroll through all points to find unique sources
        // Note: For very large collections, this might be slow. 
        // A better approach for production would be to search/scroll or use a separate collection for file tracking.
        // But for documentation, scroll is usually fine.

        const scrollResult = await qdrant.scroll(COLLECTION_NAME, {
            limit: 10000, // Adjust based on your needs
            with_payload: true,
            with_vector: false
        });

        const points = scrollResult.points;
        const existingSources = new Set();

        for (const point of points) {
            if (point.payload && point.payload.source) {
                existingSources.add(point.payload.source);
            }
        }

        const filesToDelete = [...existingSources].filter(source => !processedFiles.has(source));

        if (filesToDelete.length > 0) {
            console.log(`Found ${filesToDelete.length} deleted files in index. Removing...`);
            for (const source of filesToDelete) {
                console.log(`Deleting vectors for: ${source}`);
                await qdrant.delete(COLLECTION_NAME, {
                    filter: {
                        must: [
                            {
                                key: 'source',
                                match: {
                                    value: source
                                }
                            }
                        ]
                    }
                });
            }
        } else {
            console.log('No deleted files found in index.');
        }

    } catch (e) {
        console.error('Error during cleanup:', e);
    }

    console.log('Sync complete!');
}

main().catch(console.error);
