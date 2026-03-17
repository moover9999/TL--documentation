---
icon: anchor
---

# Creating Torch Labs ISP API V2 Subnet batch

First, you need to [Creating a recurring price for a product](https://docs.torchlabs.xyz/product-settings/creating-a-recurring-price-for-a-product) and set a custom recurring period to 28 days instead of a month

{% hint style="info" %}
You need to make sure the price you have created has a custom recurring period set to 28 days. We do this because, if the customers' payment method fails, they now have a grace period of 2 days to complete the payment in order to keep the same set of proxies/subnets.
{% endhint %}

<mark style="color:red;">Before getting started, make sure you have configured automatic subscription cancellation on Stripe following this guide:</mark> [Cancel subscription after payment retries](https://docs.torchlabs.xyz/errors-and-faq/stripe/cancel-subscription-after-payment-retries)

### Step 1: Set Up the Product and Recurring Price on Stripe

1. Go to your **Stripe Dashboard** and locate the product or create a new one if needed.\
   \[**It is compulsory to create a separate product for subnets.**]
2. Under the product, click **“Add price.”**
3. Set the pricing as **Recurring**.
4. Under **Billing period**, choose:
   * **Custom interval**
   * Set it to **every 28 days**

> 🔁 Please ensure that the price you set includes a custom recurring period of 28 days. We follow this approach to allow a 2-day grace period for customers to complete their payment in case their payment method fails, ensuring they can retain the same set of proxies/items.

<figure><img src="../../.gitbook/assets/Screenshot 2025-07-16 141857 (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
For Subnet Plans plase remember the below when adding the **metadata** field inside Stripe for ISP API V2.

Key - `amount`

Value - `256`&#x20;
{% endhint %}

{% hint style="info" %}
Available subnet plans:

* Sneaker Pools: **SN\_US\_SNEAKERS**
* Ticket Pools: **SN\_NY\_TICKETS**, **SN\_LA\_TICKETS**, **SN\_UK\_TICKETS, SN\_CA\_TICKETS, SN\_US\_TICKETS**
* Retail+ Pool: **SN\_US\_RETAILPLUS, SN\_UK\_RETAILPLUS**
{% endhint %}

### Step 2: Sync to Admin Dashboard

1. Next, you must go to the products section and sync your new prices.

<details>

<summary><a href="https://docs.torchlabs.xyz/data-center-and-accounts/adding-data-center-products">✅Adding data center products</a></summary>



</details>

2. Go to the **Datacenter** tab on the Admin Dashboard.

<figure><img src="../../.gitbook/assets/1 (27).png" alt=""><figcaption></figcaption></figure>

3. Click on the dropdown list before the Batch Type and select TL API V2.

{% hint style="info" %}
Just a quick reminder: You'll also need to request the **TL API V2** to be activated on the ticket before you can see it on the drop-down list.
{% endhint %}

<figure><img src="../../.gitbook/assets/1 (28).png" alt=""><figcaption></figcaption></figure>

4. Select the product

{% hint style="info" %}
**Quantity - 256** (Subnets)

* Sneaker Pools: **SN\_US\_SNEAKERS**
* Ticket Pools: **SN\_NY\_TICKETS**, **SN\_LA\_TICKETS**, **SN\_UK\_TICKETS, SN\_CA\_TICKETS, SN\_US\_TICKETS**
* Retail+ Pool: **SN\_US\_RETAILPLUS, SN\_UK\_RETAILPLUS**
{% endhint %}

<figure><img src="../../.gitbook/assets/2 (22).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**ISP\_** is 1 IP

**SN\_** is a subnet that has 256 IPs
{% endhint %}

5. After selecting the Batch Type and Product, click on the '**New Batch**' icon button.

<figure><img src="../../.gitbook/assets/3 (19).png" alt=""><figcaption></figcaption></figure>

6. Now you can add a stock limit, tick confirm and select launch.

{% hint style="info" %}
Please note that the expiration is hardcoded for 30 days by default and this cannot be changed. This means your customers will be able to use their proxies for 30 days.
{% endhint %}

<figure><img src="../../.gitbook/assets/4 (13).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Click on **Enable Stock** **Limit** to set the available stock quantity.
{% endhint %}

{% hint style="info" %}
You may also leave the stock limit D**isabled** and continue with the process.
{% endhint %}

<figure><img src="../../.gitbook/assets/5 (13).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
When setting the stock limit, please enter values in multiples of **256** (e.g., 256, 512, 768, 1024, and so on).
{% endhint %}

<figure><img src="../../.gitbook/assets/6 (12).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Finally, check the '**Confirm**' box and click the **Launch** button.
{% endhint %}
