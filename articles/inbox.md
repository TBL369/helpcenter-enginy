# Inbox

The Inbox is a centralized communication hub where you can manage all conversations with your leads across multiple channels — Email, LinkedIn, and Tasks. It unifies sales communication into one interface for easier outreach, follow-up, and conversation management. Enhanced with AI capabilities, the Inbox helps you organize conversations, track every interaction, and reply faster with ready-to-send AI drafts.

---

## Prerequisites / Before You Start

- Your Admin must grant you the appropriate identity access permissions. Without access to the relevant identities, you will not see all conversations.
- Configuration path: **Settings** > **Edit User Permissions** > **Campaign Tab** > **Identities Access**.

---

## Table of Contents

- [Permissions and Access](#permissions-and-access)
- [Interface Overview](#interface-overview)
- [Column 1: Folders and Tags (Sidebar)](#column-1-folders-and-tags-sidebar)
  - [Folders](#folders)
  - [Tags](#tags)
  - [AI Tags (Auto-Tagged)](#ai-tags-auto-tagged)
  - [Custom AI Tags](#custom-ai-tags)
  - [Manual Tags](#manual-tags)
  - [Tag Compatibility and Dynamic Updates](#tag-compatibility-and-dynamic-updates)
- [Column 2: Conversations (Message List)](#column-2-conversations-message-list)
  - [Conversation Card Details](#conversation-card-details)
  - [Search and Filters](#search-and-filters)
  - [Bulk Actions](#bulk-actions)
- [Column 3: Chat View (Conversation Timeline)](#column-3-chat-view-conversation-timeline)
  - [Timeline Elements](#timeline-elements)
  - [Sending Messages](#sending-messages)
  - [Replying and Channel Selection](#replying-and-channel-selection)
  - [Email Features](#email-features)
  - [LinkedIn Features](#linkedin-features)
  - [AI Drafts and Suggestions](#ai-drafts-and-suggestions)
  - [Scheduling Messages](#scheduling-messages)
- [Column 4: Contact Details (Side Panel)](#column-4-contact-details-side-panel)
  - [Header Actions](#header-actions)
  - [Contact Information](#contact-information)
  - [Company Information](#company-information)
  - [Activity Timeline](#activity-timeline)
  - [Campaign Status](#campaign-status)
  - [Work History](#work-history)
- [FAQs](#faqs)

---

## Permissions and Access

Access to conversations in the Inbox is determined by user permissions, which are managed by Admins.

| Access Level | Description |
|---|---|
| Full Access | Users with access to **All Identities** can view all conversations in the Inbox. |
| Limited Access | Users with access to specific identities only will see conversations related to those identities. |

> **Note:** To change your access level, contact your Admin. The configuration path is **Settings** > **Edit User Permissions** > **Campaign Tab** > **Identities Access**.

---

## Interface Overview

The Inbox interface is divided into four main columns to streamline your workflow:

| Column | Name | Purpose |
|---|---|---|
| 1 | Folders and Tags (Sidebar) | Navigate and filter conversations by status or category. |
| 2 | Conversations (Message List) | Browse and select conversations matching your criteria. |
| 3 | Chat View (Conversation Timeline) | View the full history of interactions with a lead. |
| 4 | Contact Details (Side Panel) | Access complete lead and company information. |

---

## Column 1: Folders and Tags (Sidebar)

The sidebar is your primary navigation tool, organizing your workload into Folders and Tags.

### Folders

Folders help you focus on what matters most by categorizing conversations based on their state.

| Folder | Description | Use Case |
|---|---|---|
| Inbox | Shows active conversations with at least one reply. | Centralize all ongoing interactions. |
| AI Draft | Displays conversations where AI has generated a suggested reply. The AI Draft appears automatically in the composition box. | Review and use AI-generated responses. |
| Unread | Contains conversations marked as unread. Automatically updates when opened. | Focus on new, unseen messages. |
| Scheduled | Shows messages scheduled for future delivery. | Monitor upcoming automated sends. |
| Sent | Displays conversations where you have sent at least one message. | Review all engaged conversations. |

> **Note:** LinkedIn connection requests sent with a note (InMail) only appear in the Sent folder after the recipient accepts the request. This is a LinkedIn platform limitation.

### Tags

Tags allow you to categorize and filter conversations based on context. A conversation can have multiple tags simultaneously. Clicking a tag in the sidebar filters your view to show only conversations with that tag. Each tag displays a count badge indicating how many conversations use it.

Tags can be applied manually or automatically by AI.

#### AI Tags (Auto-Tagged)

The system automatically applies tags based on the lead's intent and conversation context. AI-generated tags display a sparkle icon and appear as "auto-tagged" events in the activity timeline.

| Tag | Description |
|---|---|
| Interested | Lead shows positive intent or engagement. |
| Not Interested | Lead explicitly declines or shows no interest. |
| Bad Timing | Lead declines due to current timing but indicates future openness. |
| Meeting Booked | A meeting has been scheduled with the lead. |
| Not the Target Persona | Lead does not match the intended audience. |
| Out of Office | Lead is unavailable or away. |
| Referred | Lead has referred you to another contact. |

> **Tip:** Hover over an AI tag to see a tooltip explaining why it was applied (e.g., "Explicitly declines due to current timing and indicates future openness").

#### Custom AI Tags

You can create your own AI tags directly from the Inbox. Each custom AI tag allows you to define:

- **Sentiment Category:** Assign Neutral, Positive, or Negative sentiment.
- **Custom AI Prompt:** Define the conditions under which the system should apply the tag.

> **Important:** AI tags must have a valid prompt configured before they can be activated.

#### Manual Tags

Users can create custom tags with unique names and colors. Manual tags appear as "Tagged as" events in the activity timeline, showing the user who applied the tag and the timestamp. This differentiates them from AI tags, which appear as "auto-tagged."

#### Tag Compatibility and Dynamic Updates

- A conversation can have multiple tags simultaneously (e.g., "Interested" and "Bad Timing").
- Tags are automatically updated as the conversation evolves — old tags may be removed and new ones added.
- The AI uses a compatibility matrix to ensure tagging accuracy and keep analytics current.

---

## Column 2: Conversations (Message List)

This column displays all conversations matching your selected folder or filter.

### Conversation Card Details

Each conversation preview includes the following elements:

| Element | Description |
|---|---|
| Contact Info | Name, Job Title, and Company. |
| Blue Dot | Indicates an unread message. |
| Tag Badges | Colored badges displaying applied tags. |
| Channel Icons | Shows if the conversation is via Email or LinkedIn (Tasks are not displayed). |
| Message Preview | First 90 characters of the last message with timestamp. |
| ICP Score Badge | Indicates lead fit: Green (High), Yellow (Medium), Red (Low/Disqualified). |

### Search and Filters

Use the search bar or apply filters to find specific conversations. You can apply multiple filters simultaneously.

**Available Filters:**

| Filter | Options |
|---|---|
| Status | Active, Paused, or Completed. |
| Tags | Show conversations with selected tags. |
| Channel | LinkedIn, Email, or Tasks. |
| Campaign | Filter by specific campaign. |
| Company | Filter by company name. |
| ICP Score | High, Medium, Low, Disqualified, or Missing Data. |
| Date Range | Filter conversations with messages sent within the specified range. |

**How to add filters:**

1. Click the filter icon in the top-right corner.
2. Select a filter type and define criteria.
3. Applied filters appear as chips above the conversation list.
4. Click the **X** on any chip to remove that filter.

### Bulk Actions

Select multiple conversations using checkboxes (or "Select All") to reveal the action toolbar.

> **Note:** The checkbox appears after a slight delay when hovering to preserve a smooth scrolling experience.

| Action | Description |
|---|---|
| Mark as Read/Unread | Change read status for all selected conversations. |
| Apply Tags | Add tags to selected conversations (you can create new tags if needed). |
| Update Tags | Add or remove tags from all selected conversations. |
| Pause Conversations | Pause campaign activity by contact or company level. Only affects conversations that are currently running (not finished or replied). |
| Export | Export selected conversations to your CRM or download as CSV. Includes an option to download all conversation transcripts as plain text. |

---

## Column 3: Chat View (Conversation Timeline)

This view shows the full chronological history of all interactions with a lead, including messages, tasks, and campaign activities from your entire team.

> **Note:** Access to this complete history depends on user permissions. A user must have the appropriate access rights to view the full timeline of team interactions.

### Timeline Elements

| Element | Description |
|---|---|
| Messages | Email and LinkedIn messages with sender avatars and status indicators (whether sent manually or auto-generated with AI variables). |
| Audio Messages | LinkedIn voice notes with playback controls. |
| Campaign Activity | Logs campaign actions (e.g., "Visited profile," "Email opened," "Invitation accepted," "Link clicked"). |
| Tasks | Displays task description, due date, notes, and completion controls. |
| Tag Events | Logs tag changes and indicates whether applied by AI ("auto-tagged") or user ("Tagged as"). |
| Actions | Records actions like "Added to blocklist by [user]" or "Paused conversations by [user]" with timestamps. |
| Scheduled Messages | Queued messages displaying the scheduled send time with "Send Now" and "Cancel" action buttons. |
| New Messages Divider | Blue line separating unread messages from previously viewed ones. |
| Translation | Option to translate incoming messages to your preferred language. |

### Sending Messages

The composition box is located at the bottom of the chat view and adapts based on the conversation channel.

#### Replying and Channel Selection

When the conversation history includes messages from multiple senders, you can choose:

- **Whom to reply to** when there are multiple senders in the thread.
- **Which channel to use** (Email or LinkedIn) if previous messages were sent via both channels.

This ensures continuity and allows responses to follow the same communication channel as the existing conversation.

#### Email Features

| Feature | Details |
|---|---|
| To Field | Pre-filled with recipient information. |
| Subject Line | Pre-filled based on conversation thread. |
| Rich Text Editor | Formatting tools: Bold, Italic, Underline, Ordered list, Bullet list. |
| Images | Supported formats: JPEG, PNG, GIF. Max size: 5.0 MB. |
| File Attachments | Supported format: PDF. Max size: 5.0 MB. |
| Signature | Email signature automatically included. |

> **Important:** To prevent spam or bounce issues, all file attachments are sent as links rather than direct attachments. This improves deliverability and ensures your messages reach the recipient's inbox.

#### LinkedIn Features

| Feature | Details |
|---|---|
| Text Format | Plain text only (LinkedIn platform limitation). |
| Character Limit | 8,000 characters. |
| Image Attachments | Max size: 2.0 MB. |
| File Attachments (PDF) | Max size: 2.0 MB. |
| Emoji Reactions | React to LinkedIn messages with emojis directly from the Inbox. |
| Open in LinkedIn | Option to view the full thread in a new browser tab on the LinkedIn platform. |

### AI Drafts and Suggestions

When AI detects a positive or engaging message from a lead, it automatically generates a draft reply. If an AI draft is available, you will see:

- **Suggestion Text:** Appears inside the text box.
- **Tap to Edit:** Load the suggested message into the composition box to review and personalize it before sending.
- **Directly Send:** Press the send button to send the AI suggestion immediately.

> **Tip:** You can always discard the AI draft entirely and write your own response from scratch.

### Scheduling Messages

You can schedule messages for future delivery:

1. Compose your message.
2. Click the expand icon next to the **Send** button.
3. Choose a time from the available options:

| Option | Available Slots |
|---|---|
| Today | 9:00 AM, 1:00 PM, 6:00 PM. If a slot has already passed, the next available slot is suggested. |
| Tomorrow | 9:00 AM, 1:00 PM. Both slots are shown only if all three of today's options have passed (i.e., it is after 6:00 PM). |
| Custom | Pick any future date and time. |

4. Once scheduled, the message appears in the timeline with the scheduled time and displays two action buttons: **Send Now** to send immediately, and **Cancel** to remove the scheduled message.

---

## Column 4: Contact Details (Side Panel)

Displays complete lead and company information with actionable shortcuts.

> **Note:** By default, this panel is hidden. Open it by clicking the lead's name at the top of the messages or by using the button in the top-right corner of the chat view.

### Header Actions

The header displays the contact summary (Name, Position, Company) and provides quick action buttons:

| Action | Description |
|---|---|
| Pause Conversations | Pause at contact or company level. |
| View LinkedIn Profile | Open the lead's LinkedIn profile in a new tab. |
| Open in CRM | Direct link to the CRM record. If the contact has both Contact and Lead associations, a dropdown menu lets you choose which one to open. If there is only one association, the button opens it directly. Disabled if the contact is not synced to CRM. |
| View in Table | Open the contact in the contacts table view. |
| Add Tags | Apply manual or AI tags to the conversation. |

**Additional options (via the three-dot menu):**

- Add to Blocklist (contact or company level)
- Add to Another Campaign
- Create Task

> **Note:** Actions like Add to Blocklist, Create Task, and Add Tags are recorded in the activity timeline, showing the user who performed the action and the timestamp.

### Contact Information

| Field | Description |
|---|---|
| Email | Contact email with verification status indicator. |
| Phone Number | Direct phone number if available. |
| Enrichment Option | Option to enrich missing contact data directly from the panel. |
| ICP Score | Lead fit score with explanation of the scoring criteria. |
| Job Title | Current role and position. |
| Location | Geographic location of the contact. |

**CRM Sync Status:**

- Shows owner and last sync time when connected.
- **Resync** button to manually refresh data.
- **Enable Sync** button if not yet connected (opens CRM export modal).

### Company Information

| Field | Description |
|---|---|
| Company Name | Organization name. |
| Employee Count | Number of employees with growth rate. |
| Contacts in Enginy | Number of contacts from this company in your database, with "View Contacts" and "Add Contacts" actions. |
| Company Score | Overall company fit score. |
| Website | Company website URL. |
| LinkedIn | Company LinkedIn page. |
| Phone | Company phone number. |
| HQ Location | Headquarters location. |

### Activity Timeline

Chronological log of all interactions from the last 19 months:

- Messages sent and received
- Campaign steps executed
- Profile visits and connection requests
- Email opens
- Invitations accepted
- Link clicks

### Campaign Status

Displays all campaigns where the lead is enrolled:

| Field | Description |
|---|---|
| Campaign Name | Linked campaign name (clickable). |
| Current Status | In Progress, Paused, Finished, or Replied. |
| Pause Control | Hover over "In Progress" status to pause specific campaign messages for this lead, allowing temporary control over campaign activity. |

### Work History

Lists previous roles and companies, including tenure duration. This information is helpful for understanding the contact's career trajectory and personalizing your outreach.

---

## FAQs

### Why can I not see all conversations in my Inbox?

Your visibility is determined by your identity access permissions. If you only have access to specific identities, you will only see conversations related to those identities. Contact your Admin to request access to additional identities via **Settings** > **Edit User Permissions** > **Campaign Tab** > **Identities Access**.

### Why do my LinkedIn connection requests not appear in the Sent folder?

LinkedIn connection requests sent with a note (InMail) only appear in the Sent folder after the recipient accepts the request. This is a LinkedIn platform limitation.

### How do I know if a tag was applied by AI or manually?

AI-applied tags display a sparkle icon and appear as "auto-tagged" events in the activity timeline. Manual tags appear as "Tagged as" events, showing the user who applied the tag and the timestamp.

### Can I edit or delete an AI-generated draft before sending?

Yes. When an AI draft appears in your composition box, click "Tap to Edit" to load it into the editor, make any changes you want, and then send the modified message. You can also discard the draft entirely and write your own response.

### Why are my file attachments sent as links instead of direct attachments?

To prevent spam filters and bounce issues, all file attachments in emails are automatically converted to links. This improves deliverability and ensures your messages reach the recipient's inbox.
