# 〽️ White labeling proxies with your domain



{% hint style="info" %}
This process allows you to brand the proxies with your company name. For example, if you are using packet stream the default proxies will have [packetstream.io](http://packetstream.io) in the name. However, using the following guide you can use your domain instead to brand the proxies.
{% endhint %}

#### Quick Domain Links

{% hint style="info" %}
Please make sure to have two different names for the default and EU products (i.e. Oxylabs , Smart) when entering to DNS settings. Having the same name for the different products may lead to generating non-functioning proxies.&#x20;
{% endhint %}

| API                             | Record Type | Domain                                   |
| ------------------------------- | ----------- | ---------------------------------------- |
| Smartproxies (Default)          | CNAME       | smrt.x.proxiess.com                      |
| SmartEU                         | CNAME       | smrteu.x.proxiess.com                    |
| Oxylabs (Default)               | CNAME       | oxy.x.proxiess.com                       |
| OxylabsEU                       | CNAME       | oxyeu.x.proxiess.com                     |
| IPRoyal (Default)               | CNAME       | iproyaliproyal.x.proxiess.com            |
| IPRoyalEU                       | CNAME       | iproyaleu.x.proxiess.com                 |
| IPRoyalAsia                     | CNAME       | iproyalasia.x.proxiess.com               |
| IPRoyal (Default) - SOCKS5      | CNAME       | socksiproyal.x.proxiess.com              |
| IPRoyalEU - SOCKS5              | CNAME       | socksiproyaleu.x.proxiess.com            |
| IPRoyalAsia - SOCKS5            | CNAME       | socksiproyalasia.x.proxiess.com          |
| Packetstream (Default)          | CNAME       | pkt.x.proxiess.com                       |
| PacketstreamEU                  | CNAME       | pkteu.x.proxiess.com                     |
| PacketstreamAsia                | CNAME       | pktasia.x.proxiess.com                   |
| Packetstream (Default) - SOCKS5 | CNAME       | sockspkt.x.proxiess.com                  |
| PacketstreamEU - SOCKS5         | CNAME       | sockspkteu.x.proxiess.com                |
| PacketstreamAsia - SOCKS5       | CNAME       | sockspktasia.x.proxiess.com              |
| Brightdata (Default)            | CNAME       | brd.x.proxiess.com                       |
| Brightdata EU                   | CNAME       | brdeu.x.proxiess.com                     |
| Brightdata Asia                 | CNAME       | brdasia.x.proxiess.com                   |
| Geonode                         | CNAME       | premium-residential.geonode.com          |
| X Residential                   | CNAME       | Refer "White Labeling the X Residential" |



**X Residential**

This guide outlines the white labeling process for **X Residential**.

{% content-ref url="white-labeling-the-x-residential.md" %}
[white-labeling-the-x-residential.md](white-labeling-the-x-residential.md)
{% endcontent-ref %}

#### PacketStream

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Open the DNS configuration for your domain.
2. Create a CNAME Record pointing to the domain.
3. Whatever you enter in the name/host will decide the domain which points to our API IP.
4. Thus if your domain is [API.com](http://api.com/) and you enter the host premium or whatever you want to call it pointing to the PacketStream domain, your proxies will be formatted [premium.yourdomain.com](http://premium.yourdomain.com/):port:user:pass
5. Here are the white labeling data summary for HTTP/HTTPS and SOCKS5:

<table><thead><tr><th width="187">API</th><th width="145">Authentication</th><th width="249">Host</th><th>Port</th></tr></thead><tbody><tr><td>Packetstream</td><td>HTTP/HTTPS</td><td>pkt.x.proxiess.com</td><td>31112</td></tr><tr><td>Packetstream EU</td><td>HTTP/HTTPS</td><td>pkteu.x.proxiess.com</td><td>31113</td></tr><tr><td>Packetstream Asia</td><td>HTTP/HTTPS</td><td>pktasia.x.proxiess.com</td><td>31114</td></tr><tr><td>Packetstream</td><td>SOCKS5</td><td>sockspkt.x.proxiess.com</td><td>31115</td></tr><tr><td>Packetstream EU</td><td>SOCKS5</td><td>sockspkteu.x.proxiess.com</td><td>31116</td></tr><tr><td>Packetstream Asia</td><td>SOCKS5</td><td>sockspktasia.x.proxiess.com</td><td>31117</td></tr></tbody></table>



#### Oxylabs

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "example" as the host.
4. In the "value" field, enter "`oxy.x.proxiess.com`."
5. Save the changes and allow some time for DNS propagation.
6. Your custom oxylabs domain will now be accessible via the URL: `example.mydomain.com`

#### OxylabsEU

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "exampleeu" as the host, appending "eu" at the end. Please note this must be the same value entered for `oxy.x.proxiess.com` with eu at the end.
4. In the "value" field, enter "`oxyeu.x.proxiess.com`."
5. Save the changes and allow some time for DNS propagation.
6. Your custom domain will now be accessible via the URL: `exampleeu.mydomain.com`

#### Smart Proxies

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "example" as the host.
4. In the "value" field, enter "[smrt.x.proxiess.com](http://smrt.x.proxiees.com/)."
5. Save the changes and allow some time for DNS propagation.
6. Your custom domain will now be accessible via the URL: `example.mydomain.com`
7. An example on Godaddy is linked below:

<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

#### SmartEU

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "exampleeu" as the host, appending "eu" at the end. Please note this must be the same value entered for [smrt.x.proxiees.com](http://smrt.x.proxiees.com/) with eu at the end.
4. In the "value" field, enter "[smrteu.x.proxiess.com](http://smrteu.x.proxiees.com/)."
5. Save the changes and allow some time for DNS propagation.
6. Your custom domain will now be accessible via the URL: `exampleeu.mydomain.com`

#### IP Royal

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Open the DNS configuration for your domain.
2. Create a C Name Record pointing to the domain.
3. Whatever you enter in the name/host will decide the domain which points to our API IP.
4. Thus if your domain is [API.com](http://api.com/) and you enter the host premium or whatever you want to call it pointing to the PacketStream domain, your proxies will be formatted [premium.yourdomain.com](http://premium.yourdomain.com/):port:user:pass
5. Here are the white labeling data summary for HTTP/HTTPS and SOCKS5:

<table><thead><tr><th width="155">API</th><th width="168">Authentication</th><th width="323">Host</th><th>Port</th></tr></thead><tbody><tr><td>IPRoyal</td><td>HTTP/HTTPS</td><td>iproyal.x.proxiess.com</td><td>12321</td></tr><tr><td>IPRoyal EU</td><td>HTTP/HTTPS</td><td>iproyaleu.x.proxiess.com</td><td>12323</td></tr><tr><td>IPRoyal Asia</td><td>HTTP/HTTPS</td><td>iproyalasia.x.proxiess.com</td><td>12322</td></tr><tr><td>IPRoyal</td><td>SOCKS5</td><td>socksiproyal.x.proxiess.com</td><td>12324</td></tr><tr><td>IPRoyal EU</td><td>SOCKS5</td><td>socksiproyaleu.x.proxiess.com</td><td>12326</td></tr><tr><td>IPRoyal Asia</td><td>SOCKS5</td><td>socksiproyal.x.proxiess.com</td><td>12325</td></tr></tbody></table>



Brightdata

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Open the DNS configuration for your domain.
2. Create a C Name Record pointing to the domain.
3. Whatever you enter in the name/host will decide the domain which points to our API IP.
4. Thus if your domain is [API.com](http://api.com/) and you enter the host premium or whatever you want to call it pointing to the PacketStream domain, your proxies will be formatted [premium.yourdomain.com](http://premium.yourdomain.com/):port:user:pass
5. An example on Godaddy is linked below:

<figure><img src="../../.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure>

#### Geonode

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "example" as the host.
4. In the "value" field, enter `"premium-residential.geonode.com"`
5. Save the changes and allow some time for DNS propagation.
6. Your custom oxylabs domain will now be accessible via the URL: `example.mydomain.com`
7. An example on Godaddy is linked below:
