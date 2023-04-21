# ♻ Creating a recurring price for a product

{% hint style="success" %}
Any product can have two types of prices:&#x20;

1. One-time - Customer is billed once
2. Recurring - Customer is billed on a recurring basis (eg: Monthly)



You can add recurring prices to any existing product.

Each product can have both one-time and recurring prices at the same time.&#x20;
{% endhint %}

{% hint style="warning" %}
Recurring products are only available for Datacenter and Accounts products only at the moment. Residential products are coming soon.

Only in each successive billing cycle, the customer will be delivered the originally delivered product on their first checkout. They **will not** be delivered a new list each time their subscription updates.

If you want to update their delivered product, you can do so by following the below guide: [https://docs.torchlabs.xyz/data-center-and-accounts/edit-and-view-delivered-a-products](https://docs.torchlabs.xyz/data-center-and-accounts/edit-and-view-delivered-a-products)
{% endhint %}

**Before you add a recurring price, you also need to make sure you have the customer billing portal set up as well.**

{% content-ref url="../customer-dashboard/customer-subscription-portal.md" %}
[customer-subscription-portal.md](../customer-dashboard/customer-subscription-portal.md)
{% endcontent-ref %}

1. To add recurring prices, go to an existing product you have created within Stripe.

![](<../.gitbook/assets/Screen Shot 2022-06-26 at 12.41.31 PM.png>)

2\. Click on Add Another Price.

![](<../.gitbook/assets/Screen Shot 2022-06-26 at 12.41.40 PM.png>)

3\. Next, put your desired price and choose "Recurring" and click Add price.

![](<../.gitbook/assets/Screen Shot 2022-06-26 at 12.41.56 PM.png>)

4\. Next, you need to add the metadata to specify the quantity you wish to deliver at the given price point.

For detailed instructions refer to each product setup page and metadata can be found below

{% content-ref url="product-metadata.md" %}
[product-metadata.md](product-metadata.md)
{% endcontent-ref %}

![](<../.gitbook/assets/Screen Shot 2022-06-26 at 12.42.29 PM.png>)

5\. You can now see that we have successfully created a recurring product since we have a price with /month next to it.

![](<../.gitbook/assets/Screen Shot 2022-06-26 at 12.42.35 PM.png>)

6\. Finally, head over to the admin dashboard and sync your products following the usual process.
