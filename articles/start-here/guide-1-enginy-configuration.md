# Enginy Configuration
This guide walks you through the essential first steps to set up your Enginy account. Complete each section in order so your workspace is fully configured before you start building lists and launching campaigns.

---

# Table of Contents
- [Before You Start](#before-you-start)
- [Set Up Your Identities](#set-up-your-identities)
  - [What Is an Identity](#what-is-an-identity)
  - [Users vs. Identities](#users-vs-identities)
  - [Add a New Identity](#add-a-new-identity)
  - [Connect LinkedIn](#connect-linkedin)
  - [Connect Email](#connect-email)
  - [Configure Working Hours](#configure-working-hours)
  - [Set LinkedIn Rate Limits](#set-linkedin-rate-limits)
  - [Warm Up Your Email](#warm-up-your-email)
- [Connect Your CRM](#connect-your-crm)
  - [Available CRM Integrations](#available-crm-integrations)
  - [Enable and Configure Your CRM](#enable-and-configure-your-crm)
  - [Other Integrations](#other-integrations)
- [Set Up Your Blocklist](#set-up-your-blocklist)
  - [Why the Blocklist Matters](#why-the-blocklist-matters)
  - [Add Entries to the Blocklist](#add-entries-to-the-blocklist)
- [Fill In Your AI Playbook](#fill-in-your-ai-playbook)
  - [Enter Company Information](#enter-company-information)
  - [Enter Personal Information](#enter-personal-information)
- [Understand Credits and Limits](#understand-credits-and-limits)
  - [What Consumes Credits](#what-consumes-credits)
  - [Plans Overview](#plans-overview)
  - [Renewal Policy](#renewal-policy)
- [Review General Settings](#review-general-settings)
  - [Company Identity and Preferences](#company-identity-and-preferences)
  - [Security](#security)
  - [Team Management](#team-management)
- [Next Steps](#next-steps)
- [FAQs](#faqs)
    - [Q1: What is the difference between a User and an Identity?](#q1-what-is-the-difference-between-a-user-and-an-identity)
    - [Q2: Can I connect more than one CRM at the same time?](#q2-can-i-connect-more-than-one-crm-at-the-same-time)
    - [Q3: Do I need a CRM to use Enginy?](#q3-do-i-need-a-crm-to-use-enginy)
    - [Q4: What happens if I skip the AI Playbook setup?](#q4-what-happens-if-i-skip-the-ai-playbook-setup)
    - [Q5: Do unused credits roll over to the next month?](#q5-do-unused-credits-roll-over-to-the-next-month)
    - [Q6: Can someone without an Enginy account connect their identity?](#q6-can-someone-without-an-enginy-account-connect-their-identity)

---

# Before You Start
To follow this guide, you need an active Enginy account. If you have not received your login credentials, contact your Account Manager or the team member who set up your workspace.

Have the following ready:

- Your LinkedIn credentials (email and password, not a social login).
- Access to the email account(s) you plan to use for outreach (Google, Microsoft 365, or IMAP credentials).
- Your CRM login, if you plan to integrate one.

---

# Set Up Your Identities
Identities are the sender profiles that power your outreach campaigns. Before you can send any messages through Enginy, you need at least one identity connected.

## What Is an Identity
An identity in Enginy is a sender profile composed of a LinkedIn account, one or more email addresses, or both. Identities serve two purposes:

- **Running campaigns** — Each campaign uses an identity to execute its scheduled actions (sending LinkedIn messages, connection requests, emails, etc.).
- **CRM mapping** — Identities map to your CRM users so that campaign activity syncs correctly.

You need at least one channel connected (LinkedIn or email) to use an identity in campaigns. An identity with only LinkedIn can run LinkedIn-only campaigns; an identity with only email can run email-only campaigns.

## Users vs. Identities
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Concept</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Definition</b></p></td></tr><tr><td><p class="no-margin"><b>User</b></p></td><td><p class="no-margin">A person who has access to the Enginy platform through an email and password.</p></td></tr><tr><td><p class="no-margin"><b>Identity</b></p></td><td><p class="no-margin">A LinkedIn profile and/or email address used to send prospecting messages through campaigns.</p></td></tr></tbody></table>

A single User can manage multiple Identities and send campaigns from all of them. If multiple people on your team need their own access, each person must have their own User account and can connect their own Identities.

**Important:** For billing and security purposes, do not share a single User account among multiple people.

## Add a New Identity
1. Go to the **Identities** dashboard.
2. Click **+ Add new identity** at the top right.
3. Choose one of three creation methods:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Method</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>When to Use</b></p></td></tr><tr><td><p class="no-margin"><b>Credentials (LinkedIn Login)</b></p></td><td><p class="no-margin">Connect directly by entering your LinkedIn email and password. Requires a direct LinkedIn password (not a social login via Google/Microsoft/Apple).</p></td></tr><tr><td><p class="no-margin"><b>Manually</b></p></td><td><p class="no-margin">Create an identity by filling in profile data (name, job title, LinkedIn URL, email). Does not require LinkedIn credentials.</p></td></tr><tr><td><p class="no-margin"><b>Share (Generate Link)</b></p></td><td><p class="no-margin">Generate a temporary link (valid 24 hours, single use) for someone without an Enginy account to connect their identity to your workspace.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440114/helpcenter/identities-2.png)

**Important:** If your LinkedIn profile uses Two-Step Authentication, you will need to provide the access code during the linking process. If you use social logins or an Access Key to sign in to LinkedIn, you must first set a direct password in your LinkedIn settings.

## Connect LinkedIn
When creating an identity via **Credentials**, your LinkedIn profile connects automatically. For identities created **Manually**, paste the LinkedIn URL in the identity's **Contact Details** section and Enginy will link it.

Once connected, click **Configuration** on the identity card to access the full settings panel: **Contact Details**, **LinkedIn**, **Email**, and **Share Identity Link**.

![](https://res.cloudinary.com/enginy/image/upload/v1771440116/helpcenter/identities-5.png)

## Connect Email
Navigate to your identity's **Configuration > Email > Manage** tab and click the button for your email provider:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Provider</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>How to Connect</b></p></td></tr><tr><td><p class="no-margin"><b>Google</b></p></td><td><p class="no-margin">Sign in with your Google account. Review and accept the permissions.</p></td></tr><tr><td><p class="no-margin"><b>Microsoft 365</b></p></td><td><p class="no-margin">Sign in with your Microsoft account. If you see an "Approval required" screen, request approval from your IT administrator or have them grant tenant-wide admin consent for the Enginy AI application.</p></td></tr><tr><td><p class="no-margin"><b>IMAP</b></p></td><td><p class="no-margin">Enter your email, password (or App Password if 2FA is enabled), IMAP host/port, and SMTP host/port. Recommended secure ports: IMAP 993 (SSL), SMTP 587 (STARTTLS) or 465 (SSL).</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440112/helpcenter/identities-11.png)

You can connect multiple email addresses to a single identity. When a campaign's **Email Inbox** setting is set to "Shuffle," Enginy distributes leads across all connected inboxes for better deliverability.

**Warning:** If you disconnect an email address that has active leads mid-sequence, those leads will fail. The system will not reassign leads to another address. You must reconnect the original email to resolve the issue.

**Note:** For detailed instructions on Microsoft 365 admin consent, IMAP troubleshooting, and email signature configuration, see the **Identities** article.

## Configure Working Hours
Working hours define the time window during which the identity is active. Campaigns associated with this identity will only execute actions during the specified working hours.

1. Navigate to **Identity > Configuration > Contact Details**.
2. Set the time zone, active days, and start/end times.

**Tip:** Adjust working hours to match your prospects' time zones to ensure messages arrive at optimal engagement times. Working hours are configured per identity, not per campaign.

## Set LinkedIn Rate Limits
Navigate to **Identity > Configuration > LinkedIn > Rate Limits** to configure daily activity limits:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Setting</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Default</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Description</b></p></td></tr><tr><td><p class="no-margin"><b>Daily connection requests</b></p></td><td><p class="no-margin">20/day</p></td><td><p class="no-margin">Maximum connection requests per day. Increasing this carries the risk of LinkedIn restricting your account.</p></td></tr><tr><td><p class="no-margin"><b>Daily messages limit</b></p></td><td><p class="no-margin">100/day</p></td><td><p class="no-margin">Maximum LinkedIn messages per day.</p></td></tr><tr><td><p class="no-margin"><b>Daily scrapings</b></p></td><td><p class="no-margin">Varies</p></td><td><p class="no-margin">Only available for identities with Sales Navigator. Additional scrapings beyond the shared pool.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440117/helpcenter/identities-7.png)

**Warning:** Increasing daily connection requests or message limits beyond the recommended defaults can trigger LinkedIn automation detection. If you do increase them, do so temporarily and monitor closely.

You can also configure **automatic withdrawal** of pending connection requests from the **Withdrawals** tab. Set a threshold in days (e.g., 7 days) and unanswered requests will be withdrawn automatically.

**Important:** After withdrawing a connection request, you cannot send a new request to the same person for 3 weeks.

## Warm Up Your Email
If you are using a new email address or domain for outreach, you should warm it up before launching campaigns. Email warm-up gradually builds your sending reputation over approximately 2 weeks.

1. Go to **Identity > Configuration > Email > Manage** tab.
2. Click the **Start** button next to the warm-up feature.
3. After two weeks, return and stop the warm-up.

**Important:** During warm-up, pause all campaigns using that identity and avoid sending any emails from that address outside of Enginy. You will receive automated warming emails during this period — do not mark them as spam.

**Note:** Email warm-up has a fixed monthly cost. Contact your Account Manager or chat support for pricing. For a detailed explanation of email deliverability and warm-up, see the **Identities** article.

---

# Connect Your CRM
Connecting your CRM allows you to synchronize and export contacts and companies between Enginy and your CRM, keeping your data in sync and avoiding duplicate outreach.

## Available CRM Integrations
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>CRM</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Description</b></p></td></tr><tr><td><p class="no-margin"><b>HubSpot</b></p></td><td><p class="no-margin">Full-featured CRM with marketing, sales, and service hubs.</p></td></tr><tr><td><p class="no-margin"><b>Salesforce</b></p></td><td><p class="no-margin">Enterprise CRM platform.</p></td></tr><tr><td><p class="no-margin"><b>Pipedrive</b></p></td><td><p class="no-margin">Sales-focused CRM built around pipeline management.</p></td></tr><tr><td><p class="no-margin"><b>Dynamics</b></p></td><td><p class="no-margin">Microsoft Dynamics 365 CRM.</p></td></tr><tr><td><p class="no-margin"><b>Zoho</b></p></td><td><p class="no-margin">CRM suite with sales automation and analytics.</p></td></tr><tr><td><p class="no-margin"><b>TribeCRM</b></p></td><td><p class="no-margin">CRM designed for relationship-driven sales teams.</p></td></tr><tr><td><p class="no-margin"><b>Custom CRM (Beta)</b></p></td><td><p class="no-margin">Connect your own CRM using API key authentication.</p></td></tr></tbody></table>

**Important:** Enginy supports only one active CRM at a time. If you want to switch, disable the current one first.

## Enable and Configure Your CRM
1. Go to **Integrations** and open the **All** tab.
2. Locate the CRM card you want to connect and enable it using the toggle switch.
3. Click **Configure** to open the four-step setup wizard.

**Step 1 — Sync Configuration:**

Define how Enginy matches contacts and companies with your CRM records to prevent duplicates. Configure the **Contact Identifier** (e.g., First name + Last name + Company name, or LinkedIn profile URL) and the **Company Identifier** (e.g., Domain, or Domain + Company Name). You can also set up custom mapping with AND/OR logic.

![](https://res.cloudinary.com/enginy/image/upload/v1771440124/helpcenter/integrations-6.png)

**Step 2 — Field Mapping:**

Configure which Enginy fields map to which CRM fields for export and sync. The setup is split into **Contacts** and **Companies** tabs. You can set up four field types:

- **Enginy Fields** — Standard fields from your lists mapped to CRM fields.
- **Fixed Value Fields** — Fields that always export with the same static value (e.g., Source = "Enginy").
- **Manual Export Fields** — Fields whose value you define at the time of export.
- **Engagement Fields** — Fields populated when a CRM Activity is created.

For each mapping, choose a sync direction: Bi-directional, CRM overwrites Enginy, Enginy overwrites CRM, Sync if empty, or Sync deactivated.

**Warning:** Do not map a Company field in the Contacts tab (or vice versa). This can cause export errors.

**Step 3 — Campaign Mapping (Optional):**

Sync campaign-specific properties (sequence details, engagement status, email opens/clicks, conversation tags) to your CRM.

**Step 4 — User Mapping:**

Link Enginy identities and users to CRM users so that exports and activity logs are attributed correctly. Set a **Default CRM owner** for exports by unmapped users.

After completing all steps, click **Update** to save.

**Note:** For the full field mapping reference, association types, status icons, and troubleshooting, see the **Integrations** article.

## Other Integrations
Beyond CRM, Enginy supports additional integrations you can configure from the **Integrations** page:

- **Data Enrichment** — Apollo, Cognism, Datagma, Dropcontact, Hunter, Kaspr, Lusha, ZoomInfo (connect via API key).
- **AI Enrichment** — Anthropic, Google AI, OpenAI, xAI (connect your own API key to use your provider tokens instead of Enginy Credits).
- **Import Sources** — TheirStack (company data aggregation; connect your own API key or use Enginy's subscription).
- **Communication** — Slack (connect via OAuth for team notifications).

**Note:** If you do not have your own AI or TheirStack account, Enginy provides these services using your Enginy Credits.

---

# Set Up Your Blocklist
## Why the Blocklist Matters
The Blocklist prevents specific contacts and companies from appearing in your lists, being exported to your CRM, or receiving any outreach through campaigns. It is workspace-wide — entries blocked by one user apply across the entire workspace.

If you have a CRM connected, Enginy can identify existing records during sync. However, if you do not have a CRM, creating a blocklist is the primary way to prevent reaching out to existing customers, competitors, or current pipeline.

**Important:** A contact or company on the Blocklist cannot be re-added to any list or campaign until it is first unblocked.

## Add Entries to the Blocklist
**Add individually:**

1. Navigate to the **Blocklist** section and select the **Contacts** or **Companies** tab.
2. Click **Add Email / LinkedIn URL** (for contacts) or **Add Domain / LinkedIn URL** (for companies).
3. Enter the identifier(s) and select a reason (Not interested, Competitor, Customer, Not target, Churn, or Other).
4. Save your changes.

![](https://res.cloudinary.com/enginy/image/upload/v1771440091/helpcenter/blocklist-2.png)

**Add in bulk from a list:**

1. Go to any Contacts or Companies list.
2. Select the entries you want to block using checkboxes.
3. Click **Blocklist > Add contacts to blocklist** (or companies) in the action bar.
4. Choose a reason and optionally set a block period (Indefinitely, 30/60/90/180 days, or a Custom Date).

![](https://res.cloudinary.com/enginy/image/upload/v1771440093/helpcenter/blocklist-4.png)

**Tip:** When viewing any list, a blocklist indicator in the bottom bar shows how many entries are currently on the Blocklist. Click it to view and manage those entries without leaving your list. For the complete blocklist reference (source values, reason values, and management options), see the **Blocklist** article.

---

# Fill In Your AI Playbook
The AI Playbook is the central brain of your Enginy account. It provides the AI with the context it needs to generate accurate, personalized outreach messages, score contacts and companies against your ICP, and power AI-driven conversation handling.

Navigate to **AI Playbook** from the left-hand menu.

## Enter Company Information
1. Open the **Company Information** tab.
2. Fill in the **Website** and **LinkedIn URL** fields.
3. Click **Fill with AI** to let the system auto-complete as much information as possible from your public data.
4. Review and adjust the content.

![](https://res.cloudinary.com/enginy/image/upload/v1771440079/helpcenter/ai-playbook-1.png)

The Company Information tab includes the following sections:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Section</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>What to Fill In</b></p></td></tr><tr><td><p class="no-margin"><b>Company Information</b></p></td><td><p class="no-margin">Company name, industry, headcount, HQ location, founding year, company overview.</p></td></tr><tr><td><p class="no-margin"><b>Products and Services</b></p></td><td><p class="no-margin">Product name, description, value proposition, price range. Add as many as needed.</p></td></tr><tr><td><p class="no-margin"><b>Ideal Customer Profile (ICP)</b></p></td><td><p class="no-margin">ICP name, target job titles, locations, industries, company size, revenue, key pain points, disqualifying factors.</p></td></tr><tr><td><p class="no-margin"><b>Ideal Companies</b></p></td><td><p class="no-margin">Example companies the AI can use to find similar ideal customers.</p></td></tr><tr><td><p class="no-margin"><b>Competitors</b></p></td><td><p class="no-margin">Competitor names and how your product differentiates from theirs.</p></td></tr><tr><td><p class="no-margin"><b>Testimonials</b></p></td><td><p class="no-margin">Customer company, promoter name, job position, main benefit.</p></td></tr><tr><td><p class="no-margin"><b>Company FAQs</b></p></td><td><p class="no-margin">Frequently asked questions about your business, with answers the AI can reference.</p></td></tr></tbody></table>

**Important:** The ICP section is critical. It powers the Contact and Company scoring system, the ICP Quick Filter for LinkedIn searches, and AI Recommended Lists. Take the time to fill it in thoroughly.

Click **Update** at the bottom right to save changes.

## Enter Personal Information
1. Open the **Personal Information** tab.
2. Select an identity from the dropdown.
3. If the LinkedIn URL is already connected, click **Fill with AI** to auto-populate the fields.
4. Review and edit the information: first name, last name, job title, profile overview, key responsibilities, schedule meeting URL, previous positions, interests, and more.
5. Repeat for each identity you plan to use.

![](https://res.cloudinary.com/enginy/image/upload/v1771440085/helpcenter/ai-playbook-8.png)

**Tip:** The more accurate and detailed the information in your AI Playbook, the better the AI will perform across variables, campaigns, and automated interactions.

**Note:** The AI Playbook also contains tabs for AI Variables, AI Campaigns, and AI Conversation Tags. These are covered in the Campaign Building Guide as they are used when creating campaigns.

---

# Understand Credits and Limits
Credits are the unit of consumption in Enginy. Every action you perform on contacts — scraping data, enriching contact details, running AI variables — costs a specific number of credits. Your subscription plan determines how many credits you receive each month.

Access the Credits section by clicking the **View Usage** button in the bottom-left panel.

![](https://res.cloudinary.com/enginy/image/upload/v1771440107/helpcenter/credits-1.png)

## What Consumes Credits
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Action</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Credit Cost</b></p></td></tr><tr><td><p class="no-margin"><b>Extract company or contact data (scraping)</b></p></td><td><p class="no-margin">1 credit/result</p></td></tr><tr><td><p class="no-margin"><b>Email enrichment</b></p></td><td><p class="no-margin">5 credits/result</p></td></tr><tr><td><p class="no-margin"><b>Phone enrichment</b></p></td><td><p class="no-margin">40 credits/result</p></td></tr><tr><td><p class="no-margin"><b>AI Variables</b></p></td><td><p class="no-margin">3 credits/field (varies by model and complexity)</p></td></tr><tr><td><p class="no-margin"><b>Email verification</b></p></td><td><p class="no-margin">1 credit/result</p></td></tr><tr><td><p class="no-margin"><b>Phone verification</b></p></td><td><p class="no-margin">3 credits/result</p></td></tr><tr><td><p class="no-margin"><b>Google Maps / TheirStack / Job Posting data</b></p></td><td><p class="no-margin">1 credit/result</p></td></tr><tr><td><p class="no-margin"><b>Crunchbase enrichment</b></p></td><td><p class="no-margin">7 credits/result</p></td></tr></tbody></table>

**Note:** "No data found" results are not billed.

Conversations (outbound emails and LinkedIn messages) are determined by your identity's sending capacity and are not capped beyond that capacity.

## Plans Overview
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Feature</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Basic</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Smart</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Business</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Enterprise</b></p></td></tr><tr><td><p class="no-margin"><b>Monthly price</b></p></td><td><p class="no-margin">599 EUR</p></td><td><p class="no-margin">799 EUR</p></td><td><p class="no-margin">1,199 EUR</p></td><td><p class="no-margin">Custom</p></td></tr><tr><td><p class="no-margin"><b>Credits/month</b></p></td><td><p class="no-margin">5,000</p></td><td><p class="no-margin">10,000</p></td><td><p class="no-margin">32,000</p></td><td><p class="no-margin">Custom</p></td></tr><tr><td><p class="no-margin"><b>Contacts/month</b></p></td><td><p class="no-margin">Up to 500</p></td><td><p class="no-margin">Up to 1,000</p></td><td><p class="no-margin">Up to 2,000</p></td><td><p class="no-margin">Custom</p></td></tr><tr><td><p class="no-margin"><b>Identities included</b></p></td><td><p class="no-margin">1</p></td><td><p class="no-margin">2</p></td><td><p class="no-margin">4</p></td><td><p class="no-margin">Custom</p></td></tr></tbody></table>

You can purchase additional credits and identities directly from the **Plan** tab in the Credits section, or contact your Account Manager.

## Renewal Policy
Credits are automatically renewed on the 1st of each month. As a general rule, unused credits do not roll over. Plan your usage accordingly.

**Tip:** Use the built-in **Credit Calculator** in the **Plan & Credits** tab to estimate how many credits you need based on your expected monthly actions. For the full plan comparison, ROI calculator, and credit usage analytics, see the **Credits** article.

---

# Review General Settings
The Settings section is the control panel for your workspace. Access it by clicking **Settings** in the bottom-left corner.

## Company Identity and Preferences
Navigate to **Settings > General** to configure:

- **Company logo and display name** — Define how your organization appears in the platform.
- **Preferred language** — Select your language for platform communications.
- **Beta Program** — Toggle to get early access to new features (may be unstable).
- **Contact hygiene** — Enable automatic deletion of contacts without an associated company, export contacts where email domain does not match company domain, or delete non-verified emails.

![](https://res.cloudinary.com/enginy/image/upload/v1771440151/helpcenter/settings-3.png)

**Warning:** Before activating automatic deletion options, ensure your team understands the impact. These changes are permanent and cannot be undone. Contacts imported via CSV are not affected by the automatic deletion rule.

## Security
Navigate to **Settings > Security** to:

- **Change your password** (minimum 12 characters).
- **Enable Two-Factor Authentication (2FA)** for added security.

**Tip:** If your team handles sensitive data, 2FA should be standard practice. Each user must enable it individually from their own account.

## Team Management
Navigate to **Settings > Team** to manage your workspace users. This tab is visible only to users with the **Admin** role.

From here you can:

1. **View team capacity** — The counter at the top (e.g., Team 10/20) shows active users vs. your plan's license limit.
2. **Invite users** — Click **Invite User**, enter their email, and submit. They will receive a temporary password.
3. **Assign roles** — Choose between **User** (standard access) and **Admin** (full access including settings and billing).
4. **Edit permissions** — Click the gear icon next to any user to configure granular permissions across three tabs:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Permission Tab</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Controls</b></p></td></tr><tr><td><p class="no-margin"><b>Lists</b></p></td><td><p class="no-margin">List visibility, delete/edit/import/export access, activity access.</p></td></tr><tr><td><p class="no-margin"><b>Campaigns</b></p></td><td><p class="no-margin">Campaign creation, identities access (all or specific).</p></td></tr><tr><td><p class="no-margin"><b>General Settings</b></p></td><td><p class="no-margin">Account configuration access, credits usage level.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440152/helpcenter/settings-7.png)

**Note:** Permission changes take effect immediately after clicking Save Changes. There is no automatic undo. For the full permissions reference, see the **Settings** article.

---

# Next Steps
You have completed your initial configuration. Your workspace now has identities connected, your CRM linked (if applicable), a blocklist in place, and the AI Playbook filled in.

Now you can start building your first list of prospects. Continue to the **List Building Guide** to learn how to find, import, and enrich companies and contacts.

---

# FAQs
### Q1: What is the difference between a User and an Identity?
A User is a person with login access to the Enginy platform. An Identity is a LinkedIn profile and/or email address used to send prospecting messages through campaigns. A single User can manage multiple Identities, and each Identity can have multiple email addresses connected.

### Q2: Can I connect more than one CRM at the same time?
No. Enginy supports only one active CRM integration at a time. To switch to a different CRM, disable the current one first from the **Enabled** tab in Integrations, then enable and configure the new one.

### Q3: Do I need a CRM to use Enginy?
No. Enginy works without a CRM. However, if you do not have a CRM connected, you should create a blocklist to prevent reaching out to existing customers, competitors, or current pipeline.

### Q4: What happens if I skip the AI Playbook setup?
The AI will still function, but with less context about your business. This means lower-quality message generation, no ICP-based scoring for contacts and companies, no ICP Quick Filter for LinkedIn searches, and less accurate AI conversation handling. Filling in the AI Playbook is strongly recommended.

### Q5: Do unused credits roll over to the next month?
As a general rule, unused credits do not carry over. Your credit balance resets on the 1st of each month. There may be occasional exceptions depending on your specific agreement.

### Q6: Can someone without an Enginy account connect their identity?
Yes. Use the **Share (Generate Link)** option when adding a new identity. This generates a temporary link (valid 24 hours, single use) that you can share with anyone. They can open it in their browser and connect their LinkedIn or fill in their details without needing platform access.
