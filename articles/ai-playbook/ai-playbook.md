# AI Playbook
The AI Playbook is the central brain of your Enginy account. It is where you configure your company context, personal identities, AI Variables, AI Campaigns, and AI Conversation Tags — everything the artificial intelligence needs to generate accurate, personalized outreach at scale.

---

# Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Company Information](#company-information)
  - [Company information](#company-information)
  - [Fill with AI (Company)](#fill-with-ai-company)
  - [Products and Services](#products-and-services)
  - [Ideal Customer Profile (ICP)](#ideal-customer-profile-icp)
  - [Ideal Companies](#ideal-companies)
  - [Competitors](#competitors)
  - [Testimonials](#testimonials)
  - [Company FAQs](#company-faqs)
  - [Save Changes](#save-changes)
- [Personal Information](#personal-information)
  - [Identity Fields](#identity-fields)
  - [Fill with AI (Personal)](#fill-with-ai-personal)
- [AI Variables](#ai-variables)
  - [Understand AI Variables](#understand-ai-variables)
  - [Create an AI Variable](#create-an-ai-variable)
    - [Output Types](#output-types)
    - [Provide Explanation Option](#provide-explanation-option)
    - [Write an Effective Prompt](#write-an-effective-prompt)
    - [Enhance Button](#enhance-button)
    - [Add Attributes (Placeholders)](#add-attributes-placeholders)
    - [Deep Research](#deep-research)
      - [How Deep Research Works](#how-deep-research-works)
      - [Deep Research Capabilities](#deep-research-capabilities)
      - [Limitations Compared to AI models Web Search](#limitations-compared-to-ai-models-web-search)
      - [Best Use Cases for Deep Research](#best-use-cases-for-deep-research)
      - [When Deep Research May Struggle](#when-deep-research-may-struggle)
      - [Deep Research Cost Considerations](#deep-research-cost-considerations)
      - [Deep Research Troubleshooting](#deep-research-troubleshooting)
    - [Select an AI Model](#select-an-ai-model)
    - [Cost Considerations](#cost-considerations)
  - [Run AI Variables on Your Lists](#run-ai-variables-on-your-lists)
  - [Manage AI Variables](#manage-ai-variables)
  - [Use Case: Personalize or Randomize a Message Template](#use-case-personalize-or-randomize-a-message-template)
  - [Troubleshoot AI Variables](#troubleshoot-ai-variables)
- [AI Campaigns](#ai-campaigns)
  - [Understand AI Campaigns](#understand-ai-campaigns)
  - [Create an AI Campaign](#create-an-ai-campaign)
  - [Automate Conversations with AI](#automate-conversations-with-ai)
- [AI Conversation Tags](#ai-conversation-tags)
  - [Understand AI Conversation Tags](#understand-ai-conversation-tags)
  - [Default Tags](#default-tags)
  - [Tag Categories](#tag-categories)
  - [Create a Custom Tag](#create-a-custom-tag)
  - [Auto Tagging](#auto-tagging)
  - [Tag Compatibility](#tag-compatibility)
  - [Manage Tags](#manage-tags)
  - [Where AI Tags Appear](#where-ai-tags-appear)
- [ICP Quick Filter](#icp-quick-filter)
  - [How it works](#how-it-works)
  - [Benefits](#benefits)
- [Available AI Models](#available-ai-models)
  - [Quick selection guide](#quick-selection-guide)
- [Prompt Best Practices](#prompt-best-practices)
  - [What Makes a Good Prompt](#what-makes-a-good-prompt)
  - [Key Principles](#key-principles)
  - [Recommended Prompt Template](#recommended-prompt-template)
  - [Prompt Examples: Weak vs. Improved](#prompt-examples-weak-vs-improved)
  - [Common Prompt Mistakes](#common-prompt-mistakes)
  - [Prompt Best Practices Checklist](#prompt-best-practices-checklist)
- [FAQs](#faqs)

---

# Overview
The AI Playbook is located in the left-hand menu of the Enginy sections panel. It contains five tabs, each serving a distinct purpose:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Tab</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Purpose</p></td></tr><tr><td><p class="no-margin"><b>Company Information</b></p></td><td><p class="no-margin">Provides the AI with context about your company, products, ICP, competitors, and more. Also sets default filters (saved profiles based on ICPs) for contact and company searches.</p></td></tr><tr><td><p class="no-margin"><b>Personal Information</b></p></td><td><p class="no-margin">Stores details about the identities (senders) connected to your account, so the AI knows who is sending messages.</p></td></tr><tr><td><p class="no-margin"><b>AI Variables</b></p></td><td><p class="no-margin">Executable prompts that run on any Contact or Company to return enriched data (Text, Number, Date, or Tag). They appear as columns in your lists.</p></td></tr><tr><td><p class="no-margin"><b>AI Campaigns</b></p></td><td><p class="no-margin">Prompts used by the AI Agent (chatbot) to continue conversations automatically once a lead replies to a campaign message and then the sequence stops for that lead.</p></td></tr><tr><td><p class="no-margin"><b>AI Conversation Tags</b></p></td><td><p class="no-margin">Labels that can be applied to conversation replies — manually or automatically via AI-powered Auto tagging.</p></td></tr></tbody></table>

---

# Getting Started
To begin teaching the AI about your business, navigate to **Enginy > AI Playbook** from the left-hand menu. You will work primarily in the first two tabs — **Company Information** and **Personal Information** — to give the AI the context it needs.

**Step 1 — Enter Company Information:**
1.  Open the **Company Information** tab.
2.  Fill in the **Website** and **LinkedIn URL** fields so the AI can gather relevant public data.
3.  Click **Fill with AI** and let the system auto-complete as much information as possible.
4.  Review and adjust the content as needed.
**Step 2 — Enter Personal Information:**
1.  Open the **Personal Information** tab.
2.  Select one of your identities from the dropdown.
3.  If the LinkedIn URL is not connected yet, paste it in and click **Fill with AI**.
4.  Review and edit as necessary.
5.  Repeat for each identity you plan to use for sending messages or launching AI campaigns.
**Note** The more accurate and detailed the information in your AI Playbook, the better the AI will perform across variables, campaigns, and automated interactions.

Once these two tabs are complete, you have taught the AI what you sell, who you sell to, and who you are. The other tabs — AI Variables, AI Campaigns (and AI Tags) — do not provide context but instead guide **how** the AI should take action.

---

# Company Information
This tab provides the AI with all the relevant context about your company. It is used by both AI Variables and AI Campaigns to generate personalized, accurate output. It also sets default filters (saved profiles based on ICPs) for your searches.

## Company information
Fill in the following core fields:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Website</b></p></td><td><p class="no-margin">Your company website URL</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn URL</b></p></td><td><p class="no-margin">Your company LinkedIn page URL</p></td></tr><tr><td><p class="no-margin"><b>Output Language</b></p></td><td><p class="no-margin">The language the AI should use for output</p></td></tr><tr><td><p class="no-margin"><b>Company Name</b></p></td><td><p class="no-margin">Your company name</p></td></tr><tr><td><p class="no-margin"><b>Industry</b></p></td><td><p class="no-margin">Your industry or sector</p></td></tr><tr><td><p class="no-margin"><b>Number of Employees</b></p></td><td><p class="no-margin">Company headcount</p></td></tr><tr><td><p class="no-margin"><b>Headquarters Location</b></p></td><td><p class="no-margin">City/country of your HQ</p></td></tr><tr><td><p class="no-margin"><b>Founding Year</b></p></td><td><p class="no-margin">Year the company was founded</p></td></tr><tr><td><p class="no-margin"><b>Company Overview</b></p></td><td><p class="no-margin">A brief overview of the mission, vision, and unique selling points</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440079/helpcenter/ai-playbook-1.png)

## Fill with AI (Company)
Click the **Fill with AI** button to activate a workflow that searches your company's Website and LinkedIn for all the information needed to populate the fields above. The system fills in whatever it finds automatically. You can then review and adjust any details.

> **Important:** There is a checkbox to **Overwrite all existing information.** If not checked, the Fill with AI will only fill the empty boxes.

## Products and Services
Below the general details, fill in the strategic modules that train the AI. The **Products & Services** section includes:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Product Name</b></p></td><td><p class="no-margin">Name of the product or service</p></td></tr><tr><td><p class="no-margin"><b>Product Description</b></p></td><td><p class="no-margin">What the product does</p></td></tr><tr><td><p class="no-margin"><b>Value Proposition</b></p></td><td><p class="no-margin">Why a customer should choose it</p></td></tr><tr><td><p class="no-margin"><b>Price Range</b></p></td><td><p class="no-margin">Approximate pricing</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440080/helpcenter/ai-playbook-2.png)

> **Note:** You can insert as many products or services as needed.

## Ideal Customer Profile (ICP)
Define your ICP so the AI can tailor outreach to the right audience:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>ICP Name</b></p></td><td><p class="no-margin">ICP profile name.</p></td></tr><tr><td><p class="no-margin"><b>Job Titles</b></p></td><td><p class="no-margin">Target job titles.</p></td></tr><tr><td><p class="no-margin"><b>Locations</b></p></td><td><p class="no-margin">Target geographic locations.</p></td></tr><tr><td><p class="no-margin"><b>Company Industry</b></p></td><td><p class="no-margin">Target industries.</p></td></tr><tr><td><p class="no-margin"><b>Company Size</b></p></td><td><p class="no-margin">Target company size ranges.</p></td></tr><tr><td><p class="no-margin"><b>Revenue</b></p></td><td><p class="no-margin">Target revenue ranges.</p></td></tr><tr><td><p class="no-margin"><b>Key Pain Points</b></p></td><td><p class="no-margin">Problems your ICP faces.</p></td></tr><tr><td><p class="no-margin"><b>Additional Information</b></p></td><td><p class="no-margin">Any other qualifying details.</p></td></tr><tr><td><p class="no-margin"><b>Disqualifying Factors</b></p></td><td><p class="no-margin">Criteria that disqualify a prospect. Factors that make a prospect a poor fit. This helps the AI avoid engaging leads that do not match your target.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440083/helpcenter/ai-playbook-3.png)

> **Tip:** Click the **AI stars icon** to generate related keywords based on your input.

## Ideal Companies
Select companies so the AI can use them as examples to find similar ideal customers.

![](https://res.cloudinary.com/enginy/image/upload/v1771440084/helpcenter/ai-playbook-4.png)

## Competitors
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Competitor Name</b></p></td><td><p class="no-margin">Name of the competing company.</p></td></tr><tr><td><p class="no-margin"><b>Product Differentiator</b></p></td><td><p class="no-margin">How your product differs from theirs.</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn URL</b></p></td><td><p class="no-margin">Optional.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440085/helpcenter/ai-playbook-5.png)

## Testimonials
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Company Name</b></p></td><td><p class="no-margin">Customer company name</p></td></tr><tr><td><p class="no-margin"><b>Promoter Name</b></p></td><td><p class="no-margin">Name of the person giving the testimonial</p></td></tr><tr><td><p class="no-margin"><b>Job Position</b></p></td><td><p class="no-margin">Their job title</p></td></tr><tr><td><p class="no-margin"><b>Main Benefit</b></p></td><td><p class="no-margin">The key benefit they highlight</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440085/helpcenter/ai-playbook-6.png)

## Company FAQs
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Question</b></p></td><td><p class="no-margin">A frequently asked question about your business</p></td></tr><tr><td><p class="no-margin"><b>Answer</b></p></td><td><p class="no-margin">The answer to that question</p></td></tr></tbody></table>

These FAQs give the AI ready-made answers it can reference during conversations and message generation.

![](https://res.cloudinary.com/enginy/image/upload/v1771440085/helpcenter/ai-playbook-7.png)

## Save Changes
To save or update any changes you have made, click the **Update** button at the bottom right of the page.

---

# Personal Information
This tab holds information related to the **Identities** connected to your account. It gives the AI context about *who* is sending each message, enabling more authentic personalization.

![](https://res.cloudinary.com/enginy/image/upload/v1771440085/helpcenter/ai-playbook-8.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440085/helpcenter/ai-playbook-9.png)

## **Identity Fields**
First, select an identity from the dropdown menu. Then fill in the following identity fields:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>LinkedIn Profile</b></p></td><td><p class="no-margin">LinkedIn URL of the identity</p></td></tr><tr><td><p class="no-margin"><b>Output Language</b></p></td><td><p class="no-margin">Language preference for this identity Fill with AI</p></td></tr><tr><td><p class="no-margin"><b>First Name</b></p></td><td><p class="no-margin">Sender's first name</p></td></tr><tr><td><p class="no-margin"><b>Last Name</b></p></td><td><p class="no-margin">Sender's last name</p></td></tr><tr><td><p class="no-margin"><b>Email</b></p></td><td><p class="no-margin">Sender's email address</p></td></tr><tr><td><p class="no-margin"><b>Phone Number</b></p></td><td><p class="no-margin">Sender's phone number</p></td></tr><tr><td><p class="no-margin"><b>Gender</b></p></td><td><p class="no-margin">Sender's gender</p></td></tr><tr><td><p class="no-margin"><b>Languages</b></p></td><td><p class="no-margin">Languages spoken</p></td></tr><tr><td><p class="no-margin"><b>Profile Overview</b></p></td><td><p class="no-margin">Short bio or summary</p></td></tr><tr><td><p class="no-margin"><b>Job Title</b></p></td><td><p class="no-margin">Current job title</p></td></tr><tr><td><p class="no-margin"><b>Seniority Level</b></p></td><td><p class="no-margin">Level of seniority</p></td></tr><tr><td><p class="no-margin"><b>Key Responsibilities</b></p></td><td><p class="no-margin">Main duties and responsibilities</p></td></tr><tr><td><p class="no-margin"><b>Schedule Meeting URL</b></p></td><td><p class="no-margin">Link to the sender's booking/calendar page</p></td></tr><tr><td><p class="no-margin"><b>Educations</b></p></td><td><p class="no-margin">Educational background</p></td></tr><tr><td><p class="no-margin"><b>Previous Positions</b></p></td><td><p class="no-margin">Previous job career</p></td></tr><tr><td><p class="no-margin"><b>Interests</b></p></td><td><p class="no-margin">Personal or professional interests</p></td></tr></tbody></table>

## Fill with AI (Personal)
Click the **Fill with AI** button to automatically populate these fields using data from the selected identity and their LinkedIn profile. Review and edit as necessary. Repeat this step for each identity you want to use.

> **Tip:** Click the **Fill with AI** button to get the suggested values and then review and edit the ones you don't like.

---

# AI Variables
## Understand AI Variables
An AI Variable is a reusable prompt-and-settings bundle that tells Enginy how to research and return a specific piece of information for a Contact or Company. Think of it as a **smart column**: instead of manually researching, the AI reads the attributes you provide (name, domain, job title, LinkedIn, etc.), optionally searches external sources, and returns the answer in the format you specify.

AI Variables are used to generate additional information columns in your lists. You can use ready-made templates or build your own, then run them in bulk and store results as columns on your table.

**Example use cases:**
-   **Contact:** "Best outreach icebreaker (1 sentence) for {first\_name} based on their recent activity: {recent\_activity}."
-   **Company:** "1-line summary of {company\_name} growth signals (funding, hiring, product launch)."
    
![](https://res.cloudinary.com/enginy/image/upload/v1771440079/helpcenter/ai-playbook-10.png)

## Create an AI Variable
1.  Navigate to **AI Playbook > AI Variables**.
2.  Click **Create AI Variable** (top right).
3.  Select the entity type: **Contact** or **Company**. This determines whether the variable appears in the Contacts tab or the Companies tab in the left panel.
4.  Fill in the form fields described in the sections below.

![](https://res.cloudinary.com/enginy/image/upload/v1771440079/helpcenter/ai-playbook-11.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440079/helpcenter/ai-playbook-12.png)

You can start from default **Templates** to be able to configure the **new AI variable** even faster:

![](https://res.cloudinary.com/enginy/image/upload/v1771440080/helpcenter/ai-playbook-13.png)

> **Important:** Whether an **AI Variable** is **Contact-type** or **Company-type** affects its visibility. If it’s Contact-type, you can make it visible only in Contact lists; if it’s Company-type, only in Company lists.

### Output Types
Select the **Output** (response type) to define how the AI returns results:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Output Type</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Text</b></p></td><td><p class="no-margin">Open-ended string answers — summaries, descriptions, messages or hooks.</p></td></tr><tr><td><p class="no-margin"><b>Number</b></p></td><td><p class="no-margin">Numeric value (int or float) — scores, rankings, counts...</p></td></tr><tr><td><p class="no-margin"><b>Date</b></p></td><td><p class="no-margin">A valid calendar date — events, deadlines, timeline extraction...</p></td></tr><tr><td><p class="no-margin"><b>One of</b></p></td><td><p class="no-margin">Restricts results to a predefined set of tags/options (e.g., Yes/No, Hot/Warm/Cold, B2B/B2C)</p></td></tr><tr><td><p class="no-margin"><b>URL</b></p></td><td><p class="no-margin">Browser URL format</p></td></tr><tr><td><p class="no-margin"><b>Email</b></p></td><td><p class="no-margin">Email address form (text + @ + domain)</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440079/helpcenter/ai-playbook-14.png)

> **Important:** The response type affects the qualification criteria you can set up. For instance, choosing **One of** ensures consistent, filterable output. Use it whenever you want the AI to choose from a closed set of answers.

**Example:** An AI Variable with the instruction "Tell me if the company is either a B2B, B2C, or B2C with B2B products" and the output type set to **One of** will only return one of those three values. This ensures consistency, makes results easier to filter and analyze, and prevents unexpected or vague answers.

![](https://res.cloudinary.com/enginy/image/upload/v1771440080/helpcenter/ai-playbook-15.png)

### Provide Explanation Option
You can activate the **Provide explanation** option when creating or editing a variable. When enabled, the AI returns both the selected result **and** a short reasoning behind it, giving your team more context about why the AI chose that answer.

![](https://res.cloudinary.com/enginy/image/upload/v1771440079/helpcenter/ai-playbook-16.png)

> **Tip:** Like or dislike the outputs generated to help us keep improving the quality of the AI results.

### Write an Effective Prompt
The **Prompt** field is the main instruction. This is where you tell the AI exactly what to return and the format. Use the following recommended structure:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc;"><p class="no-margin">Section</p></td><td style="background-color: #d7efdc;"><p class="no-margin">What to include</p></td></tr><tr><td><p class="no-margin"><b>Persona</b></p></td><td><p class="no-margin">Which role the AI represents.</p></td></tr><tr><td><p class="no-margin"><b>Context</b></p></td><td><p class="no-margin">Some context as explanation.</p></td></tr><tr><td><ul><li><p class="no-margin"><b>Sender Variables (My Company)</b></p></li></ul></td><td><p class="no-margin">Our company variables for reference.</p></td></tr><tr><td><ul><li><p class="no-margin"><b>Receiver Variables (Contact)</b></p></li></ul></td><td><p class="no-margin">Contextual lead variables for reference.</p></td></tr><tr><td><p class="no-margin"><b>Goal</b></p></td><td><p class="no-margin">What the AI should produce.</p></td></tr><tr><td><p class="no-margin"><b>Instructions</b></p></td><td><p class="no-margin">Personalization and randomization rules (from Step 3)</p></td></tr><tr><td><p class="no-margin">Greeting (optional)</p></td><td><p class="no-margin">Instructions of the greeting format</p></td></tr><tr><td><p class="no-margin">Icebreaker (optional)</p></td><td><p class="no-margin">Options to choose which can include some examples</p></td></tr><tr><td><p class="no-margin">Value Proposition (optional)</p></td><td><p class="no-margin">Reason why you are reaching them exactly and not someone else.</p></td></tr><tr><td><p class="no-margin">Call To Action (optional)</p></td><td><p class="no-margin">CTA to encourage an immediate response or action.</p></td></tr><tr><td><p class="no-margin">Signature (recommended)</p></td><td><p class="no-margin">Recommended to specify that the sign is off, for email AI Variables. Signature is automatically added from the identity configured signature. You don't want it to be duplicate.</p></td></tr><tr><td><p class="no-margin">Template (optional)</p></td><td><p class="no-margin">The message with <code>[TAG]</code> placeholders (from Step 2)</p></td></tr><tr><td><ul><li><p class="no-margin"><b>General instructions</b></p></li></ul></td><td><p class="no-margin">Tone, style, formatting constraints.</p></td></tr><tr><td><ul><li><p class="no-margin"><b>Language instructions</b></p></li></ul></td><td><p class="no-margin">Rules to choose a language according to conditions or parameters (e.g., receiver's location).</p></td></tr><tr><td><p class="no-margin"><b>Examples </b>(recommended)</p></td><td><p class="no-margin">Some examples to reference what the desired output would be.</p></td></tr></tbody></table>

You can personalize your prompts using variables and even AI variables inside of it. Start typing `{` to see the list of available (AI) variables.

![](https://res.cloudinary.com/enginy/image/upload/v1771440079/helpcenter/ai-playbook-17.png)

**Examples of effective prompts:**
-   "Classify {company\_name} into one of the following categories: Enterprise, Mid-market, or SMB. Return only one of these."
-   "Based on {company\_name}'s website and industry ({industry}), summarize their core value proposition in one sentence."
-   "From {domain} and industry ({industry}), list up to 3 potential business challenges the company may face. Return as a bullet list."
-   "Review {company\_name}'s website. Identify if they primarily sell products, services, or both. Return exactly one of these options."
    
**Avoid vague prompts like:** "Tell me everything about this company." (Too broad, no structure.)

> **Tip:** Be explicit in your prompt about what to search for when using Deep Research. The more specific you are, the more accurate the results will be.

### Enhance Button
Below the prompt editor you will find the **Enhance** button. Clicking it lets the AI automatically polish and refine your prompt — improving its structure, wording, and references to Enginy attributes. This is especially useful when you have written a first draft and want to make sure it follows best practices before saving. You can review the enhanced version and accept or adjust it as needed.

### Add Attributes (Placeholders)
Use the **Add attributes** option to select which row fields the variable can use as context. Inside your prompt, reference these fields with the `{field_name}` syntax. When writing in the prompt editor, you can also type `{` to see and select available fields.

Common placeholders include:

**Contact attributes:**
`{firstname}, {lastname}, {job_title}, {geo_region},{last_linkedin_post}, {job_change}, {previous_positions}, {mentioned_in_news}, {latest_news}, ...`

**Company attributes:**
`{company_name}, {description}, {industry}, {iq_company_news}, {yearly_headcount_growth}, {website} ...`

Use these inside prompts to make the AI answer relevant to each row.

### Deep Research
When creating or editing an AI Variable, you can enable the **Deep Research** toggle to let the AI Agent browse the web and find any information you need. This is a single, comprehensive search option that covers web pages, news, company websites, and other public sources in one unified search.

When Deep Research is enabled, the AI goes beyond the data already available in your lists — it actively searches the internet, visits relevant web pages, and extracts the information your prompt requires.

#### How Deep Research Works
1.  The AI reads your prompt and understands what information you are looking for.
2.  It performs web searches using relevant keywords based on the lead/company data.
3.  It visits web pages to extract detailed content (company websites, news, articles, etc.). Up to the **first ten listed** after a search.
4.  It analyzes the content and provides an answer based on what it found.
5.  It can iterate **up to 5 times**, refining searches and exploring different sources.
The technology behind Deep Research uses *Firecrawl*, a specialized web-scraping tool designed to extract content from websites and convert it into a format the AI can understand.

#### Deep Research Capabilities
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Capability</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Search the web</b></p></td><td><p class="no-margin">Find information across public websites, news articles, and online directories</p></td></tr><tr><td><p class="no-margin"><b>Read website content</b></p></td><td><p class="no-margin">Extract text, data, and information from company websites and other public pages</p></td></tr><tr><td><p class="no-margin"><b>Follow links</b></p></td><td><p class="no-margin">Navigate from one page to another to find relevant information</p></td></tr><tr><td><p class="no-margin"><b>Extract structured data</b></p></td><td><p class="no-margin">Pull out specific information like company size, industry, technology stack, etc.</p></td></tr><tr><td><p class="no-margin"><b>Filter by recency</b></p></td><td><p class="no-margin">Focus on recent news or content from specific time periods</p></td></tr><tr><td><p class="no-margin"><b>Handle dynamic content</b></p></td><td><p class="no-margin">Access pages that require JavaScript to render</p></td></tr></tbody></table>

#### Limitations Compared to AI models Web Search
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Aspect</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Deep Research</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">ChatGPT Web Search</p></td></tr><tr><td><p class="no-margin"><b>Search scope</b></p></td><td><p class="no-margin">Searches based on specific lead/company context; limited to 5 search iterations per field</p></td><td><p class="no-margin">Searches the entire open web freely; can search extensively</p></td></tr><tr><td><p class="no-margin"><b>Real-time information</b></p></td><td><p class="no-margin">Fetches data at enrichment time; cached results may be up to 2 days old</p></td><td><p class="no-margin">Always fetches the latest information</p></td></tr><tr><td><p class="no-margin"><b>Content access</b></p></td><td><p class="no-margin">Can only access public, unrestricted websites; may be blocked by anti-bot measures; 100-second page timeout</p></td><td><p class="no-margin">Has partnerships for premium content access; more flexible timeouts</p></td></tr><tr><td><p class="no-margin"><b>Reasoning</b></p></td><td><p class="no-margin">Focused on answering the specific prompt; returns structured, consistent output; limited to 5 iterations</p></td><td><p class="no-margin">Can reason across multiple topics conversationally and continue indefinitely</p></td></tr></tbody></table>

Deep Research is optimized for **batch data enrichment** — answering the same question across many leads/companies consistently.

#### Best Use Cases for Deep Research
-   Finding company information not available in your existing data (website, size, industry, technologies used).
-   Researching specific facts about a lead's company (recent news, funding rounds, product launches).
-   Extracting data from known websites (company website, Wikipedia, Google)
-   Enriching with publicly available information that requires visiting multiple pages
    
#### When Deep Research May Struggle
-   Information is behind login walls (private LinkedIn data, gated content)
-   Data changes by the minute (stock prices, live scores, breaking news)
-   Questions are very open-ended ("Tell me everything about this company")
-   Sources actively block web scrapers (some financial or news sites)
-   You need to compare hundreds of sources for a single answer
    
#### Deep Research Cost Considerations
Deep Research uses more credits than regular AI Variables because:
-   Web searches incur additional costs per search query.
-   Page scraping uses credits to extract content from websites.
-   Multiple iterations may be needed to find the right answer.
    
> **Tip:** Use Deep Research only for fields where the information is not available elsewhere. Test with a small batch first to estimate total costs. Use more specific prompts to reduce the number of search iterations needed.

#### Deep Research Troubleshooting
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Issue</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Likely Cause</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Solution</p></td></tr><tr><td><p class="no-margin"><b>Returns "No data found" frequently</b></p></td><td><p class="no-margin">Information may not be publicly available</p></td><td><p class="no-margin">Verify the information exists online manually; refine the prompt</p></td></tr><tr><td><p class="no-margin"><b>Slow enrichment times</b></p></td><td><p class="no-margin">Multiple search iterations + page loading</p></td><td><p class="no-margin">Expected behavior; Deep Research prioritizes accuracy over speed</p></td></tr><tr><td><p class="no-margin"><b>Inconsistent results</b></p></td><td><p class="no-margin">Sources may have conflicting information</p></td><td><p class="no-margin">Add more context to the prompt to narrow down sources</p></td></tr><tr><td><p class="no-margin"><b>Blocked on certain sites</b></p></td><td><p class="no-margin">Anti-bot measures</p></td><td><p class="no-margin">Some sites cannot be accessed; try alternative sources</p></td></tr></tbody></table>

### Select an AI Model
When creating or editing an AI Variable, you can choose the AI model to use (e.g., Grok 4, GPT 5.2, Gemini 3 Pro). Each model has different strengths — see Available AI Models for a full comparison.

### Cost Considerations
Each AI model has an associated cost. Beyond the model, cost can also increase based on:
-   **Prompt complexity** — measured by the number of tokens consumed.
-   **Nested AI Variables** — if your prompt references other AI Variables, the cost of those implicit variables is added to the total cost.
-   **Deep Research** — enabling the Deep Research toggle adds to the cost per execution due to web searches and page scraping.
    
## Run AI Variables on Your Lists
Once created, AI Variables appear as columns (but you might make them visible) in your Contact or Company lists. There are several ways to run them:
1.  **Via Enrichment modal:** Open the list, click **Enrichment > Enrich with AI** in the top-right corner. Select one or multiple templates (Enginy ready-made or custom), then click **RUN**. The result appears as a new column for each row processed.
2.  **Run from column header:** Hover the column header and click the **play icon** to execute the variable for all rows in that view.
3.  **Bulk runs:** Click the column header, then select **Run column > Visible rows** or **All rows**.
4.  **Individual run:** Click the **play icon** in a specific cell to run the variable for an individual lead or company.

    ![](https://res.cloudinary.com/enginy/image/upload/v1771440080/helpcenter/ai-playbook-18.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440080/helpcenter/ai-playbook-19.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440080/helpcenter/ai-playbook-20.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440080/helpcenter/ai-playbook-21.png)

## Manage AI Variables
All AI Variables are managed from the **AI Playbook > AI Variables** tab. The left panel displays all variables organized in folders, with two tabs: **Contacts** and **Companies**.
-   **\+ Add folder** — Create custom folders to organize your variables.
-   **AI Variable cards** — In the center of the module, each AI variable is displayed as a card. Click the three dots on any card to access the following actions:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80; width: 319px;"><p class="no-margin">Action</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td style="width: 319px;"><p class="no-margin"><b>Edit</b></p></td><td><p class="no-margin">Edit the variable prompt and settings.</p></td></tr><tr><td style="width: 319px;"><p class="no-margin"><b>Duplicate</b></p></td><td><p class="no-margin">Duplicate the variable to reuse and modify its content efficiently.</p></td></tr><tr><td style="width: 319px;"><p class="no-margin"><b>Clone to client</b></p></td><td><p class="no-margin">Clone it to another client account. This applies only if you are an Enginy partner managing a portfolio of clients.</p></td></tr><tr><td style="width: 319px;"><p class="no-margin"><b>Delete</b></p></td><td><p class="no-margin">Permanently delete the AI Variable.</p></td></tr></tbody></table>

> **Note:** You can also create, edit or duplicate an AI variable through a list; hover between columns, click the **+** icon and then on **New AI Variable** (to create), or click the column header and then on **Edit column** or **Duplicate column** (to edit or duplicate).

> **Warning:** The AI variable name cannot be changed once created, as renaming would cause problems in campaigns that reference it. If you need a different name, duplicate the variable, give the copy the desired name, and delete the original.

## Use Case: Personalize or Randomize a Message Template
You can use AI Variables to write variations of a message template you already have. This is useful when you want parts of your message to change from contact to contact — either personalized based on data or randomized for variety.

**Step 1 — Write your base message:**
1.  Start by writing the message you want to use as a reference, outside of Enginy.
**Step 2 — Identify the parts to personalize or randomize:**
1.  Look at your message and decide which parts should change from contact to contact.
2.  Replace those parts with `[TAG]` placeholders (e.g., `[GREETING]`, `[PRODUCT]`, `[PERSONA]`, `[CLOSING*LINE]`). You can invent any tag you want — such as `[PAIN*POINT]`, `[BENEFIT]`, `[RANDOM_FACT]`, etc.
**Step 3 — Define the rules for each tag:**
-   For tags to **personalize**: write down the criteria. For example, "If the job title indicates top management in Sales, then `[PRODUCT]` = outreach automation and `[PERSONA]` = Sales leaders."
-   For tags to **randomize**: list 3 or more possible options. For example, randomize `[GREETING]` between "Hi", "Hey", and "Just curious".
    
**Step 4 — Create the AI Variable:**
1.  Go to **Enginy > AI Playbook > AI Variables > Create AI Variable**.
2.  Enter your prompt using the recommended structure for an effective prompt.
## Troubleshoot AI Variables
**"No Data Found" results:**
When AI Variables return "No data found" or produce no results, this is often because the account’s **API usage credits are exhausted**. Another common reason is that the **selected model isn’t strong enough** to reliably complete the prompt’s objective (especially for complex extraction or reasoning tasks).
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Symptom</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Cause</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Resolution</p></td></tr><tr><td><p class="no-margin">AI Variables return "No data found" for all leads</p></td><td><p class="no-margin">API usage credits are exhausted</p></td><td><p class="no-margin">Check your usage dashboard with your AI provider or notifications icon in Enginy next to Settings button. Replenish credits or wait for the billing cycle to reset.</p></td></tr><tr><td><p class="no-margin">Credits remain but data is still empty</p></td><td><p class="no-margin">The selected AI model may be too lightweight/low-quality for the prompt’s objective.</p></td><td><p class="no-margin">Switch to a more capable model and run the AI Variable again. If possible, simplify the prompt or add more context to improve reliability.</p></td></tr></tbody></table>

> **Note:** Check the explanation provided to get more information on why No data was found.

> **Tip:** If you’re using an AI integration and you get a notification that you’ve run out of API credits, either increase your API quota with your provider or temporarily disconnect the integration to fall back to Enginy’s platform credits.

---

# AI Campaigns
## Understand AI Campaigns
AI Campaigns manage the prompts used by the **AI Agent (chatbot)**. When you enable the option in a campaign's settings for the AI to continue the conversation once a lead replies, the AI uses these campaign prompts to craft automatic responses.

![](https://res.cloudinary.com/enginy/image/upload/v1771440081/helpcenter/ai-playbook-22.png)

## Create an AI Campaign
1.  Navigate to **AI Playbook > AI Campaigns**.
2.  Click **\+ New campaign prompt** at the bottom of the left panel.
3.  Fill in the following fields:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Name</b></p></td><td><p class="no-margin">Name of the AI Campaign</p></td></tr><tr><td><p class="no-margin"><b>Prompt</b></p></td><td><p class="no-margin">The campaign prompt. Follow the recommended structure: <b>Persona</b> (objective or summarized notion of who the AI agent is), <b>Context</b> (relevant info, list fields, AI Variables), and <b>Instructions/Guidelines</b> (rules for structure, content, and tone).</p></td></tr><tr><td><p class="no-margin"><b>GPT Model</b></p></td><td><p class="no-margin">Select the model best suited for the interaction (e.g., Grok 4 or Claude 4.5 Sonnet). See Available AI Models.</p></td></tr></tbody></table>

All AI Campaign agents are listed in the left panel. Select any campaign to edit its prompt, change the AI model, and click **Update** to save changes.

Enginy includes pre-built AI Campaign templates such as:
-   **AI Sales Agent** — For sales-focused messaging.
-   **AI Recruiting Agent** — For recruitment-focused messaging.
    
You can adjust these templates or create your own from scratch.

## Automate Conversations with AI
Once your AI Campaign is configured and enabled in a campaign's settings (3rd step: AI Agent; **Edit prompt** to chose an AI Campaign template; **Enable** to activate AI auto-reply), Enginy AI takes over the conversation flow:
1.  A **lead replies** to the first message in your sequence.
2.  The AI automatically crafts a reply based on the campaign prompt and continues the conversation without your intervention (if enabled AI auto-reply, otherwise just make suggestions and you need to confirm to send).
3.  You can personalize the flow by adjusting the prompt with relevant details based on your target leads' information (e.g., common pain points, interests).

![](https://res.cloudinary.com/enginy/image/upload/v1771440081/helpcenter/ai-playbook-23.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440081/helpcenter/ai-playbook-24.png)

**Monitoring conversations:**
All incoming and outgoing messages from AI-powered campaigns are stored in the **Inbox** tab. AI replies appear automatically when a lead responds, allowing you to monitor and intervene if necessary.

![](https://res.cloudinary.com/enginy/image/upload/v1771440081/helpcenter/ai-playbook-25.png)

---

# AI Conversation Tags
## Understand AI Conversation Tags
AI Conversation Tags let you label conversation replies to organize and act on your sales conversations. The system includes **Auto tagging**, which analyzes the last message sent by a lead to automatically assign the appropriate tag. AI Tags are dynamic — they are updated as the conversation evolves.

![](https://res.cloudinary.com/enginy/image/upload/v1771440081/helpcenter/ai-playbook-26.png)

## Default Tags
Enginy includes essential default tags. You can choose to enable them as AI Auto Tags, so the system automatically detects and applies the most common conversation outcomes.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Tag</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Category</p></td></tr><tr><td><p class="no-margin"><b>Interested</b></p></td><td><p class="no-margin">Positive</p></td></tr><tr><td><p class="no-margin"><b>Meeting Booked</b></p></td><td><p class="no-margin">Positive</p></td></tr><tr><td><p class="no-margin"><b>Not Interested</b></p></td><td><p class="no-margin">Negative</p></td></tr><tr><td><p class="no-margin"><b>Bad Timing</b></p></td><td><p class="no-margin">Neutral</p></td></tr><tr><td><p class="no-margin"><b>Not the Target Persona</b></p></td><td><p class="no-margin">Neutral</p></td></tr><tr><td><p class="no-margin"><b>Out of Office</b></p></td><td><p class="no-margin">Neutral</p></td></tr><tr><td><p class="no-margin"><b>Referred</b></p></td><td><p class="no-margin">Positive</p></td></tr></tbody></table>

> **Important:** Default tags cannot be deleted or edited, which ensures consistency across your team. However, you can duplicate them and activate or deactivate them depending on your workflow.

## Tag Categories
All tags are grouped into three categories:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Category</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Purpose</p></td></tr><tr><td><p class="no-margin"><b>Positive</b></p></td><td><p class="no-margin">Indicates favorable outcomes</p></td></tr><tr><td><p class="no-margin"><b>Neutral</b></p></td><td><p class="no-margin">Indicates non-committal responses</p></td></tr><tr><td><p class="no-margin"><b>Negative</b></p></td><td><p class="no-margin">Indicates unfavorable outcomes</p></td></tr></tbody></table>

On the **Analytics Page**, you can track a single metric per category. For example, all Positive tags can be aggregated into one main metric for easier reporting. You can also view individual tag counts for more granular insights.

## Create a Custom Tag
1.  Click **Create Tag** (top right of the AI Conversation Tags tab).
2.  Configure the following fields:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Title</b></p></td><td><p class="no-margin">Name of the tag</p></td></tr><tr><td><p class="no-margin"><b>Color</b></p></td><td><p class="no-margin">Visual color identifier for the tag</p></td></tr><tr><td><p class="no-margin"><b>Category</b></p></td><td><p class="no-margin">Select <b>Neutral</b>, <b>Positive</b>, or <b>Negative</b></p></td></tr><tr><td><p class="no-margin"><b>Instructions</b> (optional)</p></td><td><p class="no-margin">A prompt the AI uses to analyze conversations and decide whether to apply this tag</p></td></tr><tr><td><p class="no-margin"><b>Auto tagging</b> (optional)</p></td><td><p class="no-margin">Toggle to active the auto tagging, so that when a conversation matches a tag's criteria it will be automatically applied.</p></td></tr></tbody></table>

![](https://res.cloudinary.com/enginy/image/upload/v1771440083/helpcenter/ai-playbook-27.png)

> **Important:** Custom AI tags **must** have a prompt (Instructions) associated before they can be activated for Auto tagging. Without an instruction, the tag can only be used manually.

## Auto Tagging
Auto tagging is controlled by the toggle switch located below the Instructions text box (and also on the tag card in the main view).
-   **Enabled:** The AI uses the Instructions to analyze each conversation's last message and automatically applies the tag if the criteria match.
-   **Disabled:** The tag is available for manual use only.
    
Auto tagging is dynamic. Each time a new message is sent in a conversation, the AI re-evaluates which tags apply.

![](https://res.cloudinary.com/enginy/image/upload/v1771440083/helpcenter/ai-playbook-28.png)

## Tag Compatibility
The AI uses a compatibility matrix that controls how tags interact:
-   A conversation **can have multiple tags** at the same time (e.g., Bad Timing and Interested).
-   Tags are **automatically updated** (if Auto tagging activated) as the conversation evolves — if the context changes, relevant tags are added or removed.
    
This ensures your analytics remain accurate while reflecting the full status of each conversation.

## Manage Tags
In the center of the AI Conversation Tags module, all available tags are displayed as cards. Each card has:
-   **Trash can icon** — Delete the tag.
-   **Overlapping squares icon** — Duplicate the tag. You can also select multiple tags to duplicate them in bulk.
-   **Toggle switch** — Enable or disable Auto tagging (only for tags with defined Instructions).
    
![](https://res.cloudinary.com/enginy/image/upload/v1771440083/helpcenter/ai-playbook-29.png)

> **Note:** Click on any tag card to open and edit.

The module provides two views:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">View</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Shows</p></td></tr><tr><td><p class="no-margin"><b>All</b></p></td><td><p class="no-margin">Every tag in the account</p></td></tr><tr><td><p class="no-margin"><b>Active</b></p></td><td><p class="no-margin">Only tags with an Instruction and Auto tagging enabled</p></td></tr></tbody></table>

A search bar is also available to filter tags by name.

## Where AI Tags Appear
-   **Inbox:** AI tags appear directly in your replies, so you instantly know the context. For example, if a lead replies with "Let's connect again next quarter," the AI tags it as **Bad Timing**. You can always remove a tag manually if it does not fit.
-   **Analytics Page:** Tag metrics are tracked by tag, helping you quickly understand patterns in replies across campaigns.
    
![](https://res.cloudinary.com/enginy/image/upload/v1771440083/helpcenter/ai-playbook-30.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440084/helpcenter/ai-playbook-31.png)

---

# ICP Quick Filter
The ICP Quick Filter uses the Ideal Customer Profile defined in your AI Playbook to automatically apply filters when you Search for Contacts or Companies on LinkedIn (for prospecting and list building).

![](https://res.cloudinary.com/enginy/image/upload/v1771440084/helpcenter/ai-playbook-32.png)

## How it works
When you do a **Search for Contacts** or a **Search for Companies** through LinkedIn, the system:
1.  Detects your saved ICP from the AI Playbook.
2.  Applies the relevant filters instantly, including: Job Titles, Locations, Company Industry, and Company Size.
## Benefits
-   Save time on setup — no more retyping filter criteria.
-   Stay consistent with your targeting strategy.
-   Improve lead quality by aligning outreach with your most qualified buyers.
    
You can still adjust any filters manually. Use the ICP filters as a starting point, then fine-tune based on campaign goals or testing variations.

**No ICP set yet?**
1.  Click **Create your first AI Playbook ICPs**.
2.  A new tab opens with your AI Playbook.
3.  Click **Fill with AI**.
4.  The AI analyzes your company website and LinkedIn profile to automatically generate your Ideal Customer Profile.
5.  Once completed, your ICP is saved and you can instantly apply the Quick Filter.
> **Tip:** Keep your AI Playbook updated. The more accurate and detailed your ICP, the smarter your filters will be.

---

# Available AI Models
Enginy offers a curated selection of AI models from leading providers. Each model has different strengths, and choosing the right one can make a significant difference in output quality and cost. Models marked as **Recommended** in the platform are the best starting point for most use cases.

![](https://res.cloudinary.com/enginy/image/upload/v1771440084/helpcenter/ai-playbook-33.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Model</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Provider</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Best For</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Key Strengths</p></td></tr><tr><td><p class="no-margin"><b>GPT 5.2</b></p></td><td><p class="no-margin">OpenAI</p></td><td><p class="no-margin">Complex reasoning and professional tasks</p></td><td><p class="no-margin">OpenAI's latest flagship model (Dec 2025). Excels at multi-step project execution, financial modeling, spreadsheets, and detailed analyses. Features both an instant mode for fast responses and a thinking mode for deeper reasoning. Ideal for power users and enterprise workflows.</p></td></tr><tr><td><p class="no-margin"><b>GPT 5 mini</b></p></td><td><p class="no-margin">OpenAI</p></td><td><p class="no-margin">Balanced everyday tasks</p></td><td><p class="no-margin">A smaller, faster variant within the GPT-5 family. Delivers a strong balance of capability and speed, well-suited for everyday enrichment, summarization, and classification tasks without the cost of the full model.</p></td></tr><tr><td><p class="no-margin"><b>GPT 5 nano</b></p></td><td><p class="no-margin">OpenAI</p></td><td><p class="no-margin">High-volume, cost-sensitive tasks</p></td><td><p class="no-margin">The most lightweight and cost-effective model in the GPT-5 family. Optimized for speed and efficiency, making it a great choice when running AI Variables across large lists where per-row cost matters.</p></td></tr><tr><td><p class="no-margin"><b>Gemini 3 Pro</b></p></td><td><p class="no-margin">Google</p></td><td><p class="no-margin">Top-tier reasoning and accuracy</p></td><td><p class="no-margin">Google's most powerful model (Nov 2025). Uses a sparse mixture-of-experts architecture and can output up to 64K tokens. Outperformed major AI models in 19 out of 20 benchmarks on release. Excellent for complex prompts, long instructions, and tasks requiring high accuracy.</p></td></tr><tr><td><p class="no-margin"><b>Gemini 3 Flash</b></p></td><td><p class="no-margin">Google</p></td><td><p class="no-margin">Speed-first scenarios</p></td><td><p class="no-margin">Google's speed-optimized model (Dec 2025). Provides near-instant responses while maintaining solid quality. Best for sorting through many records quickly, normalizing data, or any task where response time is more important than maximum depth.</p></td></tr><tr><td><p class="no-margin"><b>Grok 4</b></p></td><td><p class="no-margin">xAI</p></td><td><p class="no-margin">Complex reasoning and analysis</p></td><td><p class="no-margin">xAI's flagship model. Excels in natural language processing, mathematical reasoning, and complex multi-step problem-solving. Its "think before responding" approach improves accuracy and reliability, particularly for prompts that require chained reasoning.</p></td></tr><tr><td><p class="no-margin"><b>Claude 4.5 Sonnet</b></p></td><td><p class="no-margin">Anthropic</p></td><td><p class="no-margin">Nuanced writing and coding</p></td><td><p class="no-margin">Anthropic's mid-tier model (Sep 2025). Known for high-quality, nuanced text generation and strong coding capabilities. Produces natural-sounding, well-structured output and follows complex stylistic instructions faithfully. A solid choice for writing outreach messages and generating personalized copy.</p></td></tr></tbody></table>

> **Note:** Models marked with the **Recommended** label in the Enginy interface (currently GPT 5.2 and Grok 4) are the best general-purpose options for most AI Variable and AI Campaign use cases.

## Quick selection guide
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Need</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Recommended Models</p></td></tr><tr><td><p class="no-margin">Top performance for complex reasoning</p></td><td><p class="no-margin">GPT 5.2, Gemini 3 Pro, Grok 4</p></td></tr><tr><td><p class="no-margin">Best for nuanced writing and outreach copy</p></td><td><p class="no-margin">Claude 4.5 Sonnet, GPT 5.2</p></td></tr><tr><td><p class="no-margin">Best balance of speed and quality</p></td><td><p class="no-margin">GPT 5 mini, Gemini 3 Flash</p></td></tr><tr><td><p class="no-margin">Most cost-effective for high-volume runs</p></td><td><p class="no-margin">GPT 5 nano, Gemini 3 Flash</p></td></tr></tbody></table>

> **Note:** Available models may be updated over time as new capabilities are released. Check the model selector in the AI Variable or AI Campaign editor for the latest options.

---

# Prompt Best Practices
Generative AI models are extremely powerful, but they only produce good results when they receive good instructions. The quality of the output depends directly on the quality of the prompt.

## What Makes a Good Prompt
A good prompt is much more than a question. It is a structured instruction that:
-   Defines a **clear objective** (what you want to achieve).
-   Provides enough **context** (what the AI does and does not know).
-   Specifies the **AI's role** (how it should behave).
-   Describes the **output format** (how you want the answer delivered).
-   Includes **constraints and quality criteria** (what it should and should not do).
-   Is easy to **reuse and adapt**.
    
Think of the prompt as a briefing for a professional: the better the briefing, the better the work you will get.

## Key Principles
**1\. Objective first, always**
Before writing your prompt, ask: What exactly do I want to achieve? What is the final output I need?
-   Vague: "Tell me about customer loyalty."
-   Clear: "Generate a list of 10 concrete ideas to improve customer loyalty in a B2C contact center, focused on reducing churn by 10% within 6 months."
    
The more concrete the objective, the more actionable the response.

**2\. Provide relevant context**
The AI does not know your organization, product, or business reality unless you explain it referencing variables (`{`). Include:
-   Type of company / industry
-   Type of customer / end user
-   Knowledge level of the target audience
-   Channels involved (phone, email, chat, etc.)
-   Constraints (legal, regulatory, time, budget)
    
**3\. Define the AI's role**
Asking "Explain this to me" is much less powerful than asking "Act as...". Examples:
-   "Act as a senior CX consultant."
-   "Act as a professional B2B copywriter."
-   "Act as a market research analyst."
    
This sets expectations and elevates the quality of the response.

**4\. Specify the output format**
Explicitly indicate how you want the result:
-   Numbered list
-   Table with specific columns
-   Step-by-step sequence
-   Paragraphs of approximate length
-   Checklist bullets
    
This makes the content directly usable without reformatting.

**5\. Include quality criteria and constraints**
Do not assume the AI understands your standards. State them clearly:
-   Level of detail: high, medium, very concise
-   Tone: formal, friendly, technical, explanatory
-   Language: specify the exact language or regional variant
-   Scope: what to include and what to avoid
-   What to avoid: excessive jargon, legal terms, etc.
    
**6\. Provide examples (and counterexamples)**
Examples significantly reduce iteration and rework:
-   Positive example: what you want
-   Negative example: what you do NOT want
    
**7\. Think in iterative mode**
The first prompt will rarely be perfect. Work in cycles:
1.  Write a well-structured initial prompt.
2.  Evaluate the result.
3.  Adjust the prompt (more context, more constraints, examples).
4.  Refine the output.
The AI does not get offended if you ask it to redo, correct, or restructure.

## Recommended Prompt Template
Use this base template and adapt it for each use case:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc;"><p class="no-margin">Section</p></td><td style="background-color: #d7efdc;"><p class="no-margin">What to include</p></td></tr><tr><td><p class="no-margin"><b>Persona</b></p></td><td><p class="no-margin">Which role the AI represents.</p></td></tr><tr><td><p class="no-margin"><b>Context</b></p></td><td><p class="no-margin">Some context as explanation.</p></td></tr><tr><td><ul><li><p class="no-margin"><b>Sender Variables (My Company)</b></p></li></ul></td><td><p class="no-margin">Our company variables for reference.</p></td></tr><tr><td><ul><li><p class="no-margin"><b>Receiver Variables (Contact)</b></p></li></ul></td><td><p class="no-margin">Contextual lead variables for reference.</p></td></tr><tr><td><p class="no-margin"><b>Goal</b></p></td><td><p class="no-margin">What the AI should produce.</p></td></tr><tr><td><p class="no-margin"><b>Instructions</b></p></td><td><p class="no-margin">Personalization and randomization rules (from Step 3)</p></td></tr><tr><td><p class="no-margin">Greeting (optional)</p></td><td><p class="no-margin">Instructions of the greeting format</p></td></tr><tr><td><p class="no-margin">Icebreaker (optional)</p></td><td><p class="no-margin">Options to choose which can include some examples</p></td></tr><tr><td><p class="no-margin">Value Proposition (optional)</p></td><td><p class="no-margin">Reason why you are reaching them exactly and not someone else.</p></td></tr><tr><td><p class="no-margin">Call To Action (optional)</p></td><td><p class="no-margin">CTA to encourage an immediate response or action.</p></td></tr><tr><td><p class="no-margin">Signature (recommended)</p></td><td><p class="no-margin">Recommended to specify that the sign is off, for email AI Variables. Signature is automatically added from the identity configured signature. You don't want it to be duplicate.</p></td></tr><tr><td><p class="no-margin">Template (optional)</p></td><td><p class="no-margin">The message with <code>[TAG]</code> placeholders (from Step 2)</p></td></tr><tr><td><ul><li><p class="no-margin"><b>General instructions</b></p></li></ul></td><td><p class="no-margin">Tone, style, formatting constraints.</p></td></tr><tr><td><ul><li><p class="no-margin"><b>Language instructions</b></p></li></ul></td><td><p class="no-margin">Rules to choose a language according to conditions or parameters (e.g., receiver's location).</p></td></tr><tr><td><p class="no-margin"><b>Examples </b>(recommended)</p></td><td><p class="no-margin">Some examples to reference what the desired output would be.</p></td></tr></tbody></table>

## Prompt Examples: Weak vs. Improved
**Writing:**
-   Weak: "Write an email for a client."
-   Improved: "Act as a B2B copywriter. Write a short email (max. 150 words) for a client who has been with us for 6 months using a technical support service. Objective: thank them for their trust and propose a brief review meeting. Context: we are a ticketing software company for contact centers. The recipient is a Head of Operations of a contact center with 80 agents. Tone: professional, direct, value-oriented. Format: suggested subject line + email body."
    
**Analysis:**
-   Weak: "Summarize this text."
-   Improved: "Act as a business analyst. Summarize the following text in a maximum of 10 clear, actionable bullets focused on recommendations to improve customer experience in a contact center. Do not repeat specific examples; keep only principles and best practices. Professional tone aimed at managers."
    
**Training:**
-   Weak: "Give me training ideas for agents."
-   Improved: "Act as a customer service training specialist. Create a 4-module training program for contact center agents who handle phone and chat interactions. Objective: improve skills in active listening, objection handling, and closing conversations. Context: agents have medium experience (1 year) and serve B2C customers. Format: for each module include the title, learning objectives, estimated duration, and practical activities."
    
## Common Prompt Mistakes
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Mistake</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Why It Hurts</p></td></tr><tr><td><p class="no-margin"><b>Being too generic</b></p></td><td><p class="no-margin">"Help me with this" gives the AI nothing to work with. Always define objective and context.</p></td></tr><tr><td><p class="no-margin"><b>Not specifying the output format</b></p></td><td><p class="no-margin">Forces you to do extensive editing afterwards.</p></td></tr><tr><td><p class="no-margin"><b>Forgetting to define the AI's role</b></p></td><td><p class="no-margin">Without a role, the model tends to give overly generic answers.</p></td></tr><tr><td><p class="no-margin"><b>Mixing several tasks in one prompt</b></p></td><td><p class="no-margin">"Analyze, rewrite, suggest improvements, and create a presentation" in a single prompt leads to shallow results. Split into steps.</p></td></tr><tr><td><p class="no-margin"><b>Asking for impossible things</b></p></td><td><p class="no-margin">"Guarantee this will reduce churn by 30%." The AI can suggest, not guarantee.</p></td></tr><tr><td><p class="no-margin"><b>Not reviewing critical outputs</b></p></td><td><p class="no-margin">Never use AI responses without human validation in areas with legal, medical, financial, or regulatory impact.</p></td></tr><tr><td><p class="no-margin"><b>Sharing sensitive data unnecessarily</b></p></td><td><p class="no-margin">Avoid including personally identifiable information (full names, IDs, phone numbers) when not essential to the task.</p></td></tr></tbody></table>

## Prompt Best Practices Checklist
Before sending your prompt, verify:
-   \[ \] Have I clearly defined the objective?
-   \[ \] Have I provided enough context (industry, audience, situation)?
-   \[ \] Have I assigned an appropriate role to the AI?
-   \[ \] Have I precisely described the task it must perform?
-   \[ \] Have I specified the output format I need?
-   \[ \] Have I indicated the tone, language, and level of detail?
-   \[ \] Have I added relevant constraints and quality criteria?
-   \[ \] Could I improve the prompt with one or two examples?
-   \[ \] Is there anything sensitive (personal data, confidential information) I should remove or anonymize?
-   \[ \] Am I prepared to iterate and adjust the prompt after seeing the first result?
    
If most answers are "yes," your prompt is in the best-practice zone.

---

# FAQs
### **Q1. Can I edit or delete the default AI Conversation Tags?**
No. Default tags cannot be edited or deleted to ensure consistency across teams. However, you can duplicate them and deactivate any you do not need.

### **Q2. Why are my AI Variables returning "No data found"?**
This is often caused by exhausted API credits, not a platform bug. Check your usage dashboard or notifications to see if you have hit any limits. Once credits are replenished (by purchasing more or when your billing cycle resets), the AI Variables will resume populating normally. If you have remaining credits and still see empty data, hover the '?' symbol in the output to see the provided explanation. Contact support if you need further investigation.

![](https://res.cloudinary.com/enginy/image/upload/v1771440084/helpcenter/ai-playbook-34.png)

### **Q3. What does the Deep Research toggle do in an AI Variable?**
When enabled, Deep Research lets the AI Agent browse the web to find information relevant to your prompt. It searches public websites, reads page content, follows links, and extracts structured data. It uses more credits than a standard AI Variable, so enable it only when the information you need is not already available in your list data.

### **Q4. Can I rename an AI Variable after creating it?**
No. An AI Variable's name cannot be changed once created, as renaming would cause issues in campaigns that reference it. If you need a different name, duplicate the variable, give the copy the desired name, and delete the original.

### **Q5. How does the AI decide which Conversation Tag to apply?**
When Auto tagging is enabled, the AI analyzes the last message in a conversation against the Instructions defined for each active tag. If the message matches the criteria of a tag, the AI applies it automatically. Tags are re-evaluated dynamically as new messages arrive, so they are added or removed as the conversation context changes.
