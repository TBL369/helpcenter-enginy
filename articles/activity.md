# Activity

The Activity section in Enginy provides a centralized, chronological record of every action performed on the platform. Use it to track bulk operations, monitor team work, troubleshoot errors, and maintain full traceability of your data workflows.

---

## Table of Contents

- [How Activity Works](#how-activity-works)
- [Open the Activity Page](#open-the-activity-page)
- [Understand the Prospecting and Engagement Tabs](#understand-the-prospecting-and-engagement-tabs)
  - [Prospecting Tab](#prospecting-tab)
    - [Scrapings](#scrapings)
    - [Searches](#searches)
    - [Enrichments](#enrichments)
    - [Imports and Exports](#imports-and-exports)
  - [Engagement Tab](#engagement-tab)
- [Filter Activity Records](#filter-activity-records)
  - [Filter by Action Type](#filter-by-action-type)
  - [Filter by User or Identity](#filter-by-user-or-identity)
  - [Filter by Status](#filter-by-status)
  - [Filter by Date Range](#filter-by-date-range)
  - [Combine Multiple Filters](#combine-multiple-filters)
- [Task Statuses Reference](#task-statuses-reference)
- [Monitor Rolling 24-Hour Scrapings](#monitor-rolling-24-hour-scrapings)
- [Review a CSV Import Report](#review-a-csv-import-report)
  - [Access the CSV Import Report](#access-the-csv-import-report)
  - [CSV Import Report Fields](#csv-import-report-fields)
- [Review a CRM Export Report](#review-a-crm-export-report)
  - [Access the CRM Export Report](#access-the-crm-export-report)
  - [CRM Export Report Categories](#crm-export-report-categories)
  - [Navigate CRM Export Report Details](#navigate-crm-export-report-details)
- [Practical Use Cases](#practical-use-cases)
- [FAQs](#faqs)

---

## How Activity Works

Every row in Activity represents a task or process executed in your Enginy workspace. The view is divided into two main tabs — **Prospecting** and **Engagement** — so you can quickly isolate the type of activity you need to review.

Each entry displays the following information:

| Column | Description |
|---|---|
| **Action type** | The kind of operation that was performed (e.g., scraping, search, enrichment, CSV import, CRM export, campaign step). |
| **User / Identity** | Who triggered the action (a team member or, in the Engagement tab, the identity used in a campaign). |
| **Number of records** | How many companies or contacts were processed. |
| **Status** | Whether the action is **Completed**, **Failed**, **Processing**, **Queued**, or **Cancelled**. |
| **Time** | When the action started and/or how long ago it was executed. |
| **Report shortcuts** | For relevant actions, icons to open the CSV Import Report or CRM Export Report, or to expand the list of affected records. |

Activity is the single source of truth for understanding what has happened in your account.

---

## Open the Activity Page

1. Log in to Enginy.
2. Go to the **Activity** section from the main navigation.

You will see a chronological list of actions with the most recent entries at the top.

---

## Understand the Prospecting and Engagement Tabs

Activity is organized into two tabs. Each tab displays a different category of platform activity.

### Prospecting Tab

The **Prospecting** tab displays all activity related to finding and managing contacts and companies. The following action categories are recorded.

#### Scrapings

Scrapings represent the automatic extraction of data from external databases to build lists.

- Each scraping is equivalent to the extraction of the fields corresponding to one row (one contact or one company).
- The scraping limit is daily and depends on your subscription plan (your pool).

#### Searches

Searches refer to the search queries performed on the platform.

- A search counts all the contacts or companies that appear on a results page.
- Each time you advance to a new page in the preview, the results displayed are added to the searches counter.
- This type of activity is also subject to a daily limit, depending on your plan.

#### Enrichments

Enrichments consist of obtaining additional information on specific fields — such as professional email, phone number, or any other data sourced externally.

- This process allows you to enrich the profiles of contacts or companies with more complete and up-to-date data.

#### Imports and Exports

This category records the import and export actions of contacts and/or companies from or to your CRM, or from or to CSV files. It allows you to maintain full traceability of the synchronization of information between Enginy and your CRM.

The specific action types you may see include:

- Import companies from CSV
- Import contacts from CSV
- Export companies to CRM
- Export contacts to CRM

> **Note:** Importing via CSV or from the CRM has no record limit. Only scrapings are subject to a daily cap.

---

### Engagement Tab

The **Engagement** tab displays all activity related to campaigns. You can use the search bar to look up activity by the name of the lead or the identity used in the campaign.

The following action types are recorded in this tab:

| Action Type | Description |
|---|---|
| **Add to another campaign** | The lead was moved or added to a different campaign. |
| **Email** | An email was sent as part of a campaign step. |
| **Liked last post** | A LinkedIn "like" action was executed on the lead's most recent post. |
| **LinkedIn invitation** | A LinkedIn connection request was sent. |
| **LinkedIn message** | A LinkedIn message was sent to the lead. |

---

## Filter Activity Records

At the top of the Activity view you can narrow down the list using filters. This is essential when you have a large volume of history.

### Filter by Action Type

1. Open the **All actions** dropdown.
2. Select the type of process you want to view.

Available options include:

- **Import companies from CSV** — show only company imports.
- **Import contacts from CSV** — show only contact imports.
- **Export companies to CRM** — show company exports to your CRM.
- **Export contacts to CRM** — show contact exports to your CRM.

This is the fastest way to answer questions like "Did yesterday's contact import finish correctly?" or "How many exports to the CRM have we done this week?"

> **Tip:** In the **Engagement** tab, the action filter lets you isolate specific campaign step types (e.g., only emails, only LinkedIn invitations).

### Filter by User or Identity

Use the **All users** filter (Prospecting tab) or the identity filter (Engagement tab) to:

- See actions performed by a specific team member.
- Review what a new colleague has done during onboarding.
- Investigate who launched a particular import or export.
- Identify which identity executed a campaign step.

This is useful for audits and team monitoring.

### Filter by Status

Each action has a status. You can filter by status to focus on:

- Only **Failed** tasks — to troubleshoot what went wrong.
- **Processing** or **Queued** tasks — to see what is still running or waiting.
- **Completed** tasks — to confirm everything is finished.

See [Task Statuses Reference](#task-statuses-reference) for full definitions.

### Filter by Date Range

Use the **Date** filter to focus on a specific time window. For example:

- **Today** or **Yesterday** — to verify fresh operations.
- **Last week** or **Last month** — for periodic reviews.
- **A custom range** — to analyze a specific period (e.g., for a campaign).

### Combine Multiple Filters

You can combine multiple filters at once to get a very precise view. For example: "All CSV imports done by Maria in the last 7 days."

---

## Task Statuses Reference

Every action in Activity has one of the following statuses:

| Status | Meaning |
|---|---|
| **Completed** | The action finished successfully and all applicable data was processed. |
| **Processing** | The action is still running. Data is being processed; you may need to wait until it finishes before exporting or triggering related tasks. |
| **Queued** | The action is waiting to start. This can happen when other processes are already running, or when usage limits are temporarily reached (e.g., scrapings, searches, LinkedIn connection requests per day/hour, or emails per day/hour, depending on identity configuration). |
| **Failed** | The action could not be completed due to an error. For imports/exports, open the corresponding report (CSV Import Report or CRM Export Report) to see what went wrong. Typical reasons include invalid data, missing required fields, or conflicts in the CRM. |
| **Cancelled** | The action was manually cancelled or stopped while in a Processing or Queued state. No further processing will occur. |

> **Tip:** Use these statuses to quickly identify where you need to take action. For example, re-run a failed import after fixing the file, or free up resources if too many jobs are queued.

---

## Monitor Rolling 24-Hour Scrapings

At the top-right of the Activity page you will see the **Rolling 24 Hour Scrapings** indicator. This panel shows:

- How many scraping processes have been executed in the last 24 hours.
- How this compares to your allowed daily limit (determined by your subscription plan).

> **Important:** The scraping limit applies only to data extraction from external databases. Importing via CSV or from the CRM is not subject to any daily cap.

You can use this indicator to:

- Avoid exceeding your daily quota.
- Plan scraping-heavy activities (for example, spread them across multiple days).
- Understand when high-usage peaks happen in your team.

If you frequently reach your daily limit, consider:

- Reviewing which recurring jobs can be optimized or reduced.
- Coordinating scraping schedules within the team.
- Contacting Enginy support if you need to discuss plan limits.

---

## Review a CSV Import Report

The CSV Import Report lets you inspect the detailed result of importing companies or contacts from a CSV file.

### Access the CSV Import Report

1. Open the **Prospecting** tab in Activity.
2. Open the **All actions** dropdown and select **Import companies from CSV** or **Import contacts from CSV**.
3. Optionally, filter by user and date to locate the exact import.
4. Locate the import you want to inspect.
5. Click the **sheet icon** to open the CSV Import Report, or click the **dropdown arrow** to expand and see the list of imported companies or contacts directly in Activity.

### CSV Import Report Fields

| Data Point | Description |
|---|---|
| **Total records processed** | The total number of rows that Enginy attempted to import. |
| **Successfully imported** | How many records were imported without issues. |
| **Errors or warnings** | Issues such as invalid fields, missing required data, or duplicates. |
| **Failed row details** | When available, specific information about the rows that failed. |

This helps you decide whether you can trust the import as-is or need to fix the CSV and re-import.

> **Note:** For a step-by-step guide focused exclusively on imports, see the dedicated article: **Check CSV Import Report**.

---

## Review a CRM Export Report

The CRM Export Report lets you inspect the detailed result of exporting companies or contacts to your CRM.

### Access the CRM Export Report

1. Open the **Prospecting** tab in Activity.
2. Open the **All actions** dropdown and select **Export companies to CRM** or **Export contacts to CRM**.
3. Optionally, filter by user and date to narrow down results.
4. Locate the export you want to inspect.
5. Click the **sheet icon** to open the CRM Export Report, or click the **dropdown arrow** to view detailed information for companies or contacts.

### CRM Export Report Categories

The report groups results into the following categories:

| Category | Description |
|---|---|
| **Created new contacts** | Number of new records successfully created in the CRM. |
| **Updated contacts that already existed in CRM** | Number of existing records that were updated with new data. |
| **Found duplicate contacts** | Records that were not exported because they already exist (duplicates). |
| **Were not able to associate company to contacts** | Contacts for which no matching company could be found in the CRM. |
| **Companies that have the same CRM ID** | Potential ID conflicts where multiple companies share the same CRM identifier. |
| **Found companies with create conflicts** | Companies that could not be created due to issues such as duplicated or invalid data. |

### Navigate CRM Export Report Details

You can hover over the icons next to each category to access additional options:

- **Open the table** — View the underlying list of records for that category.
- **Open the CRM** — Jump directly to the relevant records in your connected CRM.

> **Note:** For detailed troubleshooting of CRM export errors, see the dedicated article: **Check CRM Export Report — Errors**.

---

## Practical Use Cases

Below are common ways teams use Activity effectively.

### Monitor Teamwork

- See which imports, exports, and scrapings are being run by each user.
- Review the work of new team members during onboarding.

### Track Automated or Long-Running Processes

- Check whether scraping jobs or large imports are still **Processing**, **Queued**, or **Completed**.
- Avoid launching conflicting processes while another large job is running.

### Detect and Fix Errors

1. Filter by **Failed** status to quickly find problematic tasks.
2. Open the corresponding report (CSV Import or CRM Export) to see why they failed and how many records were affected.
3. Correct the issue (e.g., fix the CSV file or adjust the CRM field mapping).
4. Re-run the task.

### Audit and Compliance

- Answer questions like "Who exported this data?" or "When was this list imported?"
- Keep a reliable trail of data operations for internal or external audits.

### Resource Optimization

- Use the **Rolling 24 Hour Scrapings** indicator to keep scraping under control and avoid hitting limits unexpectedly.
- Schedule heavy jobs for less busy periods.

### Campaign Monitoring (Engagement Tab)

- Track which campaign steps have been executed for each lead.
- Verify that LinkedIn invitations, messages, and emails were sent as expected.
- Identify failed engagement actions and investigate the cause.

---

## FAQs

**Q1: What is the difference between the Prospecting tab and the Engagement tab?**
The **Prospecting** tab shows all activity related to finding and managing contacts and companies — including scrapings, searches, enrichments, and imports/exports. The **Engagement** tab shows all activity related to outbound campaigns, such as emails sent, LinkedIn invitations, LinkedIn messages, and social interactions like liking a post.

**Q2: Does importing contacts via CSV count toward my daily scraping limit?**
No. The daily scraping limit applies only to the automatic extraction of data from external databases. Importing from CSV or from your CRM has no daily cap.

**Q3: A task shows as "Queued" and is not starting. What should I do?**
A Queued status means the task is waiting for available capacity. This can happen when other processes are already running, or when you have reached a temporary usage limit (e.g., scrapings per day, LinkedIn connection requests per hour, or emails per hour based on your identity configuration). Wait for current tasks to complete, or check whether you have hit a daily limit.

**Q4: How can I find out why a CSV import or CRM export failed?**
Filter Activity by the relevant action type (e.g., Import contacts from CSV), locate the failed entry, and click the sheet icon to open the corresponding report. The CSV Import Report or CRM Export Report will show you which records failed and the reason for each failure, such as invalid data, missing required fields, or CRM conflicts.

**Q5: Can I cancel a task that is currently processing or queued?**
Yes. Tasks in a **Processing** or **Queued** state can be cancelled. Once cancelled, no further processing will occur for that task and its status will change to **Cancelled**.
