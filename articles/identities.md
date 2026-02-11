# Identities

Set up and manage the sender profiles that power your outreach campaigns. An identity represents a LinkedIn profile, an email address, or both, through which you contact leads.

---

# Table of Contents

- [Understand Identities](#understand-identities)
  - [What Is an Identity?](#what-is-an-identity)
  - [Users vs. Identities](#users-vs-identities)
- [The Identities Dashboard](#the-identities-dashboard)
  - [Search and Filters](#search-and-filters)
  - [Performance Statistics](#performance-statistics)
- [Add a New Identity](#add-a-new-identity)
  - [Option A: Credentials (LinkedIn Login)](#option-a-credentials-linkedin-login)
  - [Option B: Manually](#option-b-manually)
  - [Option C: Share (Generate Link)](#option-c-share-generate-link)
- [Configure an Identity](#configure-an-identity)
  - [Contact Details](#contact-details)
  - [Working Hours](#working-hours)
  - [LinkedIn Settings](#linkedin-settings)
    - [Rate Limits](#rate-limits)
    - [Withdrawals](#withdrawals)
  - [Email Settings](#email-settings)
    - [Manage Email Addresses](#manage-email-addresses)
    - [Warm-Up](#warm-up)
    - [Email Rate](#email-rate)
    - [Signature](#signature)
  - [Share Identity Link](#share-identity-link)
- [Connect a Microsoft 365 / Azure Email Account](#connect-a-microsoft-365--azure-email-account)
  - [For Users: "Approval Required" Screen](#for-users-approval-required-screen)
  - [For IT Administrators: Grant Permissions](#for-it-administrators-grant-permissions)
  - [Troubleshoot a Failing Connection](#troubleshoot-a-failing-connection)
  - [Alternative: Connect via Admin Browser](#alternative-connect-via-admin-browser)
  - [Required Permissions (Scopes)](#required-permissions-scopes)
- [FAQs](#faqs)

---

# Understand Identities

## What Is an Identity?

An identity in Enginy is a sender profile composed of a LinkedIn account, one or more email addresses, or both. Identities serve two primary purposes:

- **Running campaigns** — Each campaign uses an identity to execute its scheduled actions (sending LinkedIn messages, connection requests, emails, etc.).
- **CRM mapping** — Identities map to your CRM users so that campaign activity syncs correctly.

While connecting LinkedIn and email is not strictly required to create an identity, you need at least one channel connected to use the identity in campaigns. An identity with only LinkedIn connected can run campaigns that contain LinkedIn-only actions; likewise, an identity with only email connected can run email-only campaigns.

## Users vs. Identities

In Enginy, a **User** and an **Identity** are not the same thing.

| Concept | Definition |
|---------|------------|
| **User** | A person who has access to the Enginy platform through an email and password |
| **Identity** | A LinkedIn profile and/or email address used to send prospecting messages (e.g., your.name@company.com) |

A single User can add and manage multiple Identities connected to the company account, and can send campaigns from all of them. This allows you to distribute sending volume and manage different senders without creating additional users.

If multiple people on your team need to work in Enginy with their own access, each person must have their own User account, and each User can connect their own Identities. Conversely, if a single person wants to send from multiple mailboxes (for example, sales@company.com and support@company.com), they can do so by adding multiple email addresses to one Identity.

> **Important:** For billing and security purposes, do not share a single User account among multiple people. Each person should have their own account and connect their corresponding identities.

---

# The Identities Dashboard

The main Identities screen provides an overview of all your active identities and their performance.

## Search and Filters

- **Search Bar** — Quickly find any established identity by name.
- **Date Filter** — Modify the timeframe for the displayed statistics. By default, the dashboard shows the current day's data.

## Performance Statistics

The dashboard displays four key metrics based on the selected time period:

| Metric | Description |
|--------|-------------|
| **Connections** | A comparison between LinkedIn connection requests accepted vs. total requests sent |
| **Messages Sent** | Total messages sent vs. the total allowed messages in the selected period (default limit is 100 per day per identity) |
| **Replied** | The number of emails that have received a response |
| **Bounce Rate** | The percentage of emails that bounced |

---

# Add a New Identity

To add a new identity:

1. Go to the **Identities** dashboard.
2. Click the **Add new identity** button at the top right of the screen.
3. Select one of the three tabs described below to choose a creation method.

## Option A: Credentials (LinkedIn Login)

Connect directly to a LinkedIn profile by entering your login credentials.

**Required fields:**

- Identity Name
- LinkedIn Email
- LinkedIn Password

> **Important:** If your LinkedIn profile uses Two-Step Authentication (2FA/MFA), you will need to provide the access code during the linking process. Additionally, if you use social logins (Google, Microsoft, Apple) or an Access Key to sign in to LinkedIn, you will not be able to connect successfully. You must set a direct password in your LinkedIn settings first.

## Option B: Manually

Create an identity by manually filling in the profile data. This method does not require LinkedIn credentials.

**Available fields:**

- Profile Picture (upload)
- First Name
- Last Name
- Job Title
- Email
- LinkedIn URL
- Schedule Meeting URL

## Option C: Share (Generate Link)

This option allows people who do not have an Enginy account (for example, team members, contractors, or partners) to connect their identity to your organization without needing platform access.

1. Click the **Generate Share Link** button.
2. Share the generated link with the person.
3. The person opens the link in their browser and uses either the Credentials or Manual method to create their identity.

> **Note:** The share link is temporary (valid for 24 hours) and can only be used once.

---

# Configure an Identity

Once an identity is created, click the **Configuration** button on the identity card to access its full settings. The configuration panel is organized into the following sections: **Contact Details**, **LinkedIn**, **Email**, and **Share Identity Link**.

## Contact Details

If you connected a LinkedIn account when creating the identity, this section is automatically populated with the LinkedIn profile data. If you created the identity manually, it reflects the information you entered. All fields can be edited at any time.

**Editable fields:**

- Profile Picture
- First Name
- Last Name
- Job Title
- LinkedIn URL
- Email
- Schedule Meeting URL
- Phone Number

## Working Hours

From the Contact Details section you can configure **Working Hours** for the identity. This setting defines the time zone, days, and hours during which the identity is active. Campaigns associated with this identity will only execute actions during the specified working hours.

## LinkedIn Settings

The LinkedIn configuration section contains two tabs: **Rate Limits** and **Withdrawals**.

### Rate Limits

Define the daily activity limits for the identity on LinkedIn:

| Setting | Default | Description |
|---------|---------|-------------|
| **Daily connection requests** | 20 per day | The maximum number of connection requests the identity can send per day. Increasing this value carries the risk of LinkedIn detecting automation and temporarily restricting your account. |
| **Daily messages limit** | 100 per day | The maximum number of LinkedIn messages the identity can send per day. Significant increases are not recommended. |
| **Daily scrapings** | Varies | Only available for identities with LinkedIn Sales Navigator. This value represents the number of additional scrapings the identity can perform beyond the shared account pool. The total scraping capacity equals the Enginy pool allocation plus the identity's Sales Navigator capacity. |

> **Warning:** Increasing daily connection requests or message limits beyond the recommended defaults can trigger LinkedIn automation detection, which may result in temporary account restrictions. If you do increase them, do so temporarily and monitor closely.

### Withdrawals

Manage pending LinkedIn connection requests that have not been accepted:

- **Automatic withdrawal** — Enable the option "Automatically withdraw pending invitations" and set a threshold in days (e.g., 7 days). Connection requests pending longer than this period will be automatically withdrawn.
- **Manual withdrawal** — Select and withdraw pending requests in bulk from the Withdrawals tab.
- **History** — View the full history of withdrawn connections.

> **Important:** After withdrawing a connection request, you cannot send a new request to the same person for 3 weeks.

## Email Settings

The Email configuration section contains three tabs: **Manage**, **Email Rate**, and **Signature**.

### Manage Email Addresses

Connect one or multiple email addresses to the identity. Supported providers include Google, Microsoft, and IMAP.

- **Load balancing** — When multiple addresses are connected, the system distributes the lead load among all of them.
- **Lead continuity** — If a lead starts a sequence with a specific email address and you later disconnect that address, the system will not reassign the lead to another connected address. Instead, the lead will produce an error. To resolve this, you must reconnect the original email address.

> **Warning:** If you disconnect an email address that has active leads mid-sequence, those leads will fail. The only way to fix this is to reconnect the same address that initiated the conversation.

### Warm-Up

The Warm-Up feature trains an email address through an external provider to reduce spam detection and increase deliverability.

| Detail | Value |
|--------|-------|
| **Cost** | 50 EUR |
| **Estimated duration** | 3 weeks |

**Requirements during warm-up:**

- Pause all campaigns that use the identity (and therefore the email address being warmed up).
- Avoid sending any emails from that address outside of Enginy.

> **Tip:** Following these requirements ensures the warm-up process completes successfully and your sender reputation improves as expected.

### Email Rate

Configure the sending limits per email address to avoid spam filters:

| Setting | Recommended Value |
|---------|-------------------|
| **Emails per day** | 30 per inbox |
| **Emails per hour** | 5 per inbox |

### Signature

Create or edit the email signature that the identity will use when sending emails. You can use the built-in text editor, or switch to **Advanced HTML Mode** to paste HTML code directly.

## Share Identity Link

Inside the configuration menu, the **Share identity link** button generates and copies a link that allows the owner of the identity to update their connection status (LinkedIn or email) without needing direct access to the Enginy platform. This is useful for refreshing credentials or reconnecting accounts. The link is valid for 24 hours.

---

# Connect a Microsoft 365 / Azure Email Account

This section explains how to connect a Microsoft 365 (Outlook) email account to Enginy. The integration uses the industry-standard **OAuth 2.0** authentication protocol to ensure secure access without storing your password.

## For Users: "Approval Required" Screen

If you attempt to connect your email and see a screen stating "Approval required," follow these steps:

1. Enter a brief justification in the text box (e.g., "Required for CRM integration").
2. Click the **Request approval** button.
3. This sends a notification to your IT administrator so they can review and approve the request.

## For IT Administrators: Grant Permissions

To allow users to connect their Microsoft 365 email accounts, an Azure Administrator must adjust the tenant configuration in the **Microsoft Entra Admin Center** (formerly Azure AD). Choose one of the following solutions.

**Solution A: Grant Tenant-Wide Admin Consent (Recommended)**

This method explicitly authorizes the Enginy application for your entire organization.

1. Navigate to **Microsoft Entra Admin Center** > **Enterprise applications**.
2. Search for and select the **Enginy AI** application.
3. In the left menu, select **API permissions**.
4. If you see warnings such as "Admin consent required," click the button labeled **Grant admin consent for [Organization Name]**.

**Solution B: Modify User Consent Settings**

If you prefer to allow users to authorize applications themselves:

1. Navigate to **Microsoft Entra Admin Center** > **Applications** > **Enterprise applications** > **Consent and permissions** > **User consent settings**.
2. Ensure that **"Allow user consent for apps from verified publishers"** is selected.

> **Note:** Enginy AI is a verified publisher.

## Troubleshoot a Failing Connection

If the integration fails despite granting consent, check for **Conditional Access Policies** that may be blocking third-party applications:

1. Go to **Microsoft Entra Admin Center** > **Protection** > **Conditional Access** > **Policies**.
2. Check for policies affecting "All cloud apps."
3. Look for blocks related to legacy authentication, non-compliant devices, or untrusted locations.
4. Exclude the Enginy application from restrictive policies, or create a specific exception.

| Symptom | Likely Cause | Resolution |
|---------|-------------|------------|
| "Approval required" screen appears when connecting | Organization requires admin consent for third-party apps | Request approval from your IT administrator, or have the admin grant tenant-wide consent (Solution A above) |
| Connection fails after admin consent was granted | Conditional Access Policies blocking third-party applications | Review and exclude Enginy from restrictive Conditional Access Policies |
| Permissions granted but connection still does not work | Permission propagation delay in Azure | Use the Admin Browser workaround described below, or wait and retry after a few minutes |

## Alternative: Connect via Admin Browser

> **Note:** This is a workaround for situations where permission propagation is delayed.

If the standard procedures above do not resolve the issue, the Azure Administrator can attempt to connect the email integration directly:

1. Open the browser where the Azure Administrator is already logged in with their Azure Admin permissions.
2. Log in to the Enginy platform on that same browser (using a member account).
3. Navigate to the email integration settings and attempt to connect the email account.
4. Because the browser session already holds valid Azure Admin credentials, this action often bypasses user-level restrictions and forces the initial connection.

## Required Permissions (Scopes)

For your security review, the Enginy integration requests the following Microsoft Graph permissions:

| Permission | Purpose |
|------------|---------|
| `SMTP.Send` | Send emails via SMTP |
| `Mail.Send` | Send emails via Microsoft Graph |
| `Mail.ReadWrite` | Read and write access to mailbox messages |
| `Mail.ReadBasic` | Read basic mail properties |
| `Mail.Read` | Read mailbox messages |
| `User.Read` | Read the signed-in user's profile |
| `offline_access` | Maintain access without re-authentication |

**References:**

- [Configure how users consent to applications](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/configure-user-consent) — Microsoft Learn
- [Grant tenant-wide admin consent](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent) — Microsoft Learn
- [Conditional Access: Targeting Resources](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-cloud-apps) — Microsoft Learn
- [Overview of permissions and consent](https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview) — Microsoft Learn

---

# FAQs

## What is the difference between a User and an Identity?

A User is a person with login access to the Enginy platform (email and password). An Identity is a LinkedIn profile and/or email address used to send prospecting messages through campaigns. A single User can manage multiple Identities, and each Identity can have multiple email addresses connected to it.

## Can someone without an Enginy account connect their identity?

Yes. Use the **Share (Generate Link)** option when adding a new identity. This generates a temporary, one-time-use link (valid for 24 hours) that you can share with anyone. They can open the link in their browser and connect their LinkedIn account or fill in their details manually, without needing access to the Enginy platform.

## What happens if I disconnect an email address that has active leads?

If a lead started a sequence with a specific email address and you disconnect that address, the lead will produce an error. The system will not automatically reassign the lead to another connected address. You must reconnect the original email address to resolve the issue.

## How does the Warm-Up feature work, and what should I do while it runs?

The Warm-Up trains your email address through an external provider to increase deliverability and reduce spam detection. It costs 50 EUR and takes approximately 3 weeks. During this period, you must pause all campaigns using that identity and avoid sending any emails from the address outside of Enginy.

## Why can I not connect my LinkedIn account using the Credentials option?

If you use social logins (Google, Microsoft, Apple) or an Access Key to sign in to LinkedIn, the Credentials method will not work. You must first set a direct password in your LinkedIn account settings. Additionally, if your account has Two-Step Authentication (2FA/MFA) enabled, make sure you have access to the authentication device during the linking process.
