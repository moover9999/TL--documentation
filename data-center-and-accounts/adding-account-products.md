# ✅ Adding account products

{% hint style="info" %}
The steps for an Account Product is the same as below. However, you will need to do the steps in the _Accounts_ tab instead of the _Datacenter_ tab.
{% endhint %}

{% hint style="warning" %}
If you are going to update/edit products When the proxies are active, editing products may cause you to delete the stock in the batches. Therefore please make sure to back up them before editing the products.

This only affects manual and automatic modes whereas it doesn't affect API mode.
{% endhint %}

{% content-ref url="../product-settings/product-metadata.md" %}
[product-metadata.md](../product-settings/product-metadata.md)
{% endcontent-ref %}

{% hint style="success" %}
Any product can have two types of prices:&#x20;

1. One-time - Customer is billed once
2. Recurring - Customer is billed on a recurring basis (eg: Monthly)
{% endhint %}

1\. First, Log in to the Stripe Account.

![](<../.gitbook/assets/Untitled design (1) (2).png>)

2\. Click on the _**Products**_ tab found on the right navigation pane of the _Stripe Dashboar_d.

![](<../.gitbook/assets/Untitled design (2) (9).png>)

3\. Next _**Add Products**_ to datacenter plan.

![](<../.gitbook/assets/Untitled design (3) (12).png>)

4\. Then name your product.

{% hint style="info" %}
The name you enter here is what the dashboard will call the product.
{% endhint %}

![](<../.gitbook/assets/1 (35) (1).png>)

5\. Also set the price for your product.

{% hint style="info" %}
This is the price that customers will be paying for your product
{% endhint %}

![](<../.gitbook/assets/Untitled design (5) (4).png>)

6\. Click _**One Time**_ or _**Recurring**_ for the pricing section.

More info regarding recurring pricing can be found below:

![](<../.gitbook/assets/Untitled design (6) (5).png>)

7\. Please repeat this process to add another price for the same product.

![](<../.gitbook/assets/Untitled design (7) (4).png>)

8\. After adding all your prices, click _**Additional Options**_.

![](<../.gitbook/assets/1 (44).png>)

9\. Then add the Metadata tags we have provided for the _**MetaData**_ section that can be found below.  Then save the product.&#x20;

{% hint style="info" %}
Copy and Paste from the below to omit any errors.
{% endhint %}

The first field should have <mark style="color:red;">`torchlabs_product`</mark>

The next field is where we capture if you are making a daily/weekly/monthly product. Therefore, we use the following identifiers. (Each product can have only one Identifier, so if you want to make weekly and monthly DC plans, you will need to make two individual products)

<mark style="color:red;">`torchlabs_accounts`</mark>

![](<../.gitbook/assets/1 (58).png>)

10\. Here you can view all the prices created, And click on a price.

![](<../.gitbook/assets/1 (45).png>)

11\. Next, we add Meta data to each price. This helps us determine how many proxies are to be delivered at each price point. The first identifier that you need to enter is <mark style="color:red;">`amount`</mark>

{% hint style="info" %}
In this example, there will be 10 proxies being delivered to the customer.
{% endhint %}

![](<../.gitbook/assets/1 (43) (1).png>)

12\. Now go-to products and now we are done with our first product.

![](<../.gitbook/assets/1 (42).png>)

13\. Then go back to your dashboard and choose the product.

![](<../.gitbook/assets/1 (75).png>)

14\. Then sync with stripe.

![](<../.gitbook/assets/Screenshot (966).png>)

15\. If everything goes well you should see your plans, You can repeat this process to create the other Data Center and ISP products.&#x20;

