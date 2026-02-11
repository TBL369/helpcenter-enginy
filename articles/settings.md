# Settings

The Settings section is the control panel for your Enginy account. It allows you to manage your company identity, secure your access, and administer your team members and their specific permissions.

---

# Table of Contents

- [General Settings](#general-settings)
  - [Configure Company Identity](#configure-company-identity)
  - [Join the Beta Program](#join-the-beta-program)
  - [Set Your Preferred Language](#set-your-preferred-language)
  - [Manage Contact Hygiene and Automation](#manage-contact-hygiene-and-automation)
  - [Configure LinkedIn Integration](#configure-linkedin-integration)
- [Security Settings](#security-settings)
  - [Change Your Password](#change-your-password)
  - [Enable Two-Factor Authentication (2FA)](#enable-two-factor-authentication-2fa)
- [Team Management](#team-management)
  - [Understand Team Capacity](#understand-team-capacity)
  - [Search and Navigate the User List](#search-and-navigate-the-user-list)
  - [Invite a New User](#invite-a-new-user)
  - [Manage Users and Actions](#manage-users-and-actions)
  - [Perform Bulk Actions](#perform-bulk-actions)
  - [Manage User Permissions](#manage-user-permissions)
    - [Lists Permissions](#lists-permissions)
    - [Campaigns Permissions](#campaigns-permissions)
    - [General Settings Permissions](#general-settings-permissions)
- [FAQs](#faqs)

---

# General Settings

The **General** tab gathers the base settings for your workspace: company identity, beta access, language preferences, contact automations, and LinkedIn integration. Each option can be activated or deactivated using a toggle switch, or configured through buttons and dropdown menus.

Navigate to **Settings** > **General** to access the options described below.

## Configure Company Identity

Define how your organization appears within the platform.

| Setting | Description |
|---------|-------------|
| **Company logo** | Upload or change your company logo. This is used in the interface and may appear on shared or exported elements depending on the module. |
| **Display name** | The public name of your company on the platform. Click the **Edit name** button to modify it. |

## Join the Beta Program

| Setting | Description |
|---------|-------------|
| **Beta Program** (toggle) | Activates early access to new features and improvements before they are generally available. |

> **Note:** Beta features may be unstable or change without prior notice. Use them with caution in production environments.

## Set Your Preferred Language

| Setting | Description |
|---------|-------------|
| **Preferred language of communication** | Use the dropdown menu to select your preferred language for platform communications. |

## Manage Contact Hygiene and Automation

These settings help keep your contact database clean automatically by applying rules to manage data quality.

| Setting | Description |
|---------|-------------|
| **Automatically delete Contacts without associated company** | When enabled, contacts with no associated company are automatically deleted. |
| **Export Contacts email when domain doesn't match Company domain** | When enabled, the system automatically exports contacts where the email domain differs from the company domain. Useful for data quality control and review. |
| **Delete non verified emails** | When enabled, unverified emails are deleted when verification fails. This reduces bounce rates and improves contact quality. |

> **Important:** Contacts imported via CSV are **not** affected by the automatic deletion rule for contacts without associated companies.

> **Warning:** Before activating automatic deletion options, ensure your team understands the impact. These changes affect data volume and quality permanently and cannot be undone.

## Configure LinkedIn Integration

Controls the behavior of the LinkedIn integration with your conversations and contacts.

| Setting | Description |
|---------|-------------|
| **Enable LinkedIn conversation sync** | When enabled, starting a new conversation syncs previous LinkedIn messages to maintain context and conversation history. |
| **Only include contacts from exact company match** | When enabled, searching for contacts only includes those whose LinkedIn ID matches the target company exactly. This provides higher precision with fewer false positives. |

---

# Security Settings

The **Security** tab focuses on access control to reduce intrusion risks and protect your account. It includes password management and two-factor authentication options.

Navigate to **Settings** > **Security** to access the options described below.

## Change Your Password

Manage your account password from this section.

| Setting | Description |
|---------|-------------|
| **Password requirement** | Your password must be at least **12 characters** long. |
| **Change password** | Click this button to replace your current password with a new one. You will be guided through the password change process. |

## Enable Two-Factor Authentication (2FA)

Two-factor authentication adds an extra layer of security to your account by requiring a second verification step beyond your password.

1. Navigate to **Settings** > **Security**.
2. Click the **Enable 2FA** button.
3. Follow the on-screen configuration wizard to complete the setup.

> **Tip:** If your team handles sensitive data or uses shared access, 2FA should be standard practice. It significantly reduces the impact of leaked or reused passwords.

---

# Team Management

The **Team** tab is your central panel for managing workspace users. From here you can view license usage, search for members, invite new accounts, assign roles, and perform administrative actions.

Navigate to **Settings** > **Team** to access the options described below.

## Understand Team Capacity

At the top of the user list, you will see a capacity counter (e.g., **Team 58/100**). This indicates the number of active users versus your plan's license limit.

> **Note:** If you approach your license limit, you must either free up user slots by removing inactive members or upgrade your plan to add more users.

## Search and Navigate the User List

| Feature | Description |
|---------|-------------|
| **Search users** | Filter the user list by name or email. Supports keyboard shortcut (Cmd + F / Ctrl + F) for quick access. |
| **Pagination** | The list is paginated. Use the dropdown at the bottom to choose how many records to display (e.g., "Show 25"). Navigate between pages using the arrows and page indicators (e.g., "1-25 of 58"). |

## Invite a New User

1. Navigate to **Settings** > **Team**.
2. Click the **Invite User** button.
3. Complete the invitation form with the new member's details.
4. Submit the invitation. The invited user will receive an email with a temporary password and instructions to set up their account.

> **Note:** The **Invite User** button may appear grayed out (disabled) if:
> - You do not have sufficient permissions to add users.
> - The workspace configuration only allows invitations in certain states.

## Manage Users and Actions

The user table displays the following information for each member:

| Column | Description |
|--------|-------------|
| **User** | Displays the user's name, avatar, and email address. |
| **Role** | Dropdown menu to assign roles. Available roles are described in the table below. |
| **Impersonate** | Button to log in as that user. This simulates their experience and is ideal for support and debugging purposes. |
| **Actions** | Quick action icons for user administration. |

### User Roles

| Role | Description |
|------|-------------|
| **User** | Standard access with permissions defined by the administrator. |
| **Admin** | Extended access with the ability to manage other users, access administrative functions, and configure workspace settings including billing. |

### Actions Column

The Actions column provides quick access buttons for each user:

| Icon | Action | Description |
|------|--------|-------------|
| Shield/Gear icon | **Edit permissions** | Opens the granular permissions editor for the user. |
| Key icon | **Change password** | Allows you to change the user's password. |
| Red trash icon | **Delete** | Removes the user from the workspace. |

## Perform Bulk Actions

1. Select multiple users by checking the checkboxes on the left side of the user list. Use the checkbox in the header to select all visible users.
2. Once multiple users are selected, edit their permissions in bulk.

## Manage User Permissions

Clicking the **Edit permissions** button (shield icon) in the Actions column opens a granular permissions editor. The editor displays as **"Select user permissions for [Username]"** and contains three tabs: **Lists**, **Campaigns**, and **General Settings**.

1. Open the permissions editor by clicking the shield icon next to the target user.
2. Navigate through the **Lists**, **Campaigns**, and **General Settings** tabs and configure permissions as needed.
3. Click **Save Changes** to apply your modifications.
   - Click **Cancel** to discard changes.
   - Click **Back to Team** to return to the user list without saving.

> **Important:** Permission changes are applied immediately after clicking **Save Changes**. There is no automatic undo, so review your selections carefully before saving.

### Lists Permissions

Controls access to data, records, and activity within the platform.

| Permission | Options |
|------------|---------|
| **List Visibility** | User can view all lists / User can only view assigned lists |
| **Delete Access** | User can delete records (contacts, companies, or lists) / User cannot delete any records |
| **Edit Access** | User can edit all records / User cannot edit any records |
| **Import Contacts** | User can import new contacts / User cannot import contacts |
| **Import Companies** | User can import new companies / User cannot import companies |
| **Export Access** | User can export contacts or companies / User cannot export |
| **Activity Access** | User can access all activity / User can only access activity they created |

### Campaigns Permissions

Controls outreach capabilities including campaign management and identity access. These settings affect sending, viewing, and managing campaigns.

| Permission | Options |
|------------|---------|
| **Campaign Creation** | User can create and edit campaigns / User cannot create or modify campaigns |
| **Identities Access** | User has access to all identities / User has access to specific identities only |

### General Settings Permissions

Controls access to account configuration and credit management.

| Permission | Options |
|------------|---------|
| **Account Configuration** | User can access general account settings (includes billing) / User cannot access general account settings |
| **Credits Usage** | User can purchase and consume credits / User can only consume credits / User can only consume limited credits |

---

# FAQs

## Q1: What happens if I enable automatic contact deletion?

When you enable **Automatically delete Contacts without associated company**, the system removes contacts that have no company associated with them. Contacts imported via CSV are exempt from this rule and will not be deleted. This action is permanent, so ensure your team understands the implications before enabling it.

## Q2: Can I undo changes made to user permissions?

Permission changes take effect immediately after clicking **Save Changes**. There is no automatic undo function. To revert, you must manually edit the user again and select the previous options.

## Q3: How does the Impersonate feature work?

The Impersonate feature allows administrators to log in as another user and see the platform exactly as that user would. This is useful for troubleshooting issues, providing support, or verifying that permissions are configured correctly. The impersonated session simulates the user's complete experience.

## Q4: What should I do if I reach my team license limit?

If you approach your license limit (shown in the Team capacity counter), you have two options:

- **Free up slots**: Remove inactive users or users who no longer need access.
- **Upgrade your plan**: Contact your account manager or upgrade through the billing section to increase your license capacity.

## Q5: How do I enable two-factor authentication for my team?

Each user must enable 2FA individually from **Settings** > **Security** by clicking the **Enable 2FA** button and following the configuration wizard. As an administrator, you can recommend or require 2FA as a security policy for your team, but the setup must be completed by each user on their own account.
