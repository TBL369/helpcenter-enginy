# AI Playbook

The AI Playbook is the central brain of your Enginy account. It is where you configure your company context, personal identities, AI Variables, AI Campaigns, and AI Conversation Tags — everything the artificial intelligence needs to generate accurate, personalized outreach at scale.

---

# Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Company Information](#company-information)
  - [General Details](#general-details)
  - [Fill with AI (Company)](#fill-with-ai-company)
  - [Products and Services](#products-and-services)
  - [Ideal Customer Profile (ICP)](#ideal-customer-profile-icp)
  - [Disqualifying Factors](#disqualifying-factors)
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
  - [Add Attributes (Placeholders)](#add-attributes-placeholders)
  - [Deep Research](#deep-research)
  - [Select an AI Model](#select-an-ai-model)
  - [Cost Considerations](#cost-considerations)
  - [Test an AI Variable](#test-an-ai-variable)
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
  - [Default AI Tags](#default-ai-tags)
  - [Tag Categories](#tag-categories)
  - [Create a Custom Tag](#create-a-custom-tag)
  - [Auto Tagging](#auto-tagging)
  - [Tag Compatibility](#tag-compatibility)
  - [Manage Tags](#manage-tags)
  - [Where AI Tags Appear](#where-ai-tags-appear)
- [ICP Quick Filter](#icp-quick-filter)
- [Available AI Models](#available-ai-models)
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

The AI Playbook is located in the left-hand menu of the Enginy dashboard. It contains five tabs, each serving a distinct purpose:

| Tab | Purpose |
|---|---|
| **Company Information** | Provides the AI with context about your company, products, ICP, competitors, and more. Also sets default filters (saved profiles based on ICPs) for contact and company searches. |
| **Personal Information** | Stores details about the identities (senders) connected to your account, so the AI knows *who* is sending messages. |
| **AI Variables** | Executable prompts that run on any Contact or Company to return enriched data (Text, Number, Date, or Tag). They appear as columns in your lists. |
| **AI Campaigns** | Prompts used by the AI Agent (chatbot) to continue conversations automatically once a lead replies to a campaign message. |
| **AI Conversation Tags** | Labels that can be applied to conversation replies — manually or automatically via AI-powered Auto tagging. |

---

# Getting Started

To begin teaching the AI about your business, navigate to **Enginy > AI Playbook** from the left-hand menu. You will work primarily in the first two tabs — **Company Information** and **Personal Information** — to give the AI the context it needs.

**Step 1 — Enter Company Information:**

1. Open the **Company Information** tab.
2. Fill in the **Website** and **LinkedIn URL** fields so the AI can gather relevant public data.
3. Click **Fill with AI** and let the system auto-complete as much information as possible.
4. Review and adjust the content as needed.

**Step 2 — Enter Personal Information:**

1. Open the **Personal Information** tab.
2. Select one of your identities from the dropdown.
3. If the LinkedIn URL is not connected yet, paste it in and click **Fill with AI**.
4. Review and edit as necessary.
5. Repeat for each identity you plan to use for sending messages or launching AI campaigns.

> **Important:** The more accurate and detailed the information in your AI Playbook, the better the AI will perform across variables, campaigns, and automated interactions.

Once these two tabs are complete, you have taught the AI what you sell, who you sell to, and who you are. The other tabs — AI Variables and AI Campaigns — do not provide context but instead guide **how** the AI should take action.

---

# Company Information

This tab provides the AI with all the relevant context about your company. It is used by both AI Variables and AI Campaigns to generate personalized, accurate output. It also sets default filters (saved profiles based on ICPs) for your searches.

## General Details

Fill in the following core fields:

| Field | Description |
|---|---|
| **Website** | Your company website URL |
| **LinkedIn URL** | Your company LinkedIn page URL |
| **Output Language** | The language the AI should use for output |
| **Company Name** | Your company name |
| **Industry** | Your industry or sector |
| **Number of Employees** | Company headcount |
| **Headquarters Location** | City/country of your HQ |
| **Founding Year** | Year the company was founded |
| **Company Overview** | A brief overview of the mission, vision, and unique selling points |

## Fill with AI (Company)

Click the **Fill with AI** button to activate a workflow that searches your company's Website and LinkedIn for all the information needed to populate the fields above. The system fills in whatever it finds automatically. You can then review and adjust any details.

## Products and Services

Below the general details, fill in the strategic modules that train the AI. The **Products & Services** section includes:

| Field | Description |
|---|---|
| **Product Name** | Name of the product or service |
| **Product Description** | What the product does |
| **Value Proposition** | Why a customer should choose it |
| **Price Range** | Approximate pricing |

> **Tip:** Click **+ Add another** to insert additional products or services.

## Ideal Customer Profile (ICP)

Define your ICP so the AI can tailor outreach to the right audience:

| Field | Description |
|---|---|
| **Name** | ICP profile name |
| **Job Titles** | Target job titles |
| **Locations** | Target geographic locations |
| **Company Industry** | Target industries |
| **Company Size** | Target company size ranges |
| **Revenue** | Target revenue ranges |
| **Key Pain Points** | Problems your ICP faces |
| **Additional Information** | Any other qualifying details |
| **Disqualifying Factors** | Criteria that disqualify a prospect |

## Disqualifying Factors

Under the ICP section, you can specify the factors that make a prospect a poor fit. This helps the AI avoid engaging leads that do not match your target.

## Competitors

| Field | Description |
|---|---|
| **Competitor Name** | Name of the competing company |
| **Product Differentiator** | How your product differs from theirs |

## Testimonials

| Field | Description |
|---|---|
| **Company Name** | Customer company name |
| **Promoter Name** | Name of the person giving the testimonial |
| **Job Position** | Their job title |
| **Main Benefit** | The key benefit they highlight |

## Company FAQs

| Field | Description |
|---|---|
| **Question** | A frequently asked question about your business |
| **Answer** | The answer to that question |

These FAQs give the AI ready-made answers it can reference during conversations and message generation.

## Save Changes

To save or update any changes you have made, click the **Update** button at the bottom right of the page.

---

# Personal Information

This tab holds information related to the **Identities** connected to your account. It gives the AI context about *who* is sending each message, enabling more authentic personalization.

## Identity Fields

First, select an identity from the dropdown menu. Then fill in the following fields:

| Field | Description |
|---|---|
| **LinkedIn Profile** | LinkedIn URL of the identity |
| **Output Language** | Language preference for this identity |
| **First Name** | Sender's first name |
| **Last Name** | Sender's last name |
| **Email** | Sender's email address |
| **Phone Number** | Sender's phone number |
| **Gender** | Sender's gender |
| **Languages** | Languages spoken |
| **Profile Overview** | Short bio or summary |
| **Job Title** | Current job title |
| **Seniority Level** | Level of seniority |
| **Key Responsibilities** | Main duties and responsibilities |
| **Schedule Meeting URL** | Link to the sender's booking/calendar page |
| **Educations** | Educational background |
| **Interests** | Personal or professional interests |

## Fill with AI (Personal)

Click the **Fill with AI** button to automatically populate these fields using data from the selected identity and their LinkedIn profile. Review and edit as necessary. Repeat this step for each identity you want to use.

---

# AI Variables

## Understand AI Variables

An AI Variable is a reusable prompt-and-settings bundle that tells Enginy how to research and return a specific piece of information for a Contact or Company. Think of it as a **smart column**: instead of manually researching, the AI reads the attributes you provide (name, domain, job title, LinkedIn, etc.), optionally searches external sources, and returns the answer in the format you specify.

AI Variables are used to generate additional information columns in your lists. You can use ready-made templates or build your own, then run them in bulk and store results as columns on your table.

**Example use cases:**

- **Contact:** "Best outreach icebreaker (1 sentence) for #{{first_name}} based on their recent activity."
- **Company:** "1-line summary of company growth signals (funding, hiring, product launch)."

## Create an AI Variable

1. Navigate to **AI Playbook > AI Variables**.
2. Click **Create AI Variable** (top right).
3. Select the entity type: **Contact** or **Company**. This determines whether the variable appears in the Contacts tab or the Companies tab in the left panel.
4. Fill in the form fields described in the sections below.

> **Tip:** You may also start from a predefined template instead of creating from scratch.

## Output Types

Select the **Output** (response type) to define how the AI returns results:

| Output Type | Description |
|---|---|
| **Text** | Open-ended string answers — summaries, descriptions, hooks |
| **Number** | Numeric value (int or float) — scores, rankings, counts |
| **Date** | A valid calendar date — events, deadlines, timeline extraction |
| **One of** | Restricts results to a predefined set of tags/options (e.g., Yes/No, Hot/Warm/Cold, B2B/B2C) |

> **Important:** The response type affects the qualification criteria you can set up. For instance, choosing **One of** ensures consistent, filterable output. Use it whenever you want the AI to choose from a closed set of answers.

**Example:** An AI Variable with the instruction "Tell me if the company is either a B2B, B2C, or B2C with B2B products" and the output type set to **One of** will only return one of those three values. This ensures consistency, makes results easier to filter and analyze, and prevents unexpected or vague answers.

## Provide Explanation Option

You can activate the **Provide explanation** option when creating or editing a variable. When enabled, the AI returns both the selected result **and** a short reasoning behind it, giving your team more context about why the AI chose that answer.

## Write an Effective Prompt

The **Prompt** field is the main instruction. This is where you tell the AI exactly what to return and the format. Use the following recommended structure:

| Section | Purpose |
|---|---|
| **Persona** | Define the role or objective (e.g., "You are a market research analyst...") |
| **Context** | Provide information to generate relevant results — context phrases, list fields, or other AI Variables |
| **Instructions / Guidelines** | Rules for structure, content, tone, and linguistic style |
| **Examples** | Reference examples of the expected output |

**Examples of effective prompts:**

- "Classify #{{company_name}} into one of the following categories: Enterprise, Mid-market, or SMB. Return only one of these."
- "Based on #{{company_name}}'s website and #{{industry}}, summarize their core value proposition in one sentence."
- "From #{{domain}} and #{{industry}}, list up to 3 potential business challenges the company may face. Return as a bullet list."
- "Review #{{company_name}}'s website. Identify if they primarily sell products, services, or both. Return exactly one of these options."

**Avoid vague prompts like:** "Tell me everything about this company." (Too broad, no structure.)

> **Tip:** Be explicit in your prompt about what to search for when using Deep Research. The more specific you are, the more accurate the results will be.

### Enhance Button

Below the prompt editor you will find the **Enhance** button. Clicking it lets the AI automatically polish and refine your prompt — improving its structure, wording, and references to Enginy attributes. This is especially useful when you have written a first draft and want to make sure it follows best practices before saving. You can review the enhanced version and accept or adjust it as needed.

## Add Attributes (Placeholders)

Use the **Add attributes** option to select which row fields the variable can use as context. Inside your prompt, reference these fields with the `#{{field_name}}` syntax. When writing in the prompt editor, you can also type `{` to see and select available fields.

Common placeholders include:

**Contact attributes:**

- `#{{firstname}}`, `#{{lastname}}`, `#{{job_title}}`, `#{{email}}`, `#{{phone}}`
- `#{{linkedinurl}}`, `#{{recentactivity}}`, `#{{lead_source}}`

**Company attributes:**

- `#{{companyname}}`, `#{{domain}}`, `#{{website}}`, `#{{companysize}}`
- `#{{industry}}`, `#{{hq_location}}`

Use these inside prompts to make the AI answer relevant to each row.

## Deep Research

When creating or editing an AI Variable, you can enable the **Deep Research** toggle to let the AI Agent browse the web and find any information you need. This is a single, comprehensive search option that covers web pages, news, company websites, and other public sources in one unified search.

When Deep Research is enabled, the AI goes beyond the data already available in your lists — it actively searches the internet, visits relevant web pages, and extracts the information your prompt requires.

### How Deep Research Works

1. The AI reads your prompt and understands what information you are looking for.
2. It performs web searches using relevant keywords based on the lead/company data.
3. It visits web pages to extract detailed content (company websites, news, articles, etc.).
4. It analyzes the content and provides an answer based on what it found.
5. It can iterate **up to 5 times**, refining searches and exploring different sources.

The technology behind Deep Research uses Firecrawl, a specialized web-scraping tool designed to extract content from websites and convert it into a format the AI can understand.

### Deep Research Capabilities

| Capability | Description |
|---|---|
| Search the web | Find information across public websites, news articles, and online directories |
| Read website content | Extract text, data, and information from company websites and other public pages |
| Follow links | Navigate from one page to another to find relevant information |
| Extract structured data | Pull out specific information like company size, industry, technology stack, etc. |
| Filter by recency | Focus on recent news or content from specific time periods |
| Handle dynamic content | Access pages that require JavaScript to render |

### Limitations Compared to ChatGPT Web Search

| Aspect | Deep Research | ChatGPT Web Search |
|---|---|---|
| **Search scope** | Searches based on specific lead/company context; limited to 5 search iterations per field | Searches the entire open web freely; can search extensively |
| **Real-time information** | Fetches data at enrichment time; cached results may be up to 2 days old | Always fetches the latest information |
| **Content access** | Can only access public, unrestricted websites; may be blocked by anti-bot measures; 100-second page timeout | Has partnerships for premium content access; more flexible timeouts |
| **Reasoning** | Focused on answering the specific prompt; returns structured, consistent output; limited to 5 iterations | Can reason across multiple topics conversationally and continue indefinitely |

Deep Research is optimized for **batch data enrichment** — answering the same question across many leads/companies consistently.

### Best Use Cases for Deep Research

- Finding company information not available in your existing data (website, size, industry, technologies used)
- Researching specific facts about a lead's company (recent news, funding rounds, product launches)
- Extracting data from known websites (company website, Wikipedia, Google)
- Enriching with publicly available information that requires visiting multiple pages

### When Deep Research May Struggle

- Information is behind login walls (private LinkedIn data, gated content)
- Data changes by the minute (stock prices, live scores, breaking news)
- Questions are very open-ended ("Tell me everything about this company")
- Sources actively block web scrapers (some financial or news sites)
- You need to compare hundreds of sources for a single answer

### Deep Research Cost Considerations

Deep Research uses more credits than regular AI Variables because:

- Web searches incur additional costs per search query.
- Page scraping uses credits to extract content from websites.
- Multiple iterations may be needed to find the right answer.

> **Tip:** Use Deep Research only for fields where the information is not available elsewhere. Test with a small batch first to estimate total costs. Use more specific prompts to reduce the number of search iterations needed.

### Deep Research Troubleshooting

| Issue | Likely Cause | Solution |
|---|---|---|
| Returns "UNKNOWN" frequently | Information may not be publicly available | Verify the information exists online manually; refine the prompt |
| Slow enrichment times | Multiple search iterations + page loading | Expected behavior; Deep Research prioritizes accuracy over speed |
| Inconsistent results | Sources may have conflicting information | Add more context to the prompt to narrow down sources |
| Blocked on certain sites | Anti-bot measures | Some sites cannot be accessed; try alternative sources |

## Select an AI Model

When creating or editing an AI Variable, you can choose the AI model to use (e.g., Grok 4, o3, Gemini 2.5 Pro). Each model has different strengths — see [Available AI Models](#available-ai-models) for a full comparison.

## Cost Considerations

Each AI model has an associated cost. Beyond the model, cost can also increase based on:

- **Prompt complexity** — measured by the number of tokens consumed.
- **Nested AI Variables** — if your prompt references other AI Variables, the cost of those implicit variables is added to the total cost.
- **Deep Research** — enabling the Deep Research toggle adds to the cost per execution due to web searches and page scraping.

## Test an AI Variable

Before saving, click the **Test Prompt** button to run the variable on a sample Contact or Company record. Review the output to ensure it meets your expectations. If the results are not satisfactory, go back and adjust the prompt, output type, or search settings.

## Run AI Variables on Your Lists

Once created, AI Variables appear as columns in your Contact or Company lists. There are several ways to run them:

1. **Via Enrichment modal:** Open the list, click **Enrichment > Enrich with AI** in the top-right corner. Select one or multiple templates (Enginy ready-made or custom), then click **RUN**. The result appears as a new column for each row processed.
2. **Add as a column:** Hover between two existing columns, click the **Add a column (+)** icon, and choose an AI Variable from the dropdown.
3. **Run from column header:** When the column is empty, hover the column header and click **RUN** to execute the variable for all rows in that view.
4. **Bulk runs:** Click the column header, then select **Run column > Visible rows** or **All rows**.
5. **Individual run:** Click the play icon in a specific cell to run the variable for an individual lead or company.

## Manage AI Variables

All AI Variables are managed from the **AI Playbook > AI Variables** tab. The left panel displays all variables organized in folders, with two tabs: **Contacts** and **Companies**.

- **+ Add folder** — Create custom folders to organize your variables.
- **Variable cards** — In the center of the module, each variable is displayed as a card. Click the three dots on any card to access the following actions:

| Action | Description |
|---|---|
| **Edit** | Edit the variable prompt and settings. |
| **Duplicate** | Duplicate the variable to reuse and modify its content efficiently. |
| **Clone to client** | Clone it to another client account. This applies if you are an Enginy partner managing a portfolio of clients. |
| **Delete** | Permanently delete the AI Variable. |

> **Warning:** The variable name cannot be changed once created, as renaming would cause problems in campaigns that reference it. If you need a different name, duplicate the variable, give the copy the desired name, and delete the original.

## Use Case: Personalize or Randomize a Message Template

You can use AI Variables to write variations of a message template you already have. This is useful when you want parts of your message to change from contact to contact — either personalized based on data or randomized for variety.

**Step 1 — Write your base message:**

1. Start by writing the message you want to use as a reference, outside of Enginy.

**Step 2 — Identify the parts to personalize or randomize:**

1. Look at your message and decide which parts should change from contact to contact.
2. Replace those parts with `[TAG]` placeholders (e.g., `[GREETING]`, `[PRODUCT]`, `[PERSONA]`, `[CLOSING_LINE]`). You can invent any tag you want — such as `[PAIN_POINT]`, `[BENEFIT]`, `[RANDOM_FACT]`, etc.

**Step 3 — Define the rules for each tag:**

- For tags to **personalize**: write down the criteria. For example, "If the job title indicates top management in Sales, then `[PRODUCT]` = outreach automation and `[PERSONA]` = Sales leaders."
- For tags to **randomize**: list 3 or more possible options. For example, randomize `[GREETING]` between "Hi", "Hey", and "Just curious".

**Step 4 — Create the AI Variable:**

1. Go to **Enginy > AI Playbook > AI Variables > Create AI Variable**.
2. Enter your prompt using this structure:

| Component | What to include |
|---|---|
| **Goal** | What the AI should produce |
| **Template** | The message with `[TAG]` placeholders (from Step 2) |
| **Rules** | Personalization and randomization rules (from Step 3) |
| **Additional rules** | Tone, style, formatting constraints |
| **Input** | The data attributes to use (e.g., `Job title: #{{job_title}}`) |

> **Tip:** Enginy includes a predefined AI Variable called **Randomize Template** that uses this exact structure. Check it out for a ready-to-use example.

## Troubleshoot AI Variables

**"No Data Found" results:**

When AI Variables return "No data found" or produce no results, this is often because the account's API usage credits are exhausted — not a platform bug.

| Symptom | Cause | Resolution |
|---|---|---|
| AI Variables return "No data found" for all leads | API usage credits are exhausted | Check your usage dashboard or notifications. Replenish credits or wait for the billing cycle to reset. |
| Credits remain but data is still empty | Potential platform issue | Confirm credit availability and contact support for further investigation. |

> **Important:** Nothing is wrong with your configuration in this scenario. The system simply has no remaining data calls to use.

---

# AI Campaigns

## Understand AI Campaigns

AI Campaigns manage the prompts used by the **AI Agent (chatbot)**. When you enable the option in a campaign's settings for the AI to continue the conversation once a lead replies, the AI uses these campaign prompts to craft automatic responses.

## Create an AI Campaign

1. Navigate to **AI Playbook > AI Campaigns**.
2. Click **+ New campaign prompt** at the bottom of the left panel.
3. Fill in the following fields:

| Field | Description |
|---|---|
| **Name** | Name of the AI Campaign |
| **Prompt** | The campaign prompt. Follow the recommended structure: **Persona** (objective or summarized notion of who the AI agent is), **Context** (relevant info, list fields, AI Variables), and **Instructions/Guidelines** (rules for structure, content, and tone). |
| **GPT Model** | Select the model best suited for the interaction (e.g., Grok 4, o3). See [Available AI Models](#available-ai-models). |

All AI Campaign agents are listed in the left panel. Select any campaign to edit its prompt, change the AI model, and click **Update** to save changes.

Enginy includes pre-built AI Campaign templates such as:

- **Enginy AI SDR** — For sales-focused messaging.
- **Enginy AI Recruiter** — For recruitment-focused messaging.

You can adjust these templates or create your own from scratch.

## Automate Conversations with AI

Once your AI Campaign is configured and enabled in a campaign's settings, Enginy AI takes over the conversation flow:

1. A **lead replies** to the first message in your sequence.
2. The AI automatically crafts a reply based on the campaign prompt and continues the conversation without your intervention.
3. You can personalize the flow by adjusting the prompt with relevant details based on your target leads' information (e.g., common pain points, interests).

**Monitoring conversations:**

All incoming and outgoing messages from AI-powered campaigns are stored in the **Inbox** tab. AI replies appear automatically when a lead responds, allowing you to monitor and intervene if necessary.

---

# AI Conversation Tags

## Understand AI Conversation Tags

AI Conversation Tags let you label conversation replies to organize and act on your sales conversations. The system includes **Auto tagging**, which analyzes the last message sent by a lead to automatically assign the appropriate tag. Tags are dynamic — they are updated as the conversation evolves.

## Default AI Tags

Enginy includes essential default tags that automatically detect the most common conversation outcomes:

| Tag | Category |
|---|---|
| Interested | Positive |
| Meeting Booked | Positive |
| Not Interested | Negative |
| Bad Timing | Negative |
| Not the Target Persona | Negative |
| Out of Office | Neutral |
| Referred | Neutral |

> **Important:** Default tags cannot be deleted or edited, which ensures consistency across your team. However, you can duplicate them and activate or deactivate them depending on your workflow.

## Tag Categories

All tags are grouped into three categories:

| Category | Examples | Purpose |
|---|---|---|
| **Positive** | Interested, Meeting Booked | Indicates favorable outcomes |
| **Neutral** | Referred, Out of Office | Indicates non-committal responses |
| **Negative** | Not Interested, Bad Timing | Indicates unfavorable outcomes |

On the **Analytics Page**, you can track a single metric per category. For example, all Positive tags can be aggregated into one main metric for easier reporting. You can also view individual tag counts for more granular insights.

## Create a Custom Tag

1. Click **Create Tag** (top right of the AI Conversation Tags tab).
2. Configure the following fields:

| Field | Description |
|---|---|
| **Title** | Name of the tag |
| **Color** | Visual color identifier for the tag |
| **Category** | Select **Neutral**, **Positive**, or **Negative** |
| **Instructions** (optional) | A prompt the AI uses to analyze conversations and decide whether to apply this tag |

> **Important:** Custom AI tags **must** have a prompt (Instructions) associated before they can be activated for Auto tagging. Without an instruction, the tag can only be used manually.

## Auto Tagging

Auto tagging is controlled by a toggle switch located below the Instructions text box (and also on the tag card in the main view).

- **Enabled:** The AI uses the Instructions to analyze each conversation's last message and automatically applies the tag if the criteria match.
- **Disabled:** The tag is available for manual use only.

Auto tagging is dynamic. Each time a new message is sent in a conversation, the AI re-evaluates which tags apply.

## Tag Compatibility

The AI uses a compatibility matrix that controls how tags interact:

- A conversation **can have multiple tags** at the same time (e.g., Bad Timing and Interested).
- Tags are **automatically updated** as the conversation evolves — if the context changes, relevant tags are added or removed.

This ensures your analytics remain accurate while reflecting the full status of each conversation.

## Manage Tags

In the center of the AI Conversation Tags module, all available tags are displayed as cards. Each card has:

- **Trash can icon** — Delete the tag.
- **Overlapping squares icon** — Duplicate and edit the tag.
- **Toggle switch** — Enable or disable Auto tagging (only for tags with defined Instructions).

The module provides two views:

| View | Shows |
|---|---|
| **All** | Every tag in the account |
| **Active** | Only tags with an Instruction and Auto tagging enabled |

A search bar is also available to filter tags by name.

## Where AI Tags Appear

- **Inbox:** AI tags appear directly in your replies, so you instantly know the context. For example, if a lead replies with "Let's connect again next quarter," the AI tags it as **Bad Timing**. You can always remove a tag manually if it does not fit.
- **Analytics Page:** Tag metrics are tracked by category (Positive, Neutral, Negative), helping you quickly understand patterns in replies across campaigns.

> **Note:** For existing users who previously used manual tags (e.g., "Interested"), previous results are automatically merged with the new AI Tags system, so historical data stays consistent.

---

# ICP Quick Filter

The **ICP Quick Filter** is a feature that uses your predefined Ideal Customer Profile from the AI Playbook to automatically apply filters when searching for leads.

**How it works:**

When you open **Find Contacts from LinkedIn**, the system:

1. Detects your saved ICP from the AI Playbook.
2. Applies the relevant filters instantly, including: Job Titles, Locations, Company Industry, and Company Size.

**Benefits:**

- Save time on setup — no more retyping filter criteria.
- Stay consistent with your targeting strategy.
- Improve lead quality by aligning outreach with your most qualified buyers.

You can still adjust any filters manually. Use the ICP filters as a starting point, then fine-tune based on campaign goals or testing variations.

**No ICP set yet?**

1. Click **Create your first AI Playbook ICPs**.
2. A new tab opens with your AI Playbook.
3. Click **Fill with AI**.
4. The AI analyzes your company website and LinkedIn profile to automatically generate your Ideal Customer Profile.
5. Once completed, your ICP is saved and you can instantly apply the Quick Filter.

> **Tip:** Keep your AI Playbook updated. The more accurate and detailed your ICP, the smarter your filters will be.

---

# Available AI Models

Enginy offers a curated selection of AI models from leading providers. Each model has different strengths, and choosing the right one can make a significant difference in output quality and cost. Models marked as **Recommended** in the platform are the best starting point for most use cases.

| Model | Provider | Best For | Key Strengths |
|---|---|---|---|
| **GPT 5.2** | OpenAI | Complex reasoning and professional tasks | OpenAI's latest flagship model (Dec 2025). Excels at multi-step project execution, financial modeling, spreadsheets, and detailed analyses. Features both an instant mode for fast responses and a thinking mode for deeper reasoning. Ideal for power users and enterprise workflows. |
| **GPT 5 mini** | OpenAI | Balanced everyday tasks | A smaller, faster variant within the GPT-5 family. Delivers a strong balance of capability and speed, well-suited for everyday enrichment, summarization, and classification tasks without the cost of the full model. |
| **GPT 5 nano** | OpenAI | High-volume, cost-sensitive tasks | The most lightweight and cost-effective model in the GPT-5 family. Optimized for speed and efficiency, making it a great choice when running AI Variables across large lists where per-row cost matters. |
| **Gemini 3 Pro** | Google | Top-tier reasoning and accuracy | Google's most powerful model (Nov 2025). Uses a sparse mixture-of-experts architecture and can output up to 64K tokens. Outperformed major AI models in 19 out of 20 benchmarks on release. Excellent for complex prompts, long instructions, and tasks requiring high accuracy. |
| **Gemini 3 Flash** | Google | Speed-first scenarios | Google's speed-optimized model (Dec 2025). Provides near-instant responses while maintaining solid quality. Best for sorting through many records quickly, normalizing data, or any task where response time is more important than maximum depth. |
| **Grok 4** | xAI | Complex reasoning and analysis | xAI's flagship model. Excels in natural language processing, mathematical reasoning, and complex multi-step problem-solving. Its "think before responding" approach improves accuracy and reliability, particularly for prompts that require chained reasoning. |
| **Claude 4.5 Sonnet** | Anthropic | Nuanced writing and coding | Anthropic's mid-tier model (Sep 2025). Known for high-quality, nuanced text generation and strong coding capabilities. Produces natural-sounding, well-structured output and follows complex stylistic instructions faithfully. A solid choice for writing outreach messages and generating personalized copy. |

> **Tip:** Models marked with the **Recommended** label in the Enginy interface (currently GPT 5.2 and Grok 4) are the best general-purpose options for most AI Variable and AI Campaign use cases.

**Quick selection guide:**

| Need | Recommended Models |
|---|---|
| Top performance for complex reasoning | GPT 5.2, Gemini 3 Pro, Grok 4 |
| Best for nuanced writing and outreach copy | Claude 4.5 Sonnet, GPT 5.2 |
| Best balance of speed and quality | GPT 5 mini, Gemini 3 Flash |
| Most cost-effective for high-volume runs | GPT 5 nano, Gemini 3 Flash |

> **Note:** Available models may be updated over time as new capabilities are released. Check the model selector in the AI Variable or AI Campaign editor for the latest options.

---

# Prompt Best Practices

Generative AI models are extremely powerful, but they only produce good results when they receive good instructions. The quality of the output depends directly on the quality of the prompt.

## What Makes a Good Prompt

A good prompt is much more than a question. It is a structured instruction that:

- Defines a **clear objective** (what you want to achieve).
- Provides enough **context** (what the AI does and does not know).
- Specifies the **AI's role** (how it should behave).
- Describes the **output format** (how you want the answer delivered).
- Includes **constraints and quality criteria** (what it should and should not do).
- Is easy to **reuse and adapt**.

Think of the prompt as a briefing for a professional: the better the briefing, the better the work you will get.

## Key Principles

**1. Objective first, always**

Before writing your prompt, ask: What exactly do I want to achieve? What is the final output I need?

- Vague: "Tell me about customer loyalty."
- Clear: "Generate a list of 10 concrete ideas to improve customer loyalty in a B2C contact center, focused on reducing churn by 10% within 6 months."

The more concrete the objective, the more actionable the response.

**2. Provide relevant context**

The AI does not know your organization, product, or business reality unless you explain it. Include:

- Type of company / industry
- Type of customer / end user
- Knowledge level of the target audience
- Channels involved (phone, email, chat, etc.)
- Constraints (legal, regulatory, time, budget)

**3. Define the AI's role**

Asking "Explain this to me" is much less powerful than asking "Act as...". Examples:

- "Act as a senior CX consultant."
- "Act as a professional B2B copywriter."
- "Act as a market research analyst."

This sets expectations and elevates the quality of the response.

**4. Specify the output format**

Explicitly indicate how you want the result:

- Numbered list
- Table with specific columns
- Step-by-step sequence
- Paragraphs of approximate length
- Checklist bullets

This makes the content directly usable without reformatting.

**5. Include quality criteria and constraints**

Do not assume the AI understands your standards. State them clearly:

- Level of detail: high, medium, very concise
- Tone: formal, friendly, technical, explanatory
- Language: specify the exact language or regional variant
- Scope: what to include and what to avoid
- What to avoid: excessive jargon, legal terms, etc.

**6. Provide examples (and counterexamples)**

Examples significantly reduce iteration and rework:

- Positive example: what you want
- Negative example: what you do NOT want

**7. Think in iterative mode**

The first prompt will rarely be perfect. Work in cycles:

1. Write a well-structured initial prompt.
2. Evaluate the result.
3. Adjust the prompt (more context, more constraints, examples).
4. Refine the output.

The AI does not get offended if you ask it to redo, correct, or restructure.

## Recommended Prompt Template

Use this base template and adapt it for each use case:

| Component | Example |
|---|---|
| **Role** | "Act as [expert role]." |
| **Objective** | "Your goal is [specific result I need]." |
| **Context** | "Context: [brief description of company, audience, use case, constraints]." |
| **Task** | "Task: [what you must do: analyze, summarize, propose, write, etc.]." |
| **Output format** | "Deliver the answer in [format: table, list, numbered sections, etc.]." |
| **Tone and style** | "Use a [formal/informal], [technical/explanatory] tone aimed at [audience]." |
| **Constraints** | "Take into account: [length limits, things to avoid, language, etc.]." |
| **Examples** (optional) | "Example of what I am looking for: [text]." |

## Prompt Examples: Weak vs. Improved

**Writing:**

- Weak: "Write an email for a client."
- Improved: "Act as a B2B copywriter. Write a short email (max. 150 words) for a client who has been with us for 6 months using a technical support service. Objective: thank them for their trust and propose a brief review meeting. Context: we are a ticketing software company for contact centers. The recipient is a Head of Operations of a contact center with 80 agents. Tone: professional, direct, value-oriented. Format: suggested subject line + email body."

**Analysis:**

- Weak: "Summarize this text."
- Improved: "Act as a business analyst. Summarize the following text in a maximum of 10 clear, actionable bullets focused on recommendations to improve customer experience in a contact center. Do not repeat specific examples; keep only principles and best practices. Professional tone aimed at managers."

**Training:**

- Weak: "Give me training ideas for agents."
- Improved: "Act as a customer service training specialist. Create a 4-module training program for contact center agents who handle phone and chat interactions. Objective: improve skills in active listening, objection handling, and closing conversations. Context: agents have medium experience (1 year) and serve B2C customers. Format: for each module include the title, learning objectives, estimated duration, and practical activities."

## Common Prompt Mistakes

| Mistake | Why It Hurts |
|---|---|
| Being too generic | "Help me with this" gives the AI nothing to work with. Always define objective and context. |
| Not specifying the output format | Forces you to do extensive editing afterwards. |
| Forgetting to define the AI's role | Without a role, the model tends to give overly generic answers. |
| Mixing several tasks in one prompt | "Analyze, rewrite, suggest improvements, and create a presentation" in a single prompt leads to shallow results. Split into steps. |
| Asking for impossible things | "Guarantee this will reduce churn by 30%." The AI can suggest, not guarantee. |
| Not reviewing critical outputs | Never use AI responses without human validation in areas with legal, medical, financial, or regulatory impact. |
| Sharing sensitive data unnecessarily | Avoid including personally identifiable information (full names, IDs, phone numbers) when not essential to the task. |

## Prompt Best Practices Checklist

Before sending your prompt, verify:

- [ ] Have I clearly defined the objective?
- [ ] Have I provided enough context (industry, audience, situation)?
- [ ] Have I assigned an appropriate role to the AI?
- [ ] Have I precisely described the task it must perform?
- [ ] Have I specified the output format I need?
- [ ] Have I indicated the tone, language, and level of detail?
- [ ] Have I added relevant constraints and quality criteria?
- [ ] Could I improve the prompt with one or two examples?
- [ ] Is there anything sensitive (personal data, confidential information) I should remove or anonymize?
- [ ] Am I prepared to iterate and adjust the prompt after seeing the first result?

If most answers are "yes," your prompt is in the best-practice zone.

---

# FAQs

## Q1: Can I edit or delete the default AI Conversation Tags?

No. Default tags cannot be edited or deleted to ensure consistency across teams. However, you can duplicate them and deactivate any you do not need.

## Q2: Why are my AI Variables returning "No data found"?

This is often caused by exhausted API credits, not a platform bug. Check your usage dashboard or notifications to see if you have hit any limits. Once credits are replenished (by purchasing more or when your billing cycle resets), the AI Variables will resume populating normally. If you have remaining credits and still see empty data, contact support.

## Q3: What does the Deep Research toggle do in an AI Variable?

When enabled, Deep Research lets the AI Agent browse the web to find information relevant to your prompt. It searches public websites, reads page content, follows links, and extracts structured data. It uses more credits than a standard AI Variable, so enable it only when the information you need is not already available in your list data.

## Q4: Can I rename an AI Variable after creating it?

No. An AI Variable's name cannot be changed once created, as renaming would cause issues in campaigns that reference it. If you need a different name, duplicate the variable, give the copy the desired name, and delete the original.

## Q5: How does the AI decide which Conversation Tag to apply?

When Auto tagging is enabled, the AI analyzes the last message in a conversation against the Instructions defined for each active tag. If the message matches the criteria of a tag, the AI applies it automatically. Tags are re-evaluated dynamically as new messages arrive, so they are added or removed as the conversation context changes.
