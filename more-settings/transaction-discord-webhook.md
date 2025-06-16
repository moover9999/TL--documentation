# 🎞️ Transaction discord webhook

{% hint style="info" %}
Enable this feature to get transactions such as purchases, renewals, etc. directly recorded into your discord server.
{% endhint %}

1. Select _**server settings**_ on discord
2. Select _**integration**_ & Click _**create webhook**_

![](<../.gitbook/assets/5 (3).jpg>)

3\. Then give a name and a channel to record the notification

![](<../.gitbook/assets/6 (1).jpg>)

4\. Click _**Save Changes**_

5\. Click _**copy webhook URL**_ and paste on the dashboard, enable _**disable webhook**_ and click _**Save.**_

![](<../.gitbook/assets/7 (1).jpg>)

#### 6. Webhook Embed Color Codes by Transaction Type

To enhance clarity and visual distinction in Discord notifications, each transaction type is assigned a unique embed color code. Below is the standardized color mapping used in our webhooks:

| Emoji + Webook Title                          | Trigger                                                                                                                     | Color      | Hex Color Code |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------- |
| :money\_with\_wings: Payment Refunded         | When payment is refunded                                                                                                    | Baby Blue  | #00ced1        |
| :shopping\_bags: New Sale                     | When a one time payment is completed                                                                                        | White      | #ffffff        |
| :white\_check\_mark: Manual Order Complete    | When a manual order update specifically for residential proxies are completed                                               | Moss blue  | #379190        |
| :satellite: Manual ISP Order Complete         | When a manual order update specifically for ISP proxies are completed                                                       | Dark Blue  | #0f52ba        |
| :credit\_card: Credit Usage                   | When customer purchase order using referral credits and if order is completed                                               | Beige      | #f7e5b7        |
| :new: New Subscription                        | Customer successfully purchases new subscription                                                                            | Neon Green | #00ff00        |
| :repeat: Subscription Renewal                 | Subscription renewal is successful                                                                                          | Pine Green | #1c6a51        |
| :x: Subscription Cancelled                    | When customer canceled subscription                                                                                         | Neon Pink  | #fe54a3        |
| :hourglass\_flowing\_sand: Pending Order      | When customer purchase manual batch type orders, first it will mark as pending, after admin fulfil it will mark as complete | Orange     | #ff7538        |
| :recycle: Subscription Reactivation           | When a customer reactivates their subscription after canceling it, but before the current billing period has ended.         | Purple     | #bb88ff        |
| :warning: Credit Usage Incomplete             | When customer purchase order using referral credits and if order is failed                                                  | Br0wn      | #6f3028        |
| :boom: Payment Failed                         | When customer payment fails for a first time subscription or one time payment                                               | Red        | #ff0000        |
| :no\_entry\_sign: Subscription Renewal Failed | Subscription renewal failed                                                                                                 | Salmon     | #ff6f61        |
| :memo: Data Update                            | When admin add or remove residential data                                                                                   | Yellow     | #eeee44        |

