# ❔ Cancel subscription after payment retries

{% hint style="danger" %}
We highly recommend you enable this features for any automated ISP service we offer. This includes TL ISP API, Tanmay ISP & Porter ISP API
{% endhint %}

This feature is important so customers do not try to pay invoices after the ISP proxies have been canceled from our system.

1. Go to: [https://dashboard.stripe.com/settings/billing/automatic](https://dashboard.stripe.com/settings/billing/automatic)

<figure><img src="../../.gitbook/assets/Screenshot 2023-09-24 at 8.58.51 PM.png" alt=""><figcaption></figcaption></figure>

2. Enable "custom retry schedule subscriptions"
3. Set ONLY 2 retry attempts like the above screenshot
4. Make each retry 1 day after the previous attempt (Do not change this)
5. Set subscription status to "cancel the subscription"
6. Set invoice status to "mark the invoice as uncollectible"&#x20;
