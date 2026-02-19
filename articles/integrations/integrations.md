# Integrations
Connect your existing tech stack to Enginy so you can synchronize data, enrich contacts, automate exports, and streamline team communication — all from a single hub.

---

# Table of Contents
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
  - [Step 1: Sync Configuration](#step-1-sync-configuration)
    - [Integration User](#integration-user)
    - [Contact Identifier](#contact-identifier)
    - [Company Identifier](#company-identifier)
    - [General](#general)
  - [Step 2: Field Mapping](#step-2-field-mapping)
    - [Field Types](#field-types)
    - [Mapping Options](#mapping-options)
    - [Association Type](#association-type)
  - [Step 3: Campaign Mapping (Optional)](#step-3-campaign-mapping-optional)
    - [Sequence](#sequence)
    - [Email](#email)
    - [General](#general)
    - [Conversation Tags](#conversation-tags)
  - [Step 4: User Mapping](#step-4-user-mapping)
    - [Identities Mapping](#identities-mapping)
    - [Users Mapping](#users-mapping)
    - [Default CRM owner](#default-crm-owner)
  - [Save Your Configuration](#save-your-configuration)
- [CRM Cards (HubSpot)](#crm-cards-hubspot)
  - [Where to Find the CRM Card](#where-to-find-the-crm-card)
  - [Why CRM Cards Are Useful](#why-crm-cards-are-useful)
  - [Key Sections of the Card](#key-sections-of-the-card)
  - [How to Use CRM Cards](#how-to-use-crm-cards)
    - [When the Record Does Not Exist in Enginy](#when-the-record-does-not-exist-in-enginy)
    - [Enrich a Contact](#enrich-a-contact)
    - [Check Activity](#check-activity)
    - [Add to Campaigns](#add-to-campaigns)
    - [Add to Lists](#add-to-lists)
    - [Common SDR Workflows](#common-sdr-workflows)
- [Troubleshooting](#troubleshooting)
---

# Overview
The Integrations page is organized into three tabs that give you a clear view of every available connection and its current status.

![](https://res.cloudinary.com/enginy/image/upload/v1771440119/helpcenter/integrations-1.png)

## All Tab

The **All** tab displays every integration Enginy supports, grouped by category (CRM, Data Enrichment, AI Enrichment, Import Sources, and Communication). Use this tab to browse, enable, or configure any integration.

**Note:** To enable any integration, please contact your Account Manager if it isn’t available to activate in your workspace in order to enable its API.

## Enabled Tab

The **Enabled** tab shows only the integrations you have currently turned on. This is a quick way to audit your active connections at a glance.

## Disabled Tab

The **Disabled** tab shows all integrations that are not yet enabled. It is a useful starting point when you want to expand your connected tool set.

**Important:** You can only have **one CRM integration** active at a time. If you want to enable a new CRM, you must first disable the currently active one.

---

# Available Integrations
## CRM

Connect a CRM to synchronize and export contacts and companies between Enginy and your CRM of choice.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Platform</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>HubSpot</b></p></td><td><p class="no-margin">Full-featured CRM with marketing, sales, and service hubs.</p></td></tr><tr><td><p class="no-margin"><b>Dynamics</b></p></td><td><p class="no-margin">Microsoft Dynamics 365 CRM.</p></td></tr><tr><td><p class="no-margin"><b>Pipedrive</b></p></td><td><p class="no-margin">Sales-focused CRM built around pipeline management.</p></td></tr><tr><td><p class="no-margin"><b>Salesforce</b></p></td><td><p class="no-margin">Enterprise CRM platform.</p></td></tr><tr><td><p class="no-margin"><b>TribeCRM</b></p></td><td><p class="no-margin">CRM designed for relationship-driven sales teams.</p></td></tr><tr><td><p class="no-margin"><b>Zoho</b></p></td><td><p class="no-margin">CRM suite with sales automation and analytics.</p></td></tr><tr><td><p class="no-margin"><b>Custom CRM (Beta)</b></p></td><td><p class="no-margin">Connect your own CRM using API key authentication.</p></td></tr></tbody></table>

**Note:** All CRM integrations require an initial setup configuration, as explained in this article. It only varies slightly for *Pipedrive*: in step 2 of the configuration, you can also map Leads.

## Data Enrichment

Plug in your data-enrichment tools to optimize outreach, verify data, and qualify leads.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Tool</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">What It Does</p></td></tr><tr><td><p class="no-margin"><b>Apollo</b></p></td><td><p class="no-margin">Lead enrichment, email discovery, and engagement tracking to optimize outreach.</p></td></tr><tr><td><p class="no-margin"><b>Cognism</b></p></td><td><p class="no-margin">Lead generation platform with global databases to identify and connect with prospects.</p></td></tr><tr><td><p class="no-margin"><b>Datagma</b></p></td><td><p class="no-margin">AI-based platform to enrich business insights and help qualify leads effectively.</p></td></tr><tr><td><p class="no-margin"><b>Dropcontact</b></p></td><td><p class="no-margin">Updates, enriches, and verifies contact and company data directly within CRMs.</p></td></tr><tr><td><p class="no-margin"><b>Hunter</b></p></td><td><p class="no-margin">Finds and verifies professional email addresses for B2B outreach campaigns.</p></td></tr><tr><td><p class="no-margin"><b>Kaspr</b></p></td><td><p class="no-margin">Retrieves contact data (emails and phone numbers) from LinkedIn for prospecting.</p></td></tr><tr><td><p class="no-margin"><b>Lusha</b></p></td><td><p class="no-margin">Enriches contact data with verified emails, direct dials, and company details.</p></td></tr><tr><td><p class="no-margin"><b>ZoomInfo</b></p></td><td><p class="no-margin">Business intelligence tool that offers comprehensive databases to find and qualify leads.</p></td></tr></tbody></table>

**Note:** Each of these integrations can be activated by simply pasting the API key.

e.g.:

![](https://res.cloudinary.com/enginy/image/upload/v1771440124/helpcenter/integrations-2.png)

## AI Enrichment

If you have an API-enabled Enterprise account with any of these AI providers, you can connect it to Enginy. This way, AI variables will use **your provider tokens** instead of **Enginy Credits** when generating data.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Tool</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">What It Does</p></td></tr><tr><td><p class="no-margin"><b>Anthropic</b></p></td><td><p class="no-margin">Powers Claude models for safe, helpful AI assistance.</p></td></tr><tr><td><p class="no-margin"><b>Google AI</b></p></td><td><p class="no-margin">Powers Gemini models for multimodal AI tasks.</p></td></tr><tr><td><p class="no-margin"><b>OpenAI</b></p></td><td><p class="no-margin">Powers GPT models for text generation, reasoning, and code tasks.</p></td></tr><tr><td><p class="no-margin"><b>xAI</b></p></td><td><p class="no-margin">Powers Grok models with real-time knowledge and unique personality.</p></td></tr></tbody></table>

**Note:** If you don’t have an API key from any of these providers, Enginy can provide the AI service for you — usage will be charged in **Enginy Credits**.

## Import Sources
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Tool</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">What It Does</p></td></tr><tr><td><p class="no-margin">TheirStack</p></td><td><p class="no-margin">Aggregates and imports company data from multiple platforms. You can connect your own TheirStack account. If you do not have one, Enginy's subscription is used and credits are deducted from your account when importing companies.</p></td></tr></tbody></table>

TheirStack integration can be activated by simply pasting the **API key**.

![](https://res.cloudinary.com/enginy/image/upload/v1771440124/helpcenter/integrations-3.png)

## Communication
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Tool</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">What It Does</p></td></tr><tr><td><p class="no-margin">Slack</p></td><td><p class="no-margin">Connect Slack to enable team communications and workflow notifications from Enginy.</p></td></tr></tbody></table>

Slack integration can be activated by connecting via Oauth.

![](https://res.cloudinary.com/enginy/image/upload/v1771440124/helpcenter/integrations-4.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440124/helpcenter/integrations-5.png)

---

# Configure Your CRM
To set up your CRM integration:
1.  Go to **Integrations** and open the **All** tab (or the **Disabled** tab).
2.  Locate the CRM card you want to connect (for example, HubSpot).
3.  Enable the integration using the **toggle switch** on the card.
4.  Click the **Configure** button on the CRM card.
A floating setup window opens with four sequential steps.

---

## Step 1: Sync Configuration

This step defines how Enginy matches contacts and companies with your CRM records to prevent duplicates and ensure data integrity. A sync means Enginy compares its records against CRM records using the identifiers you configure here.

![](https://res.cloudinary.com/enginy/image/upload/v1771440124/helpcenter/integrations-6.png)

### Integration User

It shows whose email address is the API integration user.

### Contact Identifier

Choose how Enginy determines whether a contact already exists in your CRM.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Option</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Matching Logic</p></td></tr><tr><td><p class="no-margin"><b>First name + Last name + Company name</b></p></td><td><p class="no-margin">A contact matches when all three fields are the same in both Enginy and the CRM.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn profile URL OR First name + Last name + Company name</b></p></td><td><p class="no-margin">A contact matches if the LinkedIn profile URL is the same <b>or</b> all three name/company fields match.</p></td></tr><tr><td><p class="no-margin"><b>Custom Mapping</b></p></td><td><p class="no-margin">Opens a pop-up where you define custom conditions using AND/OR logic (for example, match by <i>First Name</i> AND <i>Last Name</i>, OR by <i>Professional Email</i>).</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440125/helpcenter/integrations-7.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440125/helpcenter/integrations-8.png)

### Company Identifier

Choose how Enginy determines whether a company already exists in your CRM.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Option</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Matching Logic</p></td></tr><tr><td><p class="no-margin"><b>Domain</b></p></td><td><p class="no-margin">Matches on the company domain (e.g., <code>enginy.ai</code>). You can also check the box <b>Include any domain extension</b> to treat <code>.com</code>, <code>.es</code>, <code>.org</code>, etc. as equivalent.</p></td></tr><tr><td><p class="no-margin"><b>Domain or Company Name</b></p></td><td><p class="no-margin">Matches if either the domain or the company name is the same.</p></td></tr><tr><td><p class="no-margin"><b>Custom Mapping</b></p></td><td><p class="no-margin">Opens a pop-up where you define custom conditions (for example, match by <i>Domain</i> OR <i>Company LinkedIn URL</i>).</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440125/helpcenter/integrations-9.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440122/helpcenter/integrations-10.png)

### General

Under **General**, you’ll find two toggles that control how associations are handled during export:

-   **When exporting contacts, associate them with companies in HubSpot:** If enabled, Enginy will automatically link exported contacts to their corresponding companies in HubSpot.
    
-   **When exporting companies, associate them with contacts in HubSpot:** If enabled, Enginy will automatically link exported companies to their related contacts in HubSpot.
    

![](https://res.cloudinary.com/enginy/image/upload/v1771440122/helpcenter/integrations-11.png)

---

## Step 2: Field Mapping

This step configures which Enginy fields map to which CRM fields when exporting data. The setup is split into two tabs — **Contacts** and **Companies** — and the mapping configuration works the same way in both.

### Field Types
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field Type</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Enginy Fields</b></p></td><td><p class="no-margin">Standard fields from your contact or company lists (e.g., Phone Number, Job Title). Click the <b>Add field</b> button to add a new mapping: select the Enginy field first, then select the corresponding CRM field.</p></td></tr><tr><td><p class="no-margin"><b>Fixed Value Fields</b></p></td><td><p class="no-margin">Fields that always export with the same static value. For example, create a CRM field called "Source" and set its fixed value to "Enginy" so every exported record is tagged with its origin. Click the <b>Add field</b> button to add a new mapping: select the Enginy field first, then select the corresponding CRM field.</p></td></tr><tr><td><p class="no-margin"><b>Manual Export Fields</b></p></td><td><p class="no-margin">Fields whose value you define specifically at the time of export. Click the <b>Add field</b> button to add a new mapping: select the CRM field which will be asked to be set when exporting. As many as you want.</p></td></tr><tr><td><p class="no-margin"><b>Engagement Fields</b></p></td><td><p class="no-margin">Fields that are populated when an Activity is created in the CRM (for example, an email-sent event, a LinkedIn message, or a Task log). Just <b>select</b> the HubSpot field and then set the Value to export. Only one can be set.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440121/helpcenter/integrations-12.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440121/helpcenter/integrations-13.png)

**Warning:** Don’t map a Company field in the Contacts tab (or a Contact field in the Companies tab). This **can cause export errors**. If you must map the same field in both tabs, make sure it’s mapped the same in both places.

In each CRM field mapping dropdown, you’ll see small status icons indicating whether the mapping is **supported**, **not supported**, or **supported with limitations / a workaround**.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc;"><p class="no-margin">Icon</p></td><td style="background-color: #d7efdc;"><p class="no-margin">Meaning</p></td></tr><tr><td><p class="no-margin"><b>Blue check</b></p></td><td><p class="no-margin">The mapping is okay, has no potential problems.</p></td></tr><tr><td><p class="no-margin"><b>Yellow exclamation</b></p></td><td><p class="no-margin">The field types in Enginy and the CRM may be incompatible (e.g., an Enginy Text field mapped to a CRM Enumeration field).</p></td></tr><tr><td><p class="no-margin"><b>Red X</b></p></td><td><p class="no-margin">In these cases, the mapping can’t be applied because the types don’t match — or because the CRM field is read-only and can’t be updated (e.g., an Enginy Text field mapped to a CRM Number field, or a read-only CRM field).</p></td></tr></tbody></table>

**Note:** Some yellow warning icons appear when the selected CRM field is an enumeration (dropdown) field. In this case, your Enginy text field can still export successfully as long as the value you send matches one of the allowed dropdown options (but internal names, not label names).

-   **Workaround:** Create an **AI Variable** with output type = **One off,** and define the output tag options to exactly match the CRM dropdown values — using the **internal option names** (not the labels). This ensures the exported value is accepted and the export completes successfully. Additional considerations:  
    ​
    
    -   If is a Fixed value field or an Engagement field just input the exact internal name in the mapped Value to export in the Field mapping integration's setting.
        
    -   If is a Manual export field just input the exact internal name at the moment of the export.
        

### Mapping Options

Here are the available mapping types between Enginy and your CRM fields:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Option</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Behaviour</p></td></tr><tr><td><p class="no-margin"><b>Bi-directional sync</b></p></td><td><p class="no-margin">Changes sync both ways automatically.</p></td></tr><tr><td><p class="no-margin"><b>[CRM] overwrites Enginy</b></p></td><td><p class="no-margin">Changes in [CRM] automatically overwrite the corresponding fields in Enginy.</p></td></tr><tr><td><p class="no-margin"><b>Enginy overwrites [CRM]</b></p></td><td><p class="no-margin">Changes in Enginy automatically overwrite the corresponding fields in [CRM].</p></td></tr><tr><td><p class="no-margin"><b>Sync if value is empty</b></p></td><td><p class="no-margin">Data only syncs automatically when the destination field is empty, either in Enginy or [CRM], preventing overwriting existing values.</p></td></tr><tr><td><p class="no-margin"><b>Sync deactivated</b></p></td><td><p class="no-margin">No automatic sync. You’ll need to manually export or run a sync to apply changes.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440121/helpcenter/integrations-14.png)

### Association Type

The **Association Type** setting controls the relationship between a contact and a company inside the CRM.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Option</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Behavior</p></td></tr><tr><td><p class="no-margin"><b>Add as additional association</b></p></td><td><p class="no-margin">Adds the association without changing existing ones.</p></td></tr><tr><td><p class="no-margin"><b>Add association as Primary</b></p></td><td><p class="no-margin">Sets the new association as the primary relationship.</p></td></tr><tr><td><p class="no-margin"><b>Associate as Primary and remove previous associations</b></p></td><td><p class="no-margin">Sets the new association as primary <b>and</b> deletes all previous associations.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440123/helpcenter/integrations-15.png)

**Warning:** The "Associate as Primary and remove previous associations" option is **not recommended** unless you are certain you want to erase all prior associations for the record. Using it can result in data loss if historical relationships exist.

When exporting manually a contact or company, you can choose the **Association Type** in the export modal. The integration settings define the default association type, but you can override it for each individual manual export in the export modal.

You can also: **overwrite existing values** for any field mapping (in either the **Contacts** or **Companies** tab), overwrite CRM owner (who register the export in CRM), optionally set **Manual export field values**, and enable **Export associated companies** (or **Export associated contacts** when manually exporting a company).

![](https://res.cloudinary.com/enginy/image/upload/v1771440123/helpcenter/integrations-16.png)

---

## Step 3: Campaign Mapping (Optional)

This step lets you sync campaign-specific properties to your CRM. These are not standard list fields; they are properties tied to campaign activity.

### Sequence

Properties related to the campaign sequence:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Property</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">What It Contains</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Example Value</p></td></tr><tr><td><p class="no-margin"><b>Campaign Sequence Details</b></p></td><td><p class="no-margin">The steps included in the campaign.</p></td><td><p class="no-margin"><code>1st Email, 2nd Email, LinkedIn Connection Request, 1st LinkedIn</code></p></td></tr><tr><td><p class="no-margin"><b>Campaign Engagement Status</b></p></td><td><p class="no-margin">The current status of each lead in the campaign.</p></td><td><p class="no-margin"><code>Added to Campaign</code>, <code>Message Sent (1/3) - Email</code>, <code>Message Replied (3/3) - LinkedIn</code></p></td></tr><tr><td><p class="no-margin"><b>Sequence Status</b></p></td><td><p class="no-margin">The overall status of the campaign sequence for the lead.</p></td><td><p class="no-margin"><code>Not Started</code>, <code>Ongoing</code>, <code>Replied</code>, <code>Finished</code></p></td></tr><tr><td><p class="no-margin"><b>Campaign Reply Analysis</b></p></td><td><p class="no-margin">Indicates per-message whether the lead replied to each automated message.</p></td><td><p class="no-margin"><code>No</code>, <code>Yes (1st Message)</code>, <code>Yes (2nd Message)</code></p></td></tr></tbody></table>

### Email

Properties related to the campaign email steps messages:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Property</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">What it Contains</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Example Value</p></td></tr><tr><td><p class="no-margin"><b>Campaign Opens</b></p></td><td><p class="no-margin">Total number of times a lead has opened one or more emails in the campaign.</p></td><td><p class="no-margin"><code>3</code></p></td></tr><tr><td><p class="no-margin"><b>Campaign Clicks</b></p></td><td><p class="no-margin">Total number of times a lead has clicked a link in campaign emails.</p></td><td><p class="no-margin"><code>1</code></p></td></tr><tr><td><p class="no-margin"><b>Campaign Open Analysis</b></p></td><td><p class="no-margin">Indicates per-message whether the contact opened that specific email.</p></td><td><p class="no-margin"><code>No</code>, <code>Yes (1st Message)</code>, <code>Yes (2nd Message)</code></p></td></tr><tr><td><p class="no-margin"><b>Campaign Click Analysis</b></p></td><td><p class="no-margin">Indicates per-message whether the contact clicked a link in that specific email.</p></td><td><p class="no-margin"><code>No</code>, <code>Yes (1st Message)</code></p></td></tr></tbody></table>

### General

Properties under general aspects of campaigns:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc;"><p class="no-margin">Property</p></td><td style="background-color: #d7efdc;"><p class="no-margin">What it Contains</p></td><td style="background-color: #d7efdc;"><p class="no-margin">Example Value</p></td></tr><tr><td><p class="no-margin"><b>Campaign</b></p></td><td><p class="no-margin">All Campaign names the contact has been added to.</p></td><td><p class="no-margin"><code>UK Hiring Campaign, Italian SDR Campaign, Jordi's Campaign</code></p></td></tr><tr><td><p class="no-margin"><b>Senders</b></p></td><td><p class="no-margin">All sender names that have contacted the contact</p></td><td><p class="no-margin"><code>Adham Elman, Giulio Gargano, Jordi Casas</code></p></td></tr><tr><td><p class="no-margin"><b>Activities</b></p></td><td><p class="no-margin">All activities that have occurred with the contact</p></td><td><p class="no-margin"><code>Visit LinkedIn profile, LinkedIn Invitation sent, Contact has accepted invitation, ...</code></p></td></tr></tbody></table>

### Conversation Tags

Properties related to Conversation Tags:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc;"><p class="no-margin">Property</p></td><td style="background-color: #d7efdc;"><p class="no-margin">What it Contains</p></td><td style="background-color: #d7efdc;"><p class="no-margin">Example Value</p></td></tr><tr><td><p class="no-margin"><b>Conversation Tags</b></p></td><td><p class="no-margin">All conversation tags applied to the contact (comma-separated).</p></td><td><p class="no-margin"><code>Contacted, Positive, Meeting Booked</code></p></td></tr><tr><td><p class="no-margin"><b>Conversation Tags Categories</b></p></td><td><p class="no-margin">Categories of conversation tags: POSITIVE, NEUTRAL, NEGATIVE (comma-separated).</p></td><td><p class="no-margin"><code>POSITIVE, POSITIVE, POSITIVE</code></p></td></tr></tbody></table>

---

## Step 4: User Mapping

This final step defines the associations between Enginy users/identities and CRM users so that exports and activity logs are attributed to the correct people.

### Identities Mapping

An **Identity** in Enginy is the profile that runs a campaign (for example, a LinkedIn profile or an email sender). Identities Mapping links each Enginy identity to a CRM user.

When a campaign — which is always linked to an identity — performs a sync or export (Campaign mappings export types), the CRM activity log shows the associated CRM user as the one who executed the action.

![](https://res.cloudinary.com/enginy/image/upload/v1771440123/helpcenter/integrations-17.png)

### Users Mapping

**Users Mapping** links an Enginy user account to a CRM user. This sets the **default owner** for any record exported by that user — even for automatic exports via field mappings, not just manual exports.

If CRM users have different permission levels, this association respects those limits. A record exported by an Enginy user is owned by the mapped CRM user and is governed by that CRM user's permissions.

![](https://res.cloudinary.com/enginy/image/upload/v1771440123/helpcenter/integrations-18.png)

### Default CRM owner

This mapping sets a **default CRM owner** (contact or company owner) for exports performed by an Enginy user who isn’t mapped in User Mapping.

![](https://res.cloudinary.com/enginy/image/upload/v1771440123/helpcenter/integrations-19.png)

---

## Save Your Configuration

After completing all four steps, click **Update** to save your CRM configuration.

---

# CRM Cards (HubSpot)
CRM Cards let you view and manage Enginy data directly inside HubSpot without switching tabs or logging into the Enginy platform. You can enrich data, verify contact info, add contacts to campaigns, and track every action, all from your CRM.

## Where to Find the CRM Card

After installation, you will see a card called **"Enginy Status"** on each **Contact** and **Account** page in HubSpot. It includes the Enginy logo and displays key details pulled directly from your Enginy workspace.

## Why CRM Cards Are Useful

If you are an SDR, CRM Cards help you:

- **Save time** — No need to jump between HubSpot and Enginy.
- **Get better data** — Instantly enrich contacts with verified emails, phone numbers, and LinkedIn info.
- **Track your work** — See what is happening with your enrichment tasks and campaigns in real time.
- **Launch actions faster** — Add contacts to campaigns or lists with just a click.

## Key Sections of the Card

Each CRM Card is divided into four main sections you can expand:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Section</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Description</b></p></td></tr><tr><td><p class="no-margin"><b>Enrichment</b></p></td><td><p class="no-margin">Get missing data like email, phone, and LinkedIn info.</p></td></tr><tr><td><p class="no-margin"><b>Activity</b></p></td><td><p class="no-margin">Track progress of your enrichment and sync actions.</p></td></tr><tr><td><p class="no-margin"><b>Campaigns</b></p></td><td><p class="no-margin">Add or remove the contact from Enginy campaigns.</p></td></tr><tr><td><p class="no-margin"><b>Lists</b></p></td><td><p class="no-margin">Organize your contacts into target lists.</p></td></tr></tbody></table>

You will see these sections when you open a Contact. For Accounts (companies), you will mainly see whether the company exists in Enginy and a button to open it.

## How to Use CRM Cards

### When the Record Does Not Exist in Enginy

If you open a contact that is not in Enginy yet, you will see the message "Record not found in Enginy." Click the **"Create in Enginy"** button to instantly create the record so you can start enriching or adding it to campaigns.

### Enrich a Contact

Expand the **Enrichment** section to access these quick actions:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Action</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>What It Does</b></p></td></tr><tr><td><p class="no-margin"><b>LinkedIn icon</b></p></td><td><p class="no-margin">Scrapes data from the contact's LinkedIn profile.</p></td></tr><tr><td><p class="no-margin"><b>Email icon</b></p></td><td><p class="no-margin">Finds and verifies their email address.</p></td></tr><tr><td><p class="no-margin"><b>Phone icon</b></p></td><td><p class="no-margin">Finds and verifies their phone number.</p></td></tr><tr><td><p class="no-margin"><b>Open in Enginy</b></p></td><td><p class="no-margin">Opens the contact's full profile in the Enginy platform.</p></td></tr></tbody></table>

You will also see the enrichment score, sync status, and verification results.

**Tip:** Click the **refresh icon** next to the email or phone field to re-verify the data at any time.

### Check Activity

The **Activity** section shows all recent actions and their statuses:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Status</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Meaning</b></p></td></tr><tr><td><p class="no-margin"><b>Processing</b></p></td><td><p class="no-margin">The action is currently running.</p></td></tr><tr><td><p class="no-margin"><b>Success</b></p></td><td><p class="no-margin">Completed successfully.</p></td></tr><tr><td><p class="no-margin"><b>Failed</b></p></td><td><p class="no-margin">Something went wrong. Check the details and retry.</p></td></tr></tbody></table>

Use this section to monitor real-time progress — for example, when a LinkedIn scrape is still running or when an email was successfully verified.

### Add to Campaigns

In the **Campaigns** section, you can see all campaigns a contact belongs to, add them to a new campaign, remove them from one, or pause all their active campaigns.

**To add a contact to a campaign:**
1. Click **"Add to Campaign"**.
2. Use the search bar to find the campaign you want.
3. Check the box next to it.
4. Click **Add to Campaign**.

If the contact is already in multiple campaigns, you will see them listed with status tags such as *Active* or *Paused*.

### Add to Lists

Lists help you organize contacts by region, industry, priority, or any other criteria.

**To add a contact to a list:**
1. Expand the **Lists** section.
2. Click **"Add to List"**.
3. Search for and select the lists you want.
4. Click **Add to List**.

You can also remove a contact from any list using the remove icon next to it.

### Common SDR Workflows

**Enrich a new lead:**
1. Open a new contact in HubSpot.
2. Click **Create in Enginy** if the record does not exist yet.
3. Use the icons in the **Enrichment** section to find their email, phone, and LinkedIn data.
4. Check the **Activity** section to track progress.

**Add a contact to a campaign:**
1. Open a contact that already exists in Enginy.
2. Expand the **Campaigns** section.
3. Click **Add to Campaign** and select the appropriate campaign.
4. Confirm the selection.

**Verify contact info:**
1. Expand the **Enrichment** section.
2. Click the refresh icon next to the **Email** or **Phone** field.
3. Wait a few seconds to see the updated verification result.

**Tip:** Always verify contact info before starting outreach — it keeps your campaigns clean and your sender reputation safe. Check the **Activity** section regularly to confirm enrichments and syncs are running smoothly.

---

# Troubleshooting
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Symptom / Error</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Cause</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Resolution</p></td></tr><tr><td><p class="no-margin">Export fails with field-mapping errors</p></td><td><p class="no-margin">A Company field is mapped in the <b>Contacts</b> tab (or vice versa).</p></td><td><p class="no-margin">Open <b>Step 2: Export Mapping</b>, verify that each tab only contains fields belonging to its own object type, and remove any misplaced mappings.</p></td></tr><tr><td><p class="no-margin">Duplicate records appear in the CRM after export</p></td><td><p class="no-margin">The identifier configured in <b>Step 1</b> does not uniquely match existing records.</p></td><td><p class="no-margin">Review and tighten the Contact or Company Identifier. Consider using the <b>LinkedIn profile URL</b> option for contacts or enabling <b>Include any domain extension</b> for companies.</p></td></tr><tr><td><p class="no-margin">Cannot enable a second CRM</p></td><td><p class="no-margin">Enginy allows only one active CRM at a time.</p></td><td><p class="no-margin">Go to the <b>Enabled</b> tab, disable the current CRM, then enable and configure the new one.</p></td></tr><tr><td><p class="no-margin">CRM activity log shows the wrong user</p></td><td><p class="no-margin">Identities or Users Mapping is not configured correctly in <b>Step 4</b>.</p></td><td><p class="no-margin">Open <b>Step 4: User Mapping</b> and verify that each Enginy identity and user is linked to the correct CRM user.</p></td></tr><tr><td><p class="no-margin">CRM Card shows "Record not found in Enginy"</p></td><td><p class="no-margin">The contact or company has not been created in Enginy yet.</p></td><td><p class="no-margin">Click the <b>Create in Enginy</b> button on the CRM Card to create the record.</p></td></tr><tr><td><p class="no-margin">CRM Card enrichment action did not return results</p></td><td><p class="no-margin">The enrichment task failed or is still processing.</p></td><td><p class="no-margin">Open the <b>Activity</b> section on the CRM Card and check the task status. If it shows <b>Failed</b>, retry the action.</p></td></tr><tr><td><p class="no-margin">Campaigns or lists are not visible on the CRM Card</p></td><td><p class="no-margin">The search term does not match, or workspace permissions restrict access.</p></td><td><p class="no-margin">Try searching by the exact campaign or list name. If still missing, ask your Enginy admin to confirm your permissions.</p></td></tr><tr><td><p class="no-margin">CRM Card data appears outdated</p></td><td><p class="no-margin">Recent changes in Enginy or HubSpot have not refreshed on the card.</p></td><td><p class="no-margin">Click the <b>refresh</b> icon on the CRM Card and wait a few seconds for the data to update.</p></td></tr></tbody></table>

---

# FAQs
### Q1: Can I connect more than one CRM at the same time?

No. Enginy supports only one active CRM integration at a time. If you want to switch to a different CRM, disable the current one first, then enable and configure the new one.

### Q2: What happens if I do not configure Export Mapping — will my data still sync?

Step 1 (Sync Configuration) controls how records are matched, but without Step 2 (Field Mapping) Enginy will not know which fields to push to your CRM. Even not which ones to pull from CRM. You must configure at least the essential field mappings before exporting or syncing.

### Q3: I do not have my own AI or TheirStack account. Can I still use those features?

Yes. For **AI**, Enginy provides its own credits for AI variable outputs if you do not connect a personal subscription. For **TheirStack**, Enginy's subscription is used by default and credits are deducted from your plan when importing companies.

### Q4: What does the "Overwrite existing value" checkbox do in a manual Export to CRM?

When checked, the value in Enginy replaces whatever value currently exists in the corresponding CRM field during export. When unchecked, the existing CRM value is preserved and only empty fields are populated.

### Q5: Why should I avoid the "Associate as Primary and remove previous associations" option?

This option deletes all existing associations for the record before setting the new one as primary. If you have historical relationships or multiple valid associations in your CRM, using this option can result in data loss. Use it only when you are certain the new association should be the sole relationship.

### Q6: Are CRM Cards available for CRMs other than HubSpot?

No. CRM Cards are currently available for HubSpot only. If you use a different CRM, you can still manage your Enginy data through the Enginy platform directly.

### Q7: What should I do if a contact does not appear on the CRM Card?

If the CRM Card shows "Record not found in Enginy," click the **Create in Enginy** button to create the record. Once created, you can immediately start enriching the contact, adding it to campaigns, and organizing it into lists.
