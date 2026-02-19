# Activity
The Activity section in Enginy provides a centralized, chronological record of every action performed on the platform. Use it to track bulk operations, monitor team work, troubleshoot errors, and maintain full traceability of your data workflows.

---

# Table of Contents
- [How Activity Works](#how-activity-works)
- [Understand the Prospecting and Engagement Tabs](#understand-the-prospecting-and-engagement-tabs)
  - [Prospecting Tab](#prospecting-tab)
    - [Scrapings](#scrapings)
    - [Searches](#searches)
    - [Enrichments](#enrichments)
    - [Imports and Exports](#imports-and-exports)
  - [Engagement Tab](#engagement-tab)
- [Filter Activity Records](#filter-activity-records)
  - [Filter by Action Type](#filter-by-action-type)
  - [Filter by Created by or Identity](#filter-by-created-by-or-identity)
  - [Filter by Status (Prospecting)](#filter-by-status-prospecting)
  - [Filter by Companies (Engagement)](#filter-by-companies-engagement)
  - [Filter by Date Range](#filter-by-date-range)
  - [Combine Multiple Filters](#combine-multiple-filters)
- [Task Statuses Reference](#task-statuses-reference)
- [Monitor Rolling 24-Hour Scrapings](#monitor-rolling-24-hour-scrapings)
- [Review a Prospecting Action Report](#review-a-prospecting-action-report)
  - [Access the Report](#access-the-report)
- [Practical Use Cases](#practical-use-cases)
  - [Monitor Teamwork](#monitor-teamwork)
  - [Track Automated or Long-Running Processes](#track-automated-or-long-running-processes)
  - [Detect and Fix Errors](#detect-and-fix-errors)
  - [Audit and Compliance](#audit-and-compliance)
  - [Resource Optimization](#resource-optimization)
  - [Campaign Monitoring](#campaign-monitoring)
---

# How Activity Works
Every row in Activity represents a task or process executed in your Enginy workspace. The view is divided into two main tabs — **Prospecting** and **Engagement** — so you can quickly isolate the type of activity you need to review.

Each entry displays the following information:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Column</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Action</b></p></td><td><p class="no-margin">The kind of operation that was performed (e.g., scraping, search, enrichment, CSV import, CRM export, campaign step).</p></td></tr><tr><td><p class="no-margin"><b>Created by / Identity</b></p></td><td><p class="no-margin">Who triggered the action (a team member or, in the Engagement tab, the identity used in a campaign).</p></td></tr><tr><td><p class="no-margin"><b>Records</b></p></td><td><p class="no-margin">How many companies or contacts were processed.</p></td></tr><tr><td><p class="no-margin"><b>Status</b></p></td><td><p class="no-margin">Whether the action is <b>Completed</b>, <b>Failed</b>, <b>Processing</b>, <b>Queued</b>, or <b>Cancelled</b>.</p></td></tr><tr><td><p class="no-margin"><b>Credits</b></p></td><td><p class="no-margin">How many credits were spent for any of the actions executed while prospecting</p></td></tr><tr><td><p class="no-margin"><b>Campaign</b></p></td><td><p class="no-margin">Where the engagement actions come from</p></td></tr><tr><td><p class="no-margin"><b>Completed</b></p></td><td><p class="no-margin">When the action started and/or how long ago it was executed.</p></td></tr></tbody></table>

Activity is the single source of truth for understanding what has happened in your account.

![](https://res.cloudinary.com/enginy/image/upload/v1771440077/helpcenter/activity-1.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440078/helpcenter/activity-2.png)

---

# Understand the Prospecting and Engagement Tabs
Activity is organized into two tabs. Each tab displays a different category of platform activity.

## Prospecting Tab

The **Prospecting** tab displays all activity related to finding and managing contacts and companies. The following action categories are recorded.

### Scrapings

Scrapings represent the automatic extraction of data from external databases to build lists.

-   Each scraping is equivalent to the extraction of the fields corresponding to one row (one contact or one company).
    
-   The scraping limit is daily and depends on your subscription plan (your pool).
    

### Searches

Searches refer to the search queries performed on the platform.

-   A search counts all the contacts or companies that appear on a results page.
    
-   Each time you advance to a new page in the preview, the results displayed are added to the searches counter.
    
-   This type of activity is also subject to a daily limit, depending on your plan.
    

### Enrichments

Enrichments consist of obtaining additional information on specific fields — such as AI variables, professional email, phone number, or any other data sourced externally.

-   This process allows you to enrich the profiles of contacts or companies with more complete and up-to-date data.
    

### Imports and Exports

This category records the import and export actions of contacts and/or companies from or to your CRM, or from or to CSV files. It allows you to maintain full traceability of the manually synchronization of information between Enginy and your CRM.

The specific action types you may see include:

-   Import companies from CSV
    
-   Import contacts from CSV
    
-   Export companies to CRM
    
-   Export contacts to CRM
    

The following action types are recorded in this tab:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Action</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Scrape company open positions from TheirStack</b></p></td><td><p class="no-margin">Scrape a company’s open positions from TheirStack.</p></td></tr><tr><td><p class="no-margin"><b>Search companies from TheirStack</b></p></td><td><p class="no-margin">Search for companies in TheirStack.</p></td></tr><tr><td><p class="no-margin"><b>Search companies from TheirStack</b></p></td><td><p class="no-margin">Search for companies in TheirStack.</p></td></tr><tr><td><p class="no-margin"><b>Enrich with phone</b></p></td><td><p class="no-margin">Enrich contacts with phone numbers.</p></td></tr><tr><td><p class="no-margin"><b>Verify contact phone</b></p></td><td><p class="no-margin">Verify a contact’s phone number.</p></td></tr><tr><td><p class="no-margin"><b>Export companies to CSV</b></p></td><td><p class="no-margin">Export companies to a CSV file.</p></td></tr><tr><td><p class="no-margin"><b>Export contacts to CSV</b></p></td><td><p class="no-margin">Export contacts to a CSV file.</p></td></tr><tr><td><p class="no-margin"><b>Import companies from CSV</b></p></td><td><p class="no-margin">Import companies from a CSV file.</p></td></tr><tr><td><p class="no-margin"><b>Import contacts from CSV</b></p></td><td><p class="no-margin">Import contacts from a CSV file.</p></td></tr><tr><td><p class="no-margin"><b>Enrich companies legal information</b></p></td><td><p class="no-margin">Enrich company legal information.</p></td></tr><tr><td><p class="no-margin"><b>Enrich companies with AI</b></p></td><td><p class="no-margin">Enrich company data using AI.</p></td></tr><tr><td><p class="no-margin"><b>Enrich contacts with AI</b></p></td><td><p class="no-margin">Enrich contact data using AI.</p></td></tr><tr><td><p class="no-margin"><b>Enrich companies with technologies</b></p></td><td><p class="no-margin">Enrich company technologies (tech stack).</p></td></tr><tr><td><p class="no-margin"><b>Evaluate company with formula field</b></p></td><td><p class="no-margin">Evaluate companies using a formula field.</p></td></tr><tr><td><p class="no-margin"><b>Evaluate contact with formula field</b></p></td><td><p class="no-margin">Evaluate contacts using a formula field.</p></td></tr><tr><td><p class="no-margin"><b>Get company contacts countries</b></p></td><td><p class="no-margin">Retrieve the countries of a company’s contacts.</p></td></tr><tr><td><p class="no-margin"><b>Extract company headcount from LinkedIn</b></p></td><td><p class="no-margin">Extract company headcount from LinkedIn.</p></td></tr><tr><td><p class="no-margin"><b>Find from name on LinkedIn</b></p></td><td><p class="no-margin">Find a company on LinkedIn by name.</p></td></tr><tr><td><p class="no-margin"><b>Scrape companies from LinkedIn</b></p></td><td><p class="no-margin">Scrape company profiles from LinkedIn.</p></td></tr><tr><td><p class="no-margin"><b>Scrape company Account IQ from LinkedIn</b></p></td><td><p class="no-margin">Scrape Account IQ data from LinkedIn.</p></td></tr><tr><td><p class="no-margin"><b>Scrape company from LinkedIn</b></p></td><td><p class="no-margin">Scrape a company profile from LinkedIn.</p></td></tr><tr><td><p class="no-margin"><b>Scrape company open positions from LinkedIn</b></p></td><td><p class="no-margin">Scrape a company’s open positions from LinkedIn.</p></td></tr><tr><td><p class="no-margin"><b>Scrape company posts from LinkedIn</b></p></td><td><p class="no-margin">Scrape a company’s posts from LinkedIn.</p></td></tr><tr><td><p class="no-margin"><b>Scrape contacts from LinkedIn</b></p></td><td><p class="no-margin">Scrape contact profiles from LinkedIn.</p></td></tr><tr><td><p class="no-margin"><b>Search companies from LinkedIn</b></p></td><td><p class="no-margin">Search for companies on LinkedIn.</p></td></tr><tr><td><p class="no-margin"><b>Search companies from LinkedIn</b></p></td><td><p class="no-margin">Search for companies on LinkedIn.</p></td></tr><tr><td><p class="no-margin"><b>Search contacts from a LinkedIn event</b></p></td><td><p class="no-margin">Search for contacts from a LinkedIn event.</p></td></tr><tr><td><p class="no-margin"><b>Search contacts from a LinkedIn post</b></p></td><td><p class="no-margin">Search for contacts from a LinkedIn post.</p></td></tr><tr><td><p class="no-margin"><b>Search contacts from company</b></p></td><td><p class="no-margin">Search for contacts from a company.</p></td></tr><tr><td><p class="no-margin"><b>Search contacts from LinkedIn</b></p></td><td><p class="no-margin">Search for contacts on LinkedIn.</p></td></tr><tr><td><p class="no-margin"><b>Search contacts from LinkedIn connection</b></p></td><td><p class="no-margin">Search for contacts from LinkedIn connections.</p></td></tr><tr><td><p class="no-margin"><b>Search contacts from LinkedIn followers</b></p></td><td><p class="no-margin">Search for contacts from LinkedIn followers.</p></td></tr><tr><td><p class="no-margin"><b>Search contacts from LinkedIn poll</b></p></td><td><p class="no-margin">Search for contacts from a LinkedIn poll.</p></td></tr><tr><td><p class="no-margin"><b>Import companies from Website Visitors</b></p></td><td><p class="no-margin">Import companies from Website Visitors.</p></td></tr><tr><td><p class="no-margin"><b>Import companies from [CRM] list</b></p></td><td><p class="no-margin">Import companies from a CRM list.</p></td></tr><tr><td><p class="no-margin"><b>Import companies from [CRM] search</b></p></td><td><p class="no-margin">Import companies from a CRM search.</p></td></tr><tr><td><p class="no-margin"><b>Import contacts from [CRM] list</b></p></td><td><p class="no-margin">Import contacts from a CRM list.</p></td></tr><tr><td><p class="no-margin"><b>Import contacts from [CRM] search</b></p></td><td><p class="no-margin">Import contacts from a CRM search.</p></td></tr><tr><td><p class="no-margin"><b>Search companies from Google Maps</b></p></td><td><p class="no-margin">Search for companies on Google Maps.</p></td></tr><tr><td><p class="no-margin"><b>Enrich with email</b></p></td><td><p class="no-margin">Enrich contacts with email addresses.</p></td></tr><tr><td><p class="no-margin"><b>Verify contact email</b></p></td><td><p class="no-margin">Verify a contact’s email address.</p></td></tr><tr><td><p class="no-margin"><b>Enrich company with Crunchbase</b></p></td><td><p class="no-margin">Enrich company data using Crunchbase.</p></td></tr><tr><td><p class="no-margin"><b>Enrich contact with Crunchbase</b></p></td><td><p class="no-margin">Enrich contact data using Crunchbase.</p></td></tr><tr><td><p class="no-margin"><b>Search companies from Crunchbase</b></p></td><td><p class="no-margin">Search for companies in Crunchbase.</p></td></tr><tr><td><p class="no-margin"><b>Search contacts from Crunchbase</b></p></td><td><p class="no-margin">Search for contacts in Crunchbase.</p></td></tr><tr><td><p class="no-margin"><b>Search investors from Crunchbase</b></p></td><td><p class="no-margin">Search for investors in Crunchbase.</p></td></tr><tr><td><p class="no-margin"><b>Export companies to CRM</b></p></td><td><p class="no-margin">Export companies to the CRM.</p></td></tr><tr><td><p class="no-margin"><b>Export contacts to CRM</b></p></td><td><p class="no-margin">Export contacts to the CRM.</p></td></tr><tr><td><p class="no-margin"><b>Sync companies with CRM</b></p></td><td><p class="no-margin">Sync company data with the CRM.</p></td></tr><tr><td><p class="no-margin"><b>Sync contacts with CRM</b></p></td><td><p class="no-margin">Sync contact data with the CRM.</p></td></tr></tbody></table>

**Note:** Importing via CSV or from the CRM has no record limit. Only scrapings are subject to a daily cap.

---

## Engagement Tab

The **Engagement** tab displays all activity related to campaigns. You can use the search bar to look up activity by the name of the lead or the identity used in the campaign.

The following action types are recorded in this tab:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Action</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Add to another campaign</b></p></td><td><p class="no-margin">The lead was moved or added to a different campaign.</p></td></tr><tr><td><p class="no-margin"><b>Email</b></p></td><td><p class="no-margin">An email was sent as part of a campaign step.</p></td></tr><tr><td><p class="no-margin"><b>Liked last post</b></p></td><td><p class="no-margin">A LinkedIn "like" action was executed on the lead's most recent post.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn invitation</b></p></td><td><p class="no-margin">A LinkedIn connection request was sent.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn message</b></p></td><td><p class="no-margin">A LinkedIn message was sent to the lead.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn voice message</b></p></td><td><p class="no-margin">A LinkedIn voice message was sent to the lead.</p></td></tr><tr><td><p class="no-margin"><b>Task</b></p></td><td><p class="no-margin">A Task was created for a lead and needs to be completed.</p></td></tr><tr><td><p class="no-margin"><b>Visit LinkedIn profile</b></p></td><td><p class="no-margin">The lead's LinkedIn profile was visited.</p></td></tr></tbody></table>

---

# Filter Activity Records
At the top of the Activity view you can narrow down the list using filters. This is essential when you have a large volume of history.

## Filter by Action Type
1.  Open the **Actions** dropdown, either from Prospecting or Engagement tabs.
2.  Select the type of process you want to view.
This is the fastest way to answer questions like "Did yesterday's contact import finish correctly?" or "How many exports to the CRM have we done this week?"

**Tip:** In the **Engagement** tab, the action filter lets you isolate specific campaign step types (e.g., only emails, only LinkedIn invitations).

## Filter by Created by or Identity

Use the **Created by** filter (Prospecting tab) or the **Identity** filter (Engagement tab) to:

-   See actions performed by a specific team member.
    
-   Review what a new colleague has done during onboarding.
    
-   Investigate who launched a particular import or export.
    
-   Identify which identity executed a campaign step.
    

This is useful for audits and team monitoring.

## Filter by Status (Prospecting)

Each prospecting action has a status. You can filter by status to focus on:

-   Only **Failed** actions — to troubleshoot what went wrong.
    
-   **Processing** or **Queued** actions — to see what is still running or waiting.
    
-   **Completed** actions — to confirm everything is finished.
    
-   **Pending** actions — to see which engagement actions are queued and pending.
    

See Task Statuses Reference for full definitions.

## Filter by Companies (Engagement)

Each engagement action is related to a lead which pertains to some company. You can filter by companies.

## Filter by Date Range

Use the **Date** filter to focus on a specific time window. For example:

-   **Today** or **Yesterday** — to verify fresh operations.
    
-   **Last week** or **Last month** — for periodic reviews.
    
-   **A custom range** — to analyze a specific period (e.g., for a campaign).
    

## Combine Multiple Filters

You can combine multiple filters at once to get a very precise view. For example: "All CSV imports done by Maria in the last 7 days."

---

# Task Statuses Reference
Every action in Activity has one of the following statuses:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Status</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Meaning</p></td></tr><tr><td><p class="no-margin"><b>Completed</b></p></td><td><p class="no-margin">The action finished successfully and all applicable data was processed.</p></td></tr><tr><td><p class="no-margin"><b>Processing</b></p></td><td><p class="no-margin">The action is still running. Data is being processed; you may need to wait until it finishes before exporting or triggering related tasks.</p></td></tr><tr><td><p class="no-margin"><b>Queued</b></p></td><td><p class="no-margin">The action is waiting to start. This can happen when other processes are already running, or when usage limits are temporarily reached (e.g., scrapings, searches, LinkedIn connection requests per day/hour, or emails per day/hour, depending on identity configuration).</p></td></tr><tr><td><p class="no-margin"><b>Failed</b></p></td><td><p class="no-margin">The action could not be completed due to an error. For imports/exports, open the corresponding report (CSV Import Report or CRM Export Report) to see what went wrong. Typical reasons include invalid data, missing required fields, or conflicts in the CRM.</p></td></tr><tr><td><p class="no-margin"><b>Cancelled</b></p></td><td><p class="no-margin">The action was manually cancelled or stopped while in a Processing or Queued state. No further processing will occur.<br>​<b>Note</b>: professional email and phone number enrichments cannot be cancelled as they trigger our query to our providers, which means we already assume the cost. All other actions can be cancelled.</p></td></tr><tr><td><p class="no-margin"><b>Pending</b></p></td><td><p class="no-margin">The engagement action is queued and pending to be executed when allowed by Identity capacity and system queues.</p></td></tr></tbody></table>

**Tip:** Use these statuses to quickly identify where you need to take action. For example, re-run a failed import after fixing the file, or free up resources if too many jobs are queued.

---

# Monitor Rolling 24-Hour Scrapings
At the top-right of the Activity page you will see the **Rolling 24 Hour Scrapings** indicator. This panel shows:

-   How many scraping processes have been executed in the last 24 hours.
    
-   How this compares to your allowed daily limit (determined by your subscription plan).
    

**Important:** The scraping limit applies only to data extraction from LinkedIn. Importing via CSV or from the CRM is not subject to any daily cap.

You can use this indicator to:

-   Avoid exceeding your daily quota or understand why a Search or Scraping from LinkedIn is queued (even tho also can be queued by lack of credits).
    
-   Plan scraping-heavy activities (for example, spread them across multiple days).
    
-   Understand when high-usage peaks happen in your team.
    

If you frequently reach your daily limit, consider:

-   Reviewing which recurring jobs can be optimized or reduced.
    
-   Coordinating scraping schedules within the team.
    
-   Contacting Enginy support if you need to discuss plan limits.
    

![](https://res.cloudinary.com/enginy/image/upload/v1771440077/helpcenter/activity-3.png)

---

# Review a Prospecting Action Report
The CSV Import Report lets you inspect the detailed result of importing companies or contacts from a CSV file.

## Access the Report
1.  Open the **Prospecting** tab in Activity.
2.  Open the **Actions** dropdown and select the action which you want to see the report (optional).
3.  Optionally, filter by user and date to locate the exact import.
4.  Locate the import you want to inspect.
5.  Click the **row** to open the CSV Import Report, or click the **dropdown arrow** to expand and see the list of imported companies or contacts directly in Activity.
![](https://res.cloudinary.com/enginy/image/upload/v1771440077/helpcenter/activity-4.png)

This panel shows the basic following data:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Status</b></p></td><td><p class="no-margin">Status of the action</p></td></tr><tr><td><p class="no-margin"><b>Created by</b></p></td><td><p class="no-margin">Who triggered the action</p></td></tr><tr><td><p class="no-margin"><b>Finished</b></p></td><td><p class="no-margin">Completion time of the action</p></td></tr><tr><td><p class="no-margin"><b>Credits</b></p></td><td><p class="no-margin">Credits consumed by the action</p></td></tr><tr><td><p class="no-margin"><b>Completed In</b></p></td><td><p class="no-margin">Total time of execution of the action</p></td></tr><tr><td><p class="no-margin"><b>Contacts</b></p></td><td><p class="no-margin">Contacts count involved by the action</p></td></tr><tr><td><p class="no-margin"><b>Companies</b></p></td><td><p class="no-margin">Companies count involved by the action</p></td></tr></tbody></table>

Note: for CSV and Excel exports, in the corresponding panel you will find the file to be downloaded

---

# Practical Use Cases
Below are common ways teams use Activity effectively.

## Monitor Teamwork

-   See which imports, exports, and scrapings are being run by each user.
    
-   Review the work of new team members during onboarding.
    

## Track Automated or Long-Running Processes

-   Check whether scraping jobs or large imports are still **Processing**, **Queued**, or **Completed**.
    
-   Avoid launching conflicting processes while another large job is running.
    

## Detect and Fix Errors
1.  Filter by **Failed** status to quickly find problematic tasks.
2.  Open the corresponding report (CSV Import or CRM Export) to see why they failed and how many records were affected.
3.  Correct the issue (e.g., fix the CSV file or adjust the CRM field mapping).
4.  Re-run the task.
## Audit and Compliance

-   Answer questions like "Who exported this data?" or "When was this list imported?"
    
-   Keep a reliable trail of data operations for internal or external audits.
    

## Resource Optimization

-   Use the **Rolling 24 Hour Scrapings** indicator to keep scraping under control and avoid hitting limits unexpectedly.
    
-   Schedule heavy jobs for less busy periods.
    

## Campaign Monitoring

-   Track which campaign steps have been executed or are pending for each lead through the Engagement tab.
    
-   Verify that LinkedIn invitations, messages, and emails were sent as expected.
    
-   Identify failed engagement actions and investigate the cause.
    

---

# FAQs
### **Q1: What is the difference between the Prospecting tab and the Engagement tab?**

The **Prospecting** tab shows all activity related to finding and managing contacts and companies — including scrapings, searches, enrichments, and imports/exports. The **Engagement** tab shows all activity related to outbound campaigns, such as emails sent, LinkedIn invitations, LinkedIn messages, and social interactions like liking a post.

### **Q2: Does importing contacts via CSV count toward my daily scraping limit?**

No. The daily scraping limit applies only to the automatic extraction of data from external databases. Importing from CSV or from your CRM has no daily cap.

### **Q3: A task shows as "Queued" and is not starting. What should I do?**

A Queued status means the task is waiting for available capacity. This can happen when other processes are already running, or when you have reached a temporary usage limit (e.g., scrapings per day, LinkedIn connection requests per hour, or emails per hour based on your identity configuration). Wait for current tasks to complete, or check whether you have hit a daily limit.

### **Q4: How can I find out why a CSV import or CRM export failed?**

Filter Activity by the relevant action type (e.g., Import contacts from CSV), locate the failed entry, and click the row to open the corresponding report. The CSV Import Report or CRM Export Report will show you which records failed and the reason for each failure.

### **Q5: Can I cancel an action that is currently processing or queued?**

Not all. Actions in a **Processing** or **Queued** state can be cancelled except those that imply an external provider. For those actions that allow it, once cancelled, no further processing will occur for that action and its status will change to **Cancelled**.
