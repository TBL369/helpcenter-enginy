# Settings
The Settings section is the control panel for your Enginy account. It allows you to manage your company identity, secure your access, and administer your team members and their specific permissions.

---

# Table of Contents
- [Overview](#overview)
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
    - [User Roles](#user-roles)
    - [Actions Column](#actions-column)
    - [Perform Bulk Actions](#perform-bulk-actions)
  - [Manage User Permissions](#manage-user-permissions)
    - [Lists Permissions](#lists-permissions)
    - [Campaigns Permissions](#campaigns-permissions)
    - [General Settings Permissions](#general-settings-permissions)

---

# Overview
This Settings section contains three tabs at the top of the page:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Tab</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>General</b></p></td><td><p class="no-margin">Displays the workspace’s general settings (e.g., company branding, language, and other global preferences).</p></td></tr><tr><td><p class="no-margin"><b>Security</b></p></td><td><p class="no-margin">Manages account security settings, including password changes and two-factor authentication (2FA).</p></td></tr><tr><td><p class="no-margin"><b>Team</b></p></td><td><p class="no-margin">Manage workspace users: invite members, assign roles, and manage user access/permissions.</p></td></tr></tbody></table>

To access your account settings, click **Settings** in the bottom-left corner, or open the account menu in the top-left and select **Settings** from the dropdown.

![](https://downloads.intercomcdn.com/i/o/qjmc10sy/2064847326/c788a0175b968ccd43c85513d8cc/image.png?expires=1771308000&signature=c2b5b3ae07e4833664237cd1ea0fae1b13215762f098b67773ef19cf3de56a4e&req=diAhEsF6moJdX%2FMW3Hu4gbGvqBIY0P2DkJ8jHJayIKN3aB%2BHvKVYXIMDZARF%0AFQ%3D%3D%0A)![](https://res.cloudinary.com/enginy/image/upload/v1771440151/helpcenter/settings-2.png)

---

# General Settings
The **General** tab gathers the base settings for your workspace: company identity, beta access, language preferences, contact automations, and LinkedIn integration.

Each option can be activated or deactivated using a toggle switch, or configured through buttons and dropdown menus.

Navigate to **Settings** > **General** tab to access the options described below.

![](https://res.cloudinary.com/enginy/image/upload/v1771440151/helpcenter/settings-3.png)

## Configure Company Identity
Define how your organization appears within the platform.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Setting</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Company logo</b></p></td><td><p class="no-margin">Upload or change your company logo. This is used in the interface.</p></td></tr><tr><td><p class="no-margin"><b>Display name</b></p></td><td><p class="no-margin">The public name of your company on the platform. Click the <b>Edit name</b> button to modify it.</p></td></tr></tbody></table>

## Join the Beta Program
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Setting</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Beta Program</b> (toggle)</p></td><td><p class="no-margin">Activates early access to new features and improvements before they are generally available.</p></td></tr></tbody></table>

**Note:** Beta features may be unstable or change without prior notice. Use them with caution in production environments.

## Set Your Preferred Language
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Setting</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Preferred language of communication</b></p></td><td><p class="no-margin">Use the dropdown menu to select your preferred language for platform communications.</p></td></tr></tbody></table>

## Manage Contact Hygiene and Automation
These settings help keep your contact database clean automatically by applying rules to manage data quality.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Setting</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Automatically delete Contacts without associated company</b></p></td><td><p class="no-margin">When enabled, contacts with no associated company are automatically deleted.</p></td></tr><tr><td><p class="no-margin"><b>Export Contacts email when domain doesn't match Company domain</b></p></td><td><p class="no-margin">When enabled, the system automatically exports contacts where the email domain differs from the company domain. Useful for data quality control and review.</p></td></tr><tr><td><p class="no-margin"><b>Delete non verified emails</b></p></td><td><p class="no-margin">When enabled, unverified emails are deleted when verification fails. This reduces bounce rates and improves contact quality.</p></td></tr></tbody></table>

**Important:** Contacts imported via CSV are **not** affected by the automatic deletion rule for contacts without associated companies. But the ones coming from HubSpot or LinkedIn scrapings are affected.

**Warning:** Before activating automatic deletion options, ensure your team understands the impact. These changes affect data volume and quality permanently and cannot be undone.

## Configure LinkedIn Integration
Controls the behavior of the LinkedIn integration with your conversations and contacts.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Setting</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Enable LinkedIn conversation sync</b></p></td><td><p class="no-margin">When enabled, starting a new conversation syncs previous LinkedIn messages to maintain context and conversation history.</p></td></tr><tr><td><p class="no-margin"><b>Only include contacts from exact company match</b></p></td><td><p class="no-margin">When enabled, searching for contacts only includes those whose LinkedIn ID matches the target company exactly. This provides higher precision with fewer false positives.</p></td></tr></tbody></table>

---

# Security Settings
The **Security** tab focuses on access control to reduce intrusion risks and protect your account. It includes password management and two-factor authentication options.

Navigate to **Settings** > **Security** tab to access the options described below.

![](https://res.cloudinary.com/enginy/image/upload/v1771440152/helpcenter/settings-4.png)

## Change Your Password
Manage your account password from this section.
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Setting</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Password requirement</b></p></td><td><p class="no-margin">Your password must be at least <b>12 characters</b> long.</p></td></tr><tr><td><p class="no-margin"><b>Change password</b></p></td><td><p class="no-margin">Click this button to replace your current password with a new one. You will be guided through the password change process.</p></td></tr></tbody></table>

## Enable Two-Factor Authentication (2FA)
Two-factor authentication adds an extra layer of security to your account by requiring a second verification step beyond your password.
1.  Click the **Enable 2FA** button.
2.  Follow the on-screen configuration wizard to complete the setup.

![](https://res.cloudinary.com/enginy/image/upload/v1771440152/helpcenter/settings-5.png)

![](https://res.cloudinary.com/enginy/image/upload/v1771440152/helpcenter/settings-6.png)

**Tip:** If your team handles sensitive data or uses shared access, 2FA should be standard practice. It significantly reduces the impact of leaked or reused passwords.

---

# Team Management
The **Team** tab is your central panel for managing workspace users. From here you can view license usage, search for members, invite new accounts, assign roles, and perform administrative actions. This tab is only visible for users with **Admin** roles.

Navigate to **Settings** > **Team** tab to access the options described below.

![](https://res.cloudinary.com/enginy/image/upload/v1771440152/helpcenter/settings-7.png)

## Understand Team Capacity
At the top of the user list, you will see a capacity counter (e.g., **Team 10/20**). This indicates the number of active users versus your plan's license limit.

**Note:** If you approach your license limit, you must either free up user slots by removing inactive members or request to support agents or your account manager to add more users for free.

## Search and Navigate the User List
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Feature</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>Search users</b></p></td><td><p class="no-margin">Filter the user list by name or email. Supports keyboard shortcut (Cmd + F / Ctrl + F) for quick access.</p></td></tr><tr><td><p class="no-margin"><b>Pagination</b></p></td><td><p class="no-margin">The list is paginated. Use the dropdown at the bottom to choose how many records to display (e.g., "Show 25"). Navigate between pages using the arrows and page indicators (e.g., "1-25 of 58").</p></td></tr></tbody></table>

## Invite a New User
1.  Click the **Invite User** button.
2.  Complete the invitation form with the new member's email address.
3.  Submit the invitation. The invited user will receive an email with a temporary password and instructions to set up their account user.

![](https://res.cloudinary.com/enginy/image/upload/v1771440152/helpcenter/settings-8.png)

You can track sent invitations under **Pending Invitations**. From there, you can **Resend** or **Remove** them using the corresponding buttons.

![](https://res.cloudinary.com/enginy/image/upload/v1771440153/helpcenter/settings-9.png)

## Manage Users and Actions
The user table displays the following information for each member:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Column</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>User</b></p></td><td><p class="no-margin">Displays the user's name, avatar, and email address.</p></td></tr><tr><td><p class="no-margin"><b>Role</b></p></td><td><p class="no-margin">Dropdown menu to assign roles. Available roles are described in the table below.</p></td></tr><tr><td><p class="no-margin"><b>Actions</b></p></td><td><p class="no-margin">Quick action icons for user administration.</p></td></tr></tbody></table>

### User Roles
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Role</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin"><b>User</b></p></td><td><p class="no-margin">Standard access with permissions defined by the administrator.</p></td></tr><tr><td><p class="no-margin"><b>Admin</b></p></td><td><p class="no-margin">Extended access with the ability to manage other users, access administrative functions, and configure workspace settings including billing.</p></td></tr></tbody></table>

### Actions Column
The Actions column provides quick access buttons for each user:
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Icon</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Action</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Description</p></td></tr><tr><td><p class="no-margin">Gear icon</p></td><td><p class="no-margin"><b>Edit permissions</b></p></td><td><p class="no-margin">Opens the granular permissions editor for the user.</p></td></tr><tr><td><p class="no-margin">Key icon</p></td><td><p class="no-margin"><b>Change password</b></p></td><td><p class="no-margin">Allows you to change the user's password.</p></td></tr><tr><td><p class="no-margin">Red trash icon</p></td><td><p class="no-margin"><b>Delete user</b></p></td><td><p class="no-margin">Removes the user from the workspace.</p></td></tr></tbody></table>

### Perform Bulk Actions
1.  Select multiple users by checking the checkboxes on the left side of the user list. Use the checkbox in the header to select all visible users.
2.  Once multiple users are selected, edit their permissions in bulk.

![](https://res.cloudinary.com/enginy/image/upload/v1771440148/helpcenter/settings-10.png)

## Manage User Permissions
Clicking the **Edit permissions** button (gear icon) in the Actions column opens a granular permissions editor. The editor displays as **"Select user permissions for \[Username\]"** and contains three tabs: **Lists**, **Campaigns**, and **General Settings**.
1.  Open the permissions editor by clicking the shield icon next to the target user.
2.  Navigate through the **Lists**, **Campaigns**, and **General Settings** tabs and configure permissions as needed.
3.  Click **Save Changes** to apply your modifications.
    -   Click **Cancel** to discard changes.
    -   Click **Back to Team** to return to the user list without saving.
**Important:** Permission changes are applied immediately after clicking **Save Changes**. There is no automatic undo, so review your selections carefully before saving.

### Lists Permissions
Controls access to data, records, and activity within the platform.

![](https://res.cloudinary.com/enginy/image/upload/v1771440151/helpcenter/settings-11.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Permission</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Options</p></td></tr><tr><td><p class="no-margin"><b>List Visibility</b></p></td><td><p class="no-margin">User can view all lists / User can only view assigned lists</p></td></tr><tr><td><p class="no-margin"><b>Delete Access</b></p></td><td><p class="no-margin">User can delete records (contacts, companies, or lists) / User cannot delete any records</p></td></tr><tr><td><p class="no-margin"><b>Edit Access</b></p></td><td><p class="no-margin">User can edit all records / User cannot edit any records</p></td></tr><tr><td><p class="no-margin"><b>Import Contacts</b></p></td><td><p class="no-margin">User can import new contacts / User cannot import contacts</p></td></tr><tr><td><p class="no-margin"><b>Import Companies</b></p></td><td><p class="no-margin">User can import new companies / User cannot import companies</p></td></tr><tr><td><p class="no-margin"><b>Export Access</b></p></td><td><p class="no-margin">User can export contacts or companies / User cannot export</p></td></tr><tr><td><p class="no-margin"><b>Activity Access</b></p></td><td><p class="no-margin">User can access all activity / User can only access activity they created</p></td></tr></tbody></table>

### Campaigns Permissions
Controls outreach capabilities including campaign management and identity access. These settings affect sending, viewing, and managing campaigns.

![](https://res.cloudinary.com/enginy/image/upload/v1771440151/helpcenter/settings-12.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Permission</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Options</p></td></tr><tr><td><p class="no-margin"><b>Campaign Creation</b></p></td><td><p class="no-margin">User can create and edit campaigns / User cannot create or modify campaigns</p></td></tr><tr><td><p class="no-margin"><b>Identities Access</b></p></td><td><p class="no-margin">User has access to all identities / User has access to specific identities only</p></td></tr></tbody></table>

### General Settings Permissions
Controls access to account configuration and credit management.

![](https://res.cloudinary.com/enginy/image/upload/v1771440151/helpcenter/settings-13.png)
<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="no-margin">Permission</p></td><td style="background-color: #d7efdc80;"><p class="no-margin">Options</p></td></tr><tr><td><p class="no-margin"><b>Account Configuration</b></p></td><td><p class="no-margin">User can access general account settings (includes billing) / User cannot access general account settings</p></td></tr><tr><td><p class="no-margin"><b>Credits Usage</b></p></td><td><p class="no-margin">User can purchase and consume credits / User can only consume credits / User can only consume limited credits</p></td></tr></tbody></table>

---

# FAQs
### Q1: What happens if I enable automatic contact deletion?
When you enable **Automatically delete Contacts without associated company**, the system removes contacts that have no company associated with them. Contacts imported via CSV are exempt from this rule and will not be deleted. This action is permanent, so ensure your team understands the implications before enabling it.

### Q2: Can I undo changes made to user permissions?
Permission changes take effect immediately after clicking **Save Changes**. There is no automatic undo function. To revert, you must manually edit the user again and select the previous options.

### Q3: What should I do if I reach my team license limit?
If you approach your license limit (shown in the Team capacity counter) contact your account manager or support agents via chat and request more free users.

### Q4: How do I enable two-factor authentication for my team?
Each user must enable 2FA individually from **Settings** > **Security** by clicking the **Enable 2FA** button and following the configuration wizard. As an administrator, you can recommend or require 2FA as a security policy for your team, but the setup must be completed by each user on their own account.
