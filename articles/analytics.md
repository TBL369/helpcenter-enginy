# Analytics

The Analytics page helps you understand your outreach performance across LinkedIn and Email. It provides deep insights into how many people you have reached, your reply rates, and which campaigns or identities are performing best.

---

# Table of Contents

- [Understand the Page Structure](#understand-the-page-structure)
- [Explore the Performance Tab](#explore-the-performance-tab)
  - [The Outbound Funnel](#the-outbound-funnel)
  - [Tagged Conversations](#tagged-conversations)
  - [Manage Tags in Analytics](#manage-tags-in-analytics)
  - [Performance Tables](#performance-tables)
- [Explore the Summary Tab](#explore-the-summary-tab)
  - [Replies Chart](#replies-chart)
  - [Total Metrics](#total-metrics)
  - [LinkedIn Metrics](#linkedin-metrics)
  - [Email Metrics](#email-metrics)
- [Filter Your Analytics Data](#filter-your-analytics-data)
- [Use Date Ranges and Comparisons](#use-date-ranges-and-comparisons)
- [Export Analytics Data](#export-analytics-data)
- [FAQs](#faqs)

---

# Understand the Page Structure

The Analytics Dashboard is divided into two main views:

| Tab | Description |
|-----|-------------|
| **Performance** | A performance view showing conversion rates, engagement, and results per campaign, identity, and tag. |
| **Summary** | A time-based view showing daily actions and trends over time. |

---

# Explore the Performance Tab

The Performance Tab focuses on conversion rates, percentages, and comparative performance across your campaigns.

## The Outbound Funnel

The main chart displays your outbound process as a funnel visualization. You can switch between three views using the channel selector:

- All channels
- LinkedIn
- Email

Each bar in the funnel represents a stage of your outbound process:

| Stage | Description | Calculation |
|-------|-------------|-------------|
| **Total Audience** | Total number of people added to a campaign during the selected period. This represents 100% of your pool. | Base metric (100%) |
| **Engaged** | Contacts who took any action: LinkedIn profile visits, connection requests, messages, or were contacted via email. | (Engaged / Total Audience) x 100 |
| **Contacted** | Contacts who received at least one message (LinkedIn or Email). | (Contacted / Total Audience) x 100 |
| **Replied** | Contacts who responded to your outreach (LinkedIn or Email). | (Replied / Contacted) x 100 |
| **Positive** | Conversations tagged with positive category tags (e.g., "Interested", "Meeting booked"). | (Positive / Contacted) x 100 |

> **Note:** Positive Replies include both AI-generated positive tags and manual tags you have created that reflect genuine interest or success (e.g., "Interested", "Meeting booked"). These help you quickly measure real buying intent and engagement quality.

## Tagged Conversations

On the right side of the Performance Tab, you will see a list of tags with bars indicating the volume of conversations for each category.

**Filtering options:**

- All Channels
- LinkedIn
- Email

**Key behaviors:**

- **Counting rule:** Only shows tags that were added during the selected time period.
- **Dynamic updates:** Switching channels updates the chart dynamically.
- **Interactive navigation:** Clicking on any tag opens the Inbox, automatically filtered to show conversations with that specific tag. This makes it easy to review, follow up, or analyze the specific replies behind each category.

## Manage Tags in Analytics

Understanding how tag removal affects your Analytics data is important for maintaining accurate metrics:

| Action | Effect on Conversations | Effect on Analytics |
|--------|------------------------|---------------------|
| **Deleting a tag** (AI or manual) | All instances of that tag are removed from conversations. | The tag will no longer appear in Analytics. |
| **Deactivating an AI tag** | Tags already assigned to existing conversations remain intact. | The metric for that tag will still appear in Analytics. |

> **Important:** To remove a deactivated tag from Analytics, you must either manually remove the tags from the corresponding conversations or fully delete the tag from the AI Conversations Tags page.

## Performance Tables

Below the funnel, you can toggle between two detailed performance tables to compare results.

### Campaigns Performance Table

Shows how each campaign performs overall and by channel.

| Category | Columns |
|----------|---------|
| **General** | Audience, Contacted, Replied, Positive |
| **LinkedIn** | Engaged, Sent, Accepted, Contacted, Replied, Positive |
| **Email** | Contacted, Opened, Clicked, Replied, Positive |

> **Tip:** Hover over the "Positive" cell to see a breakdown of specific positive tags (e.g., "Interested", "Meeting booked").

**Sorting behavior:**

- The table is sorted by Reply Rate by default.
- Reply rate reflects all accumulated conversations.
- Example: 100% means 1 reply from 1 person; 76.1% means 54 replies from the total audience.

### Identities Performance Table

Analyzes the effectiveness of each sender or identity.

| Category | Columns |
|----------|---------|
| **General** | Audience, Contacted, Replied, Positive |
| **LinkedIn** | Engaged, Sent, Acceptance Rate, Contacted, Replied, Positive |
| **Email** | Contacted, Opened, Clicked, Replied, Positive |

---

# Explore the Summary Tab

The Summary Tab is a time-based view that helps you understand how your activity evolves over time with daily breakdowns.

## Replies Chart

A line chart showing replies over time, with separate lines for each channel.

| Line | Description |
|------|-------------|
| **Blue line** | Replies received through LinkedIn |
| **Green line** | Replies received via Email |

**Counting rules:**

- Each person is counted once per day they reply.
- If someone replies on Monday and again on Wednesday, they are counted on both days.
- Bounced emails (delivery failures) are NOT counted as replies.

## Total Metrics

Four charts represent the overall campaign funnel over time.

### Added to Campaign

| Aspect | Description |
|--------|-------------|
| **What it means** | How many new people entered your campaigns each day. |
| **Counting** | Each person is counted once on the day their campaign started. |

### Total Started

| Aspect | Description |
|--------|-------------|
| **What it means** | How many people had their first action or activity (e.g., profile visit, message sent). |
| **Counting** | Each person is counted once on the day of their very first activity. |

> **Important:** This can include people added in previous periods if their first action happened during your selected dates.

### Total Contacted

| Aspect | Description |
|--------|-------------|
| **What it means** | How many people received their first message from you. |
| **Counting** | Each person is counted once on the day you sent them their first message (LinkedIn or Email). |

### Companies Contacted

| Aspect | Description |
|--------|-------------|
| **What it means** | Number of unique companies contacted through your campaigns. |
| **Counting** | Each company is counted once, on the day the first contact with any person in that company was made. |

> **Note:** This metric is derived from the Total Contacted people metric, aggregated by company.

## LinkedIn Metrics

Tracks all LinkedIn outreach activity performed through your Enginy campaigns:

| Metric | Description | Counting Rule |
|--------|-------------|---------------|
| **Messages Sent** | Every LinkedIn message or InMail sent. | Every single message counts. If you send 3 messages to one contact, that counts as 3. |
| **Connection Requests Sent** | Number of contacts who received a LinkedIn connection request via your Enginy campaigns. | Each person is counted once on the day you sent them a connection request. |
| **Connections Accepted** | Number of contacts who accepted the LinkedIn connection request sent through your Enginy campaigns. | Each person is counted once on the day they accepted. Compare to "Connection Requests Sent" to calculate your acceptance rate. |
| **Visited Profiles** | Number of LinkedIn profile visits made to contacts. | Every visit counts, including multiple visits to the same person. |
| **Liked Posts** | Number of posts liked on LinkedIn. | Every like counts. You can like multiple posts from the same person. |

> **Note:** LinkedIn shows contacts when you view their profile, unless you are browsing in private mode. Profile visits and post likes are effective ways to warm up contacts before reaching out.

## Email Metrics

Tracks your email outreach activity:

| Metric | Description | Counting Rule |
|--------|-------------|---------------|
| **Emails Sent** | Number of email messages sent. | Every single email counts. If you send a 5-email sequence to one contact, that counts as 5. |
| **Emails Bounced** | Number of conversations where the email failed to deliver. | Each bounce message received is counted. |
| **Emails Opened** | Number of email messages that were opened. | Each email is counted once (first open only), even if someone opens it multiple times. |
| **Emails Clicked** | Number of people who clicked on a link in your email. | Each email is counted once (first click only), even if they click multiple times. |

> **Important:** Email open tracking uses tracking pixels and is not 100% accurate, as some email clients block tracking. High bounce rates indicate a need for better data quality or email verification.

---

# Filter Your Analytics Data

You can customize the Analytics data you view using the following filters:

| Filter | Description |
|--------|-------------|
| **Identities** | Filter by sender identity. |
| **Created By** | Filter by the user who created the campaign. |
| **Campaigns** | Filter by specific campaign. |
| **Campaign Tags** | Filter by tags assigned to campaigns. |
| **Company Country** | Filter by the company's country field from your company data. Useful for comparing performance across regions with similar languages or market characteristics. |

---

# Use Date Ranges and Comparisons

The dates you choose in the filter determine what data you see across all Analytics views.

| Period | Description |
|--------|-------------|
| **Selected Period** | The specific dates you want to analyze (e.g., Jan 15 -- Jan 30). |
| **Previous Period (Comparison)** | Automatically calculated to be the same length as your selected period, shifted backward in time. |

**Example:**

- Selected: Jan 15 -- Jan 30 (15 days)
- Previous: Dec 31 -- Jan 14 (also 15 days)

> **Tip:** Use the comparison feature to quickly see whether your performance is improving over time. Comparing equal-length periods ensures an apples-to-apples evaluation.

---

# Export Analytics Data

All Analytics data can be exported using the **Export** button. The following export formats are available:

| Export Type | Contents |
|-------------|----------|
| **Daily Comprehensive** | All metrics per day. |
| **Replies Only** | LinkedIn and Email replies data. |
| **Tags Only** | Tagged conversations data. |
| **Metrics Only** | Overall summary metrics. |
| **Campaign & Identity Performance** | Detailed performance tables for campaigns and identities. |

---

# FAQs

## Q1: Why do I see different totals in some sections?

Some metrics count **people** (e.g., "Contacted", "Replied") while others count **actions** (e.g., "Messages Sent", "Emails Sent"). Additionally, one conversation can have multiple tags (e.g., "Interested" + "Meeting Booked"), so tag totals may exceed total conversations.

## Q2: What is the difference between "Started" and "Contacted"?

- **Started:** The campaign performed any first action for that contact (such as visiting their profile). This may include contacts added in previous periods whose first action was triggered within the selected timeframe.
- **Contacted:** A message was actually sent to the person (LinkedIn or Email).

## Q3: What are Positive Reply Tags?

These are tags that represent positive outcomes -- either AI-detected or user-created -- such as "Interested", "Meeting booked", or "Positive reply". They help you measure genuine buying intent and successful engagement quality.

## Q4: How does the Company Country filter work?

It uses the Company Country field from your company data. This allows you to segment and compare performance across regions with similar languages or market characteristics.

## Q5: Can I export my Analytics data?

Yes. Use the **Export** button to select from multiple export formats, including daily metrics, replies, tags, summary metrics, and campaign/identity performance tables.
