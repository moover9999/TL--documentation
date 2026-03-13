---
hidden: true
icon: dollar-sign
---

# Referly Campaign Setup Guide

***

### Introduction

This guide walks you through the complete process of setting up and launching an affiliate campaign on Referly (also known as Push Lap Growth). By the end of this guide, you will have a fully configured, active affiliate campaign with tracking, commission rules and a live affiliate portal.

**Before you begin**, ensure:

* A Referly account has been created at referly.so
* Email verification is complete

***

### Step 1: Access the Campaign Dashboard

After signing in, you will land on the main Referly dashboard. The central hub for managing affiliate programs, affiliates, referrals and payouts.

**To navigate to the Campaign Dashboard:**

1. Log in at referly.so/sign-in
2. From the left-hand navigation menu, locate the **Campaigns** section
3. Click on the campaign name or select **"Campaign Settings"** to open the configuration panel

The dashboard displays an overview of key metrics including active affiliates, total clicks, referrals and conversions, and revenue generated.

<figure><img src="../../.gitbook/assets/1.png" alt=""><figcaption></figcaption></figure>

***

### Step 2: Open Campaign Settings

The **Campaign Settings** panel is where all core configuration lives - including commission rules, affiliate portal settings, tracking options and branding.

**To access Campaign Settings:**

1. From the dashboard, click the campaign name in the left sidebar
2. Select **"Campaign Settings"** from the dropdown or submenu
3. The Campaign Settings panel opens, displaying multiple configuration tabs:
   * **General** — Campaign name, description, and basic settings
   * **Commission Plans** — How affiliates are rewarded
   * **Affiliate Portal** — Branding and portal customization
   * **Tracking** — Link and cookie settings
   * **Integrations** — Payment and platform connections

<figure><img src="../../.gitbook/assets/2.png" alt=""><figcaption></figcaption></figure>

***

### Step 3: Configure General Campaign Details

The **General** tab contains the foundational details of the affiliate program.

**Required fields to complete:**

1. **Campaign Name** - Enter a clear, descriptive name (e.g., "Spring 2025 Affiliate Program")
2. **Campaign Description** - Write a short description affiliates will see when they join
3. **Website URL** - Enter the business website URL where affiliates will send traffic

**Recommended settings:**

* Affiliate Approval: **Manual approval** (recommended for program quality control)

5. Click **Save** to confirm the general settings

<figure><img src="../../.gitbook/assets/3.png" alt=""><figcaption></figcaption></figure>

***

### Step 4: Set Up a Commission Plan

The **Commission Plans** tab determines how affiliates earn money for successful referrals.

**To configure the commission plan:**

1. Navigate to **Campaign Settings → Commission Plans**
2. The **Base Commission Plan** is displayed at the top - this is the default plan all new affiliates are assigned to automatically
3. Click **"Edit"** next to the Base Commission Plan

**Configure the following fields:**

* **Commission Type** - Select **Percentage-Based** (recommended): Affiliates earn a percentage of each sale they refer (e.g., 20% per sale)
* **Commission Trigger** - Select **When a customer makes a purchase**
* **Products** - Select **All Products** to apply commissions to everything
* **Payment Duration:**
  * For one-time purchases: select **"One-time payout."**
  * For subscriptions: select **Recurring** and specify the number of months (e.g., 12 months)

4. Click "**Save Commission Plan."**

> **Note:** The Base Commission Plan cannot be deleted - it is the default for all new affiliates. Additional custom plans can be created for specific affiliates later.

<figure><img src="../../.gitbook/assets/4.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/5.png" alt=""><figcaption></figcaption></figure>

***

### Step 5: Customize the Affiliate Portal

The **Affiliate Portal** is the branded interface where affiliates log in to view referral links, track earnings, and monitor performance.

**To configure the Affiliate Portal:**

1. Navigate to **Campaign Settings → Affiliate Portal**
2. Complete the following fields:
   * **Portal Name** — The name affiliates will see (e.g., "Acme Co. Partner Portal")
   * **Logo** — Upload the company logo (recommended: 200×60px, PNG format)
   * **Brand Color** — Set the primary color using a hex code (e.g., `#4F46E5`)
3. The **Affiliate Signup Link** is automatically generated on this page - copy and save it for Step 7
4. Click **Save** to apply the customization

> **Tip:** A well-branded affiliate portal improves affiliate trust and signup conversion rates.

