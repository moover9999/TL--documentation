# ⚓ Creating a Torch Labs PAYG ISP API batch

1. First, you need to [creating-a-recurring-price-for-a-product.md](../../product-settings/creating-a-recurring-price-for-a-product.md "mention")and set a custom recurring period to 28 days instead of a month

{% hint style="info" %}
you need to make sure, the price you have created has a custom recurring period set to 28 days. We do this because, if the customers' payment method fails, they now have a grace period of 2 days to complete the payment in order to keep the same set of proxies/items.
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2023-04-12 at 3.57.09 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Depending on the product you can add the quantities under the metadata as follows.

**Quantity - 10,25,50,100**

VEVE, TICK, RETL, JUIC, DAILY, DTAG, VIRM, COLT, VOCU

**Quantity - 254**

RETL\_24, JUIC\_24, DTAG\_24, VOCU\_24


{% endhint %}



{% hint style="warning" %}
Please keep this in mind when adding the `amount` metadata field inside the Stripe price. [product-metadata.md](../../product-settings/product-metadata.md "mention")
{% endhint %}

2. Next, you need to go to the products section and sync your new prices.

{% content-ref url="../adding-data-center-products.md" %}
[adding-data-center-products.md](../adding-data-center-products.md)
{% endcontent-ref %}

3. Go to the _Datacenter_ tab on Admin Dashboard.

<figure><img src="../../.gitbook/assets/5 (9).png" alt=""><figcaption></figcaption></figure>

4\. Click on the dropdown list before the new batch.

{% hint style="info" %}
you also need to request the TL API to be activated on the ticket before you can see it on the drop-down list.
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2023-04-12 at 4.23.38 PM.png" alt=""><figcaption></figcaption></figure>

5\. Select **TL API** from the list and you will be presented with a few more options to choose which type of proxies you want to add to the particular batch.

<figure><img src="../../.gitbook/assets/Screenshot 2023-04-12 at 4.25.31 PM.png" alt=""><figcaption></figcaption></figure>

6\. Now you can add a stock limit then tick confirm and select launch.&#x20;

{% hint style="info" %}
Please note that the expiration is hardcoded for 30 days by default and this cannot be changed. This means your customers will be able to use their proxies for 30 days.
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2023-04-12 at 4.30.01 PM.png" alt=""><figcaption></figcaption></figure>
