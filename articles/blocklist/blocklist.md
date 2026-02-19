# Blocklist
The Blocklist lets you block specific contacts and companies so they are excluded from lists, campaigns, and CRM exports. Use it to filter out competitors, churned accounts, or anyone you do not want to engage with.

---

# Table of Contents
- [Core Concepts](#core-concepts)
- [How It Works](#how-it-works)
- [Navigate the Blocklist](#navigate-the-blocklist)
  - [Tabs](#tabs)
  - [Filters](#filters)
  - [Column Fields](#column-fields)
- [Add Contacts or Companies to the Blocklist](#add-contacts-or-companies-to-the-blocklist)
  - [Add a Single Contact](#add-a-single-contact)
  - [Add a Single Company](#add-a-single-company)
  - [Bulk-Add Contacts or Companies](#bulk-add-contacts-or-companies)
- [Manage Blocklisted Entries](#manage-blocklisted-entries)
  - [Edit an Entry](#edit-an-entry)
  - [Unblock an Entry](#unblock-an-entry)
- [Use the Blocklist Indicator in Lists](#use-the-blocklist-indicator-in-lists)
- [Reference](#reference)
  - [Source Values](#source-values)
  - [Reason Values](#reason-values)
- [Important Considerations](#important-considerations)

---

# Core Concepts
The Blocklist is a single, unified exclusion list inside Enginy. It is segmented into two views: one for **Contacts** and one for **Companies**. Its purpose is to prevent specific people or organizations from appearing in your outreach workflows.

Key terms:

-   **Blocked contact** — A person identified by their email address and/or LinkedIn URL who has been added to the Blocklist.
    
-   **Blocked company** — An organization identified by its domain and/or LinkedIn URL that has been added to the Blocklist.
    
-   **Source** — The origin or feature from which an entry was added to the Blocklist (e.g., directly from the Blocklist section, from a campaign, or from a list).
    
-   **Reason** — The justification recorded when blocking an entry (for example, Competitor, Churn, Not interested).
    
---

# How It Works
When a contact or company is added to the Blocklist:

-   They will **not appear** in any of your lists.
    
-   They will **not be exported** to your CRM.
    
-   Contacts will **not receive** any outreach through campaigns, neither identities if there already existed an active conversation.
    
This is especially useful for excluding competitors, existing customers you do not want to re-engage, churned accounts, or any person or organization you prefer not to interact with.

**Important:** A contact or company that is on the Blocklist cannot be re-added to any list or campaign until it is first removed (unblocked) from the Blocklist.

---

# Navigate the Blocklist
## Tabs
The Blocklist section contains two tabs at the top of the page:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Tab</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Contacts</b></p></td><td><p class="no-margin">Displays all individually blocked contacts. Contacts are identified by their email address and/or LinkedIn URL.</p></td></tr><tr><td><p class="no-margin"><b>Companies</b></p></td><td><p class="no-margin">Displays all blocked companies. Companies are identified by their domain and/or LinkedIn URL.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440091/helpcenter/blocklist-1.png)

Both tabs share the same filtering and column structure, with one difference in the first column (see Column Fields below).

## Filters
The following filters are available in both the Contacts and Companies tabs:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Filter</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Available Values</p></td></tr><tr><td><p class="no-margin"><b>Search bar</b></p></td><td><p class="no-margin">Quick keyword search across blocklisted entries.</p></td><td><p class="no-margin">Free text.</p></td></tr><tr><td><p class="no-margin"><b>Source</b></p></td><td><p class="no-margin">Filter by the origin that added the entry to the Blocklist.</p></td><td><p class="no-margin">Blocklist, Inbox, Workflow, Campaign, List.</p></td></tr><tr><td><p class="no-margin"><b>Reason</b></p></td><td><p class="no-margin">Filter by the reason the entry was blocked.</p></td><td><p class="no-margin">Not interested, Competitor, Customer, Not target, Other, Churn.</p></td></tr><tr><td><p class="no-margin"><b>Created by</b></p></td><td><p class="no-margin">Filter by the team member who added the entry.</p></td><td><p class="no-margin">Any workspace user.</p></td></tr></tbody></table>

**Note:** There is also a button to **Export all to CSV.**

## Column Fields
The columns displayed in the Blocklist table differ slightly between the two tabs:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Column</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Contacts Tab</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Companies Tab</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Notes</p></td></tr><tr><td><p class="no-margin"><b>Email / LinkedIn URL</b></p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">No</p></td><td><p class="no-margin">Primary identifier for blocked contacts.</p></td></tr><tr><td><p class="no-margin"><b>Domain / LinkedIn URL</b></p></td><td><p class="no-margin">No</p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">Primary identifier for blocked companies.</p></td></tr><tr><td><p class="no-margin"><b>Date added</b></p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">Click the column header to toggle ascending/descending sort order.</p></td></tr><tr><td><p class="no-margin"><b>Source</b></p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">Shows where the block originated.</p></td></tr><tr><td><p class="no-margin"><b>Reason</b></p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">Shows why the entry was blocked.</p></td></tr><tr><td><p class="no-margin"><b>User</b></p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">Shows who performed the block.</p></td></tr><tr><td><p class="no-margin"><b>Actions</b></p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">Yes</p></td><td><p class="no-margin">Contains <b>Unblock</b> and <b>Edit</b> buttons inside a 3 dots button (...).</p></td></tr></tbody></table>

---

# Add Contacts or Companies to the Blocklist
## Add a Single Contact
1.  Navigate to the **Blocklist** section and select the **Contacts** tab.
2.  Click the **Add Email / LinkedIn URL** button at the top right.
3.  Enter the contact's email address or LinkedIn URL. You can add one or several entries at a time.
4.  Select a reason for blocking (e.g., Competitor, Not interested, Churn).
5.  Save your changes.

![](https://res.cloudinary.com/enginy/image/upload/v1771440091/helpcenter/blocklist-2.png)

## Add a Single Company
1.  Navigate to the **Blocklist** section and select the **Companies** tab.
2.  Click the **Add Domain / LinkedIn URL** button at the top right.
3.  Enter the company's domain or LinkedIn URL. You can add one or several entries at a time.
4.  Select a reason for blocking.
5.  Save your changes.

![](https://res.cloudinary.com/enginy/image/upload/v1771440093/helpcenter/blocklist-3.png)

## Bulk-Add Contacts or Companies
You can block multiple contacts or companies at once directly from any list:
1.  Go to any **Contacts** or **Companies** list.
2.  Select the entries you want to block by checking their checkboxes. You can use filters (name, industry, activity, or any other relevant criteria) to narrow down results before selecting.
3.  Click Blocklist > **Add contacts to blocklist** (or **Add companies to blocklist**) in the action bar.
4.  Choose a reason for blocking.

![](https://res.cloudinary.com/enginy/image/upload/v1771440093/helpcenter/blocklist-4.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440093/helpcenter/blocklist-5.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440093/helpcenter/blocklist-6.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440093/helpcenter/blocklist-7.png)

**Notes:**

-   Bulk-adding follows the same blocking rules as individual entries. All selected contacts or companies will immediately stop appearing in lists, campaigns, and CRM exports.
    
-   You can set a Period for the block: Indefinitely, 30, 60, 90, or 180 days, or even till a Custom Date.
    
---

# Manage Blocklisted Entries
## Edit an Entry
To update a blocklisted entry (for example, to correct the email address, domain, or LinkedIn URL):
1.  Locate the entry in the Blocklist.
2.  Click the **Edit** button in the **Actions** column.
3.  Make your changes and save.

![](https://res.cloudinary.com/enginy/image/upload/v1771440097/helpcenter/blocklist-8.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440097/helpcenter/blocklist-9.png)

## Unblock an Entry
To remove a contact or company from the Blocklist:
1.  Locate the entry in the Blocklist.
2.  Click the **Unblock** button in the **Actions** column.
**Tip:** Once unblocked, the contact or company will reappear in your lists and become eligible for campaigns and CRM exports again. Unblocking does not delete the record; it simply lifts the block.

---

# Use the Blocklist Indicator in Lists
When viewing any list of Contacts or Companies, a **blocklist indicator** is displayed in the bottom bar. It appears as a number next to a small icon (a rectangle with an "x" in its center). This number shows how many entries in that particular list are currently on the Blocklist.

-   Click the number or the icon to open a pop-up displaying all blocklisted rows from that list.
    
-   From this pop-up, you can select and remove entries from the Blocklist without navigating away from your current list.
    
![](https://res.cloudinary.com/enginy/image/upload/v1771440091/helpcenter/blocklist-10.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440091/helpcenter/blocklist-11.png)

---

# Reference
## Source Values
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Source Value</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Meaning</p></td></tr><tr><td><p class="no-margin"><b>Blocklist</b></p></td><td><p class="no-margin">The entry was added directly from the Blocklist section itself (via the "Add" button).</p></td></tr><tr><td><p class="no-margin"><b>Inbox</b></p></td><td><p class="no-margin">The entry was blocked from within the Inbox feature.</p></td></tr><tr><td><p class="no-margin"><b>Workflow</b></p></td><td><p class="no-margin">The entry was blocked as part of a workflow action.</p></td></tr><tr><td><p class="no-margin"><b>Campaign</b></p></td><td><p class="no-margin">The entry was blocked from within a campaign.</p></td></tr><tr><td><p class="no-margin"><b>List</b></p></td><td><p class="no-margin">The entry was blocked from within a specific contacts or companies list (e.g., using the bulk-add workflow or the blocklist indicator pop-up).</p></td></tr></tbody></table>

## Reason Values
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Reason</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Not interested</b></p></td><td><p class="no-margin">The contact or company is not interested in your outreach.</p></td></tr><tr><td><p class="no-margin"><b>Competitor</b></p></td><td><p class="no-margin">The entry belongs to a competing organization.</p></td></tr><tr><td><p class="no-margin"><b>Customer</b></p></td><td><p class="no-margin">The entry is an existing customer you do not want to re-engage.</p></td></tr><tr><td><p class="no-margin"><b>Not target</b></p></td><td><p class="no-margin">The entry does not match your ideal customer profile.</p></td></tr><tr><td><p class="no-margin"><b>Churn</b></p></td><td><p class="no-margin">The entry is a churned account.</p></td></tr><tr><td><p class="no-margin"><b>Other</b></p></td><td><p class="no-margin">A catch-all for reasons not covered by the options above.</p></td></tr></tbody></table>

---

# Important Considerations
-   If the Blocklist is empty (no contacts or companies have been blocked), a message will be displayed indicating that the list is empty.
    
-   The Blocklist is workspace-wide. Entries blocked by one user apply across the entire workspace.
    
-   There is no limit to the number of entries you can add to the Blocklist.
    
**Warning:** Blocking a contact or company takes effect immediately. Verify your selections carefully before confirming, especially when using the bulk-add workflow.

---

# FAQs
### Q1: What happens to a contact or company after I add it to the Blocklist?
The entry is immediately excluded from all lists, campaigns, and CRM exports. It will not appear in search results within those contexts until it is unblocked.

### Q2: Can I add a contact or company back to a list while it is still on the Blocklist?
No. You must first unblock the entry by removing it from the Blocklist. After that, it will automatically become available in your lists again.

### Q3: Is there a limit to how many entries I can add to the Blocklist?
There is no documented limit. You can block as many contacts and companies as needed, individually or in bulk.

### Q4: Who can see and manage the Blocklist?
The Blocklist is shared across the workspace. Any user who added an entry is recorded in the **User** column, and all team members can access to the Blocklist section and view, edit, or unblock entries.

### Q5: What is the difference between the Source values "Blocklist" and "List"?
**Blocklist** as a source means the entry was added directly from the Blocklist section itself (via the "Add Email / LinkedIn URL" or "Add Domain / LinkedIn URL" buttons). **List** means the entry was blocked from within a specific contacts or companies list (e.g., using the bulk-add workflow, or the blocklist indicator pop-up).
