# ❔ How to prevent fraud

Sadly there seems to be a fraudulent person in the sneaker community running through proxy companies using **STOLEN credit cards**. They have purchased data from a lot of proxy companies in the sneaker space and they use all the data and actual customers end up charging back the transaction.

Also, do not deal with anyone for crypto unless you checked if they are legit!

Attackers have used multiple discords sometimes even 10 different accounts and bought data in small amounts such as 2GB through multiple days and they will end up buying a lot of data.

They mainly want Oxylabs, Private, Packet, IProyal

**IF YOU ARE A VICTIM:**

1. Immediately refund the purchase
2. Remove all the data from the user
3. Turn on the dashboard restricted access
4. Ban the account from the Discord server
5. Turn on TOS pop-up so that in case of a chargeback you can submit that as evidence

{% hint style="info" %}
You must create a PDF detailing all the sufficient evidence and mapping the customer to the actual chargeback. Look at the below PDF to see an example of what we have done in the past. This example PDF has won 99% of all chargeback claims.
{% endhint %}

{% file src="../.gitbook/assets/Chargeback Example Evidence.pdf" %}

**TO PREVENT FUTURE INCIDENTS:**

1. Have discord webhook on so you can monitor every purchase directly in discord: https://docs.torchlabs.xyz/more-settings/enabling-the-webhook
2. Restrict dashboard access so only people in your discord server can purchase! This is very important because all the attacks have been from people not in the discord server: https://docs.torchlabs.xyz/more-settings/enabling-the-webhook
3.  Use Dyno bot! (https://dyno.gg/manage) Make sure to have autobahn on this will ban any new accounts in less than 2 weeks. This prevents burner accounts from joining your server. All these burner accounts are usually fraudulent accounts.

    * To Enabled: https://dyno.gg/manage
    * Go to modules
    * Search Auto ban
    * Create new rule
    * Ban based on account age less than 300 hours


4. Enable Stripe radar (https://dashboard.stripe.com/settings/radar) and set custom rules
   * Blocking suspicious email domains and only allowing standard domains like Gmail and Hotmail
   * Set up blacklisted IPs for previous fraudulent activities
   * You can check with Stripe for some other good ones

**PLEASE BE SAFE!**

Our dashboard has some of the best features to prevent these types of things but ultimately comes down to stripe to stop these transactions. So please watch all your transactions. If you are making more sales than usual this might mean there may be some fraudulent transactions.
