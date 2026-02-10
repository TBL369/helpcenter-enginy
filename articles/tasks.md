# Tasks

The Tasks section in Enginy gives you a centralized view of every action item linked to your campaigns and contacts. Use it to review pending work, track completed activities, add notes, and mark tasks as done.

---

## Table of Contents

- [Core Concepts](#core-concepts)
- [Page Layout](#page-layout)
  - [Pending Tab](#pending-tab)
  - [Completed Tab](#completed-tab)
- [Task List](#task-list)
  - [Columns Reference](#columns-reference)
  - [Task Naming Convention](#task-naming-convention)
  - [Row-Level Actions](#row-level-actions)
- [Filter and Sort Tasks](#filter-and-sort-tasks)
  - [Filter by Campaign](#filter-by-campaign)
  - [Filter by Owner](#filter-by-owner)
  - [Sort Tasks](#sort-tasks)
- [Task Details Panel](#task-details-panel)
  - [Open the Task Details Panel](#open-the-task-details-panel)
  - [Fields Reference](#fields-reference)
  - [Add a Note](#add-a-note)
  - [Complete a Task](#complete-a-task)
- [FAQs](#faqs)

---

## Core Concepts

| Term | Definition |
|---|---|
| **Task** | An individual action item linked to a contact and a campaign, such as making a call, sending an email, or completing a to-do. |
| **Type** | The category of a task. Current types are **TODO**, **CALL**, and **EMAIL**. |
| **Status** | The current state of a task: **Pending** (not yet done) or **Completed** (finished). |
| **Owner** | The team member responsible for completing the task. |
| **Campaign** | The campaign that generated or is associated with the task. |
| **Source** | The origin of the task as displayed in the task list, typically showing the campaign name. |

---

## Page Layout

To open Tasks, navigate to [NAV_PATH] in Enginy. The page title **Tasks** appears at the top, followed by two tabs: **Pending** and **Completed**.

### Pending Tab

The **Pending** tab displays all tasks that have not yet been completed. Every row in this view shows a **Pending** status badge in orange.

### Completed Tab

The **Completed** tab displays all tasks that have been finished. Every row in this view shows a **Completed** status badge in green. This tab includes an additional **Completed** column (not present in the Pending tab) that shows when each task was completed.

---

## Task List

Tasks are displayed in a table format. The visible columns differ slightly depending on which tab is active.

### Columns Reference

| Column | Description | Pending Tab | Completed Tab |
|---|---|---|---|
| **Task** | The full task label, composed of a type prefix and a title (see [Task Naming Convention](#task-naming-convention)). | Yes | Yes |
| **Notes** | A short note attached to the task. Displays **-** when no note has been added. | Yes | Yes |
| **Contact** | The contact associated with the task. Shown with a colored avatar icon and the contact's name. | Yes | Yes |
| **Source** | The campaign or source that generated the task. Long names may appear truncated. | Yes | Yes |
| **Created** | When the task was created, displayed in relative time format (e.g., "4 hours ago", "3 weeks ago"). | Yes | Yes |
| **Completed** | When the task was completed, displayed in relative time format (e.g., "4 hours ago", "1 week ago"). | No | Yes |
| **Status** | The current status of the task, shown as a colored badge: **Pending** (orange) or **Completed** (green). | Yes | Yes |

### Task Naming Convention

Each task label in the **Task** column follows a consistent format:

**TYPE · Title** or **TYPE - Title**

Where:

- **TYPE** is a prefix indicating the kind of action:
  - **TODO** — A general to-do item (e.g., "TODO - Call Valentina (LinkedIn Not Accepted)").
  - **CALL** — A phone-call task (e.g., "CALL · Cold Call").
  - **EMAIL** — An email-related task (e.g., "EMAIL · Some title").
- **Title** is the descriptive name of the task.

> **Note:** The separator between the type and the title may appear as **·** (middle dot) or **-** (dash). Both are equivalent.

### Row-Level Actions

Each row in the task list provides the following interactive elements:

- **Selection checkbox** — Located on the left side of each row, allowing you to select individual tasks.
- **Clickable row** — Each row features a chevron (arrow indicator) on the right side. Clicking a row opens the [Task Details Panel](#task-details-panel).

---

## Filter and Sort Tasks

A toolbar above the task list provides three controls: **Campaign**, **Owner**, and **Sort**. These controls are available on both the Pending and Completed tabs.

### Filter by Campaign

1. Click the **Campaign** button in the toolbar.
2. Use the **Search…** text field at the top of the dropdown to narrow the list by typing a campaign name.
3. Select a campaign from the scrollable list.

The task list updates to show only tasks associated with the selected campaign.

### Filter by Owner

1. Click the **Owner** button in the toolbar.
2. Use the **Search…** text field at the top of the dropdown to narrow the list by name or email.
3. Select a team member from the scrollable list. Each entry displays a colored avatar, the member's name, and their email address.

The task list updates to show only tasks assigned to the selected owner.

### Sort Tasks

Click the **Sort** button in the toolbar and select one of the following options:

| Sort Option | Behavior |
|---|---|
| **Newest first** | Displays the most recently created tasks at the top. |
| **Oldest first** | Displays the earliest created tasks at the top. |
| **Recently completed** | Displays the most recently completed tasks at the top. |
| **First completed** | Displays the earliest completed tasks at the top. |

> **Tip:** The **Recently completed** and **First completed** sort options are most useful when viewing the Completed tab.

---

## Task Details Panel

The task details panel is a side drawer that appears on the right side of the page, providing a full breakdown of a single task.

### Open the Task Details Panel

1. Click any row in the task list.
2. The details panel slides open on the right side of the page.

To close the panel, click the **X** button in the top-right corner.

### Fields Reference

The following fields are displayed in the task details panel. Some fields appear only under certain conditions.

| Field | Description | Visibility |
|---|---|---|
| **Status** | The current status of the task, shown as a colored badge: **Pending** (orange) or **Completed** (green). | Always |
| **Title** | The descriptive name of the task (without the type prefix). | Always |
| **Type** | The task type (e.g., **TODO**, **CALL**, **EMAIL**). | Always |
| **Contact** | The contact associated with the task, displayed with a colored avatar and the contact's full name. | Always |
| **Campaign** | The campaign that generated or is associated with the task. | Always |
| **Owner** | The team member assigned to the task, displayed with a colored avatar and their name. | Always |
| **Due** | The due date of the task, displayed in relative time format (e.g., "in 9 days"). | Only when a due date is set |
| **Created** | When the task was created, in relative time format (e.g., "about 4 hours ago"). | Always |
| **Completed** | When the task was completed, in relative time format (e.g., "about 4 hours ago"). | Completed tasks only |
| **Description** | A free-text description field for additional context about the task. | Always |
| **Notes** | A text input area for adding notes to the task. | Always |

### Add a Note

1. Open the task details panel by clicking a task row.
2. Scroll to the **Notes** field at the bottom of the panel.
3. Click the field (it displays the placeholder text **Add a note…** when empty).
4. Type your note.

### Complete a Task

1. Click the task row in the **Pending** tab to open the task details panel.
2. Click the green **Complete** button at the bottom-right corner of the panel.

> **Note:** The **Complete** button includes a small dropdown chevron beside it, which may provide additional options.

Once completed, the task automatically moves from the **Pending** tab to the **Completed** tab and its status changes from **Pending** (orange) to **Completed** (green).

> **Important:** The **Complete** button is only available for tasks with a **Pending** status. Tasks already marked as **Completed** do not display this button.

---

## FAQs

**How do I complete a task?**
Click the task row to open the task details panel, then click the green **Complete** button at the bottom-right of the panel. The task will move from the Pending tab to the Completed tab.

**What is the difference between the Pending and Completed tabs?**
The **Pending** tab shows all tasks that still need to be done. The **Completed** tab shows all finished tasks and includes an additional **Completed** column indicating when each task was marked as done.

**Can I filter tasks by campaign or owner?**
Yes. Use the **Campaign** and **Owner** filter buttons in the toolbar above the task list. Both filters include a search field so you can quickly find a specific campaign or team member.

**What do the task type prefixes (TODO, CALL, EMAIL) mean?**
Each task is labeled with a type that indicates the action required: **TODO** for general action items, **CALL** for phone calls, and **EMAIL** for email-related tasks.

**How are timestamps displayed?**
All timestamps in the Tasks section use a relative format, such as "4 hours ago", "about 4 hours ago", "1 week ago", or "in 9 days" (for due dates in the future).
