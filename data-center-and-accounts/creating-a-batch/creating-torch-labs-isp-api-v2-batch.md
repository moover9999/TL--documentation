# ⚓ Creating Torch Labs ISP API V2 batch

First, you need to [creating-a-recurring-price-for-a-product.md](../../product-settings/creating-a-recurring-price-for-a-product.md "mention") and set a custom recurring period to 28 days instead of a month

{% hint style="info" %}
Please ensure that the price you set includes a custom recurring period of 28 days. We follow this approach to allow a 2-day grace period for customers to complete their payment in case their payment method fails, ensuring they can retain the same set of proxies/items.
{% endhint %}

<mark style="color:orange;">Before proceeding, please ensure that automatic subscription cancellation is configured in Stripe by following this guide:</mark> [cancel-subscription-after-payment-retries.md](../../errors-and-faq/stripe/cancel-subscription-after-payment-retries.md "mention")

<figure><img src="../../.gitbook/assets/Screenshot 2023-04-12 at 3.57.09 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Depending on the product you can add any **Quantity between 1 to 200.**

* Sneaker Pools: ISP\_CA\_SNEAKERS, ISP\_DE\_SNEAKERS, ISP\_UK\_SNEAKERS, ISP\_US\_SNEAKERS
* Ticket Pools: ISP\_US\_TICKETS, ISP\_CA\_TICKETS, ISP\_DE\_TICKETS, ISP\_UK\_TICKETS
* Retail Pools: ISP\_US\_RETAILADVANCED, ISP\_UK\_RETAILPLUS, ISP\_DE\_RETAILPLUS
{% endhint %}

{% hint style="warning" %}
Please remember this when adding the `amount` metadata field inside the Stripe price. [product-metadata.md](../../product-settings/product-metadata.md "mention")
{% endhint %}

{% hint style="info" %}
For subnet plans plase remember the below when adding the **metadata** field inside Stripe.\


Key - `amount`

Value - `256`



Available subnet plans:

* Sneaker Pools: **SN\_US\_SNEAKERS**
* Ticket Pools: **SN\_NY\_TICKETS**, **SN\_LA\_TICKETS**, **SN\_UK\_TICKETS, SN\_CA\_TICKETS, SN\_US\_TICKETS**
* Retail+ Pool: **SN\_US\_RETAILPLUS, SN\_UK\_RETAILPLUS**
{% endhint %}



Next, you must go to the products section and sync your new prices.

{% content-ref url="../adding-data-center-products.md" %}
[adding-data-center-products.md](../adding-data-center-products.md)
{% endcontent-ref %}



Go to the _Datacenter_ tab on the Admin Dashboard.

<figure><img src="../../.gitbook/assets/5 (9).png" alt=""><figcaption></figcaption></figure>



Click on the dropdown list before the Batch Type and select TL API V2.

{% hint style="info" %}
Just a quick reminder: You'll need to request TL API V2 activation through the support ticket before it appears in the drop-down list.
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2025-07-24 145927.png" alt=""><figcaption></figcaption></figure>



Next, select the product.

<figure><img src="../../.gitbook/assets/Screenshot 2025-07-24 150055.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
**ISP\_** is 1 IP

**SN\_** is a subnet that has 256 IPs
{% endhint %}



After selecting the Batch Type and Product, click on the 'New Batch' icon button.

<figure><img src="../../.gitbook/assets/Screenshot 2025-07-24 150857.png" alt=""><figcaption></figcaption></figure>



Now you can enable the stock limit, set a stock quantity, tick 'Confirm' and then select 'Launch.'&#x20;

{% hint style="info" %}
Please note that the expiration period is fixed at 30 days by default and cannot be changed. This means your customers will have access to their proxies for exactly 30 days.
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2025-07-24 151701.png" alt=""><figcaption></figcaption></figure>

