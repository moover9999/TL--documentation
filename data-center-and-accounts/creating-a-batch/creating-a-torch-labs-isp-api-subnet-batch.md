---
icon: anchor
---

# Creating a Torch Labs ISP API Subnet batch

First, you need to [Creating a recurring price for a product](https://docs.torchlabs.xyz/product-settings/creating-a-recurring-price-for-a-product) and set a custom recurring period to 28 days instead of a month

{% hint style="info" %}
You need to make sure the price you have created has a custom recurring period set to 28 days. We do this because, if the customers' payment method fails, they now have a grace period of 2 days to complete the payment in order to keep the same set of proxies/subnets.
{% endhint %}

<mark style="color:red;">Before getting started, make sure you have configured automatic subscription cancellation on Stripe following this guide:</mark> [Cancel subscription after payment retries](https://docs.torchlabs.xyz/errors-and-faq/stripe/cancel-subscription-after-payment-retries)

### Step 1: Set Up the Product and Recurring Price on Stripe

1. Go to your **Stripe Dashboard** and locate the product or create a new one if needed.
2. Under the product, click **“Add price.”**
3. Set the pricing as **Recurring**.
4. Under **Billing period**, choose:
   * **Custom interval**
   * Set it to **every 28 days**

> 🔁 We use a 28-day billing cycle (instead of 1 month) so customers receive a **2-day grace period** for failed payments before automatic cancellation.

<figure><img src="../../.gitbook/assets/Screenshot 2025-07-16 141857 (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Plase remember the below when adding the **metadata** field inside Stripe.

Key - `amount`

Value - `254` (Because this is a subnet)
{% endhint %}

### Step 2: Sync to Admin Dashboard

1. Next, you must go to the products section and sync your new prices.

<details>

<summary><a href="https://docs.torchlabs.xyz/data-center-and-accounts/adding-data-center-products">✅Adding data center products</a></summary>



</details>

2. Go to the _Datacenter_ tab on the Admin Dashboard.

<figure><img src="../../.gitbook/assets/1 (25).png" alt=""><figcaption></figcaption></figure>

3. Click on the dropdown list before the new batch and select TL API

{% hint style="info" %}
You also need to request the TL API to be activated on the ticket before you can see it on the drop-down list.
{% endhint %}

<figure><img src="../../.gitbook/assets/2 (19).png" alt=""><figcaption></figcaption></figure>

4. Select the country/region

<figure><img src="../../.gitbook/assets/3 (17).png" alt=""><figcaption></figcaption></figure>

5. Select the product

<figure><img src="../../.gitbook/assets/4 (11).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**Quantity - 254**

(Subnets)

* US product: RETL\_24 , JUIC\_24 , DC\_24 , TICK\_24
* EU product: DTAG\_24 , VIRM\_24
* AU product: VOCU\_24
{% endhint %}

6. Select the Auth type

{% hint style="info" %}
You can specify the authentication type for the proxies. By default, it is set to “**user**”. You can also set it to “**socks**” for SOCKS proxies.

user: HTTP proxies

socks: Socks5 proxies

Further reference: [https://incogniton.com/socks-vs-http-proxy/](https://incogniton.com/socks-vs-http-proxy/)&#x20;
{% endhint %}

<figure><img src="../../.gitbook/assets/5 (11).png" alt=""><figcaption></figcaption></figure>

7. Now you can add a stock limit, tick confirm, and select launch.

{% hint style="info" %}
Please note that the expiration is hardcoded for 30 days by default and this cannot be changed. This means your customers will be able to use their proxies for 30 days.
{% endhint %}

<figure><img src="../../.gitbook/assets/6 (11).png" alt=""><figcaption></figcaption></figure>
