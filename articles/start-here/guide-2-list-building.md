# List Building
This guide walks you through the steps of finding, importing, and enriching companies and contacts in Enginy. By the end, you will have a fully prepared list of prospects ready to be added to outreach campaigns.

---

# Table of Contents
- [Before You Start](#before-you-start)
- [Decide Your Approach](#decide-your-approach)
- [Option A: Build a Company List](#option-a-build-a-company-list)
  - [Step 1: Import Companies](#step-1-import-companies)
  - [Step 2: Enrich Companies with LinkedIn Data](#step-2-enrich-companies-with-linkedin-data)
  - [Step 3: Check CRM Status](#step-3-check-crm-status)
  - [Step 4: Enrich with AI](#step-4-enrich-with-ai)
  - [Step 5: Find Contacts Within Companies](#step-5-find-contacts-within-companies)
- [Option B: Build a Contact List](#option-b-build-a-contact-list)
  - [Step 1: Import Contacts](#step-1-import-contacts)
  - [Step 2: Enrich Contacts with AI](#step-2-enrich-contacts-with-ai)
  - [Step 3: Enrich with Email and Phone](#step-3-enrich-with-email-and-phone)
- [Understand the List Table](#understand-the-list-table)
  - [Column Colors](#column-colors)
  - [Managing Columns and Views](#managing-columns-and-views)
  - [Actions on Selected Rows](#actions-on-selected-rows)
- [Contact and Company Score](#contact-and-company-score)
- [Next Steps](#next-steps)
- [FAQs](#faqs)
    - [Q1: Should I start with companies or contacts?](#q1-should-i-start-with-companies-or-contacts)
    - [Q2: I imported companies from CSV but LinkedIn data is missing — what should I do?](#q2-i-imported-companies-from-csv-but-linkedin-data-is-missing--what-should-i-do)
    - [Q3: What is the difference between Fast and Deep enrichment?](#q3-what-is-the-difference-between-fast-and-deep-enrichment)
    - [Q4: Can I keep contacts in multiple lists at the same time?](#q4-can-i-keep-contacts-in-multiple-lists-at-the-same-time)
    - [Q5: How many contacts should I select per company?](#q5-how-many-contacts-should-i-select-per-company)
    - [Q6: Why does a contact show Missing Data instead of a score?](#q6-why-does-a-contact-show-missing-data-instead-of-a-score)

---

# Before You Start
Before working with Lists, make sure the following are in place:

- **Identities configured** — At least one identity connected in Enginy (required for LinkedIn searches and scraping).
- **CRM integration** (if applicable) — To import from or export to your CRM, connect it in the **Integrations** settings page (see the Enginy Configuration Guide).
- **AI Playbook completed** — To access Contact and Company Scores and AI-powered list recommendations, complete your ICP in the **AI Playbook** page.
- **Sales Navigator account** (optional) — To use identity-specific LinkedIn filters, link at least one Sales Navigator identity.

---

# Decide Your Approach
When creating a list in Enginy, there are two approaches:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Approach</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Recommended When</b></p></td></tr><tr><td><p class="no-margin"><b>Option A: Companies first, then contacts</b></p></td><td><p class="no-margin">You want to build a target account list based on ICP criteria (industry, size, technology, hiring, location) and then find the right people within those companies. Also recommended when you already have a list of companies and want to find buyer personas inside them.</p></td></tr><tr><td><p class="no-margin"><b>Option B: Contacts directly</b></p></td><td><p class="no-margin">You want to create a list of people based on buyer persona criteria (job title, seniority, function). Also recommended when importing people who interacted with a LinkedIn post/poll, attended an event, are LinkedIn connections, or when you have a spreadsheet of contacts to enrich.</p></td></tr></tbody></table>

Both approaches end with a fully enriched contact list ready for campaigns. Choose the one that best fits your sourcing strategy.

---

# Option A: Build a Company List
## Step 1: Import Companies
Go to **Lists** > **+ Create New** (from the dashboard) or click **Add Companies** inside an existing list. The Create List modal shows all available import sources for companies.

![](https://res.cloudinary.com/enginy/image/upload/v1771440137/helpcenter/lists-48.png)

### Import Sources
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Source</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>How It Works</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Credit Cost</b></p></td></tr><tr><td><p class="no-margin"><b>AI Finder</b></p></td><td><p class="no-margin">Describe your ideal customer in plain language (e.g., "SaaS companies in Spain with 50+ employees"). The AI generates LinkedIn filters automatically and returns matching companies.</p></td><td><p class="no-margin">1 credit + 1 scraping per company</p></td></tr><tr><td><p class="no-margin"><b>Find Companies on LinkedIn</b></p></td><td><p class="no-margin">Search using Sales Navigator filters: industry, headquarters, headcount, revenue, department headcount, growth, and more. You can also paste a Sales Navigator URL directly.</p></td><td><p class="no-margin">1 credit + 1 scraping per company</p></td></tr><tr><td><p class="no-margin"><b>Import from LinkedIn Jobs</b></p></td><td><p class="no-margin">Paste a LinkedIn Job Search URL to import companies that are hiring for a specific position on LinkedIn.</p></td><td><p class="no-margin">1 credit + 1 scraping per company</p></td></tr><tr><td><p class="no-margin"><b>TheirStack (Tech Stack)</b></p></td><td><p class="no-margin">Find companies by the technologies they use. Filter by tech, country, industry, company type, revenue, headcount, and more.</p></td><td><p class="no-margin">1 credit per company (no scraping)</p></td></tr><tr><td><p class="no-margin"><b>TheirStack (Job Posts)</b></p></td><td><p class="no-margin">Find companies by job postings across all job board sites (not just LinkedIn). Filter by job title, description, location, salary, and company attributes.</p></td><td><p class="no-margin">1 credit per company (no scraping)</p></td></tr><tr><td><p class="no-margin"><b>Google Maps</b></p></td><td><p class="no-margin">Find companies present in a specific geographic area. Search by category (e.g., "Gym") and radius or map area.</p></td><td><p class="no-margin">1 credit per company (no scraping)</p></td></tr><tr><td><p class="no-margin"><b>Crunchbase</b></p></td><td><p class="no-margin">Find companies by keywords, headquarters, industry, headcount, funding, revenue, investor, M&amp;A status, and more.</p></td><td><p class="no-margin">7 credits per company (no scraping)</p></td></tr><tr><td><p class="no-margin"><b>Import from CRM</b></p></td><td><p class="no-margin">Filter and import companies from your connected CRM using property-based filters.</p></td><td><p class="no-margin">Free (no credits, no scraping)</p></td></tr><tr><td><p class="no-margin"><b>Import from CRM List</b></p></td><td><p class="no-margin">Select an existing list from your CRM and import its companies directly.</p></td><td><p class="no-margin">Free (no credits, no scraping)</p></td></tr><tr><td><p class="no-margin"><b>Import from CSV</b></p></td><td><p class="no-margin">Upload a CSV file and map columns to Enginy fields. If your file is in Excel or Google Sheets, save as CSV UTF-8 first.</p></td><td><p class="no-margin">Free (no credits, no scraping)</p></td></tr><tr><td><p class="no-margin"><b>Create Manually</b></p></td><td><p class="no-margin">Search for a company on LinkedIn to auto-fill data, or add one manually by filling in the fields.</p></td><td><p class="no-margin">1 scraping if searched on LinkedIn; free if manual</p></td></tr></tbody></table>

**Tip:** If your AI Playbook has an ICP defined, LinkedIn searches will offer AI-suggested presets with filters pre-filled based on your ICP. These refresh weekly.

**Important:** Do not import more than 5,000 companies at once from your CRM.

**Note:** For the full filter reference for each import source (LinkedIn, TheirStack, Crunchbase, Google Maps), see the **Lists** article.

## Step 2: Enrich Companies with LinkedIn Data
This step is **mandatory** if you imported companies from a source other than LinkedIn or Sales Navigator (CSV, CRM, TheirStack, Google Maps, Crunchbase). It populates LinkedIn fields and the Company URN, which is required to search for contacts within companies.

1. Select the companies in your list.
2. Click **Enrich** and choose the appropriate option:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Option</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>When to Use</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Cost</b></p></td></tr><tr><td><p class="no-margin"><b>Find data by LinkedIn URL</b></p></td><td><p class="no-margin">When your list already contains LinkedIn URLs for the companies.</p></td><td><p class="no-margin">1 credit/result</p></td></tr><tr><td><p class="no-margin"><b>Find data by name or domain</b></p></td><td><p class="no-margin">When you do not have LinkedIn URLs. The system searches LinkedIn by company name and falls back to domain.</p></td><td><p class="no-margin">1 credit/result</p></td></tr></tbody></table>

When searching by name, you can apply matching filters:

- **Match only if the company name is exact** — Recommended as a first attempt.
- **Match only if the company name is similar** — Allows up to 2-character difference (useful when names include legal forms like SL, SA).
- **Match only if the domain is exact** — Strict domain matching.

![](https://res.cloudinary.com/enginy/image/upload/v1771440136/helpcenter/lists-45.png)

**Warning:** Failing to complete this step can result in creating duplicates in Enginy and not being able to search for contacts within the companies.

**Tip:** Before running "Find data by name or domain," run the default AI Variable **Simplified Company Name** to normalize company names to the common format used on LinkedIn.

## Step 3: Check CRM Status
If you have a CRM connected, run a **CRM Sync** to identify whether each company already exists in your CRM.

1. Select the companies in your list.
2. Click **Enrich > CRM Sync**.

After the sync, check the **Company exists in CRM** column (Yes or No). For companies that do exist, you can also see the CRM Owner, CRM ID, last activity date, and last updated date.

**Note:** CRM Sync is free (no credit cost).

## Step 4: Enrich with AI
Use AI Variables to segment, clean, or find additional information about your companies. Common use cases include:

- Categorizing companies as B2B vs. B2C based on their description.
- Scoring companies based on criteria not available in LinkedIn (e.g., specific product focus).
- Finding information from company websites, Google, or news that LinkedIn does not provide.

1. Select the companies you want to enrich.
2. Click **Enrich > Enrich with AI**.
3. Select one or more AI Variables and click **Run**.

**Note:** For a detailed guide on creating AI Variables, writing effective prompts, and using Deep Research, see the **AI Playbook** article.

## Step 5: Find Contacts Within Companies
Now that your company list is enriched, search for buyer personas within these companies.

1. Select the companies in your company list.
2. Click **Enrich > Get contacts from company**.
3. Configure filters: Function (department), Current Job Title, Region, and more.
4. Click **Fetch Preview** to see matching contacts.
5. Assign or create a contact list for the results.

![](https://res.cloudinary.com/enginy/image/upload/v1771440133/helpcenter/lists-37.png)

**Tip:** If no contacts are found, broaden your filters (e.g., search "HR" instead of "HR Manager"). You can also use the dropdown arrow in the **Contacts Count** column to manually explore people at a specific company.

**Important:** If the company has not been scraped yet (the Company URN field is empty), results may be inaccurate because the company is not linked to a specific LinkedIn account. Always complete Step 2 before searching for contacts.

After creating your list of contacts, proceed to **Option B > Step 2** below to enrich them with AI and contact data.

---

# Option B: Build a Contact List
## Step 1: Import Contacts
Go to **Lists** > **+ Create New** or click **Add Contacts** inside an existing list. The Create List modal shows all available import sources for contacts.

![](https://res.cloudinary.com/enginy/image/upload/v1771440141/helpcenter/lists-67.png)

### Import Sources
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Source</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>How It Works</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Credit Cost</b></p></td></tr><tr><td><p class="no-margin"><b>AI Finder</b></p></td><td><p class="no-margin">Describe your ideal contact in natural language. The AI generates LinkedIn filters and returns matching contacts.</p></td><td><p class="no-margin">1 credit + 1 scraping per contact</p></td></tr><tr><td><p class="no-margin"><b>Find Contacts on LinkedIn</b></p></td><td><p class="no-margin">Search using filters: job title, geography, function, seniority, years of experience, company industry, company headcount, intent signals, and more. Paste a Sales Navigator URL for direct import.</p></td><td><p class="no-margin">1 credit + 1 scraping per contact</p></td></tr><tr><td><p class="no-margin"><b>Import from LinkedIn Post</b></p></td><td><p class="no-margin">Paste a LinkedIn post URL to import people who liked, commented, or engaged with the post (yours or anyone's).</p></td><td><p class="no-margin">1 credit + 1 scraping per contact</p></td></tr><tr><td><p class="no-margin"><b>Import from LinkedIn Event</b></p></td><td><p class="no-margin">Paste a LinkedIn event URL to import attendees.</p></td><td><p class="no-margin">1 credit + 1 scraping per contact</p></td></tr><tr><td><p class="no-margin"><b>Import from LinkedIn Poll</b></p></td><td><p class="no-margin">Paste a LinkedIn poll URL to import voters.</p></td><td><p class="no-margin">1 credit + 1 scraping per contact</p></td></tr><tr><td><p class="no-margin"><b>Import from LinkedIn Connections</b></p></td><td><p class="no-margin">Import existing LinkedIn connections from any identity synced to Enginy.</p></td><td><p class="no-margin">1 credit + 1 scraping per contact</p></td></tr><tr><td><p class="no-margin"><b>Import from LinkedIn Followers</b></p></td><td><p class="no-margin">Import followers of an identity's LinkedIn profile.</p></td><td><p class="no-margin">1 credit + 1 scraping per contact</p></td></tr><tr><td><p class="no-margin"><b>Import from Crunchbase</b></p></td><td><p class="no-margin">Find contacts (investors, founders) using Crunchbase filters: keywords, headquarters, investment activity, exits, and more.</p></td><td><p class="no-margin">7 credits per contact</p></td></tr><tr><td><p class="no-margin"><b>Import from CRM</b></p></td><td><p class="no-margin">Filter and import contacts from your connected CRM using property-based filters.</p></td><td><p class="no-margin">Free</p></td></tr><tr><td><p class="no-margin"><b>Import from CRM List</b></p></td><td><p class="no-margin">Select an existing list from your CRM and import its contacts.</p></td><td><p class="no-margin">Free</p></td></tr><tr><td><p class="no-margin"><b>Import from CSV</b></p></td><td><p class="no-margin">Upload a CSV and map columns to Enginy fields. Save as CSV UTF-8 from Excel or Google Sheets first.</p></td><td><p class="no-margin">Free</p></td></tr><tr><td><p class="no-margin"><b>Import from Sales Navigator URL</b></p></td><td><p class="no-margin">Paste a saved Sales Navigator search URL to import its contacts.</p></td><td><p class="no-margin">1 credit + 1 scraping per contact</p></td></tr><tr><td><p class="no-margin"><b>Create Manually</b></p></td><td><p class="no-margin">Search for a contact on LinkedIn or fill in the fields manually (first name, last name, job title, company, LinkedIn URL, email, phone).</p></td><td><p class="no-margin">1 scraping if searched on LinkedIn; free if manual</p></td></tr></tbody></table>

**Important:** Do not import more than 5,000 contacts at once from your CRM.

**Tip:** If you imported contacts from a non-LinkedIn source (CSV, CRM), you may need to run **Enrich > Find data by LinkedIn URL** or **Find data by name** to populate LinkedIn fields. This ensures complete profiles and enables accurate scoring.

## Step 2: Enrich Contacts with AI
AI enrichment is especially valuable for contacts imported via LinkedIn search, where Sales Navigator title filtering can be imprecise. Use AI Variables to:

- Validate contacts by checking if their job title and headline match your target (e.g., classify as "Good" or "Bad").
- Categorize contacts into tiers or segments based on their profile data.
- Generate personalized icebreakers or message hooks for campaigns.

1. Select the contacts you want to enrich.
2. Click **Enrich > Enrich with AI**.
3. Select one or more AI Variables and click **Run**.

**Tip:** For credit optimization, filter your list beforehand to enrich only records where the variable column is empty.

## Step 3: Enrich with Email and Phone
To reach contacts via email campaigns, you need their professional email address. To include phone call tasks in your campaigns, you need their phone number.

1. Select the contacts you want to enrich (or click **Enrich all** above the first column).
2. Click **Enrich** and choose:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Tool</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Description</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Cost</b></p></td></tr><tr><td><p class="no-margin"><b>Enrich Email Address</b></p></td><td><p class="no-margin">Searches for the contact's professional email. Choose <b>Fast</b> (quickest providers only) or <b>Deep</b> (all providers — slower but more thorough).</p></td><td><p class="no-margin">5 credits/result</p></td></tr><tr><td><p class="no-margin"><b>Enrich Phone Number</b></p></td><td><p class="no-margin">Searches for the contact's phone number. Supports Fast and Deep modes.</p></td><td><p class="no-margin">40 credits/result</p></td></tr><tr><td><p class="no-margin"><b>Verify Email Address</b></p></td><td><p class="no-margin">Validates whether a professional email is Verified, Invalid, or Unsure.</p></td><td><p class="no-margin">1 credit/result</p></td></tr><tr><td><p class="no-margin"><b>Verify Phone Number</b></p></td><td><p class="no-margin">Validates a phone number as Valid, Unsure, or Invalid.</p></td><td><p class="no-margin">1 credit/result (phone verification costs 3 credits)</p></td></tr></tbody></table>

**Note:** "No data found" results are not billed. Additional data cleanup tools are available for free: **Extract Domain** (extracts website domain from email) and **Combine Name and Last Name** (generates a Full Name column).

**Tip:** After enriching with emails, run **Verify Email Address** to reduce bounce rates before launching campaigns. If you enabled "Delete non verified emails" in **Settings > General**, invalid emails will be removed automatically.

---

# Understand the List Table
When you open a list, the Detail View displays a table with columns from multiple sources. Understanding how this table works helps you manage and analyze your data effectively.

## Column Colors
Columns are color-coded by data source:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Color</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Source</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Examples</b></p></td></tr><tr><td><p class="no-margin"><b>Blue</b></p></td><td><p class="no-margin">LinkedIn</p></td><td><p class="no-margin">Profile URL, Employee Range, Industry</p></td></tr><tr><td><p class="no-margin"><b>Red</b></p></td><td><p class="no-margin">CRM</p></td><td><p class="no-margin">Contact exists in CRM, CRM ID, CRM Owner</p></td></tr><tr><td><p class="no-margin"><b>Green</b></p></td><td><p class="no-margin">External Databases</p></td><td><p class="no-margin">Professional Email, Mobile Phone</p></td></tr><tr><td><p class="no-margin"><b>Purple</b></p></td><td><p class="no-margin">AI Variables / Custom Fields</p></td><td><p class="no-margin">AI-generated outputs, custom data</p></td></tr><tr><td><p class="no-margin"><b>Grey</b></p></td><td><p class="no-margin">Formula Fields</p></td><td><p class="no-margin">URN from URL, formatted website URLs</p></td></tr></tbody></table>

## Managing Columns and Views
- **View Selector** — Switch between saved views. Views determine which columns are visible.
- **+ Manage Views** — Toggle columns on or off, save views as Public or Private, and reset to original layout.
- **Sort by / Filters** — Order rows and filter by any column field.
- **Add columns** — Hover between column headers and click **+** to add an AI Variable, CRM Field, Formula Field, or Custom Field.

![](https://res.cloudinary.com/enginy/image/upload/v1771440126/helpcenter/lists-15.png)

**Detail panels:** Hover over any row and click **Open** to see the Contact or Company card with structured information across tabs (Overview, Contacts, Jobs, Funding, Investments).

## Actions on Selected Rows
Select contacts or companies using row checkboxes, and a bottom bar appears with:

- **Campaign** (contacts only) — Add to an existing or new campaign.
- **Export** — Export to CRM, CSV, or Excel.
- **Blocklist** — Add entries to the blocklist.
- **Change List** — Move to another list or remove from the current list.
- **Delete** — Permanently remove the records.
- **More** — Change company association, move values between columns, clear column values, merge duplicate contacts, switch to companies/contacts view.

**Tip:** Use the **All Contacts** and **All Companies** aggregate views (accessible from the list-name dropdown) to see every record across all lists in one place.

**Note:** For the complete table reference, LinkedIn fields reference, export procedures, and additional how-tos, see the **Lists** article.

---

# Contact and Company Score
Enginy automatically scores contacts and companies based on how closely they match your Ideal Customer Profile (ICP) defined in the **AI Playbook**. Two columns are available:

- **Contact Score** — Evaluates job title match, location, and associated company score.
- **Company Score** — Evaluates company size, industry, and location against your ICP targets.

Each score classifies the record as **High**, **Medium**, **Low**, or **Disqualified**. Hover over any score to see the specific reasons behind the rating.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Score</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Company Criteria</b></p></td><td style="background-color: #d7efdc80;"><p class="no-margin"><b>Contact Criteria</b></p></td></tr><tr><td><p class="no-margin"><b>High</b></p></td><td><p class="no-margin">Size matches ICP target; industry is exact or very close; location is within target region.</p></td><td><p class="no-margin">Job title matches ICP targets; location within target region; company score is High.</p></td></tr><tr><td><p class="no-margin"><b>Medium</b></p></td><td><p class="no-margin">Size is equal or larger; industry is broadly related; country matches.</p></td><td><p class="no-margin">Title similar, same country, company score Medium. OR same department different seniority, company score High.</p></td></tr><tr><td><p class="no-margin"><b>Low</b></p></td><td><p class="no-margin">Size is lower; industry does not closely match; outside target countries.</p></td><td><p class="no-margin">Title similar, company score Low. OR same department, different seniority, company score Medium.</p></td></tr><tr><td><p class="no-margin"><b>Disqualified</b></p></td><td><p class="no-margin">Matches disqualifying traits; industry clearly irrelevant; insufficient data.</p></td><td><p class="no-margin">Meets a disqualifying factor; company score is Disqualified; different department or country with low company score.</p></td></tr></tbody></table>

**Important:** To access scoring, you must complete your ICP in the **AI Playbook**. If a record is missing critical fields, the status will display **NOT ENRICHED** — run **Enrich Data from LinkedIn** to populate the required fields.

---

# Next Steps
You have built a fully enriched list of contacts ready for outreach. Now you can create and launch your first campaign. Continue to the **Campaign Building Guide** to learn how to design sequences, configure AI-powered messaging, and start engaging your prospects.

---

# FAQs
### Q1: Should I start with companies or contacts?
Start with companies (Option A) if you want to target specific account types based on firmographic criteria and then find the right people inside them. Start with contacts (Option B) if you already know the type of person you want to reach and have direct criteria like job title and seniority, or if you are importing from a LinkedIn post, event, or spreadsheet.

### Q2: I imported companies from CSV but LinkedIn data is missing — what should I do?
Run **Enrich > Find data by LinkedIn URL** (if your CSV contains LinkedIn URLs) or **Enrich > Find data by name or domain** to populate LinkedIn fields. This step is mandatory for non-LinkedIn imports and ensures you can search for contacts within those companies.

### Q3: What is the difference between Fast and Deep enrichment?
**Fast** mode uses only the quickest sub-providers, returning results faster but with a smaller data coverage. **Deep** mode queries all available suppliers, which is slower but more thorough. Use Deep when Fast did not find a result, or when you need maximum coverage.

### Q4: Can I keep contacts in multiple lists at the same time?
Yes. A contact can belong to multiple lists simultaneously. Use the **Change List** action to add contacts to additional lists without removing them from the current one.

### Q5: How many contacts should I select per company?
There is no fixed rule, but for most outbound strategies, selecting 1 to 3 contacts per company is a good starting point. Target the primary decision-maker and, optionally, 1-2 influencers in related roles to increase your chances of engagement.

### Q6: Why does a contact show Missing Data instead of a score?
The contact or company is missing critical fields required for scoring. For companies: name, industry, description, employee range, number of employees, country, and city. For contacts: job title, company, and location. Run **Enrich Data from LinkedIn** to populate these fields.
