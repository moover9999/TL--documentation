# 🧪 Transaction status

{% hint style="info" %}
Our transaction section has 4 main types of transactions. This page will discuss what each of the statuses mean
{% endhint %}

### Transaction Types

| Transaction Type | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| Customer Order   | This transaction has been created due to a customer purchasing a product.        |
| Data Update      | This transaction has been created due to an admin updating a user's data balance |

### Status Types

{% hint style="warning" %}
99% of the time you see the **Incomplete** status is due to the upstream provider's API giving our system a bad response. This means that their API is currently not responding to our request.
{% endhint %}

| Status     | Description                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Complete   | The order has been delivered and complete                                                                                      |
| Incomplete | The order has not been delivered and is not complete                                                                           |
| Failed     | We tried to bill the customer for a subscription, however, the charge has failed due to a lack of funds on the customer's card |
| Cancelled  | The customer has cancellled their subscription                                                                                 |

### Full Order Status

| Transaction Type | Status     | Description                                                                                                                       |
| ---------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Customer Order   | Complete   | This transaction has been created due to a customer purchasing a product and the order has been delivered and complete            |
| Customer Order   | Incomplete | This transaction has been created due to a customer purchasing a product but the order has not been delivered and is not complete |
| Data Update      | Complete   | This transaction has been created due to an admin updating a user's data balance and the update has been executed and complete    |
| Data Update      | Incomplete | This transaction has been created due to an admin updating a user's data balance but the update has failed to execute.            |
