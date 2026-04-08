---
title: Open Tender
sidebar_label: Open Tender
sidebar_position: 2
---

# Open Tender Criteria

## Administrative Criteria

The form consists of 6 fields.

![Administrative Criteria](/img/settings/criteria/settings_open_tender_administrative_create.png)

1. **Label** – Title of the criteria  
2. **Weight** – Value is:
   - `0` for No  
   - `1` for Yes  
3. **Group** – Select **Administrative**  
4. **Parent Criteria** – Always **Top Level**  
5. **Validation Type** – Boolean (Yes/No)  
6. **Description** – Optional reference field  

---

## Technical Criteria

The form consists of 9 fields.

![Technical Criteria](/img/settings/criteria/settings_open_tender_technical_create.png)

1. **Label** – Title of the criteria  
2. **Weight** –  
   - If no child → independent  
   - If has child → sum of child weights must equal parent weight  
3. **Group** – Select **Technical**  
4. **Parent Criteria** –  
   - Top level (no child)  
   - Or select parent from dropdown  
5. **Validation Type** – Number  
6. **Minimum Value** – Minimum allowed value  
7. **Maximum Value** – Maximum allowed value  
8. **Greater Than (gt)** – Value must not be below this  
9. **Description** – Optional  

---

## Financial Criteria

The form consists of 6 fields.

![Financial Criteria](/img/settings/criteria/settings_open_tender_financial_create.png)

1. **Label** – Title of the criteria  
2. **Weight** –  
   - Same rule as Technical criteria  
3. **Group** – Select **Financial**  
4. **Parent Criteria** –  
   - Top level or select parent  
5. **Validation Type** – Two types:
   - **Number**
     - Requires Minimum, Maximum, and Greater Than values  
   - **Supported Currency**
     - Displays available currencies during evaluation  
6. **Description** – Optional  

## Notes

- Ensure weight distribution is correct when using parent-child criteria
- Validation rules must be properly defined to avoid errors during evaluation
- Criteria structure directly impacts bid evaluation results