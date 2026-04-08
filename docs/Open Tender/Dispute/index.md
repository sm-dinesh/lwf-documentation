---
id: dispute
title: Dispute
sidebar_label: Dispute
sidebar_position: 9
---

## What is a Dispute?

A **Dispute** occurs when evaluators do not agree on a condition or score during the evaluation process.  
An evaluation **cannot move to the next stage** until all disputes are resolved.

---

## Dispute Flow (Overview)

```
Start Evaluation
       ↓
Evaluators Submit Scores
       ↓
Do all responses match?
       ↓
   Yes --------→ Move to Next Stage
   No
       ↓
 Dispute Raised
       ↓
 Procurement Officer Reviews Dispute
       ↓
 Dispute Resolved?
       ↓
   Yes --------→ Continue Evaluation
   No --------→ Stay in Current Stage
```

---

## 1. Administrative Evaluation Dispute

An Administrative Dispute occurs when **evaluators provide different responses (Yes/No)** for the same criterion.

### Example

**Criterion:**  
Was the tender submitted through the official E-Tender system?

| Evaluator    | Response |
|--------------|----------|
| Ram Sharma   | Yes      |
| Sita Koirala | No       |
| Bikash Thapa | Yes      |

Since responses do not match, a **dispute is raised**.

### Resolution Process

```
Mismatch Detected
       ↓
Procurement Officer opens "Dispute" from Bids Page
       ↓
Review evaluator responses
       ↓
Evaluators update responses
       ↓
Do all responses match?
       ↓
   Yes → Dispute Resolved
   No  → Dispute Remains
```

**Rule:**  
All evaluators must have **identical responses for every criterion**.

---

## 2. Technical Evaluation Dispute

A Technical Dispute occurs when **evaluators assign different scores**.

### Example

**Criterion:**  
Experience in similar infrastructure projects (Max: 20 points)

| Evaluator    | Score |
|--------------|-------|
| Ram Sharma   | 18    |
| Sita Koirala | 15    |
| Bikash Thapa | 17    |

Different scores trigger a **technical dispute**.

### Resolution Process

```
Score Mismatch Detected
       ↓
Procurement reviews scores
       ↓
Decision:
   → Accept
   → Reject
       ↓
Dispute Resolved
```

**Rule:**  
Scores **do NOT need to match**.  
Procurement team makes the final decision.

---

## 3. Financial Evaluation Dispute

A Financial Dispute occurs when **financial values entered by evaluators do not match**.

### Example

**Criterion:**  
Total Bid Amount (NPR)

| Evaluator    | Amount (NPR) |
|--------------|--------------|
| Ram Sharma   | 1,200,000    |
| Sita Koirala | 1,250,000    |
| Bikash Thapa | 1,200,000    |

Since values differ, a **financial dispute is raised**.

### Resolution Process

```
Value Mismatch Detected
       ↓
Procurement reviews financial entries
       ↓
Evaluators correct values
       ↓
Do all values match?
       ↓
   Yes → Dispute Resolved
   No  → Dispute Remains
```

**Rule:**  
All financial values must be **exactly the same**.

---

## Summary

| Evaluation Type | Trigger Condition | Resolution Requirement    |
|-----------------|------------------|---------------------------|
| Administrative  | Yes/No mismatch  | All responses must match  |
| Technical       | Score mismatch   | Accept or Reject decision |
| Financial       | Value mismatch   | All values must match     |

---

## Key Points

- Disputes **block progression** to the next stage  
- Each stage has **different resolution logic**  
- Procurement officer resolve disputes  
- Ensures **fairness and consistency**