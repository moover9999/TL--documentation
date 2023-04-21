# 📎 Product metadata

{% hint style="warning" %}
Please ensure you copy and paste the metadata tags exactly as shown in our guides to avoid any mistakes.
{% endhint %}

{% hint style="info" %}
The _**amount**_ metadata/parameter in the data center and accounts tab is what dictates the quantity to be delivered. It is especially useful when using the automatic delivery mode as it will deliver exactly the quantity specified. For example, if you are selling subnets that come in the size of 254 ISPs, you can stack these on top of each other and the automatic mode will auto-deliver the correct subnets to the right person.
{% endhint %}

## Residential Product&#x20;

{% content-ref url="../onboarding-guide/onboarding-a-residential-product.md" %}
[onboarding-a-residential-product.md](../onboarding-guide/onboarding-a-residential-product.md)
{% endcontent-ref %}

| API           | First metadata field | Second metadata field | Quantity metadata |
| ------------- | -------------------- | --------------------- | ----------------- |
| Oxylabs       | torchlabs\_product   | torchlabs\_elite      | data\_gb          |
| Private       | torchlabs\_product   | torchlabs\_premium    | data\_gb          |
| Packet Stream | torchlabs\_product   | torchlabs\_basic      | data\_gb          |
| Smart Proxies | torchlabs\_product   | torchlabs\_smart      | data\_gb          |
| IP Royal      | torchlabs\_product   | torchlabs\_iproyal    | data\_gb          |
| Brightdata    | torchlabs\_product   | torchlabs\_brightdata | data\_gb          |
| More soon..   |                      |                       |                   |

**Example:**

This is an example of the packet stream product. The first field input _**torchlabs\_product**_ (this tag helps us identify the products that you make for the proxy dashboard vs other products on your Stripe account), and the second field is _**torchlabs\_basic**_ which is used to identify the _Packetstream_ API

![](<../.gitbook/assets/Screen Shot 2022-03-23 at 10.51.23 PM.png>)

The next example is the quantity of the actual price section. In the below example, the customer will see a product on the dashboard for 15 GB of the Killer Basic plan for $140. We use the _**data\_gb**_ metadata tag to identify the quantity that is required to be delivered. If this tag is incorrect then they will not get any data delivered. In the field next to the _**data\_gb**_ we have the actual quantity in gigabytes, in this case, 15 GB (only put the value and not the letters GB - again referring to this example, it will be just 15)

![](<../.gitbook/assets/Screen Shot 2022-03-23 at 11.01.07 PM.png>)

## Data center Product

{% content-ref url="../data-center-and-accounts/adding-data-center-products.md" %}
[adding-data-center-products.md](../data-center-and-accounts/adding-data-center-products.md)
{% endcontent-ref %}

| Product   | First metadata field | Second metadata field          | Quantity metada |
| --------- | -------------------- | ------------------------------ | --------------- |
| Product 1 | torchlabs\_product   | torchlabs\_datacenter\_daily   | amount          |
| Product 2 | torchlabs\_product   | torchlabs\_datacenter\_weekly  | amount          |
| Product 3 | torchlabs\_product   | torchlabs\_datacenter\_monthly | amount          |
| Product 4 | torchlabs\_product   | torchlabs\_datacenter\_extra1  | amount          |
| Product 5 | torchlabs\_product   | torchlabs\_datacenter\_extra2  | amount          |
| Product 6 | torchlabs\_product   | torchlabs\_datacenter\_extra3  | amount          |
| Product 7 | torchlabs\_product   | torchlabs\_datacenter\_extra4  | amount          |
| Product 8 | torchlabs\_product   | torchlabs\_datacenter\_extra5  | amount          |
| Product 9 | torchlabs\_product   | torchlabs\_datacenter\_extra6  | amount          |

**Example**

This is an example of Datacenter product. The first field inputs _**torchlabs\_product**_ (this tag helps us identify the products that you make for the proxy dashboard vs other products on your Stripe account), and the second field is _**torchlabs\_weekly**_ which is used to identify a unique product.

{% hint style="warning" %}
There is some confusion regarding the terminology behind daily, weekly, and monthly on the metadata -  These actually mean nothing. It is only used to differentiate between all the data center products. They can be used interchangeably as well. For example, if you are selling Yeezysupply daily proxies, you can use any of the 3 metadata tags&#x20;
{% endhint %}

![](<../.gitbook/assets/Screen Shot 2022-03-23 at 11.01.57 PM (1).png>)

The next example is the quantity of the actual price section. In the below example, the customer will see a product on the dashboard for 100 Killer ISPs for $300. We use the _**amount**_ metadata tag to identify the quantity that is required to be delivered. If this tag is incorrect then they will not get any data delivered. In the field next to the _**amount**_ we have the actual quantity in units, in this case, 100 ISPs (only put the value and not the letters ISP - again referring to this example, it will be just 100)

![](<../.gitbook/assets/Screen Shot 2022-03-23 at 11.05.49 PM.png>)

## Account Product

{% hint style="info" %}
With the Accounts Product, you can make up to 9 unique products (if you need more let us know!) and unlike datacenter, the metadata is all the same for all the products...we use some magic behind the scene to make it all work!
{% endhint %}

{% content-ref url="../data-center-and-accounts/adding-account-products.md" %}
[adding-account-products.md](../data-center-and-accounts/adding-account-products.md)
{% endcontent-ref %}

| Product       | First metadata field | Second metadata field | Quantity metadata |
| ------------- | -------------------- | --------------------- | ----------------- |
| Product 1 - 9 | torchlabs\_product   | torchlabs\_accounts   | amount            |

You can repeat the above metadata for up to 9 products.

**Example:**

This is an example of an Account product. The first field inputs _**torchlabs\_product**_ (this tag helps us identify the products that you make for the proxy dashboard vs other products on your Stripe account), and the second field is _**torchlabs\_accounts**_ which is used to identify an accounts product.

![](<../.gitbook/assets/Screen Shot 2022-03-23 at 11.27.43 PM.png>)

The next example is the quantity of the actual price section. In the below example, we are using the accounts tab to sell ISP subnets but you can sell whatever you want such as Gmails and FLX accounts.  In our example, the customer will see a product on the dashboard for 254 Killer ISPs for $400. We use the _**amount**_ metadata tag to identify the quantity that is required to be delivered. If this tag is incorrect then they will not get any data delivered. In the field next to the _**amount**_ we have the actual quantity in units, in this case, 254 ISPs (only put the value and not the letters ISP - again referring to this example, it will be just 254) -  Again you can do this with anything not just ISPs.

![](<../.gitbook/assets/Screen Shot 2022-03-23 at 11.27.53 PM.png>)
