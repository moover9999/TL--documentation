# ⚓ Creating Tanmay's ISP API Batch

{% hint style="info" %}
This section will guide you on how to create an ISP API batch for a registered APIs in a multiple subnets together and deliver the stock in one batch.
{% endhint %}

<mark style="color:red;">Before getting started, make sure you have configured automatic subscription cancellation on stripe following this guide:</mark> [cancel-subscription-after-payment-retries.md](../../errors-and-faq/stripe/cancel-subscription-after-payment-retries.md "mention")

1. Go to _Datacenter_ tab on Admin Dashboard.

<figure><img src="../../.gitbook/assets/5 (9).png" alt=""><figcaption></figcaption></figure>

2\. Click on the dropdown list before new batch.

<figure><img src="../../.gitbook/assets/x (1).png" alt=""><figcaption></figcaption></figure>

3\. Select the Registered ISP from the list and click on New Batch.&#x20;

You can select the API only if you have already registered an API using the following guide.&#x20;

{% content-ref url="../../more-settings/adding-and-removing-isp-api.md" %}
[adding-and-removing-isp-api.md](../../more-settings/adding-and-removing-isp-api.md)
{% endcontent-ref %}

Upon successful registration, all APIs, including Custom Proxies, will be available for selection from the dropdown list. It is important to note that ISP API batch types for all customers are now categorized as Custom Proxies. When creating a new batch, please select the appropriate option accordingly.

At this stage, it is now possible to combine ISP APIs and multiple subnets, delivering the stock in one batch. However, to create multiple subnets together, a minimum of two ISP APIs must be registered.

4\. Now you can add a stock limit and duration for expiration. Then tick confirm and select launch. At this point, the combination of the batch has to be equal to or more than the stock limit.

<figure><img src="../../.gitbook/assets/z (1) (1).png" alt=""><figcaption></figcaption></figure>
