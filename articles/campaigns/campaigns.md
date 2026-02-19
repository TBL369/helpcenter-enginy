# Campaigns
Campaigns in Enginy let you build automated, multichannel outreach sequences targeting your contacts via LinkedIn and Email. This guide covers everything from creating your first campaign to advanced analytics, deliverability best practices, and troubleshooting.

---

# Table of Contents
- [Before You Start](#before-you-start)
- [What Is a Campaign](#what-is-a-campaign)
- [Campaigns Dashboard](#campaigns-dashboard)
  - [Campaign Status](#campaign-status)
  - [Filtering and Searching Campaigns](#filtering-and-searching-campaigns)
  - [Campaign Card Details](#campaign-card-details)
- [Creating a Campaign](#creating-a-campaign)
  - [Step 1 — Sequence](#step-1-sequence)
    - [Available Actions](#available-actions)
    - [Available Conditions](#available-conditions)
    - [Timing Between Actions](#timing-between-actions)
  - [Step 2 — Audience](#step-2-audience)
  - [Step 3 — AI Agent](#step-3-ai-agent)
    - [Preview](#preview)
    - [AI Conversation Continuation](#ai-conversation-continuation)
    - [Conditional Campaigns](#conditional-campaigns)
      - [Building Dynamic Sequences](#building-dynamic-sequences)
  - [Step 4 — Settings](#step-4-settings)
- [Campaign Templates](#campaign-templates)
- [Inside a Campaign](#inside-a-campaign)
  - [General Information](#general-information)
  - [Overview Tab](#overview-tab)
    - [Outbound performance snapshot](#outbound-performance-snapshot)
    - [Channel breakdown](#channel-breakdown)
      - [All Channels](#all-channels)
      - [LinkedIn](#linkedin)
      - [Email](#email)
      - [Tasks](#tasks)
    - [Tagged Conversations](#tagged-conversations)
    - [Progress by action](#progress-by-action)
  - [Audience Tab](#audience-tab)
    - [Status Summary](#status-summary)
    - [Audience Filters](#audience-filters)
    - [Table columns](#table-columns)
    - [Contact Side Panel](#contact-side-panel)
    - [Bulk Actions](#bulk-actions)
  - [Activity Tab](#activity-tab)
    - [Activity Filters](#activity-filters)
    - [Activity List Columns](#activity-list-columns)
- [Campaign Statuses and Substatuses Reference](#campaign-statuses-and-substatuses-reference)
- [Managing Campaigns](#managing-campaigns)
  - [Editing an Active Campaign](#editing-an-active-campaign)
  - [Pausing a Campaign](#pausing-a-campaign)
  - [Duplicating a Campaign](#duplicating-a-campaign)
  - [Archiving and Deleting](#archiving-and-deleting)
- [Understand Identity Limits and Capacity](#understand-identity-limits-and-capacity)
  - [Queue overview (Email vs LinkedIn)](#queue-overview-email-vs-linkedin)
  - [LinkedIn actions that can be rate-limited](#linkedin-actions-that-can-be-rate-limited)
  - [What runs instantly (non-LinkedIn nor email actions)](#what-runs-instantly-non-linkedin-nor-email-actions)
  - [How delays affect pacing](#how-delays-affect-pacing)
  - [How Enginy prioritizes queued LinkedIn actions](#how-enginy-prioritizes-queued-linkedin-actions)
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
  - [What Happens if You Skip Warm-up](#what-happens-if-you-skip-warm-up)
- [Working Hours Configuration](#working-hours-configuration)

---

# Before You Start
Before creating a campaign, make sure the following are in place:

-   **At least one identity connected** to your Enginy account. Each campaign is linked to exactly one identity, and that identity determines the LinkedIn profile and/or email address used for outreach.
    
-   **Email account connected** (if your sequence includes email actions). If the identity linked to a campaign does not have an email account connected, any email actions in the sequence will block the progress of that lead.
    
-   **Contact list or individual contacts ready** to be targeted. You can also add contacts after the campaign launches.
    
-   **SPF, DKIM, and DMARC configured** on your sending domain (for email campaigns). See Email Deliverability Best Practices for details.
    
-   **Email warm-up completed** (for new email addresses or domains). See Email Warm-up.
    
---

# What Is a Campaign
A campaign in Enginy is a programmable outreach sequence that you launch toward the contacts you want to engage. The goal of every campaign is to generate a response from a lead.

Campaigns consist of actions structured either **linearly** (step-by-step) or as a **tree** using conditions that branch the flow based on contact data or behavior. The two supported channels are **LinkedIn** and **Email**, and you can combine them in a single campaign. Each campaign can also include **Tasks** (manual to-dos assigned to your team).

Each campaign can have its own approach, sequence logic, tonality, and target segment. A single identity can be associated with one or more campaigns at the same time, but each campaign is linked to exactly one identity.

**Important:** If the identity linked to a campaign does not have an email account connected, any email actions in the sequence will block the progress of that lead. Once you connect an email, the campaign will resume, but you may need to retry the leads that were blocked during that time.

---

# Campaigns Dashboard
The Campaigns Dashboard is the main hub where you can view, filter, and manage all your campaigns. Campaigns can be organized into folders and are also displayed as cards in the list view.

![](https://res.cloudinary.com/enginy/image/upload/v1771440097/helpcenter/campaigns-1.png)

## Campaign Status
Campaigns are grouped into status tabs:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Tab</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Active</b></p></td><td><p class="no-margin">Campaign is enabled and can execute actions when its conditions/rules allow it.</p></td></tr><tr><td><p class="no-margin"><b>Draft</b></p></td><td><p class="no-margin">Campaign is not launched yet. It’s saved as a draft and won’t run until you launch it.</p></td></tr><tr><td><p class="no-margin"><b>Running</b></p></td><td><p class="no-margin">Campaign is currently executing actions (e.g., sending messages) and progressing through its steps.</p></td></tr><tr><td><p class="no-margin"><b>Paused</b></p></td><td><p class="no-margin">Campaign is temporarily stopped. No new actions will be executed until it’s resumed.</p></td></tr><tr><td><p class="no-margin"><b>Scheduled</b></p></td><td><p class="no-margin">Campaign is set to start at a specific date/time and will remain idle until then.</p></td></tr><tr><td><p class="no-margin"><b>Archived</b></p></td><td><p class="no-margin">Campaign is inactive and stored for reference. It won’t run anymore and cannot be reactivated.</p></td></tr></tbody></table>

## Filtering and Searching Campaigns
You can filter campaigns using the following filters:

![](https://res.cloudinary.com/enginy/image/upload/v1771440099/helpcenter/campaigns-2.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440101/helpcenter/campaigns-3.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Filter</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Search bar</b></p></td><td><p class="no-margin">Search campaigns by campaign name or associated identity.</p></td></tr><tr><td><p class="no-margin"><b>Sort by [Launch date/Creation date/Priority]</b></p></td><td><p class="no-margin">Sort campaigns by Launch date, Creation date, or Priority.</p></td></tr><tr><td><p class="no-margin"><b>Identity</b></p></td><td><p class="no-margin">Show only campaigns assigned to a specific identity.</p></td></tr><tr><td><p class="no-margin"><b>Folders</b></p></td><td><p class="no-margin">Filter campaigns by the folder they belong to.</p></td></tr><tr><td><p class="no-margin"><b>Date Range</b></p></td><td><p class="no-margin">Filter campaigns by creation date within a selected date range.</p></td></tr><tr><td><p class="no-margin"><b>Campaign Tags</b></p></td><td><p class="no-margin">Filter campaigns by one or more campaign tags.</p></td></tr><tr><td><p class="no-margin"><b>Channel</b></p></td><td><p class="no-margin">Filter campaigns by channel: Email, LinkedIn, or Task.</p></td></tr><tr><td><p class="no-margin"><b>Priority</b></p></td><td><p class="no-margin">Filter campaigns by priority level.</p></td></tr></tbody></table>

By default, only the search bar and the **Identity**, **Sort by launch date**, and **Folders** filters are visible. You can add more filters using the **Filters** button. Once applied, you can save them by clicking **\+ Save current filters** at the bottom of the **Filters** dropdown menu.

## Campaign Card Details
Each campaign appears as a summary card displaying:

![](https://res.cloudinary.com/enginy/image/upload/v1771440104/helpcenter/campaigns-4.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440106/helpcenter/campaigns-5.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Item</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Priority flag</b></p></td><td><p class="no-margin">Indicates the campaign priority (<b>High / Medium / Low</b>). Useful when several campaigns compete for limited daily actions (e.g., LinkedIn connection requests, LinkedIn messages or Email messages).</p></td></tr><tr><td><p class="no-margin"><b>Campaign name</b></p></td><td><p class="no-margin">The campaign’s name.</p></td></tr><tr><td><p class="no-margin"><b>Associated identity</b></p></td><td><p class="no-margin">The identity assigned to run this campaign.</p></td></tr><tr><td><p class="no-margin"><b>Created (relative)</b></p></td><td><p class="no-margin">Shows how long ago the campaign was created (e.g., “14h ago”, “1 mo ago”).</p></td></tr><tr><td><p class="no-margin"><b>Status</b></p></td><td><p class="no-margin">Current campaign state: <b>Draft, Running, Paused, Scheduled, </b>or<b> Archived</b>.</p></td></tr><tr><td><p class="no-margin"><b>Contact metrics</b></p></td><td><p class="no-margin">Performance indicators across the campaign audience: <b>Started</b> (at least one step executed), <b>Contacted</b> (a message was sent), and <b>Replied</b> (the lead replied).</p></td></tr><tr><td><p class="no-margin"><b>Linked channels</b></p></td><td><p class="no-margin">Icons showing which channels the campaign uses (<b>LinkedIn</b>, <b>Email</b>, and/or <b>Tasks</b>).</p></td></tr><tr><td><p class="no-margin"><b>Campaign tags</b></p></td><td><p class="no-margin">Labels used to categorize and filter campaigns.</p></td></tr><tr><td><p class="no-margin"><b>(...) button</b></p></td><td><p class="no-margin">Quick actions for the campaign: <b>Edit</b>, <b>Duplicate</b>, <b>Pause</b>, <b>Mark as archived</b>, <b>View in Inbox</b> (filters inbox by campaign), <b>View in list</b> (filters the list view by campaign), and <b>Delete</b>.</p></td></tr></tbody></table>

**Note:** Campaign tags are specific to campaigns. Do not confuse them with AI Tags (used for conversations) or List Tags (used for lists).

You can also create a new campaign from the **\+ Create Campaign** button at the top right of the Campaigns table, and next to it there is a button to download campaign metrics and statistics in **CSV format**.

![](https://res.cloudinary.com/enginy/image/upload/v1771440106/helpcenter/campaigns-6.png)

If you select any campaign (by checking its row) in this table, you’ll see quick actions such as:

-   **Add to folder**
    
-   **View in Inbox**
    
-   **View in List**
    
![](https://res.cloudinary.com/enginy/image/upload/v1771440106/helpcenter/campaigns-7.png)

---

# Creating a Campaign
To create a new campaign:
1.  Navigate to the **Campaigns** section from the left side menu.
2.  Click **\+ Create Campaign** at the top right.

![](https://res.cloudinary.com/enginy/image/upload/v1771440106/helpcenter/campaigns-8.png)

A modal opens where you can choose how to start your campaign: **Create from scratch** or **Create from template**. Templates are pre-built workflows you can fully customize — edit the messages, add or remove steps, and adjust the sequence to match your strategy. They’re the fastest way to get started because they provide a proven structure tailored to common outreach use cases.

![](https://res.cloudinary.com/enginy/image/upload/v1771440107/helpcenter/campaigns-9.png)

The campaign creation wizard has four steps.

## Step 1 — Sequence
Define the basic configuration for your campaign:

![](https://res.cloudinary.com/enginy/image/upload/v1771440097/helpcenter/campaigns-10.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Campaign name</b></p></td><td><p class="no-margin">Give a descriptive name to the campaign. By default it is named [Identity name]'s Campaign.</p></td></tr><tr><td><p class="no-margin"><b>Campaign Identity</b></p></td><td><p class="no-margin">Assign the Enginy identity to link to this campaign. Determines the LinkedIn profile and/or email used. Mandatory to continue with the setup.</p></td></tr><tr><td><p class="no-margin"><b>Campaign Audience</b></p></td><td><p class="no-margin">Select a list or contacts individually to add them to the campaign.</p></td></tr></tbody></table>

After defining the basics you can proceed with the design of the logic of actions and conditions from **Start** to **End**.

Click **+** to add an **action** or a **condition** at any point in the sequence. The sequence moves forward step by step as long as the lead hasn’t replied and the wait time for the next step has been reached. If the lead replies to any message, the sequence stops for that lead (they won’t receive further automated steps).

### Available Actions
![](https://res.cloudinary.com/enginy/image/upload/v1771440097/helpcenter/campaigns-11.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Action</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Visit Profile</b></p></td><td><p class="no-margin">Visits the lead's LinkedIn profile.</p></td></tr><tr><td><p class="no-margin"><b>React to Last Post</b></p></td><td><p class="no-margin">React to the lead’s most recent LinkedIn post using one of the available reactions: <b>Like, Celebrate, Support, Love, Insightful,</b> or <b>Funny</b>. You can also select <b>Most Reacted</b> to automatically use the reaction type the post has received the most.</p></td></tr><tr><td><p class="no-margin"><b>Send LinkedIn Connection</b></p></td><td><p class="no-margin">Sends a connection request on LinkedIn.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn Message</b></p></td><td><p class="no-margin">Sends a direct message to a 1st-degree connection.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn InMail</b></p></td><td><p class="no-margin">Sends an InMail message (requires InMail credits).</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn Attachment</b></p></td><td><p class="no-margin">Sends a LinkedIn message with an attachment.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn Voice Message</b></p></td><td><p class="no-margin">Sends a voice message on LinkedIn (record or upload).</p></td></tr><tr><td><p class="no-margin"><b>Email</b></p></td><td><p class="no-margin">Sends an email from the connected email account.</p></td></tr><tr><td><p class="no-margin"><b>Task</b></p></td><td><p class="no-margin">Creates a manual task (for example, a reminder to call the lead).</p></td></tr><tr><td><p class="no-margin"><b>Add to another campaign</b></p></td><td><p class="no-margin">Moves the lead into a different campaign.</p></td></tr></tbody></table>

For the actions that include a message body (LinkedIn Message, LinkedIn InMail, LinkedIn Attachment, Voice Message, and Email) you can choose between:

-   **Generate with AI** — Uses AI variables to generate a personalized message dynamically for each contact.
    
-   **Manual** — Write the message yourself, optionally using personalization variables (e.g., first name, company name) or even AI variables within a message template.
    
![](https://res.cloudinary.com/enginy/image/upload/v1771440098/helpcenter/campaigns-12.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440098/helpcenter/campaigns-13.png)

**Note:** For LinkedIn messages you can make them feel more natural by bundling multiple short messages and send them like a real chat.

**Important:** AI-generated messages are available at no additional credit cost. It will just consume the credits for the AI variable to be generated, but no extra cost.

### Available Conditions
Conditions branch the sequence into two paths (**Yes** or **No**) depending on whether the condition is met:

![](https://res.cloudinary.com/enginy/image/upload/v1771440098/helpcenter/campaigns-14.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Condition</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">What it checks</p></td></tr><tr><td><p class="no-margin"><b>Accepted LinkedIn connection</b></p></td><td><p class="no-margin">Has the lead accepted the connection request within X days?</p></td></tr><tr><td><p class="no-margin"><b>Is already a connection</b></p></td><td><p class="no-margin">Is the lead already a 1st-degree LinkedIn connection?</p></td></tr><tr><td><p class="no-margin"><b>Has been contacted</b></p></td><td><p class="no-margin">Has the lead been contacted by some identity, within a determined time and channel?</p></td></tr><tr><td><p class="no-margin"><b>Has LinkedIn Profile</b></p></td><td><p class="no-margin">Does the lead have a LinkedIn profile? It actually checks if it has filled the field LinkedIn Profile ID, not LinkedIn Profile URL.</p></td></tr><tr><td><p class="no-margin"><b>Has Professional Email</b></p></td><td><p class="no-margin">Does the lead have an email address? It checks Professional email field.</p></td></tr><tr><td><p class="no-margin"><b>Has Mobile Phone</b></p></td><td><p class="no-margin">Does the lead have a phone number? It checks Mobile Phone field.</p></td></tr><tr><td><p class="no-margin"><b>Custom condition</b></p></td><td><p class="no-margin">Build a condition based on any variable of your choice.</p></td></tr></tbody></table>

### Timing Between Actions
By default each action executes immediately **as soon as possible** after the previous one. To add a delay, click the **As soon as possible** label at the top of the action box and configure the wait time in days.

![](https://res.cloudinary.com/enginy/image/upload/v1771440098/helpcenter/campaigns-15.png)

## Step 2 — Audience
To add an audience there are two options:

-   **Contacts from list** — Select an existing contact list to add all its contacts to the campaign at once.
    
-   **Contacts individually** — Browse and filter the full contacts view to add specific leads one by one.
    
![](https://res.cloudinary.com/enginy/image/upload/v1771440098/helpcenter/campaigns-16.png)

If you choose Contacts from list, you can use some filters to find the list in an easier way:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Filter</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Search box</b></p></td><td><p class="no-margin">Finds a list by name as you type.</p></td></tr><tr><td><p class="no-margin"><b>Most Recent / Alphabetical</b></p></td><td><p class="no-margin">Sorts lists by most recently created so the latest ones appear first or by alphabetical order.</p></td></tr><tr><td><p class="no-margin"><b>Created by</b></p></td><td><p class="no-margin">Filters lists by the workspace user who created them.</p></td></tr><tr><td><p class="no-margin"><b>Date</b></p></td><td><p class="no-margin">Filters lists by a date range (when the list was created).</p></td></tr><tr><td><p class="no-margin"><b>Tags</b></p></td><td><p class="no-margin">Filters lists by one or more tags assigned to the list.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440099/helpcenter/campaigns-17.png)

If you select contacts individually, a modal opens with the **All Contacts** list. From there, you can filter by any of the fields currently visible in your list view, select the contacts you want, and click **Add “X” contacts to a campaign**.

![](https://res.cloudinary.com/enginy/image/upload/v1771440099/helpcenter/campaigns-18.png)

**Note:** You can also add contacts to a campaign later directly from the **Contacts** list.

## Step 3 — AI Agent
In this step, you configure how the AI Agent will support (or fully handle) conversations **after a lead replies**.

![](https://res.cloudinary.com/enginy/image/upload/v1771440099/helpcenter/campaigns-19.png)

### Preview
The left panel shows a **conversation preview** for a sample lead from your audience so you can validate tone, AI variables or manual messages, and formatting. You can also **simulate replies as the lead** to see how the AI would respond under your current prompt and settings.

![](https://res.cloudinary.com/enginy/image/upload/v1771440099/helpcenter/campaigns-20.png)

### AI Conversation Continuation
If a lead replies to a message in the sequence, the automated sequence stops for that lead. You can then handle the follow-up conversation in three ways:
1.  **Manual handling** — You or your team respond manually.
2.  **Copilot mode (AI Suggestions)** — Select an AI Campaign prompt by clicking the **Edit Prompt** button. The AI will suggest a reply for you to review, edit, and send. You can modify the prompt in the editor and save the changes.
3.  **Automatic mode (AI Replies)** — Click the **Enable** button. The AI will generate and send replies without your approval.
**Important:** In all three modes the automated campaign sequence for that contact is halted once they reply. Only the conversation follow-up continues (manual or AI).

### Conditional Campaigns
Conditional Campaigns let you create flexible, rules-based sequences that adapt to each contact's unique data and behavior. Instead of building separate flows for different scenarios (email only, LinkedIn only, task only), you can create one campaign that adjusts itself based on what each contact has available and how they interact with your outreach.

#### Building Dynamic Sequences
Here is an example of a conditional campaign sequence:
1.  Check: Has LinkedIn Profile URL?
    -   **Yes:** Visit Profile
    -   **No:** Has Professional Email?
2.  **Check:** Is the lead already a LinkedIn connection?
    -   **Yes:** Send a LinkedIn message.
    -   **No:** Send a connection request. Then proceed to step 2.
3.  **Check:** Was the connection accepted within 15 days?
    -   **Yes:** Send a LinkedIn message.
    -   **No:** Proceed to step 3.
4.  **Check:** Does the lead have an email?
    -   **Yes:** Send an email.
    -   **No:** Proceed to step 4.
5.  **Check:** Does the lead have a phone number?
    -   **Yes:** Create a task to call.
    -   **No:** End the sequence.
This logic can be built entirely in the visual sequence editor with conditions and branching paths.

## Step 4 — Settings
In this final step, you define the **operational settings** of the campaign: how it’s organized, prioritized, and whether it should sync data back to your CRM before you launch it.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Setting</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Tags (optional)</b></p></td><td><p class="no-margin">Add tags to classify the campaign (for reporting, filtering, and organization). You can select existing tags or create new ones by typing.</p></td></tr><tr><td><p class="no-margin"><b>Folder (optional)</b></p></td><td><p class="no-margin">Choose the folder where the campaign will be stored, so it stays organized in the Campaigns dashboard.</p></td></tr><tr><td><p class="no-margin"><b>Prioritization</b></p></td><td><p class="no-margin">Sets the campaign priority (Low/Medium/High) to control which runs first within LinkedIn an email rate limits. Useful when multiple campaigns compete for limited daily sending capacity.</p></td></tr><tr><td><p class="no-margin"><b>Contacts CRM Sync</b></p></td><td><p class="no-margin">If enabled, syncs <b>contact-level data</b> and updates to your CRM. You can choose: No / Yes / Only when a contact replies.</p></td></tr><tr><td><p class="no-margin"><b>Conversations CRM Sync</b></p></td><td><p class="no-margin">If enabled, syncs <b>conversation activity</b> (messages/replies) and related engagement data) to your CRM Activity. You can choose: No / Yes / Only when a contact replies.</p></td></tr><tr><td><p class="no-margin"><b>Skip contacts with prior conversations</b></p></td><td><p class="no-margin">When enabled, the platform checks your LinkedIn inbox before sending. If a conversation already exists with a contact, the campaign <b>won’t message them</b>. Helps avoid duplicate outreach.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440100/helpcenter/campaigns-21.png)

**Note:** The skip contacts with prior conversations only works for LinkedIn messages that have been sent through Enginy.

**Important:** If your sequence includes **Task** steps, you **can’t disable Contacts CRM Sync** — it’s mandatory. The system needs the contact to exist in the CRM in order to create and assign the task there.

Also, task completion is **bi-directional**: marking a task as done in either the CRM or the platform will update the status in the other system as well.

In addition, if the Campaign contains the email channel, there are two more settings:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc;"><p class="no-margin">Setting</p></td><td style="background-color: #d7efdc;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Email Inbox</b></p></td><td><p class="no-margin">Select which email inboxes to use for the campaign. <b>Suffle</b> will rotate between all available inboxes for better deliverability.</p></td></tr><tr><td><p class="no-margin"><b>Email tracking </b>(optional)</p></td><td><p class="no-margin">Enable <b>Track email opens</b> (tracks when your email is opened using a pixel; this can trigger spam filters) and/or <b>Track link clicks </b>(monitors if links in your emails are clicked; this may increase spam risk).</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440100/helpcenter/campaigns-22.png)

Once these settings are defined, you can **Launch** the campaign (or **Save and exit** to continue later).
1.  Review the campaign details, sequence flow, and target contacts.
2.  If everything looks correct, click **Launch**.
3.  Your campaign will move to **Campaigns > Active**.
If you’re not ready yet, you can close the campaign creation wizard at any time without losing progress — the campaign is auto-saved as a Draft. You can find it later under **Campaigns > Draft**.

---

# Campaign Templates
Enginy provides pre-built campaign templates organized by complexity. Choose the right strategy based on your prospecting goals, effort level, and personalization needs.

![](https://res.cloudinary.com/enginy/image/upload/v1771440100/helpcenter/campaigns-23.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80; width: 159px;"><p class="no-margin">Template</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Categories</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Overview</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Best for</p></td></tr><tr><td style="width: 159px;"><p class="no-margin"><b>LinkedIn + Add Voice Message</b></p></td><td><p class="no-margin">Popular, Single channel</p></td><td><p class="no-margin">Send a LinkedIn connection request and three follow-ups, with the second follow-up being a voice message.</p></td><td><p class="no-margin">High-value prospects where you want to stand out fast; industries/roles that respond well to personal outreach (founders, sales leaders, execs); breaking through high inbox noise with a “human” touch.</p></td></tr><tr><td style="width: 159px;"><p class="no-margin"><b>LinkedIn Only (New)</b></p></td><td><p class="no-margin">Popular, Single channel</p></td><td><p class="no-margin">Engage with your ICP on LinkedIn with a sequence designed to start conversations and a soft landing approach.</p></td><td><p class="no-margin">Early-stage prospecting when you don’t have verified emails/phones; teams focusing on LinkedIn-first outbound; testing ICP messaging with low operational complexity.</p></td></tr><tr><td style="width: 159px;"><p class="no-margin"><b>LinkedIn + Email + Call</b></p></td><td><p class="no-margin">Best results, Multichannel</p></td><td><p class="no-margin">Maximize engagement with a proven triple-touch strategy across LinkedIn, email, and phone. Best for driving results at scale.</p></td><td><p class="no-margin">High-intent outbound where speed-to-meeting matters; enterprise/mid-market accounts with multiple stakeholders; teams with verified data (email + phone) aiming to maximize reply rates.</p></td></tr><tr><td style="width: 159px;"><p class="no-margin"><b>LinkedIn + Email</b></p></td><td><p class="no-margin">Multichannel</p></td><td><p class="no-margin">Leverage LinkedIn outreach with email follow-ups to stay top of mind and drive engagement across platforms.</p></td><td><p class="no-margin">When you have email but calls aren’t part of your motion; increasing touchpoints without heavy ops; nurturing leads that need 2–3 nudges to respond.</p></td></tr><tr><td style="width: 159px;"><p class="no-margin"><b>Email + Call</b></p></td><td><p class="no-margin">Multichannel</p></td><td><p class="no-margin">Engage prospects through a sequence of personalized emails and reinforce their replies with a final follow-up call to maximize engagement.</p></td><td><p class="no-margin">Classic SDR motion for outbound lists with strong email/phone coverage; speeding up deal cycles with a “close the loop” call; following up on warm signals (opens/replies) with a call.</p></td></tr><tr><td style="width: 159px;"><p class="no-margin"><b>Email Only</b></p></td><td><p class="no-margin">Single channel</p></td><td><p class="no-margin">Send a targeted 3-email sequence to capture attention and encourage responses.</p></td><td><p class="no-margin">High-volume outreach when LinkedIn isn’t available/allowed; outbound to large lists where you want simple execution; deliverability-focused teams running controlled experiments (subject lines, CTAs).</p></td></tr><tr><td style="width: 159px;"><p class="no-margin"><b>LinkedIn Social Warming</b></p></td><td><p class="no-margin">Single channel</p></td><td><p class="no-margin">Engage with your contacts by viewing their profile and liking their last post before sending a connection request.</p></td><td><p class="no-margin">Warming up cold prospects before pitching; improving acceptance rates for connection requests; relationship-led outreach where you want to build familiarity first.</p></td></tr></tbody></table>

---

# Inside a Campaign
When you click any campaign card, you open the campaign and land on the **Campaign View**. From here you can monitor performance, manage the setup, and run quick actions like **Launch**, **Edit campaign**, **View in Inbox**, **View in Table**, **Duplicate campaign**, **Save as a template**, or **Delete campaign**.

## General Information
At the top of the Campaign View you will find the main campaign metadata:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80; width: 320px;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td style="width: 320px;"><p class="no-margin"><b>Identity</b></p></td><td><p class="no-margin">The identity used to run the campaign (the sender profile/account tied to outreach actions).</p></td></tr><tr><td style="width: 320px;"><p class="no-margin"><b>Campaign Status</b></p></td><td><p class="no-margin">Current campaign state (e.g., Draft, Active/Running, Paused, Scheduled, Archived). Determines whether actions can execute.</p></td></tr><tr><td style="width: 320px;"><p class="no-margin"><b>Priority</b></p></td><td><p class="no-margin">High, Medium, or Low. Controls execution order when there are daily limits or multiple campaigns competing for capacity.</p></td></tr><tr><td style="width: 320px;"><p class="no-margin"><b>CRM Sync</b></p></td><td><p class="no-margin">Whether campaign data is synced to your CRM (e.g., contacts and/or conversations depending on configuration).</p></td></tr><tr><td style="width: 320px;"><p class="no-margin"><b>Replies</b></p></td><td><p class="no-margin">Shows how replies are handled: manual follow-up, AI suggestions (copilot), or AI auto-replies (if enabled).</p></td></tr><tr><td style="width: 320px;"><p class="no-margin"><b>Launch Date</b></p></td><td><p class="no-margin">A timestamp of when the campaign was launched (useful to track when results started and compare performance over time).</p></td></tr></tbody></table>

Clicking the three dots button **(…)** opens a quick actions menu with:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Option</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Launch</b></p></td><td><p class="no-margin">Starts the campaign so the sequence begins running for the selected audience.</p></td></tr><tr><td><p class="no-margin"><b>Edit campaign</b></p></td><td><p class="no-margin">Opens the campaign builder to modify the sequence, audience, AI Agent, and settings.</p></td></tr><tr><td><p class="no-margin"><b>View in Inbox</b></p></td><td><p class="no-margin">Opens the Inbox filtered to show only conversations related to this campaign.</p></td></tr><tr><td><p class="no-margin"><b>View in Table</b></p></td><td><p class="no-margin">Opens the campaign’s audience in table view so you can review contacts and campaign-related fields in a grid.</p></td></tr><tr><td><p class="no-margin"><b>Priority</b></p></td><td><p class="no-margin">Sets the campaign priority (e.g., High/Medium/Low) to help you rank which campaigns should take precedence when daily limits apply.</p></td></tr><tr><td><p class="no-margin"><b>Duplicate campaign</b></p></td><td><p class="no-margin">Creates a copy of the campaign (same structure/settings) so you can reuse it without starting from scratch.</p></td></tr><tr><td><p class="no-margin"><b>Save as a template</b></p></td><td><p class="no-margin">Saves this campaign as a reusable template so it can be selected from the template gallery in future campaigns.</p></td></tr><tr><td><p class="no-margin"><b>Delete campaign</b></p></td><td><p class="no-margin">Permanently removes the campaign (typically used to delete drafts).</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440100/helpcenter/campaigns-24.png)

The campaign view is organized in three tabs:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc;"><p class="no-margin">Tab</p></td><td style="background-color: #d7efdc;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Overview</b></p></td><td><p class="no-margin">Snapshot of campaign performance and progress across key steps (e.g., invited, contacted, replied), plus high-level engagement breakdowns.</p></td></tr><tr><td><p class="no-margin"><b>Audience</b></p></td><td><p class="no-margin">View and manage the contacts included in the campaign (who’s in, their status, and any audience-level actions).</p></td></tr><tr><td><p class="no-margin"><b>Activity</b></p></td><td><p class="no-margin">Full activity log for the campaign: what actions were executed, when, and for which contacts (useful for auditing and troubleshooting).</p></td></tr></tbody></table>

## Overview Tab
The **Overview** tab is your campaign performance cockpit. It aggregates the key KPIs across channels (LinkedIn, Email, and Tasks) so you can understand how the campaign is progressing, where leads are getting stuck, and what’s driving replies and positives — without digging into individual conversations.

### Outbound performance snapshot
At the top, you’ll see a high-level summary of outbound activity:

-   **All channels** gives you the global totals for the campaign.
    
-   You can switch to **LinkedIn**, **Email**, or **Tasks** to see channel-specific funnel metrics.
    
This view is designed to answer quickly:

-   *How many contacts are in the campaign?*
    
-   *How many have started receiving actions?*
    
-   *How many were actually contacted?*
    
-   *How many replied — and how many replies are positive?*
    
### Channel breakdown
#### **All Channels**
![](https://res.cloudinary.com/enginy/image/upload/v1771440100/helpcenter/campaigns-25.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Metric</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Total contacts</b></p></td><td><p class="no-margin">Total number of contacts included in the campaign.</p></td></tr><tr><td><p class="no-margin"><b>Started</b></p></td><td><p class="no-margin">Contacts who completed at least one campaign step (the campaign has started for them).</p></td></tr><tr><td><p class="no-margin"><b>Contacted</b></p></td><td><p class="no-margin">Contacts who received at least one outbound message (LinkedIn message and/or email).</p></td></tr><tr><td><p class="no-margin"><b>Replied</b></p></td><td><p class="no-margin">Contacts who replied through any channel.</p></td></tr><tr><td><p class="no-margin"><b>Positive</b></p></td><td><p class="no-margin">Contacts with replies tagged as positive (by AI or manually).</p></td></tr></tbody></table>

####   
**LinkedIn**

![](https://res.cloudinary.com/enginy/image/upload/v1771440101/helpcenter/campaigns-26.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Metric</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Engaged</b></p></td><td><p class="no-margin">Contacts with at least one LinkedIn interaction (profile visit, post reaction, connection request, message, etc.).</p></td></tr><tr><td><p class="no-margin"><b>Invited</b></p></td><td><p class="no-margin">Contacts who received a LinkedIn connection request from the campaign.</p></td></tr><tr><td><p class="no-margin"><b>Accepted</b></p></td><td><p class="no-margin">Contacts who accepted the connection request.</p></td></tr><tr><td><p class="no-margin"><b>Contacted</b></p></td><td><p class="no-margin">Contacts who received at least one LinkedIn message.</p></td></tr><tr><td><p class="no-margin"><b>Replied</b></p></td><td><p class="no-margin">Contacts who replied to a LinkedIn message.</p></td></tr><tr><td><p class="no-margin"><b>Positive</b></p></td><td><p class="no-margin">Contacts with LinkedIn replies tagged as positive.</p></td></tr></tbody></table>

**Note:** If a connection request was previously withdrawn, LinkedIn blocks new invites to that contact for 3 weeks. Enginy will automatically resend the invitation once the cooldown period ends.

#### **Email**
![](https://res.cloudinary.com/enginy/image/upload/v1771440101/helpcenter/campaigns-27.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Metric</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Sent</b></p></td><td><p class="no-margin">Emails successfully sent as part of the sequence.</p></td></tr><tr><td><p class="no-margin"><b>Clicked</b></p></td><td><p class="no-margin">Contacts who clicked at least one tracked link in an email.</p></td></tr><tr><td><p class="no-margin"><b>Replied</b></p></td><td><p class="no-margin">Contacts who replied via email.</p></td></tr><tr><td><p class="no-margin"><b>Positive</b></p></td><td><p class="no-margin">Contacts with email replies tagged as positive.</p></td></tr><tr><td><p class="no-margin"><b>Bounced</b></p></td><td><p class="no-margin">Emails that failed delivery (couldn’t be delivered).</p></td></tr></tbody></table>

#### **Tasks**
![](https://res.cloudinary.com/enginy/image/upload/v1771440101/helpcenter/campaigns-28.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Metric</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin">Pending</p></td><td><p class="no-margin">Tasks created by the campaign that are still open.</p></td></tr><tr><td><p class="no-margin">Completed</p></td><td><p class="no-margin">Tasks marked as done (in Enginy or in your CRM, if sync is enabled).</p></td></tr></tbody></table>

### Tagged Conversations
The **Tagged Conversations** widget shows how replies and conversations are being categorized (e.g., *Interested*, *Not Interested*, *Bad Timing*, *Meeting Booked*, languages, countries, etc.).

Use it to:

-   Spot patterns in objections and outcomes.
    
-   Filter the breakdown by **All**, **LinkedIn**, or **Email**.
    
-   Understand what’s driving “Positive” beyond raw reply rate.
    
![](https://res.cloudinary.com/enginy/image/upload/v1771440101/helpcenter/campaigns-29.png)

**Notes:**

-   Click any tag to jump to the corresponding Inbox folder and view only the conversations labeled with that tag.
    
-   Only tags added to conversations within the selected period are shown.
    
### Progress by action
Below the channel metrics, you’ll see a sequence flow preview showing the number of leads currently at each step (including waits, actions, and branches/conditions). This helps you quickly understand how leads are progressing through the campaign and where they might be getting stuck.

![](https://res.cloudinary.com/enginy/image/upload/v1771440102/helpcenter/campaigns-30.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440102/helpcenter/campaigns-31.png)

**Tip:** Click **View activity** on any step to jump to the **Activity** tab already filtered to that step.

## Audience Tab
The **Audience** tab is where you manage *who* is in the campaign and *what state* each lead is in right now. It’s the best place to monitor reach, spot blockers (errors/pauses), and take bulk actions.

### Status Summary
Each status chip is clickable and filters the table to show only leads in that state.

![](https://res.cloudinary.com/enginy/image/upload/v1771440102/helpcenter/campaigns-32.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Status</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Total audience</b></p></td><td><p class="no-margin">Total number of leads included in the campaign.</p></td></tr><tr><td><p class="no-margin"><b>Not started</b></p></td><td><p class="no-margin">Leads that haven’t reached the first step yet.</p></td></tr><tr><td><p class="no-margin"><b>In progress</b></p></td><td><p class="no-margin">Leads currently moving through the sequence (they’re still “running” for this campaign).</p></td></tr><tr><td><p class="no-margin"><b>Paused</b></p></td><td><p class="no-margin">Leads that are paused and won’t advance until resumed (paused at lead-level or because the campaign is paused).</p></td></tr><tr><td><p class="no-margin"><b>Error</b></p></td><td><p class="no-margin">Leads blocked by an issue preventing the next step from executing (e.g., message too long).</p></td></tr><tr><td><p class="no-margin"><b>Finished</b></p></td><td><p class="no-margin">Leads that reached the end of the sequence without replying (including cases where an email bounce ends their path).</p></td></tr><tr><td><p class="no-margin"><b>Replied</b></p></td><td><p class="no-margin">Leads who replied to a message. Once a lead replies, the automated sequence stops for that lead.</p></td></tr></tbody></table>

Clicking a status filters the list to show only contacts in that state. Once you select a status, you can further narrow down the results using the Audience Filters below.

### Audience Filters
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Filter</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Search bar</b></p></td><td><p class="no-margin">Search by lead name or lead's company name.</p></td></tr><tr><td><p class="no-margin"><b>Stage</b></p></td><td><p class="no-margin">Filter by sequence action (same as progress by action).</p></td></tr><tr><td><p class="no-margin"><b>Conversation tags</b></p></td><td><p class="no-margin">Filter by conversation tag.</p></td></tr><tr><td><p class="no-margin"><b>Engagement</b></p></td><td><p class="no-margin">Filter by engagement conditions (see list below).</p></td></tr><tr><td><p class="no-margin"><b>Filter contacts from the same company</b></p></td><td><p class="no-margin">Checkbox to show only leads who work at the same company.</p></td></tr><tr><td><p class="no-margin"><b>View dropdown</b></p></td><td><p class="no-margin">Change how contact information is displayed: <b>Contacts</b> (Name @ Company, Job Title below) or <b>Companies</b> (Job Title @ Company, Name below).</p></td></tr></tbody></table>

**Engagement** filter options:

![](https://res.cloudinary.com/enginy/image/upload/v1771440102/helpcenter/campaigns-33.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Engagement option</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">What it means</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn connection sent</b></p></td><td><p class="no-margin">A connection request was sent to the lead.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn connection accepted</b></p></td><td><p class="no-margin">The lead accepted the connection request.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn connection sent but not by platform</b></p></td><td><p class="no-margin">The lead is marked as “connection sent” but it wasn’t executed by Enginy/LinkedIn automation (imported/external state).</p></td></tr><tr><td><p class="no-margin"><b>Sent at least one message</b></p></td><td><p class="no-margin">At least one LinkedIn message or email was sent.</p></td></tr><tr><td><p class="no-margin"><b>Bounced message</b></p></td><td><p class="no-margin">An email bounced (delivery failed).</p></td></tr><tr><td><p class="no-margin"><b>Seen message </b>(optional)</p></td><td><p class="no-margin">The message was seen/opened. Requires <b>Track email opens</b> enabled.</p></td></tr><tr><td><p class="no-margin"><b>Clicked link </b>(optional)</p></td><td><p class="no-margin">The lead clicked/opened content (e.g., email opens). Requires <b>Track link clicks </b>enabled.</p></td></tr></tbody></table>

### Table columns
![](https://res.cloudinary.com/enginy/image/upload/v1771440102/helpcenter/campaigns-34.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Column</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Contact</b></p></td><td><p class="no-margin">Lead identity details (name, company, job title).</p></td></tr><tr><td><p class="no-margin"><b>Status</b></p></td><td><p class="no-margin">Current campaign status <b>plus a specific reason</b> when relevant (hover for the detailed tooltip).</p></td></tr><tr><td><p class="no-margin"><b>Activity</b></p></td><td><p class="no-margin">Icons showing the latest actions executed (excluding conditions). Hover to see the action details.</p></td></tr><tr><td><p class="no-margin"><b>Tags</b></p></td><td><p class="no-margin">Tags applied to the lead's conversation (manual or AI).</p></td></tr></tbody></table>

### Contact Side Panel
Clicking any row opens a side panel on the right showing deeper context:

-   **Lead profile summary** plus shortcuts to view in **LinkedIn, Inbox, CRM**, **List** table, **Add to** **Blocklist** (add lead to blocklist or add company to blocklist), **Add to another campaign**, and **Create a Task**).
    
-   **Timeline of steps** the lead has gone through (actions + conditions with timestamps).
    
-   **Status/error banner** when something blocks progress (e.g., “message too long”), often with a direct CTA like **Edit sequence**.
    
-   **View Sequence Detail** to jump into the sequence view for that lead’s path.
    
![](https://res.cloudinary.com/enginy/image/upload/v1771440103/helpcenter/campaigns-35.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440103/helpcenter/campaigns-36.png)

### **Bulk Actions**
Select one or more leads using the checkboxes on the left to reveal a popup with these actions:

![](https://res.cloudinary.com/enginy/image/upload/v1771440103/helpcenter/campaigns-37.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Action</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Retry errors</b></p></td><td><p class="no-margin">Re-attempts failed actions. Only appears when the selected lead has an Error status.</p></td></tr><tr><td><p class="no-margin"><b>View in list</b></p></td><td><p class="no-margin">Opens the contact list showing only the selected leads.</p></td></tr><tr><td><p class="no-margin"><b>View in Inbox</b></p></td><td><p class="no-margin">Opens the Inbox showing only the selected leads.</p></td></tr><tr><td><p class="no-margin"><b>Pause</b></p></td><td><p class="no-margin">Freezes the campaign for the selected leads.</p></td></tr><tr><td><p class="no-margin"><b>Resume</b></p></td><td><p class="no-margin">Resumes the campaign for paused leads.</p></td></tr><tr><td><p class="no-margin"><b>Remove from campaign</b></p></td><td><p class="no-margin">Removes the lead from the campaign. Once removed, a contact cannot be added back to the same campaign.</p></td></tr></tbody></table>

**Warning:** If you remove a lead from a campaign, you **can’t add that lead back to the same campaign later**. Double-check before removing to avoid losing them from that campaign permanently.

## Activity Tab
The Activity tab lists all actions performed in the campaign (excluding conditions).

![](https://res.cloudinary.com/enginy/image/upload/v1771440103/helpcenter/campaigns-38.png)

### Activity Filters
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Filter</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Search bar</b></p></td><td><p class="no-margin">Search by lead name or lead's company name.</p></td></tr><tr><td><p class="no-margin"><b>Stage</b></p></td><td><p class="no-margin">Filter by action in the sequence.</p></td></tr><tr><td><p class="no-margin"><b>Recipient</b></p></td><td><p class="no-margin">Filter by a specific contact.</p></td></tr><tr><td><p class="no-margin"><b>Date</b></p></td><td><p class="no-margin">Filter by time range.</p></td></tr></tbody></table>

### Activity List Columns
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Column</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Action</b></p></td><td><p class="no-margin">The activity performed (e.g., LinkedIn message sent, email sent, profile visited).</p></td></tr><tr><td><p class="no-margin"><b>Recipient</b></p></td><td><p class="no-margin">Lead in "Name @ Company" format.</p></td></tr><tr><td><p class="no-margin"><b>Status</b></p></td><td><p class="no-margin">Completed or In Progress.</p></td></tr><tr><td><p class="no-margin"><b>Completed</b></p></td><td><p class="no-margin">Timestamp of when the action was completed.</p></td></tr></tbody></table>

The Activity tab tracks LinkedIn actions (message, connect, visit, like), email actions (sent, replied, bounced), task assignments and completions, and any pending actions coming next.

---

# Campaign Statuses and Substatuses Reference
The Audience tab uses statuses and substatuses to explain precisely why a contact may not be progressing. Below is the complete reference.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Status</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Substatus</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin">In progress</p></td><td><p class="no-margin">Scheduled</p></td><td><p class="no-margin">Waiting for the configured time delay between actions to pass.</p></td></tr><tr><td><p class="no-margin">In progress</p></td><td><p class="no-margin">Identity limits</p></td><td><p class="no-margin">The identity has reached its daily connection request limits.</p></td></tr><tr><td><p class="no-margin">In progress</p></td><td><p class="no-margin">Waiting to connect</p></td><td><p class="no-margin">Waiting for the lead to accept the connection request.</p></td></tr><tr><td><p class="no-margin">In progress</p></td><td><p class="no-margin">Monthly conversation limit</p></td><td><p class="no-margin">The monthly conversation limit for this identity has been reached. Resets next month or contact the team to upgrade.</p></td></tr><tr><td><p class="no-margin">In progress</p></td><td><p class="no-margin">Connection withdrawn</p></td><td><p class="no-margin">LinkedIn connection request was withdrawn. X days remaining before retry.</p></td></tr><tr><td><p class="no-margin">In progress</p></td><td><p class="no-margin">Outside working hours</p></td><td><p class="no-margin">The campaign is paused because it is outside configured working hours.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Missing email</p></td><td><p class="no-margin">The email account used for this conversation is no longer available.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Email disconnected</p></td><td><p class="no-margin">Email credentials expired. Reconnect email to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">LinkedIn disconnected</p></td><td><p class="no-margin">The LinkedIn account used for this conversation is disconnected. Reconnect to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">System error</p></td><td><p class="no-margin">An error occurred while processing this conversation.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">InMail credits limit</p></td><td><p class="no-margin">The identity has run out of InMail credits.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Missing subject</p></td><td><p class="no-margin">A subject is required for InMail messages. Add a subject to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Invalid identity email</p></td><td><p class="no-margin">The email address of the identity is not valid. Connect email to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Missing contact email</p></td><td><p class="no-margin">The professional email for the contact has not been set or is invalid. Enrich email to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Lead not scraped</p></td><td><p class="no-margin">The lead is missing required information. Enrich the contact to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Identity misconfiguration</p></td><td><p class="no-margin">The LinkedIn identity is not configured correctly.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Missing email subject</p></td><td><p class="no-margin">No subject was found for the email. Add a subject to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Missing InMail subject</p></td><td><p class="no-margin">No subject was found for the InMail message. Add a subject to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Missing InMail message</p></td><td><p class="no-margin">There is no message content for the InMail. Add a message to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Missing LinkedIn message</p></td><td><p class="no-margin">There is no message content for the LinkedIn message. Add a message to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Empty message</p></td><td><p class="no-margin">The message content is empty. Add a message to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Missing CRM ID</p></td><td><p class="no-margin">The contact CRM ID is missing. Sync with CRM to get the CRM ID.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Missing owner ID</p></td><td><p class="no-margin">The owner ID is missing. Sync with CRM to get the CRM ID.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Missing campaign prompt</p></td><td><p class="no-margin">No campaign prompt was found. Add a campaign prompt to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Invalid LinkedIn ID</p></td><td><p class="no-margin">The LinkedIn profile ID for the lead is not valid. Enrich the contact to continue.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">Message too long</p></td><td><p class="no-margin">The connection request message exceeds the 1,900-character limit. Reduce the length.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">InMail message too long</p></td><td><p class="no-margin">The InMail message exceeds the 1,900-character limit. Reduce the length.</p></td></tr><tr><td><p class="no-margin">Error</p></td><td><p class="no-margin">LinkedIn URL not found</p></td><td><p class="no-margin">The LinkedIn profile URL for the lead was not found. Enrich the contact to continue.</p></td></tr><tr><td><p class="no-margin">Finished</p></td><td><p class="no-margin">Deleted</p></td><td><p class="no-margin">Contact has been removed from the campaign.</p></td></tr><tr><td><p class="no-margin">Finished</p></td><td><p class="no-margin">Blocked</p></td><td><p class="no-margin">This lead has been blocked.</p></td></tr><tr><td><p class="no-margin">Finished</p></td><td><p class="no-margin">Out of office</p></td><td><p class="no-margin">Contact replied with an out-of-office message. Sequence ends.</p></td></tr><tr><td><p class="no-margin">Finished</p></td><td><p class="no-margin">Bounced</p></td><td><p class="no-margin">Email to this lead has bounced.</p></td></tr><tr><td><p class="no-margin">Finished</p></td><td><p class="no-margin">No response</p></td><td><p class="no-margin">The sequence was completed successfully but the contact has not replied.</p></td></tr><tr><td><p class="no-margin">Finished</p></td><td><p class="no-margin">Not connected</p></td><td><p class="no-margin">The contact did not accept the connection request within the configured time period, or declined.</p></td></tr><tr><td><p class="no-margin">Paused</p></td><td><p class="no-margin">--</p></td><td><p class="no-margin">The contact was paused manually, or the entire campaign was paused, which paused all leads.</p></td></tr><tr><td><p class="no-margin">Replied</p></td><td><p class="no-margin">--</p></td><td><p class="no-margin">The contact replied to a message.</p></td></tr></tbody></table>

**Tip:** To fix an error, check the substatus in the Audience tab for that contact. Common fixes include enriching the contact's email, reconnecting your LinkedIn or email account, or syncing with your CRM.

---

# Managing Campaigns
## Editing an Active Campaign
You can modify the parameters of an active campaign such as time delay between actions, AI variables from each messaging step, and audience. However, changes will only apply to **future interactions** and will not affect actions already performed.
1.  Go to **Campaigns > Active**.
2.  Click the three-dot menu next to the campaign or enter in the campaign view.
3.  Select **Edit** or **Edit campaign**.

    ![](https://res.cloudinary.com/enginy/image/upload/v1771440103/helpcenter/campaigns-39.png)

    ![](https://res.cloudinary.com/enginy/image/upload/v1771440104/helpcenter/campaigns-40.png)

**Warning:** Once a campaign is launched (no longer in Draft), its sequence is locked — you can’t add new steps or remove existing ones. If you need a different flow, pause or archive the campaign and create a new one (or duplicate the campaign and edit the copy before launching).

## Pausing a Campaign
You can pause a campaign at any time. This is useful when you need to make adjustments or temporarily stop interactions.
1.  Go to **Campaigns > Active**.
2.  Click the three-dot menu next to the campaign or enter in the campaign view.
3.  Select **Pause**.

![](https://res.cloudinary.com/enginy/image/upload/v1771440104/helpcenter/campaigns-41.png)

## Duplicating a Campaign
You can duplicate any campaign (active, paused, or draft) from the three-dot menu. This creates a copy in Draft status that you can modify before launching.

## Archiving and Deleting
-   **Mark as archived** *—* Deactivates the campaign. It remains visible under the Archived filter.
    1.  Enter in the campaign view.
    2.  Click the three-dot menu
    3.  Select Status > Archived

![](https://res.cloudinary.com/enginy/image/upload/v1771440104/helpcenter/campaigns-42.png)

-   **Delete** *—* Permanently removes the campaign.
    
Both options are available from the three-dot menu on the campaign card.

---

# Understand Identity Limits and Capacity
Enginy runs campaign steps through **two execution queues**. This is what drives “Pending” items, pacing, and why some campaigns take longer to progress than others.

## Queue overview (Email vs LinkedIn)
-   **Email queue**: only includes **Send email** actions.
    
-   **LinkedIn queue**: includes actions that hit LinkedIn and can be **rate-limited**, which may create status **Pending** actions and slow down execution across campaigns using the same identity.
    
## LinkedIn actions that can be rate-limited
These actions can enter the LinkedIn queue and wait their turn:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">LinkedIn action</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Rate limit</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Daily cap</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Notes</p></td></tr><tr><td><p class="no-margin">Visit profile</p></td><td><p class="no-margin">1 visit every 4 min</p></td><td><p class="no-margin">50/day (150/day with Premium)</p></td><td><p class="no-margin">Can generate Pending if the queue is busy.</p></td></tr><tr><td><p class="no-margin">Like last post</p></td><td><p class="no-margin">1 like every 5 min</p></td><td><p class="no-margin">No daily max</p></td><td><p class="no-margin">Still rate-limited by time.</p></td></tr><tr><td><p class="no-margin">Send connection request</p></td><td><p class="no-margin">Configured by the user</p></td><td><p class="no-margin">Configured by the user</p></td><td><p class="no-margin">Controlled in Identity settings.</p></td></tr><tr><td><p class="no-margin">Evaluate connection request</p></td><td><p class="no-margin">5 evaluations every 30 min</p></td><td><p class="no-margin">No daily max</p></td><td><p class="no-margin">Throttled in batches.</p></td></tr><tr><td><p class="no-margin">Send message</p></td><td><p class="no-margin">Configured by the user</p></td><td><p class="no-margin">Configured by the user</p></td><td><p class="no-margin">Controlled in Identity settings.</p></td></tr></tbody></table>

## What runs instantly (non-LinkedIn nor email actions)
Everything else is **near-instant** (or completes very quickly depending on server load). These are typically “Enginy-side” operations, like:

-   Evaluating conditions (e.g., *has LinkedIn URL*, *is a connection*, etc.)
    
-   Branching logic and internal checks
    
These steps may technically pass through the same pipeline, but they **clear fast** and **priority barely impacts them**.

## How delays affect pacing
Campaign steps are also governed by **time delays** between actions.

Important nuance: when a queued LinkedIn action finally executes, Enginy **doesn’t automatically run the next step immediately** unless the **delay before that next step has already elapsed**. If the delay is still running, the lead waits until the delay finishes — then the next eligible action can be queued/executed.

## How Enginy prioritizes queued LinkedIn actions
When multiple LinkedIn actions are waiting in the queue, Enginy prioritizes them using this order:
1.  **Lead message depth first**  
    If two queued items are both Send LinkedIn message, Enginy sends first to the lead who has already received more LinkedIn messages earlier in the sequence.
2.  **Campaign priority second**  
    If the leads have the same number of prior messages, Enginy uses the **campaign’s Priority** (High > Medium > Low) to decide what goes first.
3.  **Random tie-breaker**  
    If both message depth and campaign priority are identical, execution order is random.
This model keeps long-running conversations moving forward while still letting you “fast-track” higher-priority campaigns when there’s a tie.

---

# LinkedIn Campaign Best Practices
## Connection Request Limits
LinkedIn imposes limits on daily connection requests to protect against spam. Enginy adheres to these limits to keep your account safe.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80; width: 213px;"><p class="no-margin">Account Type</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Recommended Daily Limit</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Notes</p></td></tr><tr><td style="width: 213px;"><p class="no-margin"><b>Standard LinkedIn</b></p></td><td><p class="no-margin">~20 invitations/day</p></td><td><p class="no-margin">LinkedIn often has a weekly cap around 100 invites. Exceeding ~20/day on a free account risks triggering defenses.</p></td></tr><tr><td style="width: 213px;"><p class="no-margin"><b>Premium / Sales Navigator</b></p></td><td><p class="no-margin">20<i>-</i>30 invitations/day</p></td><td><p class="no-margin">Higher volumes are technically possible (50--100), but consistently high sends with low acceptance rates risk restrictions.</p></td></tr><tr><td style="width: 213px;"><p class="no-margin"><b>New LinkedIn profiles</b></p></td><td><p class="no-margin">5-10 invitations/day</p></td><td><p class="no-margin">New accounts have less trust built up. Increase gradually once invitations are being accepted.</p></td></tr></tbody></table>

Enginy sets a default cap of **20 connection requests per day** per LinkedIn identity. If the daily limit is reached, Enginy automatically pauses connection requests and resumes the next day. Additionally, Enginy limits LinkedIn messages to **100 per day** per profile. You can configure the limits through Identities section.

**Tip:** Focus on quality over quantity. Sending fewer, more personalized invites will yield better results and keep your account in good standing.

## Optimal Sequence Length
A highly effective LinkedIn sequence typically includes **2***\-***3 touches**:
1.  **Connection request** *—* Optionally include a custom note to introduce yourself.
2.  **First message (after acceptance)** *—* Thank the contact for connecting and add value (e.g., a relevant resource or question).
3.  **Follow-up message** *—* If no response, send one more gentle follow-up after a few days.
4.  **Closing message** *—* If no response, send a last farewell message
Keep messages polite, concise, and spaced out over several days.

## Message Chunking Technique
When reaching out on LinkedIn, consider breaking a single long message into smaller chunks sent over a short span of time. This mimics the natural pace of someone typing in real time.

![](https://res.cloudinary.com/enginy/image/upload/v1771440104/helpcenter/campaigns-43.png)

**Instead of one long message like:**

"Hi {first name}, sorry for the direct approach *—* just wondering, do you happen to spend a lot of time each week updating Excel sheets? I'm asking because at Acme, we help HR professionals digitize administrative tasks. Mind if I ask you a couple of quick questions to see if we could help you reclaim up to 8 hours a week?"

**Split it into 3-4 short messages, which will be sent immediately one after the other:**
1.  "hi {first name}"
2.  "sorry for the direct approach *—* just wondering, do you spend a lot of time updating excel each week?"
3.  "i ask because at Acme we help HR professionals digitize admin tasks *—* can i ask you a couple of questions to see if we might help you win back 8 hours a week?"
4.  "if it's not a fit, no worries *—* i won't spam you"
**Tip:** Message chunks can be created easily using AI variables. Reach out to the Enginy team if you need assistance setting this up.

## Setting Timeframes for LinkedIn Invitations
When you add a LinkedIn connection request step to your sequence, you can set a **timeout** (e.g., 14 or 15 days). If the contact doesn’t accept within that period, Enginy marks the invitation as **Not accepted** and continues the sequence through the **“No”** branch of the condition.

![](https://res.cloudinary.com/enginy/image/upload/v1771440105/helpcenter/campaigns-44.png)

**Why this matters:**

-   **Keeps the campaign organized.** Leads who do not accept within a reasonable window are unlikely to accept at all.
    
-   **Identifies interested contacts quickly.** Separates engaged prospects from unresponsive ones.
    
**Note:** The contact can still accept the invitation after the timeout, but the automated sequence will continue through the "No" branch of the condition.

## Handling Unaccepted Invitations
If a prospect has not accepted your connection request after the configured timeframe:

-   **Wait and resend later** *—* Withdraw the old invite and attempt a new one after a few days or weeks. Do this sparingly *—* if they ignore a second invite, move on.
    
-   **Reach out through other channels** *—* If you have their email, send a brief, polite message mentioning your LinkedIn request.
    
-   **Do nothing** *—* Let it be and focus on other contacts. If Enginy's auto-withdrawal is enabled, the system will pull back the pending request automatically.
    
## Withdrawing Connection Requests
You can withdraw pending connection requests in bulk from Enginy:
1.  Navigate to **Identities > Configuration > LinkedIn > Withdrawals**.
2.  **Automatic withdrawals** *—* Toggle "Automatically withdraw pending invitations" and set a number of days (e.g., 15 days). Unanswered invites will be withdrawn automatically.
3.  **Manual withdrawals** *—* Select specific pending invitations from the list and confirm.

![](https://res.cloudinary.com/enginy/image/upload/v1771440105/helpcenter/campaigns-45.png)

**Important:** Once you withdraw an invitation, LinkedIn prevents you from sending a new connection request to that same person for **3 weeks**. LinkedIn does not notify the contact that you withdrew the invite.

**Note:** Regularly withdrawing stale invites is a good practice to stay within LinkedIn's invitation limits.

## Handling Not-Interested Contacts
If a lead replies but indicates they are not interested:
1.  **Thank them for their time** *—* A courteous response leaves a good impression and keeps the door open for the future.
2.  **Stay positive and professional** *—* Never show frustration or push back. Wish them success.
3.  **Ask for a referral (if appropriate)** *—* Politely ask if they know someone who might benefit from your offering.
4.  **Close on a positive note** *—* Keep the connection warm (e.g., "Let's stay connected *—* feel free to reach out if I can ever assist you in the future").
A "no" today is not a dead end. Handling it graciously ensures the contact might engage in the future or refer you to others.

## Common LinkedIn Mistakes to Avoid
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Mistake</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Why it hurts</p></td></tr><tr><td><p class="no-margin"><b>Using generic templates</b></p></td><td><p class="no-margin">Boilerplate messages feel copy-pasted and reduce acceptance and reply rates. Always personalize.</p></td></tr><tr><td><p class="no-margin"><b>Sending too many messages</b></p></td><td><p class="no-margin">Bombarding prospects annoys them. Stick to 2-3 messages, and give time delay between them.</p></td></tr><tr><td><p class="no-margin"><b>Poor targeting</b></p></td><td><p class="no-margin">Contacting people outside your ICP wastes time and leads to low response rates. Make use of the Contact Score field to identify the best contacts to outreach.</p></td></tr></tbody></table>

---

# Email Campaign Best Practices
## Recommended Sending Limits
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Limit Type</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Recommendation</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Rationale</p></td></tr><tr><td><p class="no-margin"><b>Daily limit</b></p></td><td><p class="no-margin">~30 emails per day per email address</p></td><td><p class="no-margin">Keeps your domain reputation healthy and stays well below provider hard caps.</p></td></tr><tr><td><p class="no-margin"><b>Hourly limit</b></p></td><td><p class="no-margin">5<i>-</i>10 emails per hour</p></td><td><p class="no-margin">Mimics natural human sending behavior. Enginy automatically throttles sends over time.</p></td></tr><tr><td><p class="no-margin"><b>Absolute upper limit</b></p></td><td><p class="no-margin">Never exceed 80 emails/day from one address</p></td><td><p class="no-margin">Even for well-warmed domains, exceeding this risks serious reputation damage.</p></td></tr></tbody></table>

Enginy automatically paces your campaign and enforces the configured sending limits. If you reach the daily cap, Enginy pauses sending for the day and resumes the next day.

**Tips:** To reach higher total volumes, connect multiple sender addresses or domains rather than increasing the send rate of a single inbox.

## Consequences of Exceeding Limits
-   **Account suspension or rate limiting** *—* Your email provider may temporarily block outgoing messages.
    
-   **Damage to domain reputation** *—* Unusual sending spikes get flagged by spam filters, causing more future emails to land in spam.
    
-   **Increased spam reports and bounces** *—* High-volume sends to cold contacts yield more bounces and complaints, further hurting deliverability.
    
## Adjusting Sending Limits
Enginy allows you to adjust daily and hourly send caps under your email identity settings. You might lower the volume temporarily if you notice deliverability issues, or raise it slightly after a successful warm-up period.

![](https://res.cloudinary.com/enginy/image/upload/v1771440105/helpcenter/campaigns-46.png)

**Warning:** Stick to the recommended values unless you have a specific reason to change them. Only experienced senders with properly warmed domains should consider higher limits, and even then with caution.

## Using Multiple Email Addresses
Connecting multiple email addresses to Enginy is a best practice for scaling outreach safely:

-   **Distributes the sending load** *—* Each inbox only sends a portion of the total emails, keeping every account within safe limits.
    
-   **Minimizes spam/blacklist risk** *—* If one address hits a deliverability issue, others continue operating normally.
    
-   **Maintains consistent performance** *—* Each email account builds its own reputation independently.
    
-   **Increases combined capacity** *—* For example, 3 inboxes at 30 emails/day each give you 90 emails/day total while each stays within the safe zone.
    
You can configure Enginy to rotate between connected email accounts when sending campaign emails (Shuffle), or assign different campaigns to different addresses.

## Email Deliverability Best Practices
1.  **Set up SPF, DKIM, and DMARC** *—* Make sure your domain's DNS is correctly configured. Use free online tools to verify your DNS health and email deliverability score.
2.  **Warm up your domain** *—* Send a small volume of emails for 2--3 weeks before launching campaigns (see Email Warm-up).
3.  **Limit daily volume per domain** *—* Stick to ~30 emails/day per domain and never exceed 80.
4.  **Vary your messages** *—* Do not send identical content to everyone. Use personalization and AI Variables to create unique messages for each prospect.
5.  **Keep it simple** *—* **no attachments** *—* Enginy does not allow attaching files directly (attachments are a common spam trigger). Instead, share files by adding a link (Google Drive, Dropbox, OneDrive, etc.).
6.  **Use multiple domains** *—* Spread outreach across several domains (e.g., [yourcompany.com](http://yourcompany.com), [yourcompany.io](http://yourcompany.io), [yourcompany.es](http://yourcompany.es)) and rotate them across campaigns.
**How to add a file link in your email:**
1.  Open the email step and go to the message editor.
2.  Click the link attachment icon (tooltip: **“Attach file via link”**).
3.  In Insert file via link, upload the file:
    -   **Drag & drop** it into the box, or click **browse** to select it.
    -   Supported formats: **PDF, DOC, XLS, PPT, TXT, CSV, ZIP** (max **2MB**).
4.  (Optional) Keep **Open in new tab** enabled if you want recipients to open the file in a new tab.
5.  Click **Add file**.
6.  Edit the **Label** text and confirm **Add file**. Enginy will upload the file and insert a shareable link into your email body.

![](https://res.cloudinary.com/enginy/image/upload/v1771440105/helpcenter/campaigns-47.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440105/helpcenter/campaigns-48.png)

**Important:** By keeping your emails lightweight, personalized, and link-based instead of attachment-heavy, you protect your domain reputation and dramatically increase your chances of landing in the inbox.

---

# Email Warm-up
## What Is Email Warm-up
Email warm-up is the process of gradually building the sending reputation of a new email account or domain before sending large campaign volumes. Over a period of weeks, you send a small number of emails each day, then slowly increase. The emails go to real recipients (or warm-up networks) who open and reply, signaling positive engagement. This builds trust with email providers (Gmail, Outlook, etc.) so they treat your domain as a legitimate sender.

## How to Activate Email Warm-up in Enginy
Email warm-up in Enginy has a fixed cost**/month (**ask either your account manager or the chat support) and must be activated by your assigned Account Manager. You can warm up one email address at a time by a single warm-up seat.
1.  Go to the **Identities** section.
2.  Select an identity, then navigate to **Configuration > Email > Manage** tab **> Start** button
3.  After two weeks, go back to **Identity Configuration > Email > Manage** tab and stop the warm-up. You can now send email campaigns from that address.
**Warning:**

-   Do **not** send email campaigns from the address while it is warming up.
    
-   You will receive automated warming emails during this period. Do **not** mark them as spam *—* this would defeat the purpose. Simply open and archive them.
    
**Important:** Even after the warm-up period, continue monitoring email performance. If you plan to further increase volume, do it in small steps. For scaling to very high volumes, add more domains or addresses and warm them up too, rather than pushing one domain to its limit.

## What Happens if You Skip Warm-up
-   **Emails flagged as suspicious** *—* Email providers notice sudden high-volume sending from a new source. Emails are likely routed to spam.
    
-   **Sending limits or blocks** *—* Providers may block or suspend your account for what looks like spam activity.
    
-   **Poor deliverability** *—* Your first campaign will likely have a very low inbox placement rate, and recipients may mark unfamiliar emails as spam, further damaging your reputation.
    
---

# Working Hours Configuration
Working hours settings define the time window during which your campaign can send messages. Outside of working hours, campaigns are automatically paused. For example, if your working hours are set to 9:00 AM *—* 6:00 PM, Enginy will not send any campaign messages before 9:00 AM or after 6:00 PM.

**Where to configure working hours:**
1.  Navigate to **Identities > Configuration > Contact Details.**
2.  Specify the days of the week and the time range considered as working hours for each identity.

![](https://res.cloudinary.com/enginy/image/upload/v1771440106/helpcenter/campaigns-49.png)

**Key points:**

-   Working hours are configured **per identity**, not per campaign. All campaigns using the same identity share the same schedule.
    
-   If you want different campaigns to operate on different schedules, use different identities with distinct working hour settings.
    
-   Working hours apply to **all** campaign action types *—* both LinkedIn actions and email sends.
    
**Tip:** Adjust working hours to match your prospects' time zones to ensure messages arrive at optimal engagement times.

---

# FAQs
## Q1: What happens if a contact responds to a message in my campaign?
The automated sequence for that contact stops immediately. They will not receive any further scheduled steps. You can then handle the conversation manually, use AI Copilot mode (review and send AI-suggested replies), or use AI Automatic mode (AI replies without approval). In all cases, the campaign sequence halts and only the conversation follow-up continues.

## Q2: Does the Analytics section data include actions I perform directly on LinkedIn outside of Enginy?
No. Campaign analytics only track actions performed through Enginy campaigns. Manual LinkedIn activity (connection requests, messages, post likes done outside the platform) is not reflected in reports. If you manage contacts manually outside Enginy, consider tagging or excluding them from campaigns to avoid overlap in reporting.

## Q3: Why do my reply rates appear lower than expected?
Automated replies such as "Out of Office" are excluded from the reply rate calculation. This gives you a more accurate measure of meaningful responses. Conversations tagged as Out of Office are still visible in the tag breakdown but do not inflate your reply metrics.

## Q4: Can I add contacts to a campaign after it has been launched?
Yes. You can add contacts at any time from the campaign's Target section or directly from the Contacts page. New contacts will start at the beginning of the sequence.

## Q5: How often is analytics data updated?
Data is updated in near real-time. You may experience brief delays (a few seconds to minutes) depending on processing time and campaign activity volume.
