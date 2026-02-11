# Campaigns

Campaigns in Enginy let you build automated, multichannel outreach sequences targeting your contacts via LinkedIn and Email. This guide covers everything from creating your first campaign to advanced analytics, deliverability best practices, and troubleshooting.

# Prerequisites / Before You Start

Before creating a campaign, make sure the following are in place:

- **At least one identity connected** to your Enginy account. Each campaign is linked to exactly one identity, and that identity determines the LinkedIn profile and/or email address used for outreach.
- **Email account connected** (if your sequence includes email actions). If the identity linked to a campaign does not have an email account connected, any email actions in the sequence will block the progress of that lead.
- **Contact list or individual contacts ready** to be targeted. You can also add contacts after the campaign launches.
- **SPF, DKIM, and DMARC configured** on your sending domain (for email campaigns). See [Email Deliverability Best Practices](#email-deliverability-best-practices) for details.
- **Email warm-up completed** (for new email addresses or domains). See [Email Warm-up](#email-warm-up).

---

# Table of Contents

- [What Is a Campaign](#what-is-a-campaign)
- [Campaign Dashboard](#campaign-dashboard)
  - [Monthly Conversations](#monthly-conversations)
  - [Filtering and Searching Campaigns](#filtering-and-searching-campaigns)
  - [Campaign Card Details](#campaign-card-details)
  - [Quick Actions Menu](#quick-actions-menu)
- [Creating a Campaign](#creating-a-campaign)
  - [Step 1 -- Details](#step-1----details)
  - [Step 2 -- Sequence](#step-2----sequence)
  - [Step 3 -- Target](#step-3----target)
  - [Step 4 -- Review and Launch](#step-4----review-and-launch)
  - [Saving and Resuming a Draft Campaign](#saving-and-resuming-a-draft-campaign)
- [Conditional Campaigns](#conditional-campaigns)
  - [Key Features](#key-features)
  - [Building Dynamic Sequences](#building-dynamic-sequences)
- [Campaign Templates](#campaign-templates)
  - [Beginner Sequences](#beginner-sequences)
  - [Medium Sequences](#medium-sequences)
  - [Advanced Sequences](#advanced-sequences)
- [Inside a Campaign](#inside-a-campaign)
  - [General Information](#general-information)
  - [Overview Tab](#overview-tab)
  - [Audience Tab](#audience-tab)
  - [Activity Tab](#activity-tab)
- [Campaign Analytics Page](#campaign-analytics-page)
  - [Available Metrics](#available-metrics)
  - [Filtering Analytics](#filtering-analytics)
- [Campaign Statuses and Substatuses Reference](#campaign-statuses-and-substatuses-reference)
- [Managing Campaigns](#managing-campaigns)
  - [Editing an Active Campaign](#editing-an-active-campaign)
  - [Pausing a Campaign](#pausing-a-campaign)
  - [Duplicating a Campaign](#duplicating-a-campaign)
  - [Archiving and Deleting](#archiving-and-deleting)
  - [Exporting Campaign Data](#exporting-campaign-data)
- [LinkedIn Campaign Best Practices](#linkedin-campaign-best-practices)
  - [Connection Request Limits](#connection-request-limits)
  - [Optimal Sequence Length](#optimal-sequence-length)
  - [Message Chunking Technique](#message-chunking-technique)
  - [Setting Timeframes for LinkedIn Invitations](#setting-timeframes-for-linkedin-invitations)
  - [Handling Unaccepted Invitations](#handling-unaccepted-invitations)
  - [Withdrawing Connection Requests](#withdrawing-connection-requests)
  - [Handling Not-Interested Contacts](#handling-not-interested-contacts)
  - [Common LinkedIn Mistakes to Avoid](#common-linkedin-mistakes-to-avoid)
- [Email Campaign Best Practices](#email-campaign-best-practices)
  - [Recommended Sending Limits](#recommended-sending-limits)
  - [Consequences of Exceeding Limits](#consequences-of-exceeding-limits)
  - [Adjusting Sending Limits](#adjusting-sending-limits)
  - [Using Multiple Email Addresses](#using-multiple-email-addresses)
  - [Email Deliverability Best Practices](#email-deliverability-best-practices)
- [Email Warm-up](#email-warm-up)
  - [What Is Email Warm-up](#what-is-email-warm-up)
  - [How to Activate Email Warm-up in Enginy](#how-to-activate-email-warm-up-in-enginy)
  - [Recommended Warm-up Schedule](#recommended-warm-up-schedule)
  - [What Happens if You Skip Warm-up](#what-happens-if-you-skip-warm-up)
- [Working Hours Configuration](#working-hours-configuration)
- [FAQs](#faqs)

---

# What Is a Campaign

A campaign in Enginy is a programmable outreach sequence that you launch toward the contacts you want to engage. The goal of every campaign is to generate a response from a lead.

Campaigns consist of actions structured either **linearly** (step-by-step) or as a **tree** using conditions that branch the flow based on contact data or behavior. The two supported channels are **LinkedIn** and **Email**, and you can combine them in a single campaign. Each campaign can also include **Tasks** (manual to-dos assigned to your team).

Each campaign can have its own approach, sequence logic, tonality, and target segment. A single identity can be associated with one or more campaigns at the same time, but each campaign is linked to exactly one identity.

> **Important:** If the identity linked to a campaign does not have an email account connected, any email actions in the sequence will block the progress of that lead. Once you connect an email, the campaign will resume, but you may need to retry the leads that were blocked during that time.

---

# Campaign Dashboard

The Campaign Dashboard is the main hub where you can view, filter, and manage all of your campaigns.

## Monthly Conversations

At the top right of the Campaigns section you can see the **Monthly Conversations** indicator. This shows the number of new conversations that can be opened each month. It counts new conversations opened -- not the total number of messages sent.

## Filtering and Searching Campaigns

You can filter campaigns using the following options:

| Filter | Description |
|---|---|
| **Status** | Active, Draft, Running, Paused, Scheduled, Archived |
| **Search bar** | Search by campaign name or associated identity |
| **Identity** | Filter by the identity associated with the campaign |
| **Time period** | Filter by creation date range |
| **Tags** | Filter by campaign tags |
| **Channel type** | Filter by linked channel -- Email, LinkedIn, or Task |
| **Priority** | Filter by campaign priority level |

By default only the search bar and the identity filter are visible. You can add additional filters using the **+ Add filter** button. Once applied, filters can be saved using the save icon to the right of the filters bar.

## Campaign Card Details

Each campaign appears as a summary card displaying:

- **Priority flag** -- High, Medium, or Low. Useful when multiple campaigns compete for limited daily actions (for example, LinkedIn connection requests per day).
- **Campaign name** -- The name you defined for the campaign.
- **Status** -- Running, Paused, or Archived.
- **Associated identity** -- The single identity linked to this campaign.
- **Creation date** -- The day the campaign was created.
- **Contact metrics** -- Total contacts in the campaign plus percentages for contacts started (at least one action taken), contacted (a message was sent), and replied (responded to any message).
- **Campaign tags** -- One or more identifying tags for the campaign.
- **Linked channels** -- Icons indicating whether the campaign contains LinkedIn, Email, and/or Task actions.
- **AI replies indicator** -- Shows if AI-suggested replies are enabled.

> **Note:** Campaign tags are specific to campaigns. Do not confuse them with AI Tags (used for conversations) or List Tags (used for contact lists).

## Quick Actions Menu

Clicking the three-dot menu at the top-right corner of a campaign card reveals the following options:

- **Select**
- **Edit**
- **Duplicate**
- **Pause**
- **Mark as archived**
- **Delete**

You can also create a new campaign from the **+ New Campaign** button at the top right of the Campaigns section, and next to it there is a button to download campaign metrics and statistics in **CSV format**.

---

# Creating a Campaign

To create a new campaign:

1. Navigate to the **Campaigns** section from the left side menu.
2. Click **+ New Campaign** at the top right.

The campaign creation wizard has four steps.

## Step 1 -- Details

Define the basic configuration for your campaign:

| Field | Required | Description |
|---|---|---|
| **Campaign name** | Yes | Give a descriptive name to the campaign. |
| **Campaign description** | No | Optional description of the campaign's purpose. |
| **Campaign identity** | Yes | Assign the Enginy identity to link to this campaign. Determines the LinkedIn profile and/or email used. |
| **Campaign prioritization** | No | Set the priority (High, Medium, Low). Controls which campaign actions execute first when multiple campaigns share the same identity. |
| **CRM Sync Settings** | No | Enable if your CRM is integrated and you want to record conversations. Options: **No** (never export), **Yes** (always export), **Only when a contact replies** (export all messages once a reply is received). |
| **Advanced Tracking Settings** | No | Optionally enable: **Add tracking pixel to emails** (track opens) and/or **Track email links** (track clicks on links). |

## Step 2 -- Sequence

In this step you design the logic of actions and conditions from **Start** to **End**.

Press **+** to add an action or a condition at any point. The sequence advances from one step to the next as long as the lead does **not** respond to a message. If a lead responds, the sequence stops for that lead.

### Available Actions

| Action | Description |
|---|---|
| **Visit Profile** | Visits the lead's LinkedIn profile. |
| **Like Last Post** | Likes the lead's most recent LinkedIn post. |
| **Send LinkedIn Connection** | Sends a connection request on LinkedIn. |
| **LinkedIn Message** | Sends a direct message to a 1st-degree connection. |
| **LinkedIn InMail** | Sends an InMail message (requires InMail credits). |
| **LinkedIn Attachment** | Sends a LinkedIn message with an attachment. |
| **Voice Message** | Sends a voice message on LinkedIn (record or upload). |
| **Email** | Sends an email from the connected email account. |
| **Task** | Creates a manual task (for example, a reminder to call the lead). |
| **Add to another campaign** | Moves the lead into a different campaign. |

For the actions that include a message body (LinkedIn Message, LinkedIn InMail, LinkedIn Attachment, Voice Message, and Email) you can choose between:

- **AI** -- Uses AI variables to generate a personalized message dynamically for each contact.
- **Manual** -- Write the message yourself, optionally using personalization variables (e.g., first name, company name).

> **Important:** AI-generated messages are available at no additional credit cost.

### Available Conditions

Conditions branch the sequence into two paths (**Yes** or **No**) depending on whether the condition is met:

| Condition | What it checks |
|---|---|
| **Has LinkedIn Profile** | Does the lead have a LinkedIn profile? |
| **Has Professional Email** | Does the lead have an email address? |
| **Has Mobile Phone** | Does the lead have a phone number? |
| **Custom condition** | Build a condition based on any variable of your choice. |
| **Accepted LinkedIn connection** | Has the lead accepted the connection request within X days? |
| **Is already a connection** | Is the lead already a 1st-degree LinkedIn connection? |

### Timing Between Actions

By default each action executes immediately after the previous one. To add a delay, click the **Action immediately** label at the top of the action box and configure the wait time in seconds, minutes, hours, or days.

### AI Conversation Continuation

If a lead replies to a message in the sequence, the automated sequence stops for that lead. You can then handle the follow-up conversation in three ways:

1. **Manual handling** -- You or your team respond manually.
2. **Copilot mode (AI Suggestions)** -- Enable the **Continue the conversation with AI** checkbox and select **Copilot**. The AI will suggest a reply for you to review, edit, and send.
3. **Automatic mode (AI Replies)** -- Select **Automatic**. The AI will generate and send replies without your approval.

You can view and modify the prompt the AI uses by clicking **Prompt** in the sequence editor.

> **Important:** In all three modes the automated campaign sequence for that contact is halted once they reply. Only the conversation follow-up continues (manual or AI).

## Step 3 -- Target

Add the contacts you want to reach. There are two options:

- **Contacts from list** -- Select an existing contact list to add all its contacts to the campaign at once.
- **Contacts individually** -- Browse and filter the full contacts view to add specific leads one by one.

> **Note:** You can also add contacts to a campaign later directly from the **Contacts** page.

## Step 4 -- Review and Launch

The final step shows a summary of everything you configured (details, sequence, and contacts).

1. Review the campaign details, sequence flow, and target contacts.
2. If everything looks correct, click **Launch Campaign**.
3. Your active campaign will appear under **Campaigns > Active**.

## Saving and Resuming a Draft Campaign

You can close the campaign creation wizard at any time without losing work -- the campaign is saved automatically as a draft. Find it later under **Campaigns > Draft**, where you can:

- **Edit** -- Modify details, sequence, and contacts.
- **Duplicate** -- Create a copy of the campaign.
- **Launch** -- Start the campaign.
- **Delete** -- Remove the draft.

---

# Conditional Campaigns

Conditional Campaigns let you create flexible, rules-based sequences that adapt to each contact's unique data and behavior. Instead of building separate flows for different scenarios (email only, LinkedIn only, mobile only), you can create one campaign that adjusts itself based on what each contact has available and how they interact with your outreach.

## Key Features

- **Multichannel sequences** -- Combine LinkedIn, Email, and Tasks in a single sequence. No need to jump between channels.
- **AI-powered messages at no extra cost** -- Send personalized, high-performing messages using AI variables. These messages dynamically adapt to each contact and can be previewed and edited before sending.
- **Pre-built templates** -- Choose from optimized campaign templates tested by top-performing users. Fully customizable.
- **New LinkedIn actions** -- Go beyond messaging with Visit Profile, Like Last Post, and Send LinkedIn Voice.
- **Smart targeting with conditions** -- Filter based on available data (email, mobile, LinkedIn profile), past contact history, job title, seniority, industry, time in role, CRM presence, and more.
- **AI replies** -- Once a contact replies, let AI automatically continue the conversation or review AI-suggested replies before sending.

## Building Dynamic Sequences

Here is an example of a conditional campaign sequence:

1. **Check:** Is the lead already a LinkedIn connection?
   - **Yes:** Send a LinkedIn message.
   - **No:** Send a connection request. Then proceed to step 2.
2. **Check:** Was the connection accepted within 15 days?
   - **Yes:** Send a LinkedIn message.
   - **No:** Proceed to step 3.
3. **Check:** Does the lead have an email?
   - **Yes:** Send an email.
   - **No:** Proceed to step 4.
4. **Check:** Does the lead have a phone number?
   - **Yes:** Create a task to call.
   - **No:** End the sequence.

This logic can be built entirely in the visual sequence editor with conditions and branching paths.

---

# Campaign Templates

Enginy provides pre-built campaign templates organized by complexity. Choose the right strategy based on your prospecting goals, effort level, and personalization needs.

## Beginner Sequences

Simple, single-channel strategies recommended for campaigns based on a specific event or intent signal (e.g., new hire, new funding round).

| # | Template | Description | Best for |
|---|---|---|---|
| 1 | **LinkedIn Low Touch (2 follow-ups)** | A lightweight LinkedIn-only sequence focused on generating replies with minimal effort. | Teams engaging leads exclusively via LinkedIn. |
| 2 | **Email Campaign** | A direct and efficient email-only sequence. | Teams engaging leads exclusively via email. |
| 3 | **LinkedIn Low Touch + Task** | Performs simple LinkedIn interactions (profile visit, post like), sends connection requests, and immediately creates a follow-up task. | Prospects you ultimately need to call to qualify. Use LinkedIn interactions as an icebreaker. |
| 4 | **LinkedIn Social Warming** | Engages contacts by viewing their profile, liking posts, and following them before sending a connection request. | Building a network of relevant ICPs without necessarily reaching out yet. Ideal during holiday seasons. |

## Medium Sequences

More personalization and multichannel strategies.

| # | Template | Description | Best for |
|---|---|---|---|
| 5 | **LinkedIn + Add Voice** | Connection request plus three follow-ups, with the second follow-up being a voice message. | Standing out and humanizing your approach. For the voice message, record something like: "Hey, I just wanted to know if you were able to see my last message." |
| 6 | **LinkedIn + Email (2 follow-ups)** | Starts on LinkedIn, then follows up via email. | A balanced mix of channels. Use with prospects you already know are a good fit and tailor messages to their pain points using AI. |
| 7 | **LinkedIn + Add to Another Campaign** | Starts the journey on LinkedIn and automatically moves the lead to another campaign. | Long nurturing sequences or lead recycling. |
| 8 | **LinkedIn + Email** | Quick LinkedIn interactions (visits, likes, messages) followed promptly by email communication. | Users who want to move fast between touchpoints. |
| 9 | **LinkedIn Low Touch + Intro Message + Task** | Visits profiles, likes posts, sends personalized connection requests or messages, then creates a call task. | Top-priority prospects where you want some engagement before calling. |

## Advanced Sequences

Multi-step, high-impact sequences for experienced users aiming for maximum engagement.

| # | Template | Description | Best for |
|---|---|---|---|
| 10 | **LinkedIn + Email (4 follow-ups)** | A detailed, multi-step strategy with multiple touchpoints. | Longer sales cycles or harder-to-reach prospects. |
| 11 | **LinkedIn + Email + Task** | A full-funnel sequence combining LinkedIn, email, and tasks. | Full control of the outreach journey with a structured workflow based on ICP fit. |

---

# Inside a Campaign

Click on any campaign card to open its detailed view.

## General Information

At the top of the campaign view you will find:

| Field | Description |
|---|---|
| **Identity** | Name of the identity associated with the campaign. |
| **Campaign Status** | Running, Paused, or Archived. |
| **Priority** | High, Medium, or Low. Determines which actions execute first when daily limits apply. |
| **CRM Sync** | Whether conversations are exported to your CRM (No / Yes / Only when a contact replies). |
| **Replies** | Whether AI is configured to auto-reply or suggest replies, and the mode selected. |
| **Launch Date** | The date the campaign was launched. |

Additional shortcuts available from this view:

- **View in Inbox** -- Opens the Inbox filtered to conversations from this campaign only.
- **View in List** -- Opens the All Contacts list filtered to contacts in this campaign.
- **Edit Campaign** -- Opens the campaign editor (button at the top right).
- **Three-dot menu** -- Duplicate or delete the campaign.

## Overview Tab

The Overview tab is your campaign's performance dashboard, bringing together key metrics across all channels.

**All Channels:**

| Metric | Description |
|---|---|
| Total contacts | Number of contacts added to the campaign. |
| Total started | Contacts who completed at least one action. |
| Total contacted | Contacts who received at least one message via LinkedIn or email. |
| Total replied | Contacts who replied to any message. |
| Total tagged | Number of contacts tagged (by AI or manually). |

**LinkedIn:**

| Metric | Description |
|---|---|
| Engaged | Contacts who received at least one interaction (profile visit, post like, connection request, or message). |
| Invited | Contacts who received a LinkedIn connection request via your campaigns. Already-connected contacts are not counted. |
| Accepted | Contacts who accepted the connection request. |
| Contacted | Contacts who received a LinkedIn message. |
| Replied | Contacts who replied to a LinkedIn message. |
| Total tagged | Tagged contacts in the LinkedIn channel. |

> **Note:** If a connection request was previously withdrawn, LinkedIn blocks new invites to that contact for 3 weeks. Enginy will automatically resend the invitation once the cooldown period ends.

**Email:**

| Metric | Description |
|---|---|
| Sent | Emails successfully sent. |
| Viewed/Opened | Emails opened by the recipient (requires tracking pixel enabled). |
| Clicked | Emails where a link was clicked (requires link tracking enabled). |
| Replied | Contacts who replied to an email. |
| Bounced | Emails that bounced. |
| Total tagged | Tagged contacts in the email channel. |

**Tasks:**

| Metric | Description |
|---|---|
| Tasks pending | Tasks created but not yet completed. |
| Tasks completed | Tasks that have been marked as done. |

**Progress by Action:**

Below the channel metrics you can see a preview of the entire sequence with a count of leads that have passed through each step. Click **View activity** on any step to jump to the Activity tab filtered to that step.

## Audience Tab

The Audience tab shows all contacts included in the campaign along with their current status. This is the ideal view to understand campaign reach and diagnose issues.

**Status Summary (top of the tab):**

| Status | Description |
|---|---|
| **Total audience** | All contacts in the campaign. |
| **Not started** | Contacts who have not yet reached the first action. |
| **In progress** | Contacts currently moving through the sequence. |
| **Paused** | Contacts manually paused. |
| **Error** | Contacts with an error preventing progress. |
| **Finished** | Contacts who completed the sequence without replying, or who bounced. |
| **Replied** | Contacts who responded to a message. |

Clicking a status filters the list to show only contacts in that state.

**Audience Filters:**

| Filter | Description |
|---|---|
| **Search bar** | Search by lead name or lead's company name. |
| **Stage** | Filter by sequence action (same as progress by action). |
| **Conversation tags** | Filter by conversation tag. |
| **Engagement** | Filter by engagement conditions (see list below). |
| **Filter contacts from the same company** | Checkbox to show only leads who work at the same company. |
| **View dropdown** | Change how contact information is displayed: **Contacts** (Name @ Company, Job Title below) or **Companies** (Job Title @ Company, Name below). |

**Engagement filter options:**

- LinkedIn connection sent
- LinkedIn connection accepted
- LinkedIn connection sent but not by platform
- Sent at least one message
- Bounced message
- Seen message
- Clicked conversation (number of times an email was opened -- requires "track email opens" enabled)

**Contact List Columns:**

| Column | Description |
|---|---|
| **Contact** | Name, company, and job title. |
| **Status** | Label showing "Status + specific reason." Hover for a detailed tooltip. |
| **Activity** | Icons of the last activity (excluding conditions). Hover for action details. |
| **Conversation tags** | Tags assigned manually or automatically via AI based on a prompt. |

**Contact Side Panel:**

Clicking any row opens a side panel on the right showing:

- Lead personal information with shortcuts to LinkedIn, CRM, Tableau, Inbox, add to another campaign, and create a task.
- Each step of the sequence the lead has passed through.
- A banner with the lead's status tooltip.

**Bulk Actions:**

Select one or more leads using the checkboxes on the left to reveal a popup with these actions:

| Action | Description |
|---|---|
| **Retry errors** | Re-attempts failed actions. Only appears when the selected lead has an Error status. |
| **View in list** | Opens the contact list showing only the selected leads. |
| **View in Inbox** | Opens the Inbox showing only the selected leads. |
| **Pause** | Freezes the campaign for the selected leads. |
| **Resume** | Resumes the campaign for paused leads. |
| **Remove from campaign** | Removes the lead from the campaign. Once removed, a contact cannot be added back to the same campaign. |

## Activity Tab

The Activity tab lists all actions performed in the campaign (excluding conditions).

**Activity Filters:**

| Filter | Description |
|---|---|
| **Search bar** | Search by lead name or lead's company name. |
| **Stage** | Filter by action in the sequence. |
| **Recipient** | Filter by a specific contact. |
| **Date** | Filter by time range. |

**Activity List Columns:**

| Column | Description |
|---|---|
| **Action** | The activity performed (e.g., LinkedIn message sent, email sent, profile visited). |
| **Recipient** | Lead in "Name @ Company" format. |
| **Status** | Completed or In Progress. |
| **Completed** | Timestamp of when the action was completed. |

The Activity tab tracks LinkedIn actions (message, connect, visit, like), email actions (sent, replied, bounced), task assignments and completions, and any pending actions coming next.

---

# Campaign Analytics Page

The Campaign Analytics page provides a global overview of all campaign activities across all users and channels. This is separate from the per-campaign analytics in the Overview tab described above.

## Available Metrics

**Replies:**

- Total number of replies.
- Conversations broken down by tag (e.g., Booked, Converted, Out of Office, Not Interested).

> **Tip:** This helps you understand not just who replied, but what they said -- measuring quality, not just quantity.

**Audience:**

- Added to campaign -- total contacts added.
- Total started -- contacts who completed at least one action.
- Total contacted -- contacts who received at least one message via LinkedIn or email.

**LinkedIn:**

- LinkedIn messages sent
- Connection requests sent
- Connections accepted
- Profiles visited
- Posts liked

**Email:**

- Emails sent
- Emails opened
- Emails clicked
- Emails bounced
- Email replies

## Filtering Analytics

You can filter the Analytics page by:

- Campaign name
- Created by (user)
- Identity
- Campaign tags
- Date range

These filters allow you to analyze performance in targeted ways, understand what works best, and identify underperforming segments.

> **Note:** The analytics only track actions performed through Enginy campaigns. Any manual actions you take directly on LinkedIn (connection requests, messages, post likes) will not appear in campaign analytics.

---

# Campaign Statuses and Substatuses Reference

The Audience tab uses statuses and substatuses to explain precisely why a contact may not be progressing. Below is the complete reference.

| Status | Substatus | Description |
|---|---|---|
| In progress | Scheduled | Waiting for the configured time delay between actions to pass. |
| In progress | Identity limits | The identity has reached its daily connection request limits. |
| In progress | Waiting to connect | Waiting for the lead to accept the connection request. |
| In progress | Monthly conversation limit | The monthly conversation limit for this identity has been reached. Resets next month or contact the team to upgrade. |
| In progress | Connection withdrawn | LinkedIn connection request was withdrawn. X days remaining before retry. |
| In progress | Outside working hours | The campaign is paused because it is outside configured working hours. |
| Error | Missing email | The email account used for this conversation is no longer available. |
| Error | Email disconnected | Email credentials expired. Reconnect email to continue. |
| Error | LinkedIn disconnected | The LinkedIn account used for this conversation is disconnected. Reconnect to continue. |
| Error | System error | An error occurred while processing this conversation. |
| Error | InMail credits limit | The identity has run out of InMail credits. |
| Error | Missing subject | A subject is required for InMail messages. Add a subject to continue. |
| Error | Invalid identity email | The email address of the identity is not valid. Connect email to continue. |
| Error | Missing contact email | The professional email for the contact has not been set or is invalid. Enrich email to continue. |
| Error | Lead not scraped | The lead is missing required information. Enrich the contact to continue. |
| Error | Identity misconfiguration | The LinkedIn identity is not configured correctly. |
| Error | Missing email subject | No subject was found for the email. Add a subject to continue. |
| Error | Missing InMail subject | No subject was found for the InMail message. Add a subject to continue. |
| Error | Missing InMail message | There is no message content for the InMail. Add a message to continue. |
| Error | Missing LinkedIn message | There is no message content for the LinkedIn message. Add a message to continue. |
| Error | Empty message | The message content is empty. Add a message to continue. |
| Error | Missing CRM ID | The contact CRM ID is missing. Sync with CRM to get the CRM ID. |
| Error | Missing owner ID | The owner ID is missing. Sync with CRM to get the CRM ID. |
| Error | Missing campaign prompt | No campaign prompt was found. Add a campaign prompt to continue. |
| Error | Invalid LinkedIn ID | The LinkedIn profile ID for the lead is not valid. Enrich the contact to continue. |
| Error | Message too long | The connection request message exceeds the 1,900-character limit. Reduce the length. |
| Error | InMail message too long | The InMail message exceeds the 1,900-character limit. Reduce the length. |
| Error | LinkedIn URL not found | The LinkedIn profile URL for the lead was not found. Enrich the contact to continue. |
| Finished | Deleted | Contact has been removed from the campaign. |
| Finished | Blocked | This lead has been blocked. |
| Finished | Out of office | Contact replied with an out-of-office message. Sequence ends. |
| Finished | Bounced | Email to this lead has bounced. |
| Finished | No response | The sequence was completed successfully but the contact has not replied. |
| Finished | Not connected | The contact did not accept the connection request within the configured time period, or declined. |

> **Tip:** To fix an error, check the substatus in the Audience tab for that contact. Common fixes include enriching the contact's email, reconnecting your LinkedIn or email account, or syncing with your CRM.

---

# Managing Campaigns

## Editing an Active Campaign

You can modify the parameters of an active campaign. However, changes will only apply to **future interactions** and will not affect actions already performed.

1. Go to **Campaigns > Active**.
2. Click the three-dot menu next to the campaign.
3. Select **Edit**.

> **Warning:** Once a campaign is active (no longer in draft), any steps you add become permanent -- you cannot remove them later. If you need a different sequence, stop or archive the campaign and create a new one. Steps in an active campaign cannot be deleted.

## Pausing a Campaign

You can pause a campaign at any time. This is useful when you need to make adjustments or temporarily stop interactions.

1. Go to **Campaigns > Active**.
2. Click the three-dot menu next to the campaign.
3. Select **Pause**.

## Duplicating a Campaign

You can duplicate any campaign (active, paused, or draft) from the three-dot menu. This creates a copy in Draft status that you can modify before launching.

## Archiving and Deleting

- **Mark as archived** -- Deactivates the campaign. It remains visible under the Archived filter.
- **Delete** -- Permanently removes the campaign.

Both options are available from the three-dot menu on the campaign card.

## Exporting Campaign Data

At the top right of the Campaigns section there is a button to download metrics and total campaign statistics in **CSV format**. You can also download a CSV report from within the individual Campaign page.

---

# LinkedIn Campaign Best Practices

## Connection Request Limits

LinkedIn imposes limits on daily connection requests to protect against spam. Enginy adheres to these limits to keep your account safe.

| Account Type | Recommended Daily Limit | Notes |
|---|---|---|
| **Standard LinkedIn** | ~20 invitations/day | LinkedIn often has a weekly cap around 100 invites. Exceeding ~20/day on a free account risks triggering defenses. |
| **Premium / Sales Navigator** | 20--30 invitations/day | Higher volumes are technically possible (50--100), but consistently high sends with low acceptance rates risk restrictions. |
| **New LinkedIn profiles** | 5--10 invitations/day | New accounts have less trust built up. Increase gradually once invitations are being accepted. |

Enginy sets a default cap of **20 connection requests per day** per LinkedIn identity. If the daily limit is reached, Enginy automatically pauses connection requests and resumes the next day. Additionally, Enginy limits LinkedIn messages to **100 per day** per profile.

> **Tip:** Focus on quality over quantity. Sending fewer, more personalized invites will yield better results and keep your account in good standing.

## Optimal Sequence Length

A highly effective LinkedIn sequence typically includes **2--3 touches**:

1. **Connection request** -- Optionally include a custom note to introduce yourself.
2. **First message (after acceptance)** -- Thank the contact for connecting and add value (e.g., a relevant resource or question).
3. **Follow-up message** -- If no response, send one more gentle follow-up after a few days.

> **Warning:** Avoid sending more than 2--3 messages per sequence. Excessive messages can be perceived as spam and may result in the contact blocking or reporting you.

Keep messages polite, concise, and spaced out over several days.

## Message Chunking Technique

When reaching out on LinkedIn, consider breaking a single long message into smaller chunks sent over a short span of time (for example, 30 seconds apart). This mimics the natural pace of someone typing in real time.

**Instead of one long message like:**

"Hi {first name}, sorry for the direct approach -- just wondering, do you happen to spend a lot of time each week updating Excel sheets? I'm asking because at Acme, we help HR professionals digitize administrative tasks. Mind if I ask you a couple of quick questions to see if we could help you reclaim up to 8 hours a week?"

**Split it into 3--4 short messages, 30 seconds apart:**

1. "hi {first name}"
2. "sorry for the direct approach -- just wondering, do you spend a lot of time updating excel each week?"
3. "i ask because at Acme we help HR professionals digitize admin tasks -- can i ask you a couple of questions to see if we might help you win back 8 hours a week?"
4. "if it's not a fit, no worries -- i won't spam you"

**Why this works:**

- It feels human -- short, lowercase phrases mimic real-time typing.
- You acknowledge the awkwardness of cold outreach while clearly stating what is in it for them.
- You create a soft landing -- asking for permission rather than pushing for a demo upfront.

> **Tip:** Message chunks can be created easily using AI variables. Reach out to the Enginy team if you need assistance setting this up.

## Setting Timeframes for LinkedIn Invitations

When you add a LinkedIn connection request step to your sequence, you can specify a timeout (for example, 14 or 15 days). If the contact does not accept within that period, Enginy marks the invitation as "not accepted" and ends the sequence for that contact.

**Why this matters:**

- **Keeps the campaign organized.** Leads who do not accept within a reasonable window are unlikely to accept at all.
- **Identifies interested contacts quickly.** Separates engaged prospects from unresponsive ones.
- **Avoids redundant requests.** Prevents repeatedly contacting someone who has not connected.

> **Note:** The contact can still accept the invitation after the timeout, but the automated sequence will not continue. You could follow up manually if they accept late.

## Handling Unaccepted Invitations

If a prospect has not accepted your connection request after the configured timeframe:

- **Wait and resend later** -- Withdraw the old invite and attempt a new one after a few days or weeks. Do this sparingly -- if they ignore a second invite, move on.
- **Reach out through other channels** -- If you have their email, send a brief, polite message mentioning your LinkedIn request.
- **Do nothing** -- Let it be and focus on other contacts. If Enginy's auto-withdrawal is enabled, the system will pull back the pending request automatically.

## Withdrawing Connection Requests

You can withdraw pending connection requests in bulk from Enginy:

1. Navigate to **Identities > Configuration > LinkedIn > Withdrawals**.
2. **Automatic withdrawals** -- Toggle "Automatically withdraw pending invitations" and set a number of days (e.g., 15 days). Unanswered invites will be withdrawn automatically.
3. **Manual withdrawals** -- Select specific pending invitations from the list and confirm.

> **Important:** Once you withdraw an invitation, LinkedIn prevents you from sending a new connection request to that same person for **3 weeks**. LinkedIn does not notify the contact that you withdrew the invite.

Regularly withdrawing stale invites is a good practice to stay within LinkedIn's invitation limits.

## Handling Not-Interested Contacts

If a lead replies but indicates they are not interested:

1. **Thank them for their time** -- A courteous response leaves a good impression and keeps the door open for the future.
2. **Stay positive and professional** -- Never show frustration or push back. Wish them success.
3. **Ask for a referral (if appropriate)** -- Politely ask if they know someone who might benefit from your offering.
4. **Close on a positive note** -- Keep the connection warm (e.g., "Let's stay connected -- feel free to reach out if I can ever assist you in the future").

A "no" today is not a dead end. Handling it graciously ensures the contact might engage in the future or refer you to others.

## Common LinkedIn Mistakes to Avoid

| Mistake | Why it hurts |
|---|---|
| **Using generic templates** | Boilerplate messages feel copy-pasted and reduce acceptance and reply rates. Always personalize. |
| **Sending too many messages** | Bombarding prospects annoys them and can trigger LinkedIn's spam detection. Stick to 2--3 messages. |
| **Poor targeting** | Contacting people outside your ICP wastes time and leads to low response rates. |
| **No follow-up** | Not sending a follow-up after someone accepts your connection means missed opportunities. Always plan at least one follow-up. |

---

# Email Campaign Best Practices

## Recommended Sending Limits

| Limit Type | Recommendation | Rationale |
|---|---|---|
| **Daily limit** | ~30 emails per day per email address | Keeps your domain reputation healthy and stays well below provider hard caps. |
| **Hourly limit** | 5--10 emails per hour | Mimics natural human sending behavior. Enginy automatically throttles sends over time. |
| **Absolute upper limit** | Never exceed 80 emails/day from one domain | Even for well-warmed domains, exceeding this risks serious reputation damage. |

Enginy automatically paces your campaign and enforces the configured sending limits. If you reach the daily cap, Enginy pauses sending for the day and resumes the next day.

> **Tip:** To reach higher total volumes, connect multiple sender addresses or domains rather than increasing the send rate of a single inbox.

## Consequences of Exceeding Limits

- **Account suspension or rate limiting** -- Your email provider may temporarily block outgoing messages.
- **Damage to domain reputation** -- Unusual sending spikes get flagged by spam filters, causing more future emails to land in spam.
- **Increased spam reports and bounces** -- High-volume sends to cold contacts yield more bounces and complaints, further hurting deliverability.

## Adjusting Sending Limits

Enginy allows you to adjust daily and hourly send caps under your email identity settings. You might lower the volume temporarily if you notice deliverability issues, or raise it slightly after a successful warm-up period.

> **Warning:** Stick to the recommended values unless you have a specific reason to change them. Only experienced senders with properly warmed domains should consider higher limits, and even then with caution. It is usually better to add another sending identity than to raise the limit on a single account.

## Using Multiple Email Addresses

Connecting multiple email addresses to Enginy is a best practice for scaling outreach safely:

- **Distributes the sending load** -- Each inbox only sends a portion of the total emails, keeping every account within safe limits.
- **Minimizes spam/blacklist risk** -- If one address hits a deliverability issue, others continue operating normally.
- **Maintains consistent performance** -- Each email account builds its own reputation independently.
- **Increases combined capacity** -- For example, 3 inboxes at 30 emails/day each give you 90 emails/day total while each stays within the safe zone.

You can configure Enginy to rotate between connected email accounts when sending campaign emails, or assign different campaigns to different addresses.

## Email Deliverability Best Practices

1. **Set up SPF, DKIM, and DMARC** -- Make sure your domain's DNS is correctly configured. Use free online tools to verify your DNS health and email deliverability score.
2. **Warm up your domain** -- Send a small volume of emails for 2--3 weeks before launching campaigns (see [Email Warm-up](#email-warm-up)).
3. **Limit daily volume per domain** -- Stick to ~30 emails/day per domain and never exceed 80.
4. **Vary your messages** -- Do not send identical content to everyone. Use personalization and AI Variables to create unique messages for each prospect.
5. **Keep it simple -- no attachments** -- Enginy does not allow attaching files directly (attachments are a common spam trigger). Instead, share files by adding a link (Google Drive, Dropbox, OneDrive, etc.).
6. **Use multiple domains** -- Spread outreach across several domains (e.g., yourcompany.com, yourcompany.io, yourcompany.es) and rotate them across campaigns.

**How to add a file link in your email:**

1. Upload your file to a cloud storage service (e.g., Google Drive).
2. Copy the shareable link.
3. Paste the link directly into your email text.
4. Example: "You can download the full brochure here."

> **Important:** By keeping your emails lightweight, personalized, and link-based instead of attachment-heavy, you protect your domain reputation and dramatically increase your chances of landing in the inbox.

---

# Email Warm-up

## What Is Email Warm-up

Email warm-up is the process of gradually building the sending reputation of a new email account or domain before sending large campaign volumes. Over a period of weeks, you send a small number of emails each day, then slowly increase. The emails go to real recipients (or warm-up networks) who open and reply, signaling positive engagement. This builds trust with email providers (Gmail, Outlook, etc.) so they treat your domain as a legitimate sender.

## How to Activate Email Warm-up in Enginy

Email warm-up in Enginy has a fixed cost of **50 EUR/month** and must be activated by your assigned Account Manager. You can warm up one email address at a time.

1. Go to the **Identities** section.
2. Select an identity, then navigate to **Configuration > Email Warming > Start Email Warming**.
3. After two weeks, go back to **Identity Configuration > Email Warming** and stop the warm-up. You can now send email campaigns from that address.

> **Warning:**
> - Do **not** send email campaigns from the address while it is warming up.
> - You will receive automated warming emails during this period. Do **not** mark them as spam -- this would defeat the purpose. Simply open and archive them.

## Recommended Warm-up Schedule

A typical warm-up schedule for a brand-new domain:

| Week | Daily Volume | Notes |
|---|---|---|
| **Week 1** | 5 emails/day | Send to contacts likely to engage. Ensure emails are properly formatted and personalized. |
| **Week 2** | 10--15 emails/day | Increase gradually. Monitor for ISP warnings or high bounce rates. |
| **Week 3** | 20--30 emails/day | By the end of the week you will have sent a couple hundred emails total over the warm-up period. |

After approximately 3 weeks, if you maintained good engagement (few bounces, few or no spam reports, some replies), your sender reputation should be healthy enough for full campaign volume.

> **Important:** Even after the warm-up period, continue monitoring email performance. If you plan to further increase volume, do it in small steps. For scaling to very high volumes, add more domains or addresses and warm them up too, rather than pushing one domain to its limit.

## What Happens if You Skip Warm-up

- **Emails flagged as suspicious** -- Email providers notice sudden high-volume sending from a new source. Emails are likely routed to spam.
- **Sending limits or blocks** -- Providers may block or suspend your account for what looks like spam activity.
- **Poor deliverability** -- Your first campaign will likely have a very low inbox placement rate, and recipients may mark unfamiliar emails as spam, further damaging your reputation.

---

# Working Hours Configuration

Working hours settings define the time window during which your campaign can send messages. Outside of working hours, campaigns are automatically paused. For example, if your working hours are set to 9:00 AM -- 5:00 PM, Enginy will not send any campaign messages before 9:00 AM or after 5:00 PM.

**Where to configure working hours:**

1. Navigate to **Identities > Configuration > Working Hours**.
2. Specify the days of the week and the time range considered as working hours for each identity.

**Key points:**

- Working hours are configured **per identity**, not per campaign. All campaigns using the same identity share the same schedule.
- If you want different campaigns to operate on different schedules, use different identities with distinct working hour settings.
- Working hours apply to **all** campaign action types -- both LinkedIn actions and email sends.

> **Tip:** Adjust working hours to match your prospects' time zones or your business hours to ensure messages arrive at optimal engagement times.

---

# FAQs

**1. What happens if a contact responds to a message in my campaign?**

The automated sequence for that contact stops immediately. They will not receive any further scheduled steps. You can then handle the conversation manually, use AI Copilot mode (review and send AI-suggested replies), or use AI Automatic mode (AI replies without approval). In all cases, the campaign sequence halts and only the conversation follow-up continues.

**2. Does the analytics data include actions I perform directly on LinkedIn outside of Enginy?**

No. Campaign analytics only track actions performed through Enginy campaigns. Manual LinkedIn activity (connection requests, messages, post likes done outside the platform) is not reflected in reports. If you manage contacts manually outside Enginy, consider tagging or excluding them from campaigns to avoid overlap in reporting.

**3. Why do my reply rates appear lower than expected?**

Automated replies such as "Out of Office" are excluded from the reply rate calculation. This gives you a more accurate measure of meaningful responses. Conversations tagged as Out of Office are still visible in the tag breakdown but do not inflate your reply metrics.

**4. Can I add contacts to a campaign after it has been launched?**

Yes. You can add contacts at any time from the campaign's Target section or directly from the Contacts page. New contacts will start at the beginning of the sequence.

**5. How often is analytics data updated?**

Data is updated in near real-time. You may experience brief delays (a few seconds to minutes) depending on processing time and campaign activity volume.
