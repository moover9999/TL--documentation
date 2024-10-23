# ♻️ How Wallet Payment Subscription Renewal Processed

## Overview

This guide provides an overview of the subscription renewal process using wallet payments through Stripe. It explains the key steps involved when a subscription renewal is due, including checking wallet balances, fulfilling orders, handling insufficient funds and managing retry attempts through Stripe's automated policies. The process ensures a smooth and efficient renewal workflow for users with active subscriptions, while also accommodating scenarios where payment challenges arise, such as low wallet balances.



## Wallet Payment Subscription Renewal Process

The subscription renewal process involves multiple steps and verifications to ensure successful completion. Below is a complete process providing a quick glance at the key stages. This guide will walk you through each step in detail, outlining how the system handles renewals and resolves any issues that may arise during the process.

<figure><img src="../.gitbook/assets/Wallet Payment Subscription Renewals (2).jpg" alt=""><figcaption></figcaption></figure>

### Stage 01: Initial Wallet balance Check on Subscription Renewal

In the first stage of the subscription renewal process, Stripe waits for the renewal date to arrive. Once the renewal date occurs, Stripe automatically drafts an invoice for the specific subscription. This marks the beginning of the renewal process.

After drafting the invoice, Stripe will check whether the user has sufficient wallet balance to cover the renewal amount. Based on the balance check, the following actions will be taken:

* **Sufficient Balance**: If the user has enough wallet balance, the renewal process will be completed successfully, and the invoice status will be updated to "Paid."&#x20;
* **Insufficient Balance**: If the wallet balance is insufficient, the renewal process will be temporarily paused. During this pause, Stripe's retry mechanism will initiate attempts to process the payment again.

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

### Stage 02: First Attempt for Payment

In this stage, if Stripe is unable to process the payment within one hour of drafting the invoice, the invoice status will change to "Open." Following this update, Stripe will attempt to process the payment again based on the user's wallet balance check and the following actions will be taken:

* **Sufficient Balance**: If the user has enough funds available, the renewal process will be completed successfully, and the invoice status will be updated to "Paid,".
* **Insufficient Balance**: If the wallet balance is insufficient, the renewal process will be temporarily paused. During this period, Stripe's retry mechanism will automatically initiate attempts to process the payment again.&#x20;

Stripe will follow the retry policy pre-configured by the administrator, systematically attempting to charge the wallet at specified intervals. This approach ensures that users have multiple opportunities to complete the payment while minimizing disruption to their subscription services.

<figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

### Stage 03: Second Attempt for Payment

In this stage, if Stripe is unable to process the payment within one day after the initial attempt, the invoice status will change to "Past Due." Following this update, Stripe will attempt to process the payment again based on the user's wallet balance check and the following actions will be taken:

* **Sufficient Balance**: If the user has enough funds available, the renewal process will be completed successfully, and the invoice status will be updated to "Paid,".
* **Insufficient Balance**: If the wallet balance is insufficient, Stripe's retry mechanism will automatically initiate attempts to process the payment again.&#x20;

Stripe will follow the retry policy pre-configured by the administrator, systematically attempting to charge the wallet at specified intervals.&#x20;

<figure><img src="../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

### Stage 04: Manual Retry for Subscription Renewal

If Stripe exhausts all the predefined retry attempts without successfully processing the payment, the invoice will be kept marked as "Past Due." At this point, the Admin can manually intervene to retry the transaction. Then, the Admin can perform the below.

1. **Check User's Wallet Balance**: Before retrying the renewal, the Admin can verify if the user has sufficient wallet balance.
2. **Add Credits**: If the user's wallet balance is insufficient, the Admin can add the necessary credits directly via the dashboard.
3. **Retry Subscription Renewal**: Once the credits are added, the Admin can manually trigger the renewal by clicking the "Retry" button under the specific subscription in the Admin dashboard.

Once the subscription is renewed successfully, Stripe Invoice's status will be changed to "Paid"

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/Monosnap TorchLabs • Login 2024-10-23 3 PM-21-33.jpg" alt=""><figcaption></figcaption></figure>

Additionally, please note that some older subscriptions may still have the default billing method set to "Charge default payment method." In these cases, you will need to manually update the billing method to "Send Invoice" to ensure proper handling of future renewals.

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

