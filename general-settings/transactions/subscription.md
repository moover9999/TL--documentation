# ⏸ Subscription

{% hint style="info" %}
This section aims to provide comprehensive information regarding the subscription tab. The subscription tab comprises all the recurring products and presents various details pertaining to these products
{% endhint %}

1. Go to the admin dashboard and click on the transactions, And then click on Subscriptions

<figure><img src="../../.gitbook/assets/2023-04-07 15_44_22-TorchLabs - Dashboard.png" alt=""><figcaption></figcaption></figure>

2. You can filter the transactions using the filters such as email, Discord ID,  Discord tag & Subscription ID & ISPs.

<figure><img src="../../.gitbook/assets/2024-01-16 14_28_30-TorchLabs - Dashboard.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Following are the columns you can find in the subscription tab
{% endhint %}

* Subscription ID - This is the subscription ID generated for a particular subscription transaction. (Just click on the particular ID to get to copied to the clipboard)
* Email - The email address attached to the transaction.
* Discord ID - Discord ID of the sub-user&#x20;
* Discord Tag - Discord tag of the sub-user
* Data GB / Amount - Data GB/Amount related to the subscription product.
* Price Paid - The price paid in purchasing the subscription product.
* Product - Name of the subscription product.
* Status - You can select a different status to filter the following subscription transaction statuses.

<figure><img src="../../.gitbook/assets/1 (15).png" alt=""><figcaption></figcaption></figure>

<table><thead><tr><th width="132">Status</th><th>Description</th><th data-hidden></th></tr></thead><tbody><tr><td>Renewing</td><td>The order has been delivered and is complete. Renewing means the customer has paid the subscription and renewing the subscription cycle.</td><td></td></tr><tr><td>Incomplete</td><td>The order has not been delivered / fulfilled and is not complete</td><td></td></tr><tr><td>Failed</td><td>We tried to bill the customer for a subscription, however, the charge failed due to a lack of funds on the customer's card</td><td></td></tr><tr><td>Cancelled</td><td>The customer has canceled their subscription and subscription validity period is over.</td><td></td></tr><tr><td>Cancelling</td><td>The customer has clicked cancelled button but subscription validity period is not over.</td><td></td></tr><tr><td>Ended</td><td>The subscription date has passed and the customer has neither canceled nor paid to renew.</td><td></td></tr></tbody></table>

* Created At - The date that the subscription product was first created.&#x20;
* Webhooks for the transactions will only be sent for subscription creation, renewal, cancellation and failures.

