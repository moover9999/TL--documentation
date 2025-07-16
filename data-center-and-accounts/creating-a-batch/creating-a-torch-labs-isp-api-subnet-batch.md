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

{% hint style="info" %}
**Quantity - 254**

(Subnets)

* US product: RETL\_24 , JUIC\_24 , DC\_24 , TICK\_24
* EU product: DTAG\_24 , VIRM\_24
* AU product: VOCU\_24
{% endhint %}

