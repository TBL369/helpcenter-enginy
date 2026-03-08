# All about Crunchbase in Enginy
The Crunchbase integration lets you source and enrich both companies and contacts based on financial health, funding data, and investment activity. Target high-growth startups, find decision-makers, or identify active investors using Crunchbase’s financial intelligence.

---

# Table of Contents
- [What You Can Do with Crunchbase](#what-you-can-do-with-crunchbase)
- [1\. How to Import Companies from Crunchbase](#1-how-to-import-companies-from-crunchbase)
- [2\. How to Enrich Existing Companies](#2-how-to-enrich-existing-companies)
- [3\. How to Import Contacts from Crunchbase](#3-how-to-import-contacts-from-crunchbase)
- [4\. How to Enrich Existing Contacts](#4-how-to-enrich-existing-contacts)
- [5\. How to Find and Import Investors](#5-how-to-find-and-import-investors)
- [6\. The Company & Contact Card (Sidebar View)](#6-the-company-contact-card-sidebar-view)
- [7\. Available Data Columns](#7-available-data-columns)
  - [Company Financial Data](#company-financial-data)
  - [Contact Professional & Investment Data](#contact-professional-investment-data)
- [8\. Frequently Asked Questions (FAQ)](#8-frequently-asked-questions-faq)
  - [General Capabilities](#general-capabilities)
  - [Import & Search](#import-search)
  - [Enrichment & Matching](#enrichment-matching)
  - [Data & Limitations](#data-limitations)
- [9\. Best Practices & Use Cases](#9-best-practices-use-cases)
  - [For Sales Teams](#for-sales-teams)
  - [For Investor Relations / Fundraising](#for-investor-relations-fundraising)
- [10\. Tips for Advanced Users](#10-tips-for-advanced-users)

---

# What You Can Do with Crunchbase
1.  **Import Companies** - Source new accounts based on funding, growth signals, and investor backing.
2.  **Enrich Companies** - Add financial data, funding rounds, and investor details to existing companies.
3.  **Import Contacts** - Find founders, executives, and investors based on their professional profile.
4.  **Enrich Contacts** - Add detailed person data including investment activity and founding history.
5.  **Find Investors** - Search for active investors and VCs, then import them as contacts or link them to portfolio companies.
    
---

# 1\. How to Import Companies from Crunchbase
Source new accounts using Crunchbase’s financial and funding database.

![](images/all-about-crunchbase-in-enginy-1.png)
1.  Navigate to “Add Companies”: From your Companies list, click the Add companies button in the top right.
2.  Select Crunchbase Source: In the “Create list” modal, choose Import companies from Crunchbase.
3.  Apply Filters: You have access to financial filters to target the right companies:
    -   Financials: Filter by Last Funding Date, Funding Type (Seed, Series A, etc.), Total Funding Raised, and Valuation.
    -   Investors: Filter by specific investors or firms (e.g., “Y Combinator”, “Andreessen Horowitz”).
    -   Company Details: Filter by Revenue, Number of Employees, Industry, and Headquarters.
    -   Growth Signals: Filter by Heat Score (momentum/buzz indicator) and acquisition status.
4.  Preview & Select: The tool will generate a list of companies matching your criteria (e.g., Anthropic, OpenAI). You can select specific companies or import the entire batch (up to 5,000 companies per import).
5.  Save Filters (Optional): Save your filter configuration for reuse across your team.
6.  Add to List: Click Add to company list.
-   Pro tip: Use the "Similar Organizations" data from Crunchbase to build look-alike lists. Import companies that match your ICP, then check their Similar Organizations field to discover more prospects with similar profiles, funding stages, and business models.
    
![](images/all-about-crunchbase-in-enginy-2.png)

---

# 2\. How to Enrich Existing Companies
If you have companies imported from other sources (like LinkedIn or CSV), you can update them with Crunchbase financial data.

![](images/all-about-crunchbase-in-enginy-3.png)
1.  Select Companies: In your main table, select the rows you want to enrich.
2.  Click “Enrich”: Click the Enrich button in the toolbar.
3.  Choose Crunchbase: Select Enrich company with Crunchbase from the list of providers.
    -   Data Points Added: This will populate columns such as funding rounds, lead investors, detailed financial history, similar companies, and acquisition data.
4.  Run Enrichment: Click Run.
    
How company matching works:
-   If the company was previously imported from Crunchbase, we use the cached identifier for instant matching
-   Otherwise, we match by LinkedIn URL or company name + website
-   If no match is found, the enrichment will return an error
    
---

# 3\. How to Import Contacts from Crunchbase
Find and import high-value contacts, including founders, executives, and active investors.

![](images/all-about-crunchbase-in-enginy-4.png)
1.  Navigate to “Add Contacts”: From your Contacts list, click the Add contacts button.
2.  Select Crunchbase Source: Choose Import contacts from Crunchbase.
3.  Apply Filters: Target the right people using professional and investment filters:
    -   Basic Info: Filter by First Name, Last Name, Location, Job Title, Gender.
    -   Professional Context: Filter by Primary Organization (their current or most prominent company).
    -   Investor Activity: Filter by Investor Type (Angel, VC, etc.), Investor Stage (Seed, Early Stage, etc.).
    -   Investment Metrics: Filter by Number of Investments, Number of Portfolio Companies, Number of Founded Organizations.
4.  Preview & Select: Review matching contacts and select which ones to import.
5.  Add to List: Click Add to contact list. Contacts will be automatically linked to their primary organization if it exists in your database.
    
---

# 4\. How to Enrich Existing Contacts
Add detailed professional and investment data to contacts already in your database.

![](images/all-about-crunchbase-in-enginy-5.png)
1.  Select Contacts: In your contacts table, select the rows you want to enrich.
2.  Click “Enrich”: Click the Enrich button in the toolbar.
3.  Choose Crunchbase: Select Enrich contact with Crunchbase from the list of providers.
    -   Data Points Added: This adds LinkedIn profile, job title, investor activity (funds, investments, portfolio companies), founded organizations, funding rounds participated in, and more.
4.  Run Enrichment: Click Run.
    
How contact matching works:
-   If the contact was previously imported from Crunchbase, we use the cached identifier
-   Otherwise, we match by name + primary organization + job title
-   If that fails, we search by first/last name + location
-   The contact’s company will be automatically resolved and linked if their primary organization is found
    
---

# 5\. How to Find and Import Investors
Search for active investors and VCs based on their investment portfolio and characteristics, then import them as contacts or link them to their portfolio companies.

![](images/all-about-crunchbase-in-enginy-6.png)
1.  Navigate to Investor Search: Access the Find Investors feature from your import menu.
2.  Apply Filters: Target investors using specialized filters:
    -   Investor Profile: Filter by Investor Type (Venture Capital, Angel, Private Equity, Accelerator, etc.) and Investor Stage (Seed, Early Stage, Late Stage, etc.).
    -   Investment Activity: Filter by Number of Investments, Number of Portfolio Companies, Number of Exits, Number of Lead Investments.
    -   Focus Areas: Filter by Categories (industries they invest in), Location, and Description Keywords.
    -   Portfolio Targeting: Use the special “Invested in \[Company\]” filter to find all investors who backed specific companies (e.g., find all VCs who invested in Stripe).
3.  Preview Results: Review matching investors with their investment portfolio and activity metrics.
4.  Choose the list to Save:
    -   Investors may include both companies (e.g., funds) and contacts (e.g., angels), so funds will be saved to your Companies list, and angels will be saved to your Contacts list.
        -   Pro tip: find desicion makers in the funds and put them into the same Contacts list as angel investors, so you will have one unified list with investors ready for outreach.
            
    ![](images/all-about-crunchbase-in-enginy-7.png)
5.  Execute Import: Click to import.
    
Investor search use cases:
-   Find VCs who invest in your target industry and stage
-   Identify investors who backed your competitors or similar companies
-   Build investor lists for fundraising outreach
-   Research investment firms for partnership opportunities
    
---

# 6\. The Company & Contact Card (Sidebar View)
We’ve added a “Sidebar Mode” to view detailed company and contact information without leaving your table.

![](images/all-about-crunchbase-in-enginy-8.png)
-   How to access: Click on the floating button at the end of the row in your table to open the sidebar.
-   What’s inside:
    -   Overview: General info, website, legal name, and social links.
    -   Contacts: List of contacts associated with the company.
    -   Jobs: Latest job postings from the company.
    -   Funding: View funding rounds, investors, and financial history sourced from Crunchbase.
    -   Similar Companies: Discover companies similar to this one (from Crunchbase data).
    -   Acquisitions: View acquisition history if the company has made acquisitions.
        
---

# 7\. Available Data Columns
## Company Financial Data
New columns are available in your main grid view to help you sort and prioritize leads:
-   Last Funding Date: Identifies companies that recently raised capital. This is often a trigger event signaling fresh budget and growth targets.
-   Last Funding Amount: Indicates buying power. Use this to prioritize leads that fit your ideal deal size (e.g., separating companies raising $2M vs. $50M).
-   Last Funding Type: Tells you the company’s stage (e.g., “Seed” implies finding product-market fit; “Series B” implies scaling operations).
-   Lead Investor: Identifying top-tier backers (e.g., Sequoia, a16z) can be a quality signal. Mentioning this in outreach can build rapport.
-   Funding Total: A high total funding amount suggests longevity and resilience compared to early-stage bootstrapped startups.
-   Crunchbase Rank: A lower number indicates the company is currently generating buzz in news and web traffic.
-   Last Acquisition Acquirer: If populated, the company has been bought. Use this to exclude them or pivot your sales strategy to the parent organization.
    
Additional company data available:
-   Core Funding: Funding Stage, Funding Rounds, Number of Investors, Number of Lead Investors
-   Investor Details: Investor Type, Investor Stage (if company is also an investor)
-   Equity Funding Specifics: Last Equity Funding Amount, Last Equity Funding Type
-   Acquisition Data: Last Acquisition Type, Last Acquisition Status, Last Acquisition Price, Last Acquisition Date, Last Acquisition Rank
-   Related Data: Similar Organizations (companies like this one)
    
## Contact Professional & Investment Data
New columns for contacts enriched with Crunchbase:
-   Job Title: Current or most prominent role
-   LinkedIn Profile: Direct link to LinkedIn
-   Location: Country/city of the contact
-   Investor Type/Stage: If the contact is an investor, shows their investment profile
-   Number of Investments: Total companies invested in
-   Number of Exits/IPO Exits: Successful investment outcomes
-   Founded Organizations: Companies they founded
-   Investment Activity: Detailed investment history including funding rounds participated in, lead investor status, and co-investors
    
---

# 8\. Frequently Asked Questions (FAQ)
## General Capabilities
**Q: What is the main benefit of the Crunchbase integration?**
A: Unlike other sources that focus on contact info or firmographics, Crunchbase focuses on financial signals and investment activity. It’s best for finding startups, scale-ups, and high-growth companies based on their funding status, investors, and valuation. It also provides unique investor and founder data not available elsewhere.

**Q: Can I use Crunchbase filters if I am importing from LinkedIn?**
A: No. The advanced financial filters (like “Last Funding Amount”) are unique to the Import from Crunchbase source. However, you can import from LinkedIn first, and then enrich those companies with Crunchbase data to see their financial info.

**Q: How accurate is Crunchbase data?**
A: Crunchbase aggregates data from public announcements, press releases, regulatory filings, and community contributions. Funding data is typically very accurate for well-known startups, but smaller or stealth-mode companies may have incomplete profiles. There may be a 24-48 hour lag for very recent announcements.

**Q: What’s the difference between company enrichment and contact enrichment?**
A: Company enrichment adds financial data (funding, investors, acquisition history) to company records. Contact enrichment adds professional details and investment activity (founded companies, investments made, funds participated in) to individual contact records.

## Import & Search
**Q: How many results can I import at once?**
A: You can import up to 5,000 companies per search, but you can run multiple searches. Contacts and investors follow the same pattern. Each import runs in batches automatically.

**Q: Can I save my filters for reuse?**
A: Yes! When building filters, click “Save filter” to store your configuration. Saved filters can be shared with your team and reused for future imports.

**Q: What does the “Invested in \[Company\]” filter do?**
A: This special investor filter lets you find all investors who have backed specific companies. For example, searching “Invested in Stripe” returns all VCs and angels who participated in Stripe’s funding rounds. This is useful for competitive intelligence and fundraising research.

## Enrichment & Matching
**Q: How does enrichment match my companies/contacts to Crunchbase data?**
A: For companies: We first check if the company has a cached Crunchbase identifier (from prior imports). If not, we match by LinkedIn URL or company name + website.

For contacts: We match by name + primary organization + job title, or fall back to name + location. If a match is found, we also resolve and link their company.

**Q: What happens if no match is found?**
A: If we cannot find a matching company or contact in Crunchbase, the enrichment will return an error. You can manually verify the company/contact exists in Crunchbase or adjust their profile (e.g., add LinkedIn URL) to improve matching.

**Q: Will enrichment overwrite my existing data?**
A: Crunchbase enrichment adds new fields without removing existing data. However, if a field already contains Crunchbase data, it will be replaced with the latest information (full sync). Your manually entered or other provider data remains intact.

**Q: Can I see which funding rounds an investor participated in?**
A: Yes! When you enrich a contact with Crunchbase investor data, you’ll see detailed investment history including funding rounds participated in, whether they were a lead investor, and co-investors.

## Data & Limitations
Q: What data does Crunchbase provide that other sources don’t?

A: Crunchbase specializes in:
-   Financial data: Funding rounds, amounts, dates, valuation
-   Investor data: Who invested, lead investors, investment firms
-   Founder/executive data: Professional history, founded companies, investment activity
-   Growth signals: Crunchbase rank (buzz/momentum), similar companies
-   Acquisition data: M&A history, acquirer details, deal terms
    
Q: Can I import companies from multiple searches?

A: Yes! You can run as many searches as you need. Each search can return up to 5,000 results, so you can build very large lists by running multiple targeted searches.

---

# 9\. Best Practices & Use Cases
## For Sales Teams
-   Timing outreach with funding events: Import companies that raised funding in the last 3-6 months (use Last Funding Date filter). These companies often have fresh budget and are actively hiring/buying.
-   Target by investor backing: Find companies backed by top VCs (use Investor filter for firms like a16z, Sequoia). Investor backing can be social proof and can be mentioned in outreach.
-   Prioritize by deal size: Filter by Last Funding Amount or Total Funding to match your ideal customer profile (e.g., companies with $10M+ in funding for enterprise sales).
    
## For Investor Relations / Fundraising
-   Map investor networks: Use the “Invested in \[Company\]” filter to find VCs who invest in your space. Study their portfolio to understand their thesis.
-   Find warm introductions: Import investors who backed companies similar to yours, then check if any of your contacts/advisors have relationships with them.
-   Research investor profiles: Import investors and enrich them to see their full investment activity, co-investors, and fund history.
    
---

# 10\. Tips for Advanced Users
1.  Combine filters strategically: Layer multiple filters for precision. Example: “Last Funding Type = Series A” + “Investor = Y Combinator” + “Category = AI/ML” + “Last Funding Date = Last 6 months”.
2.  Save common searches: If you regularly search for the same type of company/contact (e.g., “Series A SaaS companies in SF”), save the filter and share it with your team for consistent list building.
3.  Use enrichment after import from other sources: Import a broad list from LinkedIn, then enrich with Crunchbase to layer in financial data. This combines LinkedIn’s contact depth with Crunchbase’s financial intelligence.
4.  Track momentum with Crunchbase Rank: Sort by Crunchbase Rank (lower = more buzz) to find companies generating media attention and web traffic. These are often good targets for timely outreach.
5.  Use investor data for segmentation: Segment companies by Lead Investor to personalize messaging (e.g., “I noticed Sequoia backed you…”).
6.  Monitor similar companies: Use Similar Organizations data to expand your total addressable market. If you’re targeting one company, check their similar companies to find more prospects.
7.  Use investor search for competitive intelligence: Map out which VCs are most active in your space and track their new investments over time.
