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
* Ticket Pools: **SN\_US\_TICKETS**, **SN\_NY\_TICKETS**, **SN\_UK\_TICKETS**
* Retail+ Pool: **SN\_US\_RETAILPLUS**
{% endhint %}

### Step 2: Sync to Admin Dashboard

1. Next, you must go to the products section and sync your new prices.

<details>

<summary><a href="https://docs.torchlabs.xyz/data-center-and-accounts/adding-data-center-products">✅Adding data center products</a></summary>



</details>

2. Go to the _Datacenter_ tab on the Admin Dashboard.

<figure><img src="../../.gitbook/assets/1 (25).png" alt=""><figcaption></figcaption></figure>

3. Click on the dropdown list before the Batch Type and select TL API V2.

{% hint style="info" %}
Just a quick reminder: You'll also need to request the **TL API V2** to be activated on the ticket before you can see it on the drop-down list.
{% endhint %}

<figure><img src="../../.gitbook/assets/1 (26).png" alt=""><figcaption></figcaption></figure>

4. Select the product

{% hint style="info" %}
**Quantity - 256** (Subnets)

* Sneaker Pools: **SN\_US\_SNEAKERS**
* Ticket Pools: **SN\_US\_TICKETS**, **SN\_NY\_TICKETS**, **SN\_UK\_TICKETS**
* Retail+ Pool: **SN\_US\_RETAILPLUS**
{% endhint %}

<figure><img src="../../.gitbook/assets/2 (20).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**ISP\_** is 1 IP

**SN\_** is a subnet that has 256 IPs
{% endhint %}

5. After selecting the Batch Type and Product, click on the '**New Batch**' icon button.

<figure><img src="../../.gitbook/assets/3 (18).png" alt=""><figcaption></figcaption></figure>

6. Now you can add a stock limit, tick confirm, and select launch.

{% hint style="info" %}
Please note that the expiration is hardcoded for 30 days by default and this cannot be changed. This means your customers will be able to use their proxies for 30 days.
{% endhint %}

<figure><img src="../../.gitbook/assets/4 (12).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/6 (11).png" alt=""><figcaption></figcaption></figure>
