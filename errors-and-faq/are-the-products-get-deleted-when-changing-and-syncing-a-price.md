# ❔ Are the products get deleted when changing and syncing a price ?

You have to take a backup before syncing a product. Because if you have a batch that is active and you sync a product, then the batch will stop.

<figure><img src="../.gitbook/assets/Screenshot 2023-03-20 at 11.23.24.png" alt=""><figcaption></figcaption></figure>

This happens because the price is now different and any changes done on stripe and synced the batch will reset because the batch was set for the old product. So you need always make sure to take a backup of your batch before changing a price.
