---
title: Negotiated Tender
sidebar_label: Negotiated Tender
sidebar_position: 3
---

# Negotiated Tender Criteria

The process is similar to Open Tender.

## Administrative Criteria

- Same fields and rules as Open Tender Administrative  

![Administrative Criteria](/img/settings/criteria/settings_open_tender_administrative_create.png)

. **Group** – Select **Administrative**  
2. **Parent Criteria** – Select **Top Level**  
3. **Label** – Title of the criteria  
4. **Weight** – Value is:
   - `0` for No  
   - `1` for Yes  
5. **Validation Type** – Select Boolean (Yes/No)  
6. **Description** – Optional reference field  
7. **Cancel** - Cancel the criteria creation
8. **Create Criteria** - Create the criteria

### Notes 
- The **Parent Criteria** is always **--Top Level--**
- The **Weight** is by default 0
- The **Validation Type** is always **Boolean (Yes/No)**.

---

## Technical Criteria

- Same fields and rules as Open Tender Technical  

![Technical Criteria](/img/settings/criteria/settings_open_tender_technical_create.png)

1. **Group** – Select **Technical**  
2. **Parent Criteria** –  
   - Top level (no child)  
   - Or select parent from dropdown if the criteria being created is a child
3. **Label** – Title of the criteria  
4. **Weight** –  
   - If no child → independent  
   - If has child → sum of child weights must equal parent weight  
5. **Validation Type** – Number  
6. **Minimum Value** – Minimum allowed value  
7. **Maximum Value** – Maximum allowed value  
8. **Greater Than (gt)** – Value must not be below this  
9. **Description** – Optional  
10. **Cancel** - Cancel the criteria creation
11. **Create Criteria** - Create the criteria

### Notes 
- The **Parent Criteria** can be **--Top Level--** or any other parent.
- The **Weight** is flexible: for top-level criteria, any value applies; for child criteria, the weights of all siblings must sum to equal their parent's weight.
- All top-level weights must total 100. If they don't, the system will normalize them to 100 automatically and perform calculations.
- The **Validation Type** is always **Boolean (Yes/No)**.
- The **Minimum Value** is the lowest score an evaluator is permitted to assign.
- The **Maximum Value** is the highest score an evaluator is permitted to assign.
- The **Greater Than (gt)** is a threshold value; the evaluator's score must strictly exceed this number.

## Financial Criteria

- Same fields and rules as Open Tender Financial 

![Financial Criteria](/img/settings/criteria/settings_open_tender_financial_create.png)

1. **Group** – Select **Financial**  
2. **Parent Criteria** –  
   - Top level (no child)  
   - Or select parent from dropdown if the criteria being created is a child
3. **Label** – Title of the criteria  
4. **Weight**     
5. **Validation Type** – Two types:
   - **Number**
     - Requires Minimum, Maximum, and Greater Than values  
   - **Supported Currency**
     - Displays available currencies during evaluation  
6. **Description** – Optional  

### Actions

- **Cancel** – Discard changes  
- **Create Criteria** – Save the criteria  

## Notes

- Ensure weight distribution is correct when using parent-child criteria
- Validation rules must be properly defined to avoid errors during evaluation
- Criteria structure directly impacts bid evaluation results