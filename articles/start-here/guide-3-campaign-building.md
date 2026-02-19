# Campaign Building

This guide walks you through creating and launching your first outreach campaign in Enginy — from preparing AI-generated messages to monitoring performance and managing replies. By the end, you will have a running multichannel campaign and know how to track its results.

---

# Table of Contents

- [Before You Start](#before-you-start)
- [Prepare AI Variables for Message Generation](#prepare-ai-variables-for-message-generation)
  - [What Are AI Variables](#what-are-ai-variables)
  - [Create an AI Variable](#create-an-ai-variable)
  - [Run AI Variables on Your List](#run-ai-variables-on-your-list)
- [Configure Your AI Campaign Prompt](#configure-your-ai-campaign-prompt)
  - [What AI Campaigns Do](#what-ai-campaigns-do)
  - [Create an AI Campaign Prompt](#create-an-ai-campaign-prompt)
  - [Conversation Handling Modes](#conversation-handling-modes)
- [Create and Launch a Campaign](#create-and-launch-a-campaign)
  - [Step 1 — Sequence](#step-1--sequence)
  - [Step 2 — Audience](#step-2--audience)
  - [Step 3 — AI Agent](#step-3--ai-agent)
  - [Step 4 — Settings](#step-4--settings)
  - [Launch](#launch)
  - [Campaign Templates](#campaign-templates)
- [Monitor and Manage Your Campaign](#monitor-and-manage-your-campaign)
  - [Overview Tab](#overview-tab)
  - [Audience Tab](#audience-tab)
  - [Activity Tab](#activity-tab)
  - [Edit, Pause, Duplicate, and Archive](#edit-pause-duplicate-and-archive)
- [Manage Your Inbox](#manage-your-inbox)
  - [Interface Overview](#interface-overview)
  - [Folders](#folders)
  - [Conversation Tags](#conversation-tags)
  - [Replying to Messages](#replying-to-messages)
- [Analyze Campaign Performance](#analyze-campaign-performance)
  - [Channel Metrics](#channel-metrics)
  - [Tagged Conversations](#tagged-conversations)
  - [Progress by Action](#progress-by-action)
- [Best Practices](#best-practices)
  - [LinkedIn Best Practices](#linkedin-best-practices)
  - [Email Best Practices](#email-best-practices)
- [Next Steps](#next-steps)
- [FAQs](#faqs)
    - [Q1: What happens if a contact replies to a message in my campaign?](#q1-what-happens-if-a-contact-replies-to-a-message-in-my-campaign)
    - [Q2: Can I add contacts to a campaign after it has been launched?](#q2-can-i-add-contacts-to-a-campaign-after-it-has-been-launched)
    - [Q3: Can I edit the sequence of an active campaign?](#q3-can-i-edit-the-sequence-of-an-active-campaign)
    - [Q4: What happens if I remove a contact from a campaign?](#q4-what-happens-if-i-remove-a-contact-from-a-campaign)
    - [Q5: Why is a contact stuck in "In progress" status?](#q5-why-is-a-contact-stuck-in-in-progress-status)
    - [Q6: How do I avoid emails landing in spam?](#q6-how-do-i-avoid-emails-landing-in-spam)

---

# Before You Start

Make sure the following are in place before creating a campaign:

- **At least one identity connected** with LinkedIn and/or email (see the Enginy Configuration Guide).
- **Email account connected** if your sequence includes email actions. Without it, email steps will block the progress of leads.
- **Contact list ready** with enriched contacts (see the List Building Guide).
- **SPF, DKIM, and DMARC configured** on your sending domain (for email campaigns).
- **Email warm-up completed** for new email addresses or domains (see the Enginy Configuration Guide).

---

# Prepare AI Variables for Message Generation

If you want to generate unique, personalized messages with AI for every prospect, you need to create AI Variables before building your campaign.

## What Are AI Variables

An AI Variable is a reusable prompt that tells Enginy how to research and return a specific piece of information for a Contact or Company. Think of it as a smart column: the AI reads the contact's attributes (name, job title, company, LinkedIn activity, etc.), optionally searches external sources, and returns the answer in a format you specify.

AI Variables are used for two purposes in campaigns:

- **Message generation** — Create an AI Variable for each touchpoint in your sequence. For example, a 5-step campaign (Email, Email, LinkedIn, LinkedIn, Email) would need 5 AI Variables, one per message.
- **Data enrichment** — Generate additional data points for segmentation or qualification (covered in the List Building Guide).

![](https://res.cloudinary.com/enginy/image/upload/v1771440079/helpcenter/ai-playbook-10.png)

## Create an AI Variable

1. Navigate to **AI Playbook > AI Variables**.
2. Click **Create AI Variable**.
3. Select the entity type: **Contact** or **Company**.
4. Configure the variable:

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Field</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Description</b></p></td></tr><tr><td><p class="no-margin"><b>Title</b></p></td><td><p class="no-margin">Name of the AI Variable. Cannot be changed after creation.</p></td></tr><tr><td><p class="no-margin"><b>Output type</b></p></td><td><p class="no-margin">Format of the result: <b>Text</b> (messages, summaries), <b>Number</b>, <b>Date</b>, <b>One of</b> (predefined tags like Yes/No or Hot/Warm/Cold), <b>URL</b>, or <b>Email</b>.</p></td></tr><tr><td><p class="no-margin"><b>Prompt</b></p></td><td><p class="no-margin">The instruction that defines persona, context, goal, and formatting rules. Use <code>{field_name}</code> to reference contact/company attributes (e.g., <code>{first_name}</code>, <code>{company_name}</code>, <code>{job_title}</code>).</p></td></tr><tr><td><p class="no-margin"><b>Deep Research</b> (optional)</p></td><td><p class="no-margin">Enables the AI to browse the web and extract data not available in your lists. Increases cost.</p></td></tr><tr><td><p class="no-margin"><b>AI Model</b></p></td><td><p class="no-margin">Choose the model (e.g., GPT 5.2, Grok 4, Gemini 3 Pro, Claude 4.5 Sonnet). Models marked <b>Recommended</b> are best for general use.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440079/helpcenter/ai-playbook-12.png)

**Recommended prompt structure for messages:**

- **Persona** — Define the role the AI represents.
- **Context** — Include sender variables (your company info) and receiver variables (contact data).
- **Goal** — What the AI should produce.
- **Instructions** — Greeting format, icebreaker options, value proposition, call to action, tone, and length constraints.
- **Signature** — Specify that the sign-off should be omitted (for emails, the signature is added automatically from the identity configuration).
- **Examples** — Provide 1-2 examples of the desired output.

**Tip:** Use the **Enhance** button below the prompt editor to let the AI polish your prompt automatically. You can also start from pre-built **Templates** for common use cases.

**Note:** For the full prompt best practices guide, available AI models comparison, Deep Research capabilities and limitations, and advanced use cases (message template personalization), see the **AI Playbook** article.

## Run AI Variables on Your List

Once created, AI Variables appear as columns in your lists. Run them before launching a campaign so that each contact has its personalized message ready:

1. Open the list and locate the AI Variable column.
2. Click the column header and select **Run column > All rows** (or select specific rows first).
3. Alternatively, click **Enrich > Enrich with AI** and select the variables to run.

**Important:** AI-generated messages in campaigns do not have an extra credit cost beyond the AI Variable generation itself.

---

# Configure Your AI Campaign Prompt

## What AI Campaigns Do

AI Campaign prompts control how the AI Agent continues a conversation after a lead replies to your automated sequence. Once a lead replies, the automated sequence stops for that contact, and the AI Campaign prompt takes over to handle the follow-up conversation.

## Create an AI Campaign Prompt

1. Navigate to **AI Playbook > AI Campaigns**.
2. Click **+ New campaign prompt**.
3. Fill in:

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Field</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Description</b></p></td></tr><tr><td><p class="no-margin"><b>Name</b></p></td><td><p class="no-margin">Name of the AI Campaign prompt.</p></td></tr><tr><td><p class="no-margin"><b>Prompt</b></p></td><td><p class="no-margin">The instruction for the AI Agent. Follow the structure: <b>Persona</b> (objective of the AI agent), <b>Context</b> (company info, lead fields, AI Variables), and <b>Instructions/Guidelines</b> (rules for tone, content, and structure).</p></td></tr><tr><td><p class="no-margin"><b>AI Model</b></p></td><td><p class="no-margin">Select the model best suited for conversational interactions.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440081/helpcenter/ai-playbook-22.png)

Enginy includes pre-built templates such as **AI Sales Agent** and **AI Recruiting Agent** that you can customize or use as-is.

## Conversation Handling Modes

When a lead replies to a campaign message, you have three options for how to handle the follow-up:

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Mode</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>How It Works</b></p></td></tr><tr><td><p class="no-margin"><b>Manual</b></p></td><td><p class="no-margin">You or your team respond manually from the Inbox.</p></td></tr><tr><td><p class="no-margin"><b>Copilot (AI Suggestions)</b></p></td><td><p class="no-margin">The AI suggests a reply for you to review, edit, and send. Select an AI Campaign prompt by clicking <b>Edit Prompt</b>.</p></td></tr><tr><td><p class="no-margin"><b>Automatic (AI Replies)</b></p></td><td><p class="no-margin">The AI generates and sends replies without your approval. Click <b>Enable</b> to activate.</p></td></tr></tbody></table>

**Important:** In all three modes, the automated campaign sequence for that contact is halted once they reply. Only the conversation follow-up continues.

---

# Create and Launch a Campaign

Navigate to **Campaigns** from the left menu and click **+ Create Campaign**. Choose **Create from scratch** or **Create from template**. The campaign creation wizard has four steps.

![](https://res.cloudinary.com/enginy/image/upload/v1771440107/helpcenter/campaigns-9.png)

## Step 1 — Sequence

Define the basic configuration and design your outreach flow:

1. Enter a **Campaign name** and select the **Campaign Identity** (the sender profile).
2. Build the sequence by clicking **+** to add actions and conditions between **Start** and **End**.

### Available Actions

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Action</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Description</b></p></td></tr><tr><td><p class="no-margin"><b>Visit Profile</b></p></td><td><p class="no-margin">Visits the lead's LinkedIn profile.</p></td></tr><tr><td><p class="no-margin"><b>React to Last Post</b></p></td><td><p class="no-margin">React to the lead's most recent LinkedIn post (Like, Celebrate, Support, Love, Insightful, Funny, or Most Reacted).</p></td></tr><tr><td><p class="no-margin"><b>Send LinkedIn Connection</b></p></td><td><p class="no-margin">Sends a connection request, optionally with a custom note.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn Message</b></p></td><td><p class="no-margin">Sends a direct message to a 1st-degree connection.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn InMail</b></p></td><td><p class="no-margin">Sends an InMail message (requires InMail credits).</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn Attachment</b></p></td><td><p class="no-margin">Sends a LinkedIn message with an attachment.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn Voice Message</b></p></td><td><p class="no-margin">Sends a voice message on LinkedIn (record or upload).</p></td></tr><tr><td><p class="no-margin"><b>Email</b></p></td><td><p class="no-margin">Sends an email from the connected email account.</p></td></tr><tr><td><p class="no-margin"><b>Task</b></p></td><td><p class="no-margin">Creates a manual task (e.g., a reminder to call the lead).</p></td></tr><tr><td><p class="no-margin"><b>Add to another campaign</b></p></td><td><p class="no-margin">Moves the lead into a different campaign.</p></td></tr></tbody></table>

For actions with a message body, choose between **Generate with AI** (uses an AI Variable) or **Manual** (write the message yourself, optionally using personalization variables).

![](https://res.cloudinary.com/enginy/image/upload/v1771440097/helpcenter/campaigns-11.png)

### Available Conditions

Conditions branch the sequence into **Yes** or **No** paths:

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Condition</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>What It Checks</b></p></td></tr><tr><td><p class="no-margin"><b>Accepted LinkedIn connection</b></p></td><td><p class="no-margin">Has the lead accepted the connection request within X days?</p></td></tr><tr><td><p class="no-margin"><b>Is already a connection</b></p></td><td><p class="no-margin">Is the lead already a 1st-degree LinkedIn connection?</p></td></tr><tr><td><p class="no-margin"><b>Has been contacted</b></p></td><td><p class="no-margin">Has the lead been contacted by some identity, within a time frame and channel?</p></td></tr><tr><td><p class="no-margin"><b>Has LinkedIn Profile</b></p></td><td><p class="no-margin">Does the lead have a LinkedIn Profile ID?</p></td></tr><tr><td><p class="no-margin"><b>Has Professional Email</b></p></td><td><p class="no-margin">Does the lead have an email address?</p></td></tr><tr><td><p class="no-margin"><b>Has Mobile Phone</b></p></td><td><p class="no-margin">Does the lead have a phone number?</p></td></tr><tr><td><p class="no-margin"><b>Custom condition</b></p></td><td><p class="no-margin">Build a condition based on any variable of your choice.</p></td></tr></tbody></table>

### Timing Between Actions

By default, each action executes as soon as possible after the previous one. To add a delay, click the **As soon as possible** label at the top of the action box and configure the wait time in days.

**Tip:** Use conditions to build adaptive sequences. For example: check if the lead has a LinkedIn profile → if yes, visit profile and send connection → if accepted, send LinkedIn message → if not, check for email → send email. This way, one campaign handles multiple scenarios.

## Step 2 — Audience

Add contacts to the campaign using one of two methods:

- **Contacts from list** — Select an existing contact list to add all its contacts at once.
- **Contacts individually** — Browse the full contacts view with filters and add specific leads one by one.

![](https://res.cloudinary.com/enginy/image/upload/v1771440098/helpcenter/campaigns-16.png)

**Note:** You can also add contacts to a campaign later, directly from the Contacts list or from the campaign's Audience tab.

## Step 3 — AI Agent

Configure how the AI Agent handles conversations after a lead replies:

1. In the left panel, preview sample messages for a lead from your audience to validate tone, variables, and formatting.
2. Select an **AI Campaign prompt** by clicking **Edit Prompt**, or create one on the spot.
3. Choose whether to enable **AI auto-replies** (the AI sends replies without your approval) or keep it in **Copilot mode** (AI suggests, you approve).

![](https://res.cloudinary.com/enginy/image/upload/v1771440099/helpcenter/campaigns-19.png)

You can also simulate replies as the lead to test how the AI would respond under your current prompt.

## Step 4 — Settings

Define the operational settings for the campaign:

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Setting</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Description</b></p></td></tr><tr><td><p class="no-margin"><b>Tags</b></p></td><td><p class="no-margin">Classify the campaign for reporting and filtering.</p></td></tr><tr><td><p class="no-margin"><b>Folder</b></p></td><td><p class="no-margin">Organize the campaign in the dashboard.</p></td></tr><tr><td><p class="no-margin"><b>Prioritization</b></p></td><td><p class="no-margin">Low/Medium/High. Controls which campaigns run first when multiple compete for limited daily sending capacity.</p></td></tr><tr><td><p class="no-margin"><b>Contacts CRM Sync</b></p></td><td><p class="no-margin">No / Yes / Only when a contact replies.</p></td></tr><tr><td><p class="no-margin"><b>Conversations CRM Sync</b></p></td><td><p class="no-margin">No / Yes / Only when a contact replies.</p></td></tr><tr><td><p class="no-margin"><b>Skip contacts with prior conversations</b></p></td><td><p class="no-margin">Checks your LinkedIn inbox before sending. If a conversation already exists, the campaign will not message them.</p></td></tr><tr><td><p class="no-margin"><b>Email Inbox</b> (email campaigns)</p></td><td><p class="no-margin">Select which email inboxes to use. <b>Shuffle</b> rotates between all available inboxes.</p></td></tr><tr><td><p class="no-margin"><b>Email tracking</b> (email campaigns)</p></td><td><p class="no-margin">Enable <b>Track email opens</b> and/or <b>Track link clicks</b>. Note: tracking can trigger spam filters.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440100/helpcenter/campaigns-21.png)

**Important:** If your sequence includes **Task** steps, you cannot disable Contacts CRM Sync — the contact must exist in the CRM to create the task there.

## Launch

1. Review the campaign details, sequence flow, and target contacts.
2. Click **Launch**. Your campaign moves to **Campaigns > Active**.

If you are not ready, close the wizard — the campaign is auto-saved as a **Draft** under **Campaigns > Draft**.

## Campaign Templates

Enginy provides pre-built campaign templates organized by complexity. Templates are fully customizable — edit messages, add or remove steps, and adjust the sequence.

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Template</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Channels</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Best For</b></p></td></tr><tr><td><p class="no-margin"><b>LinkedIn + Voice Message</b></p></td><td><p class="no-margin">LinkedIn</p></td><td><p class="no-margin">High-value prospects where you want to stand out with a personal touch.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn Only</b></p></td><td><p class="no-margin">LinkedIn</p></td><td><p class="no-margin">Early-stage prospecting when you do not have verified emails.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn + Email + Call</b></p></td><td><p class="no-margin">Multichannel</p></td><td><p class="no-margin">High-intent outbound where speed-to-meeting matters. Best results template.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn + Email</b></p></td><td><p class="no-margin">Multichannel</p></td><td><p class="no-margin">When calls are not part of your motion but you want dual-channel outreach.</p></td></tr><tr><td><p class="no-margin"><b>Email + Call</b></p></td><td><p class="no-margin">Multichannel</p></td><td><p class="no-margin">Classic SDR motion with strong email/phone coverage.</p></td></tr><tr><td><p class="no-margin"><b>Email Only</b></p></td><td><p class="no-margin">Email</p></td><td><p class="no-margin">High-volume outreach when LinkedIn is not available.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn Social Warming</b></p></td><td><p class="no-margin">LinkedIn</p></td><td><p class="no-margin">Warming up cold prospects before pitching. Improves connection acceptance rates.</p></td></tr></tbody></table>

---

# Monitor and Manage Your Campaign

Click any campaign card to open the Campaign View. It is organized into three tabs: **Overview**, **Audience**, and **Activity**.

## Overview Tab

The Overview tab is your performance cockpit. It shows high-level KPIs across channels.

![](https://res.cloudinary.com/enginy/image/upload/v1771440100/helpcenter/campaigns-25.png)

**All Channels** gives global totals: Total contacts, Started, Contacted, Replied, Positive.

**LinkedIn** metrics: Engaged, Invited, Accepted, Contacted, Replied, Positive.

**Email** metrics: Sent, Clicked, Replied, Positive, Bounced.

**Tasks** metrics: Pending, Completed.

Below the metrics, a **sequence flow preview** shows the number of leads at each step, helping you see where leads are progressing or getting stuck.

**Tip:** Click **View activity** on any step to jump to the Activity tab filtered to that step.

## Audience Tab

The Audience tab shows who is in the campaign and their current state. Status chips at the top filter the list:

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Status</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Meaning</b></p></td></tr><tr><td><p class="no-margin"><b>Not started</b></p></td><td><p class="no-margin">Leads that have not reached the first step yet.</p></td></tr><tr><td><p class="no-margin"><b>In progress</b></p></td><td><p class="no-margin">Leads currently moving through the sequence. Substatuses include: Scheduled, Identity limits, Waiting to connect, Outside working hours, Connection withdrawn.</p></td></tr><tr><td><p class="no-margin"><b>Paused</b></p></td><td><p class="no-margin">Leads paused manually or because the campaign is paused.</p></td></tr><tr><td><p class="no-margin"><b>Error</b></p></td><td><p class="no-margin">Leads blocked by an issue (e.g., missing email, disconnected account, message too long).</p></td></tr><tr><td><p class="no-margin"><b>Finished</b></p></td><td><p class="no-margin">Leads that reached the end without replying (includes bounced, blocked, out of office, not connected).</p></td></tr><tr><td><p class="no-margin"><b>Replied</b></p></td><td><p class="no-margin">Leads who replied. The automated sequence stops for these contacts.</p></td></tr></tbody></table>

Click any row to open a side panel with the lead's profile, timeline of steps, and error details (if any).

**Tip:** To fix an error, check the substatus — common fixes include enriching the contact's email, reconnecting LinkedIn or email, or reducing message length. For the full statuses and substatuses reference table, see the **Campaigns** article.

## Activity Tab

Lists all actions performed in the campaign (excluding conditions). Filter by stage, recipient, or date to audit what happened and when.

## Edit, Pause, Duplicate, and Archive

- **Edit** — Modify delays, AI Variables, and audience on an active campaign. Changes apply only to future interactions.
- **Pause** — Temporarily stop all actions. Resume when ready.
- **Duplicate** — Create a copy in Draft status to modify before launching.
- **Archive** — Deactivate permanently. Remains visible under the Archived filter.
- **Delete** — Permanently remove the campaign.

**Warning:** Once a campaign is launched, its sequence structure is locked — you cannot add or remove steps. If you need a different flow, duplicate and edit the copy before launching.

**Warning:** If you remove a contact from a campaign, you cannot add that contact back to the same campaign later.

---

# Manage Your Inbox

The Inbox is a centralized communication hub where you manage all conversations with leads across Email, LinkedIn, and Tasks. It brings every interaction into one interface.

## Interface Overview

The Inbox is divided into four columns:

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Column</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Purpose</b></p></td></tr><tr><td><p class="no-margin"><b>Folders and Tags</b></p></td><td><p class="no-margin">Navigate and filter conversations by status or category.</p></td></tr><tr><td><p class="no-margin"><b>Conversations</b></p></td><td><p class="no-margin">Browse and select conversations matching your criteria.</p></td></tr><tr><td><p class="no-margin"><b>Chat View</b></p></td><td><p class="no-margin">View the full history of interactions with a lead.</p></td></tr><tr><td><p class="no-margin"><b>Contact Details</b></p></td><td><p class="no-margin">Access complete lead and company information, recent activity, campaign status, and work history.</p></td></tr></tbody></table>

## Folders

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Folder</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Description</b></p></td></tr><tr><td><p class="no-margin"><b>Inbox</b></p></td><td><p class="no-margin">Active conversations with at least one reply.</p></td></tr><tr><td><p class="no-margin"><b>AI Draft</b></p></td><td><p class="no-margin">Conversations where AI has generated a suggested reply for your review.</p></td></tr><tr><td><p class="no-margin"><b>Unread</b></p></td><td><p class="no-margin">Conversations with unread messages.</p></td></tr><tr><td><p class="no-margin"><b>Scheduled</b></p></td><td><p class="no-margin">Messages scheduled for future delivery.</p></td></tr><tr><td><p class="no-margin"><b>Sent</b></p></td><td><p class="no-margin">Conversations where at least one message has been sent.</p></td></tr><tr><td><p class="no-margin"><b>Archived</b></p></td><td><p class="no-margin">Conversations marked as archived.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440117/helpcenter/inbox-1.png)

## Conversation Tags

Tags categorize conversations based on lead intent. Enginy includes default AI-powered tags that are automatically applied when leads reply:

- **Interested**, **Meeting Booked**, **Referred** (Positive)
- **Bad Timing**, **Not the Target Persona**, **Out of Office** (Neutral)
- **Not Interested** (Negative)

You can also create custom tags with specific instructions so the AI knows when to apply them. Tags are dynamic — they update as the conversation evolves.

**Note:** Configure and manage AI Conversation Tags from **AI Playbook > AI Conversation Tags**. For the full Inbox reference including filters, bulk actions, and advanced features, see the **Inbox** article.

## Replying to Messages

From the Chat View, you can:

- Reply via **Email** or **LinkedIn** by selecting the channel in the composition box.
- Review and send **AI Draft** suggestions (in Copilot mode).
- Schedule messages for future delivery.
- Attach files via link (upload a file and Enginy inserts a shareable link into the message body).

---

# Analyze Campaign Performance

Use the campaign's **Overview** tab to track performance in real time.

## Channel Metrics

Switch between **All Channels**, **LinkedIn**, **Email**, and **Tasks** to see funnel metrics for each channel. Key metrics include:

- **Started** — Contacts who completed at least one step.
- **Contacted** — Contacts who received at least one message.
- **Replied** — Contacts who replied through any channel.
- **Positive** — Contacts with replies tagged as positive (by AI or manually).
- **Bounced** (email) — Emails that failed delivery.

## Tagged Conversations

The Tagged Conversations widget shows how replies are categorized (e.g., Interested, Not Interested, Bad Timing, Meeting Booked). Filter by All, LinkedIn, or Email to spot patterns in objections and outcomes.

**Tip:** Click any tag to jump directly to the Inbox filtered by that tag.

## Progress by Action

A sequence flow preview shows the number of leads at each step, including waits, actions, and branches. Use this to identify where leads are getting stuck and optimize your sequence timing or messaging.

**Note:** For cross-campaign analytics, global metrics, and historical performance tracking, see the **Analytics** article.

---

# Best Practices

## LinkedIn Best Practices

**Connection request limits:**

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Account Type</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Recommended Daily Limit</b></p></td></tr><tr><td><p class="no-margin"><b>Standard LinkedIn</b></p></td><td><p class="no-margin">~20 invitations/day (weekly cap around 100)</p></td></tr><tr><td><p class="no-margin"><b>Premium / Sales Navigator</b></p></td><td><p class="no-margin">20-30 invitations/day</p></td></tr><tr><td><p class="no-margin"><b>New LinkedIn profiles</b></p></td><td><p class="no-margin">5-10 invitations/day, increase gradually</p></td></tr></tbody></table>

**Optimal sequence:** 2-3 LinkedIn touches are most effective. Connection request, a first message after acceptance, and one follow-up.

**Message chunking:** Break a long message into 3-4 short chunks sent immediately one after the other. This mimics natural typing and feels more conversational.

**Invitation timeout:** Set a timeout (e.g., 14-15 days) on connection requests. If not accepted, the sequence continues through the "No" branch.

**Withdrawal management:** Enable automatic withdrawal of pending invitations (e.g., after 7-15 days) from **Identities > Configuration > LinkedIn > Withdrawals**. After withdrawal, LinkedIn blocks new invites to the same person for 3 weeks.

**Common mistakes to avoid:** Generic templates (always personalize), sending too many messages (stick to 2-3), and poor targeting (use Contact Score to identify the best contacts).

## Email Best Practices

**Recommended sending limits:**

- **Daily:** ~30 emails per day per email address (never exceed 80).
- **Hourly:** 5-10 emails per hour.

**Using multiple email addresses:** Connect multiple addresses and use the **Shuffle** setting to rotate between them. For example, 3 inboxes at 30 emails/day each give you 90 emails/day total while keeping each within the safe zone.

**Deliverability essentials:**

1. Set up **SPF, DKIM, and DMARC** on your sending domain.
2. **Warm up** new email addresses for 2 weeks before launching campaigns.
3. Vary your messages with AI Variables — do not send identical content to everyone.
4. Do not attach files directly; share files via links instead.
5. Use multiple domains (e.g., company.com, company.io, company.es) and rotate across campaigns.

**Important:** Enginy does not allow file attachments in emails (they are a common spam trigger). Use the link attachment feature to upload files and insert a shareable link.

**Note:** For the full LinkedIn and email best practices reference, identity limits, queue prioritization, and working hours configuration, see the **Campaigns** article.

---

# Next Steps

You have launched your first campaign, configured your AI Agent, and know how to monitor performance and manage your Inbox.

From here you can:

- Build additional campaigns with different sequences and audiences.
- A/B test messaging by duplicating campaigns and changing AI Variable prompts.
- Refine your AI Playbook based on conversation insights (update ICP, products, competitors).
- Review the **Analytics** article for cross-campaign performance tracking and deeper metrics.
- Explore the **Tasks** article for managing manual to-dos created by campaign Task steps.

You are now fully onboarded on Enginy. If you have any questions, reach out to the team via the chat bubble in the bottom right corner of the screen.

---

# FAQs

### Q1: What happens if a contact replies to a message in my campaign?

The automated sequence for that contact stops immediately. No further scheduled steps will execute. You can handle the follow-up manually, use AI Copilot mode (review and send AI-suggested replies), or use AI Automatic mode (AI replies without approval). In all cases, only the conversation follow-up continues.

### Q2: Can I add contacts to a campaign after it has been launched?

Yes. You can add contacts at any time from the campaign's Audience section, from the Contacts list, or by linking an entire list. New contacts start at the beginning of the sequence.

### Q3: Can I edit the sequence of an active campaign?

You can modify delays between actions, AI Variables for each messaging step, and the audience. However, you cannot add new steps or remove existing ones from a launched campaign. If you need a different flow, duplicate the campaign and edit the copy before launching.

### Q4: What happens if I remove a contact from a campaign?

The contact is removed permanently from that campaign. You cannot add the same contact back to the same campaign later. Double-check before removing.

### Q5: Why is a contact stuck in "In progress" status?

Check the substatus in the Audience tab. Common reasons include: **Scheduled** (waiting for the time delay to pass), **Identity limits** (daily connection request or message limit reached — resets the next day), **Waiting to connect** (pending LinkedIn acceptance), **Outside working hours** (the identity's working hours have ended), or **Connection withdrawn** (3-week cooldown before retry).

### Q6: How do I avoid emails landing in spam?

Set up SPF, DKIM, and DMARC on your sending domain. Warm up new email addresses for at least 2 weeks before launching campaigns. Keep daily volume at ~30 emails per address (never exceed 80). Use AI Variables to personalize every message. Avoid file attachments (use links instead). Connect multiple email addresses and rotate them using the Shuffle setting.
