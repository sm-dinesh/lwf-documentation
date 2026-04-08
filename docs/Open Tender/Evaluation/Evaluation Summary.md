---
id: open-tender-evaluation-summary
title: Open Tender – Evaluation Summary
sidebar_label: Evaluaiton Summary
sidebar_position: 6
---

# Evaluation Summary

The **Evaluation Summary** page provides a comprehensive overview of the tender assessment process, centralizing tender metadata, evaluator inputs, and final scoring calculations.

![Evaluation Summary View](/img/open_tender/evaluation/evaluation-summary/evaluation_summary.png)

## Tender Details
This section displays the core information of the tender, including:
* **Reference Number**
* **Status**
* **Published Date**
* **Submission Date**
* **Opening Date**

![Tender Details](/img/open_tender/evaluation/evaluation-summary/evaluation_summary_details.png)

---

## Evaluation Sections
The summary is divided into three primary blocks. Each block displays the defined criteria, the list of evaluators, and the specific scoring given for each criterion.

### 1. Administrative Evaluation
A block view encompassing all administrative requirements. It validates whether vendors meet the baseline prerequisites and displays the scoring provided by each evaluator.

![Administrative Evaluation](/img/open_tender/evaluation/evaluation-summary/evaluation_summary_administrative.png)

### 2. Technical Evaluation
This section manages the qualitative assessment of the bid. 
* **Calculated Score:** The system automatically calculates a weighted technical score for each vendor.
* **Weighting:** Indexed out of **70%** of the total score.

![Technical Evaluation](/img/open_tender/evaluation/evaluation-summary/evaluation_summary_technical.png)

### 3. Financial Evaluation
This section handles the cost-related assessment.
* **Calculated Score:** The system calculates a weighted financial score based on the bid pricing.
* **Weighting:** Indexed out of **30%** of the total score.

![Financial Evaluation](/img/open_tender/evaluation/evaluation-summary/evaluation_summary_financial.png)

---

## Final Scoring & Award Logic
The application aggregates data from the sections above to determine the winning bid:

* **Weighted Technical Score:** 70%
* **Weighted Financial Score:** 30%
* **Overall Score:** The sum of both weighted scores.

The **Overall Score** evaluates and identifies the vendor to whom the award is to be assigned.

---

## Data Export
Beyond the web interface, the application supports data portability for verification purposes. Users can export an **Excel download** that contains the same comprehensive information in a structured spreadsheet format.

![Export Options](/img/open_tender/evaluation/evaluation-summary/evaluation_summary_options.png)