# 💰 Affiliate System

{% hint style="info" %}
## Affiliate Program Overview

The Torch Labs platform includes a built-in **Affiliate Program** that allows customers to earn commissions by referring new users.

Each eligible customer receives a **Unique Affiliate Link** directly from their customer dashboard. This link can be shared with others to invite them to join the platform.

When a user registers using an affiliate link:

* The user is **permanently associated with the referring affiliate**
* Any eligible purchases made by that user are **automatically attributed to the affiliate**

For every successful purchase made by a referred user, a **commission is allocated** based on the commission rate configured for the Associate Plan.

#### Supported Products

The affiliate program currently supports:

* Residential proxy plans
* ISP proxy plans

Support for additional plan types may be added in the future.

#### Affiliate Provider

The affiliate system currently uses **Referly (formerly Pushlap Growth)** as the campaign management provider.

Administrators can configure provider credentials from:

**Admin Dashboard → More Settings**

#### Introduction to the Affiliate System

Welcome to our **Affiliate System**, a program designed to reward your users for promoting your services! By participating, your users can **earn commissions** simply by referring new customers to your platform.

#### How It Works:

1. **Get The Affiliate Link:** Each eligible customer will get a **Unique Affiliate Link** from their dashboard.
2. **Share The Link:** Share the link with friends, family or anyone interested in your services.
3. **Earn Commissions:** When a referred user registers using your customers link and makes a **purchase** (residential or ISP plan), a commission is allocated to the affiliate based on the Platforms commission rate.
4. **Provider Credentials:** Details of the supported providers can be configured by administrators from the **Admin Dashboard → More Settings** section.

Our affiliate system is a **win-win**, allowing your users to earn rewards while helping grow the platform community.
{% endhint %}

## Important Note for Early Users

Torch Labs currently has a limited number of **Pushlap Growth (Referly) campaign tokens** available.

These tokens allow users to activate the affiliate system **without needing to create their own Referly account**.

### Availability

* Tokens will be provided **free of charge to the first 10 users**.
* Availability is limited and provided **on a first-come, first-served basis**.

### How to Request a Token

To request a Pushlap Growth token:

1. Open a **Support Ticket** in **Discord.**
2. Request **Pushlap Growth Affiliate Token Access.**
3. Our team will confirm availability and provide the required credentials if you are eligible.

### If You Receive a Token

If our team provides you with a token:

* You **do NOT need to create a Referly account**
* You can **skip the Referly campaign creation steps**
* Simply use the **credentials provided by Torch Labs** to activate the affiliate system.

### If You Do Not Receive a Token

If tokens are no longer available, you will need to:

* Create your **own Referly (Pushlap Growth) account**
* Set up a **new affiliate campaign**

The setup process for this is explained in the section below.

## Creating an Affiliate Campaign on [Referly](https://www.referly.so/) (formally known as Pushlap Growth)

{% hint style="info" %}
**Only follow this section if you are creating your own Referly account.**

If Torch Labs has already provided you with a **Pushlap token**, you can **skip this section**.
{% endhint %}

### Step 1: Create a Campaign

After logging into the Referly dashboard:

1. Click **"Create New Program."**

This will begin the campaign setup process.

<figure><img src="../../.gitbook/assets/Untitled design (5).png" alt=""><figcaption></figcaption></figure>

### Step 2: Enter Campaign Details

Provide the following information:

* **Campaign Program Title**
* **Subdomain** (Your preference)

Choose a title that clearly represents your affiliate program and a subdomain aligned with your brand.

<figure><img src="../../.gitbook/assets/Untitled design (6).png" alt=""><figcaption></figcaption></figure>

### Step 3: Configure Tracking Method

Set the **Affiliate URL Tracking Method** to:

**`aff`**

This is extremely important.

Using any other keyword may prevent referral tracking from functioning correctly on your dashboard.

{% hint style="info" %}
You must select **“aff”** from the available keyword options.

Choosing any other keyword may prevent the Affiliate Program from functioning correctly on your dashboard, as referral tracking depends on this exact setting.
{% endhint %}

### Step 4: Configure Landing Page URL

Enter your **Dashboard URL** as the **Landing Page URL**.

This ensures that users who click an affiliate link are properly redirected and tracked.

<figure><img src="../../.gitbook/assets/Untitled design (7).png" alt=""><figcaption></figcaption></figure>

### Step 5: Configure Commission Settings

Inside the Referly dashboard, configure:

* Commission rate
* Program settings
* Other campaign options

These settings control how affiliate rewards are calculated.

<figure><img src="../../.gitbook/assets/FireShot Capture 186 -  - [www.referly.so].png" alt=""><figcaption></figcaption></figure>

## **Important**

### Obtaining Your API Key

Once the campaign has been created, generate your **API Key**.

Navigate to:

**Referly Dashboard → Settings → Advanced**

The API Key is required to connect the affiliate system with your platform.

<figure><img src="../../.gitbook/assets/Untitled design (9).png" alt=""><figcaption></figcaption></figure>

### Obtaining the Campaign Program ID

You can find the **Campaign Program ID** directly in the Referly dashboard URL.

After opening your campaign, check the page address in your browser:

```
referly.so/dashboard/campaign/<campaign-program-id>
```

The value shown in place of `<campaign-program-id>` is your **Campaign Program ID**.

This ID must be entered in the system configuration to complete the integration.

<figure><img src="../../.gitbook/assets/Untitled design (10).png" alt=""><figcaption></figcaption></figure>

## Accessing Your Affiliate Link

1. Go to _**More Settings**_ and enter the details on the Affiliate Program based on supported providers

<mark style="background-color:yellow;">Currently it supports</mark> [<mark style="background-color:yellow;">**referly**</mark>](https://www.referly.so/) <mark style="background-color:yellow;">**(formally known as PushLap Growth)**</mark>

Initially select the **Supported Provider** from the dropdown, then fill in the Remaining 3 values and click on save to add them onto our system\
\
Once saved, select the default provider from the available options based on the data that you added

{% hint style="info" %}
When selecting an **Affiliate Provider** from the dropdown menu, you must complete **all remaining fields** displayed on the screen.

For example, if you select **PushlapGrowth**, ensure that every related configuration field is properly filled in.

Leaving any required field empty may cause the Affiliate Programme to malfunction or prevent it from working correctly in your dashboard.

Please double-check all entries before saving your settings to ensure the affiliate system functions as expected.
{% endhint %}

<figure><img src="../../.gitbook/assets/Untitled design (1).png" alt=""><figcaption></figcaption></figure>

2. Go to the **Customer Dashboard** and click on _the **Gift Icon** available_ at the bottom-right corner of the screen on the dashboard.

<figure><img src="../../.gitbook/assets/12 (1).png" alt=""><figcaption></figcaption></figure>

3. You can obtain your **Affiliate Link** from the popup window located at the bottom-right corner of the screen.

<figure><img src="../../.gitbook/assets/Untitled design (3).png" alt=""><figcaption></figcaption></figure>

4. Customers can access the **Affiliate Portal** directly from the navigation bar in their dashboard.

<figure><img src="../../.gitbook/assets/Untitled design (11).png" alt=""><figcaption></figcaption></figure>

## Need Help?

If you have any questions or require assistance during setup:

Please contact our support team by opening a **Support Ticket in Discord**.

Our team will guide you through the process and help resolve any issues.
