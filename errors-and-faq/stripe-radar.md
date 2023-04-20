# Stripe Radar

{% hint style="danger" %}
Simply turning on stripe radar is NOT sufficient. You need to configure stripe radar rules.
{% endhint %}

{% hint style="info" %}
Stripe Radar is a fraud detection and prevention system offered by Stripe. This system uses machine learning algorithms to analyze and identify patterns of fraudulent behavior, as well as to identify potential risks and suspicious transactions in real-time. By using advanced data analytics and pattern recognition techniques, Stripe Radar helps businesses prevent fraud and protect themselves from financial losses, chargebacks, and reputational damage. Stripe Radar also provides a range of customizable features, such as manual review of flagged transactions and rule-based filters, to help businesses tailor their fraud detection strategies to their specific needs. Overall, Stripe Radar is a powerful tool for businesses that want to ensure the security and integrity of their online payments and transactions.
{% endhint %}

## Enabling stripe radar

1. Turn on stripe radar:[ ](https://dashboard.stripe.com/settings/radar)[https://dashboard.stripe.com/settings/radar](https://dashboard.stripe.com/settings/radar)
2. Choose, turn on Stripe radar for fraud teams

## Stripe Radar rules

{% hint style="warning" %}
There are two types of main rules you can enable: Block rules & 3DS rules

Block rules - These will block payments if it matches given criteria

3DS rules- These will request 3DS verification from the customer if it matches given criteria
{% endhint %}

{% hint style="info" %}
We will also categorize how effective each rule is at preventing fraud such as stolen credit cards.

:red\_circle: - Very effective

:yellow\_circle: - Effective

:green\_circle: - Not very effective
{% endhint %}

{% hint style="danger" %}
**We also recommend you enabling ALL the rules listed below**
{% endhint %}

### 3DS Rules

<figure><img src="../.gitbook/assets/Screenshot 2023-01-02 at 10.42.09 AM.png" alt=""><figcaption></figcaption></figure>

The first 3 rules are already created in your stripe account, you simply need to click **enable** to activate them.

1. :green\_circle: The first one, requests 3DS if it is required by the card
2. :yellow\_circle: The second one, requests 3DS if it is recommended by the card
3. :red\_circle: The third one, requests 3DS if it is supported by the card - This rule will make the card holder provide 3DS in almost all cases&#x20;
4. :red\_circle: Last one is requesting 3DS if the user is using a VPN



### Block Rules

<figure><img src="../.gitbook/assets/Screenshot 2023-01-02 at 10.48.40 AM.png" alt=""><figcaption></figcaption></figure>

1. Block if Stripe thinks the customer is a high-risk customer.
2. Block if the customer is in your block list.
3. Block if the issuing country of the card is different from the customer's current IP address.
4. Block if the customer has more than 1 failed transaction.
5. Block if the CVC code entered at checkout is wrong.
6. Block if the Zip/postal code entered at checkout does not match the card billing Zip/postal code.
7. Block if the address line 1 entered at checkout does not match the cards address line 1
8. Similar to rule 6

