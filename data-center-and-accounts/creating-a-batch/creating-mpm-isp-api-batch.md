# ⚓ Creating MPM ISP API Batch

{% hint style="info" %}
This section will guide you on creating an ISP API batch for a registered API. Only one ISP API can be assigned to multiple products / batches.&#x20;
{% endhint %}

{% hint style="info" %}
Initially, it is a must to inform Torch Labs admins in the ticket that you want to create MPM ISP API batch so that admins can initiate the registering process in the backend.
{% endhint %}

{% hint style="info" %}
If you are obtaining the server and subnets, we can proceed by installing our custom proxy script (MPM Script). This script will automatically connect to our dashboard. Upon payment from customers, they will receive proxies with user:password credentials. The proxies will remain active for subscribed customers. Should they discontinue their subscription, the script will automatically update the user:password credentials to prevent further usage.&#x20;

This script is an add-on feature provided by a third-party developer we collaborate with, thus incurring an additional monthly cost. If you are interested, we can provide you with a breakdown of the associated fees.

It also has the following features:

SCRIPT Features

●Instantly deliver proxies over email, dashboard, or discord bot&#x20;

● REST APIs to hook up with any frontend that can talk to REST API’s.&#x20;

● Supports user/pass and IP authentication.&#x20;

● Supports IPv4 and IPv6 proxies - direct and back connect mode, with auto-switching&#x20;

● Token-based grouping of proxies. Can generate upton 2K IPs per token&#x20;

● Ability to add servers and subnets from any provider&#x20;

● Easily add new servers using a google sheet&#x20;

● Supports directly routed as well as dynamically routed (BGP) subnets&#x20;

● Ability to tag server with Name (e.g. Ashburn)&#x20;

● Tested to work with 300 K IP addresses \~ 1200 \* /24 subnets&#x20;

● Very low memory / CPU footprint.&#x20;

● Supports automatic as well as manual proxy stocks, with random ports or fixed ports&#x20;

● Built-in utilities for proxy testing, subnet testing, ping tests, DNS test&#x20;

● Built-in firewall to ensure smooth distribution of traffic and prevent DOS attacks&#x20;

● Auto-scaling of workers based on the number of CPU cores to ensure the best CPU usage&#x20;

● Creates hardened proxies that cannot be detected and adds minimal path latency&#x20;

● Ability to create stocks in higher ratios in case if the customer wishes to oversell&#x20;

● Built-in watchdog to ensure uptime&#x20;

● Custom Email template&#x20;

● Built-in web-based admin portal&#x20;

● POSTMAN supported REST APIs to integrate with your own portal/tools/bots&#x20;

● Stock management for in-stocks, used-stocks and to generate-stocks&#x20;

● Stock can be picked from google-sheet or can be randomly generated&#x20;

● Ready scripts to vacate servers and move customers to a different server&#x20;

● Frontend integration with web dashboard/discord bot&#x20;

● Auto expiry of proxies based on time and data limit.&#x20;

● Trigger notifications to customers when the data usage reaches a threshold.&#x20;

● Ability to refresh proxies for customer&#x20;

● Ability to migrate proxies from one server to another without affecting the user&#x20;

● Ability to replace old subnets with new ones&#x20;

● Ability to blacklist websites&#x20;

● Ability to pause servers (prevent users from using the servers)&#x20;

● Ability to identify the heavy-hitters and throttle them for concurrent connections
{% endhint %}

<mark style="color:red;">Before getting started, make sure you have configured automatic subscription cancellation on stripe following this guide:</mark> [cancel-subscription-after-payment-retries.md](../../errors-and-faq/stripe/cancel-subscription-after-payment-retries.md "mention")

After informing Torch Labs admins you can start registering the API and refer to the following guide for registering the API.&#x20;

{% content-ref url="../../more-settings/adding-and-removing-isp-api.md" %}
[adding-and-removing-isp-api.md](../../more-settings/adding-and-removing-isp-api.md)
{% endcontent-ref %}

1. Go to _Datacenter_ tab on Admin Dashboard.

<figure><img src="../../.gitbook/assets/5 (9).png" alt=""><figcaption></figcaption></figure>

2\. Click on the dropdown list before the new batch and select MPM ISPs from the list.

<figure><img src="../../.gitbook/assets/a (2).png" alt=""><figcaption></figcaption></figure>

3\. Then select the relevant server from the dropdown list.

<figure><img src="../../.gitbook/assets/c (4).png" alt=""><figcaption></figcaption></figure>

If you precisely registered, all the APIs would appear under the dropdown list including _MPM Proxies_. ISP API batch types for all the customers are now shown as MPM Proxies. Accordingly, choose the relevant option when creating the new batch.

At this stage, it gives the ability to assign one product/batch and deliver the stock in one batch.

4\. Now you can add a stock limit and duration for expiration. Then tick confirm and select launch. At this point, the combination of the batch has to be equal to or more than the stock limit.

{% hint style="info" %}
Here the subscription is set for 30 days, the proxies will expire in 30 days + 1 day grace period.
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2023-05-15 at 14.18.28.png" alt=""><figcaption></figcaption></figure>
