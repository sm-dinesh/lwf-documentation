---
title: Invitation
sidebar_label: Invitation
sidebar_position: 8
---

# Demand Note Invitation

The **Invitation** feature notifies selected users (Reviewer, Checker, Approver) via email to take action on a Demand Note.

## Overview

![Demand Note Invitation](/img/demand_note/demand_note_invitation.png)

The email contains an invitation link that allows users to access the demand note and proceed with their decision.

## Invitation Process

- When a Demand Note is sent for review, selected users receive an email notification
- The email includes a secure link to access the demand note
- Clicking the link redirects the user to the review page

## Actions Available

Once redirected, the user can:

- **Accept** the Demand Note  
  - Approves the demand note for the next stage in the workflow

- **Reject** the Demand Note  
  - Sends the demand note back with feedback or rejection status

## Notes

- The invitation link is role-specific (Reviewer, Checker, Approver)
- Users must have proper access to perform actions
- The workflow progresses based on the action taken by each role


# Demand Note Invitation Page

The **Invitation Page** is accessed through the email invitation link. It displays the Demand Note details and allows authorized users to take action in the approval workflow.

## Accessing the Page

- Click the invitation link received via email
- The link redirects to the application and opens the Demand Note details page

## Overview

![Invitation Page](/img/demand_note/demand_note_invitation_page.png)

This page provides a complete view of the Demand Note along with options to approve or reject it.

## Available Actions

Located at the bottom right corner:

### Approve
- Approves the Demand Note for the next stage in the workflow
- On click, a confirmation modal appears with a reason field

![Approve Modal](/img/demand_note/demand_note_invitation_accept.png)

### Reject
- Sends the Demand Note back with feedback or rejection status
- On click, a modal appears requiring a reason for rejection

![Reject Modal](/img/demand_note/demand_note_invitation_reject.png)

### Download
- Allows users to download the Demand Note in PDF format for offline reference

## Approval Workflow

- The approval process follows a sequential flow:
  - **Reviewer → Checker → Approver**
- Each role must approve before moving to the next stage
- If rejected at any stage, the process is sent back with feedback

## Final Approval

- Once the **Approver** approves the Demand Note:
  - The approval cycle is completed
  - The status is updated to **Approved** on the listing page

![Approved Status](/img/demand_note/demand_note_approved.png)

## Notes

- Providing a reason is required for both approval and rejection
- Ensure all details are reviewed carefully before taking action
- Access to this page is restricted to invited users only