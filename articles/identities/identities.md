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
    - [Required fields](#required-fields)
  - [Option B: Manually](#option-b-manually)
    - [Available fields](#available-fields)
  - [Option C: Share (Generate Link)](#option-c-share-generate-link)
- [Configure an Identity](#configure-an-identity)
  - [Contact Details](#contact-details)
    - [Editable fields](#editable-fields)
    - [Working Hours](#working-hours)
  - [LinkedIn Settings](#linkedin-settings)
    - [Rate Limits](#rate-limits)
    - [Withdrawals](#withdrawals)
  - [Email Configuration](#email-configuration)
    - [Manage Email Addresses](#manage-email-addresses)
      - [Connect a Google Email Account](#connect-a-google-email-account)
      - [Connect a Microsoft 365 / Azure Email Account](#connect-a-microsoft-365-azure-email-account)
- [For Users: "Approval Required" Screen](#for-users-approval-required-screen)
- [For IT Administrators: Grant Permissions](#for-it-administrators-grant-permissions)
  - [Solution A: Grant Tenant-Wide Admin Consent (Recommended)](#solution-a-grant-tenant-wide-admin-consent-recommended)
  - [Solution B: Modify User Consent Settings](#solution-b-modify-user-consent-settings)
- [Troubleshoot a Failing Connection](#troubleshoot-a-failing-connection)
- [Alternative: Connect via Admin Browser](#alternative-connect-via-admin-browser)
- [Required Permissions (Scopes)](#required-permissions-scopes)
- [References](#references)
      - [Connect an Email Account via IMAP in Enginy](#connect-an-email-account-via-imap-in-enginy)
- [Before you start](#before-you-start)
- [How to connect](#how-to-connect)
- [Common ports (quick reference)](#common-ports-quick-reference)
- [Best practices](#best-practices)
- [Troubleshooting](#troubleshooting)
      - [Warm-Up](#warm-up)
    - [Email Rate](#email-rate)
    - [Signature](#signature)
  - [Share Identity Link](#share-identity-link)
---

# Understand Identities
## What Is an Identity?

An identity in Enginy is a sender profile composed of a LinkedIn account, one or more email addresses, or both. Identities serve two primary purposes:

-   **Running campaigns** — Each campaign uses an identity to execute its scheduled actions (sending LinkedIn messages, connection requests, emails, etc.).
    
-   **CRM mapping** — Identities map to your CRM users so that campaign activity syncs correctly.
    

While connecting LinkedIn and email is not strictly required to create an identity, you need at least one channel connected to use the identity in campaigns. An identity with only LinkedIn connected can run campaigns that contain LinkedIn-only actions; likewise, an identity with only email connected can run email-only campaigns.

**Warning:** If you delete an identity that has an active campaign, reconnecting it later won’t reattach it to the campaign. The campaign will lose that identity.

## Users vs. Identities

In Enginy, a **User** and an **Identity** are not the same thing.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Concept</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Definition</p></td></tr><tr><td><p class="no-margin"><b>User</b></p></td><td><p class="no-margin">A person who has access to the Enginy platform through an email and password</p></td></tr><tr><td><p class="no-margin"><b>Identity</b></p></td><td><p class="no-margin">A LinkedIn profile and/or email address used to send prospecting messages (e.g., <a href="mailto:your.name@company.com" target="_blank" class="intercom-content-link">your.name@company.com</a>)</p></td></tr></tbody></table>

A single User can add and manage multiple Identities connected to the company account, and can send campaigns from all of them. This allows you to distribute sending volume and manage different senders without creating additional users.

If multiple people on your team need to work in Enginy with their own access, each person must have their own User account, and each User can connect their own Identities. Conversely, if a single person wants to send from multiple mailboxes (for example, [sales@company.com](mailto:sales@company.com) and [support@company.com](mailto:support@company.com)), they can do so by adding multiple email addresses to one Identity.

**Important:** For billing and security purposes, do not share a single User account among multiple people. Each person should have their own account and connect their corresponding identities.

---

# The Identities Dashboard
The main Identities screen provides an overview of all your active identities and their performance.

![](https://res.cloudinary.com/enginy/image/upload/v1771440111/helpcenter/identities-1.png)

## Search and Filters

-   **Search Bar** — Quickly find any established identity by name.
    
-   **Date Filter** — Modify the timeframe for the displayed statistics. By default, the dashboard shows the current day's data.
    

## Performance Statistics

The dashboard displays four key metrics based on the selected time period:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Metric</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Connections</b></p></td><td><p class="no-margin">A comparison between LinkedIn connection requests accepted vs. total requests sent.</p></td></tr><tr><td><p class="no-margin"><b>Messages Sent</b></p></td><td><p class="no-margin">Total messages sent vs. the total allowed messages in the selected period (default limit is 100 per day per identity for LinkedIn messaging, and 30 for emailing).</p></td></tr><tr><td><p class="no-margin"><b>Replied</b></p></td><td><p class="no-margin">The number of emails or LinkedIn messages that have received a response</p></td></tr><tr><td><p class="no-margin"><b>Bounce Rate</b></p></td><td><p class="no-margin">The percentage of emails that bounced</p></td></tr></tbody></table>

---

# Add a New Identity
To add a new identity:
1.  Go to the **Identities** dashboard.
2.  Click the **+** **Add new identity** button at the top right of the screen.
3.  Select one of the three tabs described below to choose a creation method.
## Option A: Credentials (LinkedIn Login)

Connect directly to a LinkedIn profile by entering your login credentials.

![](https://res.cloudinary.com/enginy/image/upload/v1771440114/helpcenter/identities-2.png)

### Required fields

-   Identity Name
    
-   LinkedIn Email
    
-   LinkedIn Password
    

**Important:** If your LinkedIn profile uses Two-Step Authentication (2FA/MFA), you will need to provide the access code during the linking process. Additionally, if you use social logins (Google, Microsoft, Apple) or an Access Key to sign in to LinkedIn, you will not be able to connect successfully. You must set a direct password in your LinkedIn settings first.

## Option B: Manually

Create an identity by manually filling in the profile data. This method does not require LinkedIn credentials.

![](https://res.cloudinary.com/enginy/image/upload/v1771440116/helpcenter/identities-3.png)

### Available fields

-   Profile Picture (upload)
    
-   First Name
    
-   Last Name
    
-   Job Title
    
-   Email
    
-   LinkedIn URL
    
-   Schedule Meeting URL
    

## Option C: Share (Generate Link)

This option allows people who do not have an Enginy account (for example, team members, contractors, or partners) to connect their identity to your organization without needing platform access.

![](https://res.cloudinary.com/enginy/image/upload/v1771440116/helpcenter/identities-4.png)
1.  Click the **Generate Share Link** button.
2.  Share the generated link with the person.
3.  The person opens the link in their browser and uses either the Credentials or Manual method to create their identity.
**Note:** The share link is temporary (valid for 24 hours) and can only be used once.

---

# Configure an Identity
Once an identity is created, click the **Configuration** button on the identity card to access its full settings. The configuration panel is organized into the following sections: **Contact Details**, **LinkedIn**, **Email**, **Likings opt-out** and **Share Identity Link**.

![](https://res.cloudinary.com/enginy/image/upload/v1771440116/helpcenter/identities-5.png)

## Contact Details

If you connected a LinkedIn account when creating the identity, this section is automatically populated with the LinkedIn profile data. If you created the identity manually, it reflects the information you entered. All fields can be edited at any time.

![](https://res.cloudinary.com/enginy/image/upload/v1771440116/helpcenter/identities-6.png)

### Editable fields

-   Profile Picture
    
-   First Name
    
-   Last Name
    
-   Job Title
    
-   LinkedIn URL
    
-   Email
    
-   Schedule Meeting URL
    
-   Phone Number
    

### Working Hours

From the Contact Details section you can configure **Working Hours** for the identity. This setting defines the time zone, days, and hours during which the identity is active. Campaigns associated with this identity will only execute actions during the specified working hours.

## LinkedIn Settings

The LinkedIn configuration section contains two tabs: **Rate Limits** and **Withdrawals**.

![](https://res.cloudinary.com/enginy/image/upload/v1771440116/helpcenter/identities-7.png)

**Note:** The Daily scrapings setting is only available if the identity has Sales Navigator enabled.

### Rate Limits

Define the daily activity limits for the identity on LinkedIn:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Setting</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Default</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Daily connection requests</b></p></td><td><p class="no-margin">20 per day</p></td><td><p class="no-margin">The maximum number of connection requests the identity can send per day. Increasing this value carries the risk of LinkedIn detecting automation and temporarily restricting your account.</p></td></tr><tr><td><p class="no-margin"><b>Daily messages limit</b></p></td><td><p class="no-margin">100 per day</p></td><td><p class="no-margin">The maximum number of LinkedIn messages the identity can send per day. Significant increases are not recommended.</p></td></tr><tr><td><p class="no-margin"><b>Daily scrapings</b></p></td><td><p class="no-margin">Varies</p></td><td><p class="no-margin">Only available for identities with LinkedIn Sales Navigator. This value represents the number of additional scrapings the identity can perform beyond the shared account pool. The total scraping capacity equals the Enginy pool allocation plus the identity's Sales Navigator capacity.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440117/helpcenter/identities-8.png)

**Warning:** Increasing daily connection requests or message limits beyond the recommended defaults can trigger LinkedIn automation detection, which may result in temporary account restrictions. If you do increase them, do so temporarily and monitor closely.

### Withdrawals

Manage pending LinkedIn connection requests that have not been accepted:

-   **Automatic withdrawal** — Enable the option "Automatically withdraw pending invitations" and set a threshold in days (e.g., 7 days). Connection requests pending longer than this period will be automatically withdrawn.
    
-   **Manual withdrawal** — Select and withdraw pending requests in bulk from the Withdrawals tab.
    
-   **History** — View the full history of withdrawn connections.
    

![](https://res.cloudinary.com/enginy/image/upload/v1771440117/helpcenter/identities-9.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440112/helpcenter/identities-10.png)

**Important:** After withdrawing a connection request, you cannot send a new request to the same person for 3 weeks.

## Email Configuration

The Email configuration section contains three tabs: **Manage**, **Email Rate**, and **Signature**.

### Manage Email Addresses

Connect one or multiple email addresses to the identity. Supported providers include Google, Microsoft, and IMAP.

![](https://res.cloudinary.com/enginy/image/upload/v1771440112/helpcenter/identities-11.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440112/helpcenter/identities-12.png)

#### Connect a Google Email Account

To connect a Google account to Enginy, sign in with the Google account you want to use.

![](https://res.cloudinary.com/enginy/image/upload/v1771440112/helpcenter/identities-13.png)

Before you continue, you can review Enginy’s **Privacy Policy** and **Terms of Service** using the links provided.

#### Connect a Microsoft 365 / Azure Email Account

This section explains how to connect a Microsoft 365 (Outlook) email account to Enginy. The integration uses the industry-standard **OAuth 2.0** authentication protocol to ensure secure access without storing your password.

# For Users: "Approval Required" Screen
If you attempt to connect your email and see a screen stating "Approval required" after login in, follow these steps:
1.  Enter a brief justification in the text box (e.g., "Required for CRM integration").
2.  Click the **Request approval** button.
3.  This sends a notification to your IT administrator so they can review and approve the request.
# For IT Administrators: Grant Permissions
To allow users to connect their Microsoft 365 email accounts, an Azure Administrator must adjust the tenant configuration in the **Microsoft Entra Admin Center** (formerly Azure AD). Choose one of the following solutions.

## Solution A: Grant Tenant-Wide Admin Consent (Recommended)

This method explicitly authorizes the Enginy application for your entire organization.
1.  Navigate to **Microsoft Entra Admin Center** > **Enterprise applications**.
2.  Search for and select the **Enginy AI** application.
3.  In the left menu, select **API permissions**.
4.  If you see warnings such as "Admin consent required," click the button labeled **Grant admin consent for \[Organization Name\]**.
## Solution B: Modify User Consent Settings

If you prefer to allow users to authorize applications themselves:
1.  Navigate to **Microsoft Entra Admin Center** > **Applications** > **Enterprise applications** > **Consent and permissions** > **User consent settings**.
2.  Ensure that **"Allow user consent for apps from verified publishers"** is selected.
**Note:** Enginy AI is a verified publisher.

# Troubleshoot a Failing Connection
If the integration fails despite granting consent, check for **Conditional Access Policies** that may be blocking third-party applications:
1.  Go to **Microsoft Entra Admin Center** > **Protection** > **Conditional Access** > **Policies**.
2.  Check for policies affecting "All cloud apps."
3.  Look for blocks related to legacy authentication, non-compliant devices, or untrusted locations.
4.  Exclude the Enginy application from restrictive policies, or create a specific exception.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc;"><p class="no-margin">Symptom</p></td><td style="background-color: #d7efdc;"><p class="no-margin">Likely Cause</p></td><td style="background-color: #d7efdc;"><p class="no-margin">Resolution</p></td></tr><tr><td><p class="no-margin">"Approval required" screen appears when connecting</p></td><td><p class="no-margin">Organization requires admin consent for third-party apps</p></td><td><p class="no-margin">Request approval from your IT administrator, or have the admin grant tenant-wide consent (Solution A above)</p></td></tr><tr><td><p class="no-margin">Connection fails after admin consent was granted</p></td><td><p class="no-margin">Conditional Access Policies blocking third-party applications</p></td><td><p class="no-margin">Review and exclude Enginy from restrictive Conditional Access Policies</p></td></tr><tr><td><p class="no-margin">Permissions granted but connection still does not work</p></td><td><p class="no-margin">Permission propagation delay in Azure</p></td><td><p class="no-margin">Use the Admin Browser workaround described below, or wait and retry after a few minutes</p></td></tr></tbody></table>

# Alternative: Connect via Admin Browser
**Note:** This is a workaround for situations where permission propagation is delayed.

If the standard procedures above do not resolve the issue, the Azure Administrator can attempt to connect the email integration directly:
1.  Open the browser where the **Azure Administrator** is already logged in with their Azure Admin permissions.
2.  Log in to the **Enginy platform** on that same browser (using a member account).
3.  Navigate to the email integration settings and attempt to **connect the email** account.
4.  Because the browser session already holds valid Azure Admin credentials, this action often **bypasses user-level restrictions** and forces the initial connection.
# Required Permissions (Scopes)
For your security review, the Enginy integration requests the following Microsoft Graph permissions:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc;"><p class="no-margin">Permission</p></td><td style="background-color: #d7efdc;"><p class="no-margin">Purpose</p></td></tr><tr><td><p class="no-margin"><code>SMTP.Send</code></p></td><td><p class="no-margin">Send emails via SMTP</p></td></tr><tr><td><p class="no-margin"><code>Mail.Send</code></p></td><td><p class="no-margin">Send emails via Microsoft Graph</p></td></tr><tr><td><p class="no-margin"><code>Mail.ReadWrite</code></p></td><td><p class="no-margin">Read and write access to mailbox messages</p></td></tr><tr><td><p class="no-margin"><code>Mail.ReadBasic</code></p></td><td><p class="no-margin">Read basic mail properties</p></td></tr><tr><td><p class="no-margin"><code>Mail.Read</code></p></td><td><p class="no-margin">Read mailbox messages</p></td></tr><tr><td><p class="no-margin"><code>User.Read</code></p></td><td><p class="no-margin">Read the signed-in user's profile</p></td></tr><tr><td><p class="no-margin"><code>offline_access</code></p></td><td><p class="no-margin">Maintain access without re-authentication</p></td></tr></tbody></table>

# **References**
-   [Configure how users consent to applications](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/configure-user-consent) — Microsoft Learn
    
-   [Grant tenant-wide admin consent](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent) — Microsoft Learn
    
-   [Conditional Access: Targeting Resources](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-cloud-apps) — Microsoft Learn
    
-   [Overview of permissions and consent](https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview) — Microsoft Learn
    

#### Connect an Email Account via IMAP in Enginy

Connecting an inbox via **IMAP** lets Enginy access your mailbox to **sync and read incoming emails** (e.g., for conversation tracking). To **send emails**, Enginy uses **SMTP**. That’s why the setup requires both **IMAP (incoming)** and **SMTP (outgoing)** details.

# Before you start
Make sure you have:

-   The email address you want to connect
    
-   The password (or an **App Password** if your provider requires it)
    
-   Your provider’s server details:
    
    -   **IMAP Host** and **IMAP Port**
        
    -   **SMTP Host** and **SMTP Port**
        

**Tip:** For many providers (Google, Microsoft, etc.), you may need to enable IMAP/SMTP access or generate an **App Password**, especially if 2FA is enabled.

# How to connect
1.  Fill in the fields:
    -   **Email**: the inbox address you want to connect
    -   **Password**: your password or App Password
    -   **IMAP Host**: your provider’s IMAP server
    -   **IMAP Port**: the IMAP port
    -   **SMTP Host**: your provider’s SMTP server
    -   **SMTP Port**: the SMTP port
2.  Click **Connect**.
Enginy will validate the connection and, if everything is correct, the inbox will be ready to use.

![](https://res.cloudinary.com/enginy/image/upload/v1771440112/helpcenter/identities-14.png)

# Common ports (quick reference)
These are the most common secure options (they can vary by provider):

-   **IMAP**
    
    -   **993** (SSL/TLS) ✅ recommended
        
    -   143 (non-SSL / STARTTLS depending on provider)
        
-   **SMTP**
    
    -   **465** (SSL)
        
    -   **587** (STARTTLS) ✅ very common/recommended
        

# Best practices
-   Use **TLS/SSL** ports whenever possible (IMAP **993**, SMTP **465/587**).
    
-   If your account has **2FA**, your normal password often won’t work—use an **App Password**.
    
-   If this inbox is used for campaigns, consider connecting a **dedicated sending inbox**.
    

# Troubleshooting
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc;"><p class="no-margin">Symptom</p></td><td style="background-color: #d7efdc;"><p class="no-margin">Likely Cause</p></td><td style="background-color: #d7efdc;"><p class="no-margin">Resolution</p></td></tr><tr><td><p class="no-margin">Connection fails with “Authentication failed” / “Invalid credentials”</p></td><td><p class="no-margin">Wrong password, or 2FA is enabled and the provider requires an App Password</p></td><td><p class="no-margin">Double-check the email/password. If 2FA is enabled, generate an <b>App Password</b> and use it instead of your normal password.</p></td></tr><tr><td><p class="no-margin">“Cannot connect” / timeout error</p></td><td><p class="no-margin">IMAP/SMTP host or port is incorrect, or network/firewall is blocking the connection</p></td><td><p class="no-margin">Verify the <b>IMAP/SMTP host and port</b>. Try secure defaults: <b>IMAP 993 (SSL)</b> and <b>SMTP 587 (STARTTLS)</b> or <b>465 (SSL)</b>. Check firewall/VPN restrictions.</p></td></tr><tr><td><p class="no-margin">IMAP connects, but sending emails fails</p></td><td><p class="no-margin">SMTP settings are incorrect or SMTP is blocked by the provider</p></td><td><p class="no-margin">Verify <b>SMTP Host/Port</b> and whether the provider requires <b>SSL/STARTTLS</b>. Make sure SMTP is enabled for the mailbox in the provider settings.</p></td></tr><tr><td><p class="no-margin">Connection succeeds, but no emails appear / no sync</p></td><td><p class="no-margin">IMAP access is disabled on the mailbox, or the provider limits IMAP</p></td><td><p class="no-margin">Enable <b>IMAP access</b> in the provider/admin settings. If the provider restricts IMAP, use another connection method (OAuth, if available).</p></td></tr><tr><td><p class="no-margin">Connection fails after changing the mailbox password</p></td><td><p class="no-margin">Stored credentials are no longer valid</p></td><td><p class="no-margin">Reconnect the inbox with the updated password (or new App Password).</p></td></tr><tr><td><p class="no-margin">“Too many login attempts” / temporary lock</p></td><td><p class="no-margin">Provider rate limits or security policies triggered</p></td><td><p class="no-margin">Wait and try again later. Reduce repeated attempts. If available, whitelist the login location/IP or review provider security alerts.</p></td></tr><tr><td><p class="no-margin">Works for some mailboxes but not for others</p></td><td><p class="no-margin">Provider/admin policies differ per user (security rules, IMAP disabled, restricted apps)</p></td><td><p class="no-margin">Compare mailbox settings and policies. Ask your IT/admin to enable IMAP/SMTP or allow third-party access for that user.</p></td></tr><tr><td><p class="no-margin">Connection fails only on corporate domains (e.g., Microsoft/Google Workspace)</p></td><td><p class="no-margin">Admin policies require approval for third-party access or block basic auth</p></td><td><p class="no-margin">Ask the admin to allow IMAP/SMTP access (or provide an App Password). If basic auth is blocked, use the provider’s recommended secure method where possible.</p></td></tr><tr><td><p class="no-margin">Emails send, but deliverability is poor (spam/bounces)</p></td><td><p class="no-margin">Domain reputation issues, missing SPF/DKIM/DMARC, or aggressive sending volume</p></td><td><p class="no-margin">Ensure SPF/DKIM/DMARC are configured. Warm up the inbox and lower sending volume. Use multiple inboxes / “Shuffle” if applicable.</p></td></tr></tbody></table>

-   **Load balancing** — When multiple email addresses are connected and the campaign’s **Email Inbox** setting is set to “Shuffle,” Enginy distributes leads across all available inboxes.
    
    ![](https://res.cloudinary.com/enginy/image/upload/v1771440113/helpcenter/identities-15.png)
    
-   **Lead continuity** — If a lead starts a sequence with a specific email address and you later disconnect that address, the system will not reassign the lead to another connected address. Instead, the lead will produce an error. To resolve this, you must reconnect the original email address.
    

**Warning:** If you disconnect an email address that has active leads mid-sequence, those leads will fail. The only way to fix this is to reconnect the same address that initiated the conversation.

#### Warm-Up

The Warm-Up feature trains an email address through an external provider to reduce spam detection and increase deliverability.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Detail</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Value</p></td></tr><tr><td><p class="no-margin"><b>Cost</b></p></td><td><p class="no-margin">Varies on quantity; ask AM</p></td></tr><tr><td><p class="no-margin"><b>Estimated duration</b></p></td><td><p class="no-margin">2 weeks</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440113/helpcenter/identities-16.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440113/helpcenter/identities-17.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440113/helpcenter/identities-18.png)

**Requirements during warm-up:**

-   Pause all campaigns that use the identity (and therefore the email address being warmed up). Not mandatory but highly recommended warm-up properly.
    
-   Avoid sending any emails from that address outside of Enginy.
    

**Tip:** Following these requirements ensures the warm-up process completes successfully and your sender reputation improves as expected.

### Email Rate

Configure the sending limits per email address to avoid spam filters:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Setting</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Recommended Value</p></td></tr><tr><td><p class="no-margin"><b>Emails per day</b></p></td><td><p class="no-margin">30 per inbox</p></td></tr><tr><td><p class="no-margin"><b>Emails per hour</b></p></td><td><p class="no-margin">5 per inbox</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440113/helpcenter/identities-19.png)

**Notes:**

-   **Maximum** allowed to configure is **80 emails sent per inbox per day** and **10 emails sent per inbox per hour.**
    
-   If you **need to** **temporarily increase** this rate for a valid reason, **contact Support** to request an increase. However, this isn’t recommended, as it can harm your email reputation and reduce deliverability. If you decide to proceed, make sure that:
    
    -   You’ve already been sending at this volume consistently.
        
    -   Your sending domains have a strong reputation.
        

### Signature

Create or edit the email signature that the identity will use when sending emails. You can use the built-in text editor, or switch to **Advanced HTML Mode** to paste HTML code directly.

![](https://res.cloudinary.com/enginy/image/upload/v1771440114/helpcenter/identities-20.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440114/helpcenter/identities-21.png)

## Share Identity Link

Inside the configuration menu, the **Share identity link** button generates and copies a link that allows the owner of the identity to update their connection status (LinkedIn or email) without needing direct access to the Enginy platform. This is useful for refreshing credentials or connecting / reconnecting accounts. The link is valid for 24 hours.

![](https://res.cloudinary.com/enginy/image/upload/v1771440114/helpcenter/identities-22.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440114/helpcenter/identities-23.png)

---

# FAQs
### Q1: What is the difference between a User and an Identity?

A User is a person with login access to the Enginy platform (email and password). An Identity is a LinkedIn profile and/or email address used to send prospecting messages through campaigns. A single User can manage multiple Identities, and each Identity can have multiple email addresses connected to it.

### Q2: Can someone without an Enginy account connect their identity?

Yes. Use the **Generate Share Link** option when adding a new identity. This generates a temporary, one-time-use link (valid for 24 hours) that you can share with anyone. They can open the link in their browser and connect their LinkedIn account or fill in their details manually, without needing access to the Enginy platform. Alternatively, click the identity’s **Configuration** button and use **Share identity link** to refresh its connection status.

### Q3: What happens if I disconnect an email address that has active leads?

If a lead started a sequence with a specific email address and you disconnect that address, the lead will produce an error. The system will not automatically reassign the lead to another connected address. You must reconnect the original email address to resolve the issue.

### Q4: How does the Warm-Up feature work, and what should I do while it runs?

The Warm-Up trains your email address through an external provider to increase deliverability and reduce spam detection. It takes approximately 2 weeks. During this period, you must pause all campaigns using that identity and avoid sending any emails from the address outside of Enginy.

### Q5: Why can I not connect my LinkedIn account using the Credentials option?

If you use social logins (Google, Microsoft, Apple) or an Access Key to sign in to LinkedIn, the Credentials method will not work. You must first set a direct password in your LinkedIn account settings. Additionally, if your account has Two-Step Authentication (2FA/MFA) enabled, make sure you have access to the authentication device during the linking process.
