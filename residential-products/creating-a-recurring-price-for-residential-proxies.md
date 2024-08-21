# ♻️ Creating a recurring price for Residential Proxies

{% hint style="success" %}
Any product can have two types of prices:&#x20;

1. One-time - Customer is billed once
2. Recurring - Customer is billed on a recurring basis (eg: Monthly)



You can add recurring prices to any existing product.

Each product can have both one-time and recurring prices at the same time.&#x20;
{% endhint %}

{% hint style="warning" %}
We have introduced our residential proxies with a convenient recurring pricing model.

Only in each successive billing cycle, the customer will be delivered the originally delivered product on their first checkout. They **will not** be delivered a new list each time their subscription updates.

If you want to update their delivered product, you can do so by following the below guide: [https://docs.torchlabs.xyz/data-center-and-accounts/edit-and-view-delivered-a-products](https://docs.torchlabs.xyz/data-center-and-accounts/edit-and-view-delivered-a-products)
{% endhint %}

**Before you add a recurring price, you also need to make sure you have the customer billing portal set up as well.**

{% content-ref url="../customer-dashboard/customer-subscription-portal.md" %}
[customer-subscription-portal.md](../customer-dashboard/customer-subscription-portal.md)
{% endcontent-ref %}

1. To implement recurring prices in the residential proxies, we can add the same to the existing products. Therefore, go to an existing product you have created within Stripe.

<figure><img src="../.gitbook/assets/image (48).png" alt=""><figcaption></figcaption></figure>

2\. Click on the **Plus ( + )** sign.

<figure><img src="../.gitbook/assets/image (37).png" alt=""><figcaption></figcaption></figure>

3. Next, select the **Recurring** button. Then, enter the subscription price in the **Amount** text box under the **Price** section. Next, change the **billing period** to "**Custom**" and set the period to **every 28 days**. once done, click the **Create Price** Button.

<figure><img src="../.gitbook/assets/image (39).png" alt=""><figcaption></figcaption></figure>

4. Next, you need to add the metadata to specify the quantity you wish to deliver at the given price point.
5. For detailed instructions refer to each product setup page and metadata can be found below

{% content-ref url="../product-settings/product-metadata.md" %}
[product-metadata.md](../product-settings/product-metadata.md)
{% endcontent-ref %}

6. To add the metadata, click on the recurring price. Then, click on **Edit metadata**.&#x20;

<figure><img src="../.gitbook/assets/image (40).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (42).png" alt=""><figcaption></figcaption></figure>

7. Next, update the key and value as follows: The **key** should be "**data\_gb**," and the **value** should correspond to the **amount of data** you plan to provide with the subscription in Giga Bytes (GB).

<figure><img src="../.gitbook/assets/image (44).png" alt=""><figcaption></figcaption></figure>

7. You can now see that we have successfully created a recurring product since we have a price with billing cycle next to it.

<figure><img src="../.gitbook/assets/image (47).png" alt=""><figcaption></figcaption></figure>

8. Finally, head over to the admin dashboard and sync your products following the usual process.

