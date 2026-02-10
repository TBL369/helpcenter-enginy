# Integrations

Connect your existing tech stack to Enginy so you can synchronize data, enrich contacts, automate exports, and streamline team communication — all from a single hub.

---

## Table of Contents

- [Overview](#overview)
  - [All Tab](#all-tab)
  - [Enabled Tab](#enabled-tab)
  - [Disabled Tab](#disabled-tab)
- [Available Integrations](#available-integrations)
  - [CRM](#crm)
  - [Data Enrichment](#data-enrichment)
  - [AI Enrichment](#ai-enrichment)
  - [Import Sources](#import-sources)
  - [Communication](#communication)
- [Configure Your CRM](#configure-your-crm)
  - [Step 1: Input / Sync Mapping](#step-1-input--sync-mapping)
  - [Step 2: Export Mapping](#step-2-export-mapping)
  - [Step 3: Campaign Mapping (Optional)](#step-3-campaign-mapping-optional)
  - [Step 4: User Mapping](#step-4-user-mapping)
  - [Save Your Configuration](#save-your-configuration)
- [Troubleshooting](#troubleshooting)
- [FAQs](#faqs)

---

## Overview

The Integrations page is organized into three tabs that give you a clear view of every available connection and its current status.

### All Tab

The **All** tab displays every integration Enginy supports, grouped by category (CRM, Data Enrichment, AI Enrichment, Import Sources, and Communication). Use this tab to browse, enable, or configure any integration.

### Enabled Tab

The **Enabled** tab shows only the integrations you have currently turned on. This is a quick way to audit your active connections at a glance.

### Disabled Tab

The **Disabled** tab shows all integrations that are not yet enabled. It is a useful starting point when you want to expand your connected tool set.

> **Important:** You can only have **one CRM integration** active at a time. If you want to enable a new CRM, you must first disable the currently active one.

---

## Available Integrations

### CRM

Connect a CRM to synchronize and export contacts and companies between Enginy and your CRM of choice.

| Platform | Description |
|---|---|
| HubSpot | Full-featured CRM with marketing, sales, and service hubs. |
| Dynamics | Microsoft Dynamics 365 CRM. |
| Pipedrive | Sales-focused CRM built around pipeline management. |
| Salesforce | Enterprise CRM platform. |
| TribeCRM | CRM designed for relationship-driven sales teams. |
| Zoho | CRM suite with sales automation and analytics. |

> **Note:** Only one CRM can be active at a time. See [Configure Your CRM](#configure-your-crm) for the full setup guide.

### Data Enrichment

Plug in your data-enrichment tools to optimize outreach, verify data, and qualify leads.

| Tool | What It Does |
|---|---|
| Apollo | Lead enrichment, email discovery, and engagement tracking to optimize outreach. |
| Cognism | Lead generation platform with global databases to identify and connect with prospects. |
| Datagma | AI-based platform to enrich business insights and help qualify leads effectively. |
| Dropcontact | Updates, enriches, and verifies contact and company data directly within CRMs. |
| Hunter | Finds and verifies professional email addresses for B2B outreach campaigns. |
| Kaspr | Retrieves contact data (emails and phone numbers) from LinkedIn for prospecting. |
| Lusha | Enriches contact data with verified emails, direct dials, and company details. |
| ZoomInfo | Business intelligence tool that offers comprehensive databases to find and qualify leads. |
| Proxycurl | Provides APIs for detailed contact and company profile enrichment. |

### AI Enrichment

| Tool | What It Does |
|---|---|
| OpenAI | If you have your own OpenAI subscription, connect it here to consume your own credits when generating AI variable outputs instead of using Enginy's built-in credits. |

> **Tip:** If you do not have a personal OpenAI account, Enginy provides its own credits for AI variable outputs automatically. No additional setup is required.

### Import Sources

| Tool | What It Does |
|---|---|
| TheirStack | Aggregates and imports company data from multiple platforms. You can connect your own TheirStack account. If you do not have one, Enginy's subscription is used and credits are deducted from your plan when importing companies. |

### Communication

| Tool | What It Does |
|---|---|
| Slack | Connect Slack to enable team communications and workflow notifications from Enginy. |

---

## Configure Your CRM

To set up your CRM integration:

1. Go to **Integrations** and open the **All** tab (or the **Disabled** tab).
2. Locate the CRM card you want to connect (for example, HubSpot).
3. Enable the integration using the **toggle switch** on the card.
4. Click the **Configure** button on the CRM card.

A floating setup window opens with four sequential steps.

---

### Step 1: Input / Sync Mapping

This step defines how Enginy matches contacts and companies with your CRM records to prevent duplicates and ensure data integrity. A "sync" means Enginy compares its records against CRM records using the identifiers you configure here.

#### Contact Identifier

Choose how Enginy determines whether a contact already exists in your CRM.

| Option | Matching Logic |
|---|---|
| **First name + Last name + Company name** | A contact matches when all three fields are the same in both Enginy and the CRM. |
| **LinkedIn profile URL OR First name + Last name + Company name** | A contact matches if the LinkedIn profile URL is the same **or** all three name/company fields match. |
| **Custom Mapping** | Opens a pop-up where you define custom conditions using AND/OR logic (for example, match by *First Name* AND *Last Name*, OR by *Professional Email*). |

#### Company Identifier

Choose how Enginy determines whether a company already exists in your CRM.

| Option | Matching Logic |
|---|---|
| **Domain** | Matches on the company domain (e.g., `enginy.ai`). You can also check the box **Include any domain extension** to treat `.com`, `.es`, `.org`, etc. as equivalent. |
| **Domain or Company Name** | Matches if either the domain or the company name is the same. |
| **Custom Mapping** | Opens a pop-up where you define custom conditions (for example, match by *Domain* OR *Company LinkedIn URL*). |

---

### Step 2: Export Mapping

This step configures which Enginy fields map to which CRM fields when exporting data. The setup is split into two tabs — **Contacts** and **Companies** — and the mapping configuration works the same way in both.

#### Field Types

| Field Type | Description |
|---|---|
| **Enginy Fields** | Standard fields from your contact or company lists (e.g., Phone Number, Job Title). Click the **+** icon to add a new mapping: select the Enginy field first, then select the corresponding CRM field. To the right of each mapping, check the **Overwrite** checkbox if you want new data to replace existing values in the CRM. |
| **Fixed Fields** | Fields that always export with the same static value. For example, create a CRM field called "Source" and set its fixed value to "Enginy" so every exported record is tagged with its origin. |
| **Export Fields** | Fields whose value you configure specifically at the time of export. |
| **Engagement Fields** | Fields that are populated when an Activity is created in the CRM (for example, an email-sent event or a call log). |

> **Warning:** Do not map a Company field in the **Contacts** tab, or a Contact field in the **Companies** tab. Doing so may cause export errors.

#### Association Type

The **Association Type** setting controls the relationship between a contact and a company inside the CRM.

| Option | Behavior |
|---|---|
| Add as additional association | Adds the association without changing existing ones. |
| Add association as Primary | Sets the new association as the primary relationship. |
| Associate as Primary and remove previous associations | Sets the new association as primary **and** deletes all previous associations. |

> **Warning:** The "Associate as Primary and remove previous associations" option is **not recommended** unless you are certain you want to erase all prior associations for the record. Using it can result in data loss if historical relationships exist.

#### Exporting Associated Companies

When exporting a contact, you can automatically generate the association between the contact and its company. To do this:

1. Start the export process for the contact.
2. Enable the **Export associated companies** switch that appears during export.

When activated, the company record linked to the contact is exported (or updated) alongside the contact, and the CRM association is created automatically.

---

### Step 3: Campaign Mapping (Optional)

This step lets you sync campaign-specific properties to your CRM. These are not standard list fields; they are properties tied to campaign activity.

| Property | What It Contains | Example Value |
|---|---|---|
| **Campaign Sequence Details** | The steps included in the campaign. | `1st Email, 2nd Email, LinkedIn Connection Request, 1st LinkedIn` |
| **Campaign Engagement Status** | The current status of each lead in the campaign. | `Added to Campaign`, `Message Sent (1/3) - Email`, `Message Replied (3/3) - LinkedIn` |
| **Campaign Opens** | Total number of times a lead has opened one or more emails in the campaign. | `3` |
| **Campaign Clicks** | Total number of times a lead has clicked a link in campaign emails. | `1` |
| **Campaign Open Analysis** | Indicates per-message whether the contact opened that specific email. | `No`, `Yes (1st Message)`, `Yes (2nd Message)` |
| **Campaign Click Analysis** | Indicates per-message whether the contact clicked a link in that specific email. | `No`, `Yes (1st Message)` |
| **Campaign Reply Analysis** | Indicates per-message whether the lead replied to each automated message. | `No`, `Yes (1st Message)`, `Yes (2nd Message)` |
| **Sequence Status** | The overall status of the campaign sequence for the lead. | `Not Started`, `Ongoing`, `Replied`, `Finished` |

---

### Step 4: User Mapping

This final step defines the associations between Enginy users/identities and CRM users so that exports and activity logs are attributed to the correct people.

#### Identities Mapping

An **Identity** in Enginy is the profile that runs a campaign (for example, a LinkedIn profile or an email sender). Identities Mapping links each Enginy identity to a CRM user.

When a campaign — which is always linked to an identity — performs a sync or export, the CRM activity log shows the associated CRM user as the one who executed the action.

#### Users Mapping

**Users Mapping** links an Enginy user account to a CRM user. This sets the default owner for any record exported by that user.

If CRM users have different permission levels, this association respects those limits. A record exported by an Enginy user is owned by the mapped CRM user and is governed by that CRM user's permissions.

---

### Save Your Configuration

After completing all four steps, click **Update** to save your CRM configuration.

---

## Troubleshooting

| Symptom / Error | Cause | Resolution |
|---|---|---|
| Export fails with field-mapping errors | A Company field is mapped in the **Contacts** tab (or vice versa). | Open **Step 2: Export Mapping**, verify that each tab only contains fields belonging to its own object type, and remove any misplaced mappings. |
| Duplicate records appear in the CRM after export | The identifier configured in **Step 1** does not uniquely match existing records. | Review and tighten the Contact or Company Identifier. Consider using the **LinkedIn profile URL** option for contacts or enabling **Include any domain extension** for companies. |
| Cannot enable a second CRM | Enginy allows only one active CRM at a time. | Go to the **Enabled** tab, disable the current CRM, then enable and configure the new one. |
| CRM activity log shows the wrong user | Identities or Users Mapping is not configured correctly in **Step 4**. | Open **Step 4: User Mapping** and verify that each Enginy identity and user is linked to the correct CRM user. |

---

## FAQs

**Q1: Can I connect more than one CRM at the same time?**
No. Enginy supports only one active CRM integration at a time. If you want to switch to a different CRM, disable the current one first, then enable and configure the new one.

**Q2: What happens if I do not configure Export Mapping — will my data still sync?**
Step 1 (Input / Sync Mapping) controls how records are matched, but without Step 2 (Export Mapping) Enginy will not know which fields to push to your CRM. You must configure at least the essential field mappings before exporting.

**Q3: I do not have my own OpenAI or TheirStack account. Can I still use those features?**
Yes. For **OpenAI**, Enginy provides its own credits for AI variable outputs if you do not connect a personal subscription. For **TheirStack**, Enginy's subscription is used by default and credits are deducted from your plan when importing companies.

**Q4: What does the "Overwrite" checkbox do in Export Mapping?**
When checked, the value in Enginy replaces whatever value currently exists in the corresponding CRM field during export. When unchecked, the existing CRM value is preserved and only empty fields are populated.

**Q5: Why should I avoid the "Associate as Primary and remove previous associations" option?**
This option deletes all existing associations for the record before setting the new one as primary. If you have historical relationships or multiple valid associations in your CRM, using this option can result in data loss. Use it only when you are certain the new association should be the sole relationship.