```
Screenshot: Referly Campaign Settings — Affiliate Portal tab, showing the Portal Name field, Logo upload area, Brand Color picker, and the auto-generated Affiliate Signup Link in a copyable text field. The Save button is visible at the bottom.
```

***

### Step 6: Configure Tracking Settings

Proper tracking setup ensures referral clicks and conversions are accurately attributed to the correct affiliates. This must be completed before launching the campaign.

**To configure tracking:**

1. Navigate to **Campaign Settings → Tracking**
2. Locate the **Tracking Script** section
3. Copy the provided JavaScript tracking snippet
4. Paste the snippet into the `<head>` section of every page on the business website (or install via a tag manager such as Google Tag Manager)
5. On the **purchase confirmation or thank-you page**, also add the conversion event code provided by Referly
6. Click **Test Tracking** to verify the script is detecting events correctly
7. Confirm a green status indicator confirms tracking is active

> **Important:** Do not launch the campaign until tracking is confirmed. Without it, referrals and commissions cannot be attributed.

```
Screenshot: Referly Campaign Settings — Tracking tab, showing the JavaScript tracking snippet in a code block with a Copy button, the conversion event code below it, the Test Tracking button, and a green "Tracking Active" status indicator.
```

***

### Step 7: Invite Affiliates to the Program

With tracking live and the campaign configured, the next step is bringing affiliates into the program.

**To invite affiliates:**

1. From the main dashboard, navigate to the **Affiliates** section in the left sidebar
2. Click **Invite Affiliates** or **Add Affiliate**
3.  Choose one of the following methods: **Option A — Share the Signup Link:**

    * Use the Affiliate Signup Link saved in Step 5
    * Share it via email, social media, or the business website
    * Affiliates click the link, complete the signup form, and await approval

    **Option B — Manually Add an Affiliate:**

    * Click **Add Affiliate**
    * Enter the affiliate's name and email address
    * Click **Send Invitation** — the affiliate receives an email with login instructions
4. Affiliates appear in the **Affiliates** list with **Pending** status
5. Review each application and click **Approve** to activate their account

After approval, the affiliate automatically receives:

* Their unique referral tracking link
* Access to the branded affiliate portal
* A personal dashboard showing clicks, referrals, and earnings

```
Screenshot: Referly Affiliates section showing the Affiliates list with one pending affiliate highlighted, the Approve button visible on the right side of the row, and the Invite Affiliates button in the top right corner.
```

***

### Step 8: Verify the Campaign is Active

Before promoting the program publicly, verify that all components are working correctly.

**Verification checklist:**

1. Go to **Campaign Settings → General** and confirm the campaign status shows **Active**
2. Open the Affiliate Signup Link in a new browser tab and confirm the signup form loads correctly
3. Log in to the affiliate portal as a test affiliate and confirm:
   * The referral link is visible and copyable
   * The dashboard loads without errors
4. Click the test referral link and complete a test purchase on the business website
5. Return to the Referly dashboard and check **Tracking & Sales** — confirm the test referral was recorded

**Expected results:**

* A referral entry appears in the **Referrals** section
* A commission is calculated and shown in the **Commissions** section
* The test affiliate's dashboard shows the click and referral

> **If tracking is not recording:** Return to **Campaign Settings → Tracking** and use the **Test Tracking** tool to diagnose the issue. Confirm the tracking script is installed correctly on the website.

```
Screenshot: Referly main dashboard with the Campaign status showing "Active" in Campaign Settings, and the Tracking & Sales section showing a recorded test referral with the commission amount displayed.
```

***

### Summary: Campaign Setup Checklist

| Step | Task                                | Status |
| ---- | ----------------------------------- | ------ |
| 1    | Accessed the Campaign Dashboard     | ☐      |
| 2    | Opened Campaign Settings            | ☐      |
| 3    | Configured General campaign details | ☐      |
| 4    | Set up a Commission Plan            | ☐      |
| 5    | Customized the Affiliate Portal     | ☐      |
| 6    | Installed and verified Tracking     | ☐      |
| 7    | Invited at least one Affiliate      | ☐      |
| 8    | Verified Campaign is Active         | ☐      |

***

### Next Steps

Once the campaign is live and verified:

* **Share the Signup Link** across email lists, social media, and the business website
* **Monitor performance** weekly from the main dashboard
* **Review and approve** incoming affiliate applications promptly
* **Process payouts** when affiliate commissions reach the minimum payout threshold

For additional help, visit the Referly Help Center at [referly.so/guides](https://www.referly.so/guides) or reach out via Discord.
