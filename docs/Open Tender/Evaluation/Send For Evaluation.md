---
id: open-tender-send-for-evaluation
title: Open Tender – Start Evaluaiton
sidebar_label: Start Evaluaiton
sidebar_position: 2
---

## Open Bids

Before starting evaluation, all bids must be opened by the **Procurement Officer**.

![Open Bid Button](/img/open_tender/evaluation/evaluation-team/open_bid_button.png)

- Click **Open Bid** to begin opening submitted bids.

---

## Enter Bid Key

![Bid Key Input](/img/open_tender/evaluation/evaluation-team/bid_key_input.png)

- Enter the **bid key provided by the bidder**.
- Each bid must be opened individually using its respective key.

**Note:**  
All bids must be successfully opened before proceeding to evaluation.

---

## Start Evaluation

![Start Evaluation](/img/open_tender/evaluation/evaluation-team/send_for_evaluation.png)

- After opening all bids:
  - Click on the **Evaluation dropdown**
  - Select **Start Evaluation**

---

## Evaluation Confirmation Modal

![Evaluation Modal](/img/open_tender/evaluation/evaluation-team/send_for_evaluation_model.png)

- Displays the **assigned evaluation team members**.
- Confirms that evaluation is ready to begin.

### Action

- Click **Start Evaluation** to proceed.

**Behavior:**
- Triggers notification to the **Administrative Evaluator**.

---

## Email Notification

![Administrative Evaluation Email](/img/open_tender/evaluation/evaluation-team/administrative_evaluation_request_email.png)

- The Administrative Evaluator receives an email notification.
- The email contains a **Start Bid Evaluation** button.

---

## Things to consider for evaluation

To manage the evaluation flow effectively within a procurement or tender system, the logic must enforce strict state transitions. Below is a breakdown of how to structure this logic for the Administrative, Technical, and Financial stages.

Evaluation Logic Flow
1. **Stage Sequencing**
The process must be linear. A bid cannot enter the Technical stage until the Administrative evaluation is fully complete, and it cannot enter Financial until the Technical stage is closed.

- **Administrative Stage:** Initial vetting of documents.

- **Technical Stage:** Scoring based on specifications and expertise.

- **Financial Stage:** Comparison of bid prices and commercial terms.

2. **Member Management Rules**
The ability to add or modify committee members is tied directly to the progress of the current stage:

- **The "Open" Window:** You can only add members to a group (e.g., the Technical Committee) if at least one member has not yet submitted their evaluation for that specific stage.

- **The "Lock" Mechanism:** As soon as the final member hits "Submit" for a stage, the system trigger a status update.

- **Immutability:** Once the stage status is marked complete, the member list for that stage is locked. You cannot add, remove, or change members for a previous stage once the process has advanced.

3. **Dynamic Score Validation**
The integrity of the total score is dependent on the active status of the evaluator.

- **Removal Consequences:** If a member has already submitted their evaluation but is removed from the evaluation list before the stage is locked, their score is immediately excluded from the final calculation.

- **Eligibility Check:** The system should only aggregate scores from users who remain on the active evaluation list.

- **Auto-Progression Logic:** Removing a member reduces the "Total Required Evaluations" count. If removing a member results in all remaining members having already submitted, the stage is auto-lock and transition to the next level.

---

## Start Bid Evaluation

- Click **Start Bid Evaluation** from the email.
- Redirects the evaluator to the system to begin the evaluation process.

---

## Summary

This process ensures:

- All bids are securely opened using bidder-provided keys  
- Evaluation only starts after complete bid access  
- Proper notification is sent to evaluation team members  
- A controlled and auditable evaluation workflow  