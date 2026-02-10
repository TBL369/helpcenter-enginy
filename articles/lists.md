# Lists

The Lists section is where you manage your prospect databases in Enginy. It is divided into two main tabs -- **Contacts** and **Companies** -- from which you can organize your data, enrich it, and launch engagement campaigns.

---

## Prerequisites / Before You Start

Before working with Lists, make sure the following are in place depending on the features you plan to use:

- **CRM integration** -- To import from or export to HubSpot, Salesforce, Dynamics, or Pipedrive, connect your CRM in the **Integrations** settings page.
- **AI Playbook** -- To access Contact and Company Scores and AI Recommended Lists, complete your Ideal Customer Profile (ICP) in the **AI Playbook** page.
- **Sales Navigator account** -- To use identity-specific LinkedIn filters, import from LinkedIn Jobs, or create recurring contact imports, link at least one Sales Navigator identity in your account settings.
- **CSV file** -- To import from CSV, prepare a file with the required columns mapped to Enginy fields (see the CSV import sections below for required mappings).

---

## Table of Contents

- [The Lists Dashboard](#the-lists-dashboard)
  - [Dashboard Columns](#dashboard-columns)
  - [Search and Filters](#search-and-filters)
  - [List Actions (Three-Dot Menu)](#list-actions-three-dot-menu)
  - [Bulk Actions on Lists](#bulk-actions-on-lists)
- [Working Inside a List (Detail View)](#working-inside-a-list-detail-view)
  - [Understanding Table Column Colors](#understanding-table-column-colors)
  - [Managing Columns and Views](#managing-columns-and-views)
  - [Adding Columns](#adding-columns)
  - [Moving, Hiding, and Restoring Columns](#moving-hiding-and-restoring-columns)
  - [All Contacts and All Companies](#all-contacts-and-all-companies)
  - [Switching Between Contacts and Companies Tabs](#switching-between-contacts-and-companies-tabs)
  - [Actions on Selected Rows](#actions-on-selected-rows)
  - [Top-Right Menu (Three-Dot Button)](#top-right-menu-three-dot-button)
- [Enrichment Tools](#enrichment-tools)
  - [Enrichment for Contacts](#enrichment-for-contacts)
  - [Enrichment for Companies](#enrichment-for-companies)
  - [Enriching with Email or Phone](#enriching-with-email-or-phone)
  - [Finding Data from LinkedIn](#finding-data-from-linkedin)
  - [Contact and Company Score](#contact-and-company-score)
- [Importing Companies (Create List)](#importing-companies-create-list)
  - [AI Finder (Companies)](#ai-finder-companies)
  - [Find Companies on LinkedIn](#find-companies-on-linkedin)
  - [Import from LinkedIn Jobs](#import-from-linkedin-jobs)
  - [Import Companies from HubSpot (Search)](#import-companies-from-hubspot-search)
  - [Import Companies from HubSpot List](#import-companies-from-hubspot-list)
  - [Import Companies from Salesforce](#import-companies-from-salesforce)
  - [Import Companies from Dynamics](#import-companies-from-dynamics)
  - [Import Companies from Google Maps](#import-companies-from-google-maps)
  - [Import by Technology Stack (TheirStack)](#import-by-technology-stack-theirstack)
  - [Import Companies by Job Posts (TheirStack)](#import-companies-by-job-posts-theirstack)
  - [Import Companies from CSV](#import-companies-from-csv)
  - [Create a New Company Manually](#create-a-new-company-manually)
- [Importing Contacts (Create List)](#importing-contacts-create-list)
  - [AI Finder (Contacts)](#ai-finder-contacts)
  - [Find Contacts on LinkedIn](#find-contacts-on-linkedin)
  - [Social Imports](#social-imports)
  - [Network Imports](#network-imports)
  - [Import Contacts from HubSpot](#import-contacts-from-hubspot)
  - [Import Contacts from CSV](#import-contacts-from-csv)
  - [Create a New Contact Manually](#create-a-new-contact-manually)
- [AI Recommended Lists](#ai-recommended-lists)
- [Workflows (Beta)](#workflows-beta)
- [Additional Actions and How-Tos](#additional-actions-and-how-tos)
  - [Export to CRM, CSV, or Excel](#export-to-crm-csv-or-excel)
  - [Switching Contacts Between Lists](#switching-contacts-between-lists)
  - [Move Values from One Column to Another](#move-values-from-one-column-to-another)
  - [Simplify Company Name](#simplify-company-name)
  - [Add a Custom Field](#add-a-custom-field)
  - [Create a Formula Field](#create-a-formula-field)
  - [Sync a CRM Property](#sync-a-crm-property)
  - [Check if a Contact or Company Exists in CRM](#check-if-a-contact-or-company-exists-in-crm)
  - [Check CSV Import Report](#check-csv-import-report)
  - [How Many Contacts Should I Select per Company](#how-many-contacts-should-i-select-per-company)
  - [I Cannot Find an Industry on LinkedIn](#i-cannot-find-an-industry-on-linkedin)
- [LinkedIn Fields Reference](#linkedin-fields-reference)
- [CRM Field Mapping Reference](#crm-field-mapping-reference)
- [FAQs](#faqs)

---

## The Lists Dashboard

When you open the **Lists** section, you see your lists organized in rows within a table. You can also group lists into folders for easier management. The dashboard has two top-level tabs: **Contacts** and **Companies**.

### Dashboard Columns

Each row in the table represents a list and displays the following information:

| Column | Description |
|---|---|
| **Name** | The name of the list. |
| **Contacts** (or **Companies**) | The total number of contacts (or companies) in the list. |
| **Created by** | The user who created the list. |
| **Associated Companies** (Contacts tab) | The number of companies linked to the contacts in that list. |
| **Associated Contacts** (Companies tab) | The number of contacts linked to the companies in that list. |
| **Folder** | The folder where the list is located, if applicable. |
| **Tags** | Tags assigned to the list for classification and filtering. |
| **Last Update** | The date and time of the most recent modification. |

> **Note:** In the Contacts tab, there are often more contacts than companies because multiple contacts can belong to the same company. In the Companies tab, there may be more companies than contacts if some companies do not yet have associated contacts.

### Search and Filters

Above the table, you have the following tools to locate specific lists:

- **Search bar** -- Search by list name.
- **Created by** -- Filter by the user who created the list.
- **Tags** -- Filter by specific tags.
- **Folders** -- Filter by folder location.

### List Actions (Three-Dot Menu)

At the far right of every row there is a **three-dot button**. Clicking it opens a menu with the following options:

- **Share** -- Opens a settings panel on the right side. Here you can edit the **Name** and **Description** of the list, and manage **Access and Permissions** (select which users have visibility).
- **Settings** -- Access additional list configuration.
- **Delete** -- Permanently remove the list.

### Bulk Actions on Lists

When you select one or more lists using the checkbox at the left of each row, a bottom bar appears with the following actions:

| Action | Description |
|---|---|
| **Campaign** | Add the selected list(s) to a campaign. A modal lets you filter campaigns by Name, Creation Date, Identity, Status (Running, Paused, Draft, Archived, Scheduled), and Tags. |
| **Export** | Export the list to CRM, CSV, or Excel. |
| **Merge** | Combine multiple lists into one. Only active when more than one list is selected. |
| **Add to folder** | Move the selected list(s) to a folder. |
| **Trash icon** | Delete the selected list(s). |

---

## Working Inside a List (Detail View)

Clicking on a list row opens the **Detail View**. This view displays a table with many columns sourced from different origins: LinkedIn data, AI variables, CRM fields, formula fields, custom fields, and data-enrichment providers (e.g., professional emails, phones).

At the top right of the detail view you will find:

- The **Contacts** and **Companies** tabs to switch between entity types.
- A **Settings** (gear) icon to access **List Settings**.
- Clicking the list name at the top reveals a dropdown to quickly switch to any other list or to the **All Contacts** / **All Companies** aggregate view.

### Understanding Table Column Colors

The table columns are color-coded by source:

| Color | Source | Examples |
|---|---|---|
| **Blue** | LinkedIn | Profile URL, Employee Range |
| **Red** | CRM | Contact/Company exists in CRM, CRM ID |
| **Green** | External Databases | Mobile Phone, Professional Email |
| **Yellow** | AI Variables | AI-generated classifications, personalized prompts |
| **Purple** | Custom Created | Custom columns tailored to your needs |

### Managing Columns and Views

Above the table you have several tools to customize your view:

- **Search bar** -- Search for specific records within the list.
- **View Selector** -- Switch between saved views. Views determine which columns are visible in the table.
- **Sort by** -- Order rows ascending or descending by any field.
- **Manage Views** button -- Opens a side panel where you can:
  - Toggle columns on or off with a switch.
  - Save the current view or create a new one (choose **Public** or **Private**).
  - Pin a view to the top of the view list.
  - Click **Reset to original view layout** to revert all changes.
  - Use the search bar inside the panel to find a specific column by name.

### Adding Columns

Hover your cursor between any two column headers. A divider with a **+** button appears. Clicking it opens a menu with:

- **New AI Variable** -- Create a new AI-generated field.
- **New CRM Field** -- Add a field synced from your CRM.
- **New Formula Field** -- Add a computed field.
- **New Custom Field** -- Add a user-defined field.

Below these shortcuts you can browse or search through all existing fields. Tabs within this dropdown let you filter by category: **All**, **Company** (or **Contact**), **AI Variables**, **CRM**, **Formulas**, **Nodes**, and **Other Columns**.

> **Note:** The fields shown are context-sensitive. When viewing a Contacts list you see contact-specific fields (e.g., Professional Phone, Other Emails). When viewing a Companies list you see company-specific fields (e.g., Company Phone, Company Email).

### Moving, Hiding, and Restoring Columns

**To move a column:**

1. Place your cursor over the six dots that appear to the right of the column header.
2. Wait for the cursor to change to a hand icon, then click and hold.
3. Drag the column to the desired position.
4. Release to set the new position.

**To hide a column:**

1. Place your cursor on the column header.
2. Click the header to open the context menu.
3. Select **Hide column**.

**To restore a hidden column:**

1. Position your cursor between two existing columns and click the **+** button.
2. Type the name of the hidden column in the search bar.
3. Select it, and it will reappear in the table.

### All Contacts and All Companies

In addition to individual lists, there are two aggregate views:

- **All Contacts** -- Displays every contact across all lists.
- **All Companies** -- Displays every company across all lists.

You can access these from the list-name dropdown at the top of the detail view.

### Switching Between Contacts and Companies Tabs

Inside a list, the **Contacts** and **Companies** tabs at the top right let you switch entity types. The behavior is as follows:

- If you select specific contacts and use the **More > Switch to Companies View** action, the platform navigates to the **All Companies** view filtered to show only the companies associated with those selected contacts.
- Navigating back to the **Contacts** tab after such a switch takes you to **All Contacts** (filtered by the previously selected records), not back to the original individual list.

### Actions on Selected Rows

When you select contacts or companies using their row checkboxes, a bottom bar appears with these actions:

| Action | Description |
|---|---|
| **Campaign** | Add the selected records to an existing campaign or create a new one. |
| **Export** | Export to CRM, CSV, or Excel. |
| **Blocklist** | Add records to a blocklist to prevent them from being contacted. |
| **Change List** | Move records to another list or create a new one. The dialog shows which lists the records currently belong to (marked with a checkmark). |
| **Remove from List** | Remove the selected records from the current list. |
| **Delete Contacts / Companies** | Permanently delete the records (requires confirmation). |
| **More** | Opens additional actions (see below). |

**More** sub-actions:

- **Change associated company** -- Reassign contacts to a different company.
- **Move values between columns** -- Transfer data from one column to another.
- **Clear column values** -- Erase all data in a selected column for the chosen records.
- **Merge duplicates** -- Consolidate duplicate records into one.
- **Switch to Companies View** (Contacts only) -- Navigate to the All Companies view filtered to the companies associated with your selected contacts.

### Top-Right Menu (Three-Dot Button)

At the top right of the detail view, next to the **Enrich** and **Add Contacts/Companies** buttons, there is a three-dot button with these options:

- **Export to CRM**
- **Export to CSV**
- **Export to Excel**
- **Add to Campaign**

---

## Enrichment Tools

Clicking the **Enrich** button above the list table opens a modal with tools specific to the entity type you are viewing.

### Enrichment for Contacts

The enrichment modal for contacts is divided into five categories:

#### 1. Data Enrichment

| Tool | Description |
|---|---|
| **Enrich Email Address** | Searches for the contact's professional email. Includes **Advanced Configuration**: choose **Fast** (uses only the quickest sub-providers) or **Deep** (uses all available suppliers -- slower but more thorough). |
| **Enrich Phone Number** | Searches for the contact's phone number. Also supports **Fast** and **Deep** modes. |
| **Find Data by LinkedIn URL** | Scrapes LinkedIn profile data using the contact's LinkedIn URL. |
| **Find Data by Name** | Looks up the contact on LinkedIn by name. If no match is found by name, the system will attempt a search by domain (if available). |

**Fields populated by email/phone enrichment:**

| Field | Description |
|---|---|
| Mobile Phone | Primary phone number |
| Phones | Additional phone numbers |
| Professional Email | Primary email address |
| Other Emails | Additional email addresses |

#### 2. Data Cleanup

| Tool | Description |
|---|---|
| **Verify Email Address** | Checks whether the professional email is **Verified**, **Invalid**, or **Unsure** (risky/unknown). The system sends a test message; if it bounces, the email is marked Invalid. |
| **Verify Phone Number** | Validates the phone number as **Valid**, **Unsure**, or **Invalid**. |
| **Extract Domain** | Extracts the website domain from the professional email address (the part after the @ symbol). |
| **Combine Name and Last Name** | Generates a **Full Name** column by merging the First Name and Last Name fields. |

#### 3. Enrich with AI

Displays all available contact-type AI variables. Select one or more variables and run them on the selected contacts. You can also click **Create New AI Variable** from this panel.

**To run AI enrichment:**

1. Select the contacts you want to enrich.
2. Click **Enrich > Enrich with AI**.
3. Select the AI variables you want to fill in.
4. Click **Fill**.

> **Tip:** To check or edit an AI variable's prompt, click on its column header and select **Edit column**.

> **Tip:** For credit optimization, filter beforehand to enrich only records where the variable is currently empty.

#### 4. CRM Sync

- **Sync with your CRM** -- Pulls data from your connected CRM into Enginy based on the field mapping you configured in your integration settings.

#### 5. Enrich with Formula

Displays all existing formulas. Select one or more to run, or click **Create New Formula** to define a new one.

### Enrichment for Companies

The enrichment modal for companies has four categories (Data Cleanup is not available for companies):

#### 1. Data Enrichment

| Tool | Description |
|---|---|
| **Get company open jobs from LinkedIn** | Retrieves active job postings from the company's LinkedIn page. |
| **Get company open jobs from TheirStack** | Retrieves job postings via TheirStack data. |
| **Get headcount by department** | Gets a breakdown of employee count per department. |
| **Get company EQ insights** | Retrieves company engagement and qualification insights. |
| **Get company posts from LinkedIn** | Fetches the company's recent LinkedIn posts. |
| **Enrich technology stack** | Identifies technologies used by the company. |
| **Find data by LinkedIn URL** | Scrapes data using the company's LinkedIn URL. |
| **Find data by name or domain** | Looks up the company on LinkedIn by name; falls back to domain search if name is not found. |
| **Get contacts from company** | Retrieves contacts associated with the company. |

**When using "Get contacts from company" (Add contacts to company):**

1. Select the companies in a company list.
2. Click **Enrich > Add contacts to company**.
3. Configure filters (Function, Current Job Title, Region, etc.).
4. Click **Fetch Preview** to see matching contacts.
5. Assign or create a contact list for the results.

> **Note:** If no contacts are found, try broadening your filters. For example, search "HR" instead of "HR Manager." You can also use the dropdown arrow icon in the **Contacts Count** column to manually explore people at a specific company.

**The "Contacts Count" column** in the companies table shows three elements:

1. **Number of contacts** -- Total contacts associated with the company.
2. **Contacts in family** -- Click to view the full list of associated contacts.
3. **Dropdown arrow** -- Search and manually associate new contacts with the company.

#### 2. Enrich with AI

Displays all company-type AI variables. Select variables to run or click **Create new AI variable**.

#### 3. CRM Sync

- **Sync with your CRM** -- Syncs mapped company fields from your CRM integration settings.
- **Create new CRM field** -- Add a new CRM-mapped field.

#### 4. Enrich with Formula

Displays all available formulas. Select formulas to run or click **Create new formula**.

### Enriching with Email or Phone

To enrich contacts with email or phone data:

1. Go to the list of contacts you want to enrich.
2. Select the records to enrich. To enrich all contacts, select **Enrich all** (above the first column). To enrich specific contacts, select them using their checkboxes first.
3. Click **Enrich** and choose:
   - **Enrich phone and email address** -- Searches for both phone and email.
   - **Enrich email address** -- Searches for email only.

### Finding Data from LinkedIn

If you imported companies or contacts from a non-LinkedIn source (e.g., CSV, CRM), you can locate them on LinkedIn to scrape additional information.

**If you have the LinkedIn URL:**

1. Select the records in your list.
2. Go to **Enrich > Find data from LinkedIn by URL**.

**If you do not have the LinkedIn URL:**

1. Select the records in your list.
2. Go to **Enrich > Find data from LinkedIn by Name**.

> **Important:** "Find data from LinkedIn by URL" uses the **LinkedIn URL**, not the company website URL. If the name search does not find the record, the system will attempt a search by domain (if available in the list).

When searching by name for companies, you can apply additional matching filters:

- **Match only if the company name is similar** (recommended to always enable).
- **Match only if the domain is exact** -- The system will search by domain if it cannot find the name.
- **Headquarters Location**
- **Industry**
- **Company headcount**

If the wrong company is matched, click the magnifying glass icon next to the company name to see other LinkedIn companies with that name and select the correct one.

> **Tip:** After importing companies from any source (CSV, CRM, etc.), always run **Find Data from LinkedIn by URL** or **by Name** to populate LinkedIn fields.

### Contact and Company Score

Enginy automatically scores contacts and companies based on how closely they match your Ideal Customer Profile (ICP) defined in the **AI Playbook**. Two columns are available in the data table:

- **Company Score**
- **Contact Score**

Each score classifies the record as **High**, **Medium**, **Low**, or **Disqualified**. Hover over any score to see the specific reasons behind the rating.

#### Company Score Criteria

| Score | Criteria |
|---|---|
| **High** | Company size approximately matches the ICP target; industry is an exact or very close match; location is within the desired region. |
| **Medium** | Company size is equal to or larger than the target; industry is broadly related but not exact; country matches even if the city does not. |
| **Low** | Company size is lower than target; industry does not closely match; company is outside target countries but may still be relevant. |
| **Disqualified** | Matches disqualifying traits (e.g., B2C if B2C is disqualified); industry is clearly irrelevant; insufficient data to score confidently. |

#### Contact Score Criteria

| Score | Criteria |
|---|---|
| **High** | Job title is the same or very similar to ICP targets; location is within the desired region; company score is High. |
| **Medium** | Job title is the same or similar, same country, company score is Medium. OR same department but different seniority, same country, company score is High. OR same/similar title, different country, company score is High. |
| **Low** | Same or similar job title, same country, but company score is Low. OR same department, different seniority, company score is Medium. OR same department, different country, company score is High. |
| **Disqualified** | Contact meets a disqualifying factor (e.g., Freelancer when excluded); company score is Disqualified; job title belongs to a different department; contact is in a different country with Medium/Low/Disqualified company score. |

> **Important:** To access scoring, you must complete your ICP in the **AI Playbook** page. You can fill it in manually or use **Fill with AI** for a quick setup.

> **Note:** If a company or contact is missing critical fields, the status will display **NOT ENRICHED**. Run **Enrich Data from LinkedIn** to populate the required fields. Required fields for scoring: **Company** -- name, industry, description, employee range, number of employees, country, city. **Contact** -- job title, company, location.

> **Note:** Job title comparisons are flexible -- synonyms, role equivalents, and translations are considered. If a contact's information changes (e.g., job promotion), the score updates automatically.

---

## Importing Companies (Create List)

Click **Add Companies** (from within a list) or **Create new** (from the Lists dashboard) to open the **Create List** modal. The following import options are available for companies.

### AI Finder (Companies)

Provides a text box where you describe your ideal customer (e.g., "companies in Barcelona that have two million revenue"). The AI processes your description and generates a list of matching companies.

- **Presets** are available as pre-defined prompt folders to help you get started quickly.

### Find Companies on LinkedIn

Opens a **Search for Companies** modal with the following structure:

**Identity Selection:**

- Toggle **Choose an identity** to use a specific Sales Navigator account. This enables identity-specific filters.

**Tabs:**

- **General Search** -- Use filters to search LinkedIn.
- **Sales Nav URL** -- Paste a Sales Navigator search URL directly.

**Saved Searches:**

- Previously saved filter sets that you can reuse. After configuring filters, click **Save Search** to store the current set for future use.

**General Search Filters (Company Information):**

| Filter | Notes |
|---|---|
| Search Keywords | Used as tags. Click the AI star icon to generate related keywords based on your input. |
| Industry | Includes AI star icon for suggestions. |
| Headquarters Location | Includes AI star icon for suggestions. |
| Company Headcount | -- |
| Annual Revenue | -- |
| Company Headcount Growth | -- |
| Number of Followers | -- |
| Department Headcount | -- |
| Department Headcount Growth | -- |
| Fortune | -- |
| Recent Activities | -- |
| Job Opportunities | -- |

**Identity-Specific Filters (requires Sales Navigator):**

- Saved Accounts
- Account Lists
- Connections

**AI-Assisted Keyword Generation:**

For **Search Keywords**, **Industry**, and **Headquarters Location**, click the star icon to open an AI prompt. Describe what you are looking for (e.g., "Which industries are you interested in?"), choose **Include** or **Exclude**, and the AI generates additional relevant tags.

**Results Preview:**

After applying filters, a preview of matching companies appears. You can:

- Manually select specific companies to import.
- Set a number of **Companies to import** (e.g., 100) to automatically select the top results.

**Advanced Settings:**

- **Only import new companies** -- When enabled, companies already in your Enginy account are skipped.

**Importing:**

- If accessed from within a list, clicking **Import** adds the companies directly to that list.
- If accessed from the main Lists dashboard via **Create new**, clicking **Add to list** opens a dialog where you choose an existing list or create a new one.

> **Note:** If fewer than 100 companies are found, you cannot reduce the import count further.

> **Tip:** Include the filters you used in the list name (e.g., "B2B SaaS / 50+ employees / Spain"), as the filters are not visible after creation. Alternatively, click **Generate with AI** to auto-generate a list name.

### Import from LinkedIn Jobs

1. Toggle **Choose an identity** and select an identity with Sales Navigator.
2. Paste the **LinkedIn Job Search URL** (format: `linkedin.com/jobs/search/...`).
3. Click **Import** and choose a new or existing list.

### Import Companies from HubSpot (Search)

Opens a filter-based search modal:

1. Define filters using **HubSpot Property**, **Operator** (is equal to, is not equal to, is known, is unknown), and **Value**.
2. Add multiple filters as needed.
3. Click **Fetch Preview** to see matching results.
4. Import the companies to a new or existing list.

**Standard field mapping (HubSpot to Enginy):**

| Enginy Field | HubSpot Property |
|---|---|
| Name | name |
| Website | website |
| Domain | domain |
| Street Address | address |
| City | city |
| Country | country |
| Description | description |
| Industry | industry |

> **Tip:** Need more fields? Customize the CRM import mapping in your integration settings.

### Import Companies from HubSpot List

1. Select a list from the **Their CRM list** dropdown.
2. Optionally enable **Match with existing companies** to sync with companies already in Enginy using your CRM field mapping.
3. Click **Import X companies**.

### Import Companies from Salesforce

1. Go to **Companies > Add new companies > Find companies in Salesforce**.
2. Apply filters and click **Fetch Preview**.
3. Add the results to a new or existing list.

**Standard field mapping (Salesforce to Enginy):**

| Enginy Field | Salesforce Property |
|---|---|
| Name | name |
| Website | website |
| Domain | domain |
| Street Address | address |
| City | city |
| Country | country |
| Description | description |
| Year Founded | founded_year |
| Industry | industry |

### Import Companies from Dynamics

1. Go to **Companies > Create new company list** and give it a name.
2. Select **Import** and choose either **Import from Dynamics list** or **Find companies in Dynamics** (by using filters).

**Standard field mapping (Dynamics to Enginy):**

| Enginy Field | Dynamics Property |
|---|---|
| Name | name |
| Website | website |
| Domain | domain |
| Street Address | address |
| City | city |
| Country | country |
| Description | description |
| Industry | industry |

### Import Companies from Google Maps

1. Enter the **Category** search term (e.g., "Restaurant").
2. Select the **Area** -- Choose **Radius** or **Select area in the map**.
3. Set a **Limit of companies** (maximum number of results).
4. Configure **Other filters:**
   - Only import companies with domain.
   - Also import companies that are permanently closed.
5. Select a new or existing list under **Select list**.
6. Review the map preview showing the companies found, then click **Import companies** to proceed.

### Import by Technology Stack (TheirStack)

Opens a **Find companies by technology stack from TheirStack** modal.

**Saved Searches** -- Reuse previously saved filter sets.

**Filters:**

| Filter | Notes |
|---|---|
| Technologies Used | **Required.** Includes an OR/AND toggle. You can include or exclude specific technologies. |
| Company Headquarters Country | -- |
| Industry | Includes AI star icon for suggestions. |
| Company Type | -- |
| Company Name | -- |
| Company Domain | -- |
| Only YC Companies | On/Off toggle. |
| Revenue | In dollars. |
| Employee Count | -- |
| Funding | In dollars. |

After applying filters, a preview appears. Set the number of companies to import and click **Import**. A dialog lets you choose a new or existing list.

### Import Companies by Job Posts (TheirStack)

Opens a **Find companies from job postings on TheirStack** modal.

**Saved Searches** -- Reuse previously saved filter sets.

**Job Filters:**

| Filter | Notes |
|---|---|
| Job Posted At | **Required.** |
| Job Title | Includes AI star icon. The AI prompt asks for "Roles" and "Region" and generates variations. |
| Job Description | -- |
| Job Country | -- |
| Job Location | -- |
| Pattern | -- |
| Technologies in Job | OR/AND toggle. |
| Remote | -- |
| Annual Salary | In dollars. |

**Company Filters:**

| Filter | Notes |
|---|---|
| Company Name | -- |
| Company Domain | -- |
| Technologies Used | OR/AND toggle. |
| Company Headquarters Country | -- |
| Industry | Includes AI star icon. |
| Company Type | -- |
| Only YC Companies | On/Off toggle. |
| Revenue | In dollars. |
| Employee Count | -- |
| Funding | In dollars. |

After applying filters, a preview appears. Configure the import count, optionally enable **Import Hiring Managers**, and click **Import** to add to a new or existing list.

### Import Companies from CSV

1. Upload or browse for your CSV file.
2. Map your CSV columns to Enginy columns:
   - **Name** column: Your CSV column names.
   - **Column** dropdown: The corresponding Enginy field.
   - **Sample**: A preview of the data being imported.
   - **Override** checkbox: When checked, re-importing the same CSV will overwrite existing values for that column.

> **Important:** You must map at least one column to **Company Name**. If your CSV does not contain a company name but has a website column, map the website column to "Company Name" to force the import. After importing, use **Move Values** to transfer the data from Company Name to the Website field.

3. Click **Add to List** and select a new or existing list.

### Create a New Company Manually

Two options:

- **Search Company on LinkedIn** -- Use the search bar to find and auto-fill company data from LinkedIn.
- **Add Manually** -- Fill in the fields yourself:

| Field | Required |
|---|---|
| Company Name | Yes |
| Company LinkedIn URL | No |
| Company Website Domain | No |
| Company URN | No |
| Industry | No |
| Number of Employees | No |
| Range of Employees | No |
| Year Founded | No |
| Street Address | No |
| Company Email | No |
| Revenue Range | No |
| Hiring on LinkedIn (Yes/No) | No |
| Company Country | No |

After filling in the fields, choose a new or existing list to save the company.

---

## Importing Contacts (Create List)

Click **Add Contacts** (from within a list) or **Create new** (from the Lists dashboard) to open the **Create List** modal for contacts.

### AI Finder (Contacts)

Works the same as the AI Finder for companies. Provide a text description of your ideal contact and the AI generates a matching list.

### Find Contacts on LinkedIn

Opens a **Search for Contacts** modal.

**Identity Selection:**

- Toggle **Choose an identity** to use a specific Sales Navigator account.

**Tabs:**

- **General Search** -- Use filters to search LinkedIn.
- **Sales Nav URL** -- Paste a Sales Navigator URL directly.

**Contact Information Filters:**

| Filter | Notes |
|---|---|
| Current Job Title | Includes AI enrichment option. |
| Geography | Includes AI enrichment option. |
| Past Job Title | Includes AI enrichment option. |
| Function | -- |
| Seniority Level | -- |
| Years in Current Company | -- |
| Years in Current Position | -- |
| Years of Experience | -- |
| First Name | -- |
| Last Name | -- |
| Profile Language | -- |
| School | -- |

**Company Information Filters:**

| Filter | Notes |
|---|---|
| Industry | Includes AI enrichment option. |
| Company Headquarters Location | Includes AI enrichment option. |
| Company Headcount | -- |
| Current Company | -- |
| Past Company | -- |
| Company Type | -- |

**Intent Filters:**

| Filter | Notes |
|---|---|
| Changed Jobs | On/Off toggle. |
| Posted On LinkedIn | On/Off toggle. |

**Identity-Specific Filters (requires Sales Navigator):**

| Filter | Notes |
|---|---|
| Connection | -- |
| Persona | -- |
| Connections Of | -- |
| Shared Experiences | On/Off toggle. |
| Following Your Company | On/Off toggle. |
| Past Colleague | On/Off toggle. |
| Viewed Your Profile Recently | On/Off toggle. |
| Lead Lists | -- |
| People You Interacted With | -- |
| Account Lists | -- |
| Groups | -- |

> **Tip:** Save your filter configuration by clicking the bookmark icon at the top of the filters panel.

### Social Imports

#### Import from LinkedIn Post

1. Paste the LinkedIn post URL (format: `linkedin.com/posts/...`).
2. Click **Import**. This imports users who engaged with the post (likes, reactions, comments).

**AI Suggested Posts** are available as preset cards based on your **AI Playbook** data (e.g., "Posts from Competitor", "Posts Mentioning Competitors", "Posts from Industry Mention"). The AI uses your company info, competitors, and ICP to suggest relevant posts.

> **Note:** The post does not need to be yours -- it can be anyone's post.

#### Import from LinkedIn Event

1. Paste the LinkedIn event URL.
2. Click **Import**. This imports event attendees.
3. **AI Suggested Events** are also available.

#### Import from LinkedIn Poll

1. Paste the LinkedIn poll URL.
2. Click **Import**.

### Network Imports

#### Import from LinkedIn Connections

Select an identity from your Enginy account and import all of their LinkedIn connections.

#### Import from LinkedIn Followers

Select an identity and import all of their LinkedIn followers.

> **Note:** Connections and followers are distinct. A person can follow your profile without being a connection.

### Import Contacts from HubSpot

Two options:

- **Import Contacts from HubSpot (Search)** -- Same filter-based approach as for companies: use HubSpot Property, Operator, and Value to define filters. Preview results and import.
- **Import Contacts from HubSpot List** -- Select a contact list from the CRM dropdown and import.

### Import Contacts from CSV

1. Upload or browse for your CSV file.
2. Map CSV columns to Enginy fields.

> **Important:** You must map columns to **First Name**, **Last Name**, AND either **Company Name** or **LinkedIn Profile URL**.

3. Click **Add to List** and select a new or existing list.

### Create a New Contact Manually

Two options:

- **Search Contact on LinkedIn** -- Use the search bar to find and auto-fill contact data.
- **Add Manually** -- Fill in the fields yourself:

| Field | Required |
|---|---|
| First Name | Yes |
| Last Name | Yes |
| Company Name | Yes |
| Job Title | No |
| Country | No |
| LinkedIn Profile URL | No |
| Mobile Phone | No |
| Professional Email | No |
| LinkedIn Headline | No |
| Geo Region | No |
| Years in Company | No |
| Years in Role | No |
| Image URL | No |
| LinkedIn Profile ID | No |
| Profile BIO | No |

---

## AI Recommended Lists

Enginy's AI generates targeted lead-list recommendations based on your company information, ICPs, products, and AI Playbook data. There are four types of recommendations, refreshed weekly:

| Type | Description |
|---|---|
| **LinkedIn Lead Searches** | Smart filters to find prospects on LinkedIn, tailored to a specific identity. |
| **LinkedIn Company Searches** | Filters to discover ideal-fit companies. |
| **LinkedIn Posts** | High-value posts with relevant engagement -- extract leads from people who liked or commented. |
| **LinkedIn Events** | Events with your target audience -- extract attendees as leads. |

**How to access:**

Go to **Create List** and choose one of: Find LinkedIn Contacts, Find LinkedIn Companies, Find LinkedIn Posts, or Find LinkedIn Events. In each section you will see an **AI Recommendations** area.

> **Important:** If your AI Playbook is missing key information, recommendations will not appear. Instead, a message will indicate what is missing (e.g., name, job title, languages, seniority level, or company overview) along with a link to update it.

**Intent Signals:**

When you import contacts from posts or events, Enginy automatically tags those leads with an intent signal:

- **Reacted to a post** (like or comment)
- **Attended an event**

These intent signals can be used as AI variables in your conversations -- for example, as a natural icebreaker referencing the post or event the lead engaged with.

---

## Workflows (Beta)

The **Workflows** option is available at the bottom of the Create List modal for both Companies and Contacts.

### Company Workflows

**Import and Track Companies by Technology** -- Set up automated tracking of companies using specific technologies (ERPs, cloud providers, programming languages, etc.).

Setup process:

1. Define **Main Search Criteria** -- Select the technologies and countries you want to track.
2. Apply **Filters** -- Use company-level TheirStack filters.
3. Configure **Workflow Steps** -- Define a sequence of actions (e.g., Search Companies from TheirStack > Add to List > Enrich with AI > Find Company from Name on LinkedIn). You can add as many steps as needed.
4. Set **Settings** -- Configure the running frequency: Once, Weekly, Monthly, Quarterly, or Yearly. Assign a list name for the output.

### Contact Workflows

Two workflow options:

**Track Contacts for Changes:**

1. Pick the contacts you want to track (import from a list or select individual contacts).
2. Select which changes to monitor:
   - Profile Bio
   - LinkedIn Headline
   - Job Title
   - Contact Country
   - Company Name
   - Last LinkedIn Post
   - Job Change
   - Mentioned in News
   - Job Promotion
3. Choose (or create) a list where tracked contacts will be added.
4. Define the workflow steps (e.g., Select Lists > Scrape from LinkedIn > Check for Changes > Add to List). Additional steps can be added.
5. Configure recurrence settings.

**Recurring Contacts List:**

Create a recurring import where contacts from a LinkedIn Sales Navigator URL are imported on a regular basis. Configure recurrence and target list.

---

## Additional Actions and How-Tos

### Export to CRM, CSV, or Excel

**Exporting companies to CRM:**

1. Navigate to the company list you want to export (or use **All Companies**).
2. Select companies: select all, filter by columns, or manually select.
3. Click **Export to CRM**.
4. Configure the export: **Owner**, **Company fields**, **Association type**.
5. Enable or disable **Export associated contacts**.
6. Check the **Overwrite existing values** option carefully -- verify your field mapping first.

> **Important:** When you export a company, the leads associated with it will also be exported if "Export associated contacts" is enabled.

You can find export reports in the **Activity** section of Enginy.

### Switching Contacts Between Lists

To move contacts from one list to another:

1. Go to **Lists > [Source List]**.
2. Select the contacts you want to move (manually or via filters).
3. Click **Change List** in the bottom bar.
4. Choose one of the following:
   - **Create a new list** -- Enter a name and confirm.
   - **Add to an existing list** -- Select a list from the dropdown.
5. In the Change List dialog you can see which lists the selected contacts currently belong to (marked with a checkmark):
   - **To remove contacts from the original list:** Uncheck the box next to that list.
   - **To keep contacts in both lists:** Leave both boxes checked.

### Move Values from One Column to Another

1. Open the list containing the data.
2. Click on the name of the source column header.
3. Select **Move Values** from the dropdown menu.
4. Configure:
   - **From Field** -- The source column (where the values currently are).
   - **To Field** -- The destination column (where you want to move them).

### Simplify Company Name

If your company list contains legal names with suffixes (Ltd, SA, SL, Inc., etc.) and you need clean trade names for LinkedIn searches and enrichment:

1. Open the company table.
2. Click the **+** button between columns.
3. Add a new AI variable: select **Simplified Company Name** (or create it via **New AI Variable**).
4. Run the AI variable on your companies.
5. Use **Move Values** to transfer data from the "Simplified Company Name" column to the "Company Name" column.

### Add a Custom Field

1. Open the list where you want to add the custom field.
2. Position your cursor between two existing columns and click the **+** button.
3. Select **New Custom Field**.
4. Choose whether the field is for **Lead** or **Company**.
5. Define the **Field Name** and select the **Data Type** (text, number, date, etc.).
6. Click **Create**.
7. The new field appears as an additional column.

**To bulk-fill a custom field:**

1. Click on the first cell of the new column.
2. Hold **Shift** and click on the last cell.
3. The column will be highlighted.
4. Type the value in the last cell -- it will automatically fill all selected cells.

### Create a Formula Field

1. Open the table where you want the formula field.
2. Click the **+** button between columns.
3. Select **New Formula Field**.
4. Choose the entity type: **Lead** or **Company**.
5. Fill in:
   - **Name** -- The name of the formula field.
   - **Formula description** -- Describe the calculation. Use `{` to reference existing fields.
6. Click **Select leads/companies** to define which records will be affected.
7. Click **Create**.

### Sync a CRM Property

To sync a specific property from your CRM to Enginy:

1. **Check your CRM connection** -- Go to the **Integrations** page and verify that your CRM (HubSpot, Salesforce, Pipedrive, etc.) is connected.
2. **Navigate to the list** -- Go to the Leads or Companies view.
3. **Add a new CRM field** -- Click **Add New Field > New CRM Field**. Enter the **internal name** of the CRM property (not the display label -- use the internal name that never changes).
4. **Re-launch CRM Sync** -- Run the CRM sync for the specific list. Enginy will pull in the data for the specified property.
5. **Review** -- For records that exist in your CRM, the synced information will now be visible.

### Check if a Contact or Company Exists in CRM

The columns **Contact exists in CRM** and **Company exists in CRM** indicate whether a record already exists in your integrated CRM. The matching criteria are configured in your integration settings.

**If a contact exists in the CRM, the following fields become available:**

- Owner (contact owner in the CRM)
- CRM ID (unique identifier)
- Last activity date

**If a company exists in the CRM, the following fields become available:**

- Owner (company owner in the CRM)
- CRM ID (unique identifier)
- Last activity date
- Last updated in CRM date

> **Note:** To use these indicators, your CRM must be integrated. To sync additional fields beyond the defaults, add a new CRM field (see [Sync a CRM Property](#sync-a-crm-property)).

### Check CSV Import Report

Use the CSV Import Report to verify what was imported, who performed the import, when it happened, and whether there were any issues.

1. Go to the **Activity** section in Enginy.
2. Use the filters at the top:
   - **All actions** -- Select "Import companies from CSV" or "Import contacts from CSV".
   - **All users** -- Choose a specific user or keep "All users".
   - **Date** -- Select a date range (Today, Last week, Last month, or custom).
3. Review the filtered list. Each entry shows:
   - Who performed the import.
   - How many records were imported.
   - When the import was performed.
   - Whether there were errors or warnings.
4. Click the **spreadsheet icon** on any import row to open the detailed CSV Import Report, which shows:
   - Whether the import completed successfully.
   - Which rows failed or generated warnings.
   - A description of the issue (e.g., invalid data, missing required fields, duplicate records).

### How Many Contacts Should I Select per Company

When enriching company lists with contacts, the ideal number depends on your use case:

- **General recommendation:** 3 to 10 contacts per company, with 5 being a common target.
- **Role specificity:** Common roles (e.g., sales representatives) will have a larger pool. Specialized or niche roles may have fewer available contacts.
- **Company size:** Smaller companies may need fewer contacts. Larger organizations may justify more contacts across multiple departments or regions.

Align the number of contacts with your campaign goals and outreach strategy.

### I Cannot Find an Industry on LinkedIn

Industries in the LinkedIn and Sales Navigator filters correspond to a closed list of options. Company pages on LinkedIn must select from this predefined set, so your desired industry might not appear exactly as expected.

**How to resolve:**

1. **Use AI-assisted generation** -- In the Industry filter, click **Generate with AI**. Enter a description or keywords, and the AI will identify the closest matches. Remove any options that are not relevant.
2. **Narrow results with keywords** -- If the industry matches are too generic, use the keyword search filter. Keywords are searched against the company name, headline, and description on LinkedIn.

> **Tip:** You can use this prompt template with an AI assistant to generate boolean keyword searches: "Generate a boolean search for Sales Navigator in this format: "keyword 1" OR "keyword 2" OR "keyword 3". Topic is [introduce topic]. Include a maximum of 15 keywords, in English and [your language], singular and plural, and include relevant synonyms."

---

## LinkedIn Fields Reference

When importing contacts from LinkedIn, the following fields can be populated:

**Personal Contact Information:**

- First Name
- Last Name
- Job Title
- Profile Bio
- Contact LinkedIn URL
- LinkedIn Headline
- LinkedIn Profile ID
- Previous Positions
- Languages
- Number of Connections
- Intent Data

**Company Information (via contact):**

- Company Name
- Company Description
- Website
- Industry
- Company LinkedIn URL
- Number of Employees
- Range of Employees
- Company Countries
- Company Country
- Company URN
- Year Founded
- Revenue

**Location Information:**

- Contact Country
- Geo Region
- City
- Street Address

**Work History and Experience:**

- Years in Company
- Years in Role
- Job Change
- Job Promotion

**Hiring and Growth:**

- Hiring on LinkedIn
- LinkedIn Open Job Positions
- Six Months Headcount Growth
- Two Years Headcount Growth
- Yearly Headcount Growth
- Open Job Descriptions

**Additional Information:**

- Mentioned in News
- Last LinkedIn Post

---

## CRM Field Mapping Reference

When importing companies from a CRM, the following fields are mapped by default:

| Enginy Field | CRM Property (HubSpot / Salesforce / Dynamics) |
|---|---|
| Name | name |
| Website | website |
| Domain | domain |
| Street Address | address |
| City | city |
| Country | country |
| Description | description |
| Industry | industry |
| Year Founded | founded_year (Salesforce only by default) |

> **Tip:** To retrieve more fields than the defaults listed above, customize the CRM import mapping in your integration settings.

---

## FAQs

**Q: Why are there more contacts than companies in my list?**

A: Because multiple contacts can be associated with the same company. For example, a single company may have several people from different departments in your list.

**Q: I imported companies from a CSV but LinkedIn data is missing. What should I do?**

A: After importing from CSV, you must run enrichment to pull LinkedIn data. Select the companies, then go to **Enrich > Find data from LinkedIn by URL** (if you have the LinkedIn URL) or **Enrich > Find data from LinkedIn by Name** (if you only have the company name). If the name search does not find a match, the system will attempt a domain-based search.

**Q: What is the difference between "Fast" and "Deep" enrichment modes?**

A: **Fast** mode uses only the quickest data sub-providers, returning results faster but potentially missing some records. **Deep** mode queries all available suppliers, which takes longer but has a higher probability of finding email addresses or phone numbers.

**Q: Why does a contact or company show "NOT ENRICHED" instead of a score?**

A: The scoring system requires specific fields to calculate a score. For companies: name, industry, description, employee range, number of employees, country, and city. For contacts: job title, company, and location. If any of these fields are missing, the record shows "NOT ENRICHED." Run **Enrich Data from LinkedIn** to fill in the missing data. If LinkedIn also lacks this information, the status will remain as NOT ENRICHED.

**Q: Can I keep contacts in multiple lists at the same time?**

A: Yes. When you use the **Change List** action, you can check multiple lists to keep the contacts in all of them simultaneously. Uncheck a list only if you want to remove the contacts from it.
