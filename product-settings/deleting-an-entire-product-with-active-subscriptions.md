# Deleting an entire Product with Active Subscriptions

{% hint style="danger" %}
This guide is specifically for products with active subscriptions.
{% endhint %}

To completely remove a product with Active Subscriptions, follow these steps carefully:

**Step 01 - Cancel Active Subscriptions**

1. First, you have to remove all the active subscriptions from the Stripe. To that, you have to log in to your Stripe account first.
2. Then, navigate to the **Subscriptions** page.

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 11 .27.14@2x.jpg" alt=""><figcaption></figcaption></figure>

3. Locate the product with active subscriptions and click on its name. Once the product details load, the number of active subscriptions will be visible under the **Subscription** column.

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 11 .36.08@2x.jpg" alt=""><figcaption></figcaption></figure>

4. Select the required price tier that has active subscriptions. When the price details load, click on the active subscription count under the **Subscription** column to view all active subscription products.

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 12 .02.17@2x.jpg" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 12 .05.38@2x.jpg" alt=""><figcaption></figcaption></figure>

5. Click on the three dots (**...**) next to a subscription and select the **Cancel Subscription** option. A pop-up will appear for confirmation.

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 12 .11.59@2x.jpg" alt=""><figcaption></figcaption></figure>

6. Here there are multiple options you can select regarding the cancellation.

* **Immediately**: Cancels the subscription on the same day.
* **End of the Current Period**: Cancels the subscription on its next renewal date, allowing users to continue using the product until then.
* **On a Custom Date**: Cancels the subscription on a specific date you provide.

You can also decide whether to offer a refund to the user. Once you've made your selections, click the **Cancel Subscription** button to finalize the cancellation. The subscription will then be canceled according to the chosen criteria.

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 12 .15.00@2x.jpg" alt=""><figcaption></figcaption></figure>

**Step 02 - Archive the Product**

7. After canceling all active subscriptions, locate the product in Stripe. Then, click on the three dots (**...**) next to the product name and select **Archive Product**.

{% hint style="warning" %}
Ensure **all active subscriptions are canceled** before archiving the product. Once archived, the subscriptions will no longer be active.
{% endhint %}

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 12 .40.08@2x.jpg" alt=""><figcaption></figcaption></figure>

**Step 03 - Sync the Dashboard**

8. Log in to the dashboard using [https://admindash.torchlabs.xyz/](https://admindash.torchlabs.xyz/)
9. Navigate to **Products** Tab and select the product you want to sync.

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 12 .48.13.jpg" alt=""><figcaption></figcaption></figure>

10. Click on the **Pencil** sign and then click on the **Sync with Stripe** button. If you received an error message, just ignore that. Then, **Refresh** the page and your product will be removed from the Dashboard. You can verify the same by checking the **User Dashboard**.

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 12 .51.44.jpg" alt=""><figcaption></figcaption></figure>
