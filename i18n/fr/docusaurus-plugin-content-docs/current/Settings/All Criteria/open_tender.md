---
sidebar_position: 3
---

# Critères de l'appel d'offres ouvert

## Critères administratifs

Le formulaire se compose de 6 champs.

![Critères administratifs](/img/settings/criteria/settings_open_tender_administrative_create.png)

1. **Libellé** – Titre du critère
2. **Poids** – La valeur est :
   - `0` pour Non
   - `1` pour Oui
3. **Groupe** – Sélectionnez **Administratif**
4. **Critère parent** – Toujours **Niveau supérieur**
5. **Type de validation** – Booléen (Oui/Non)
6. **Description** – Champ de référence optionnel

---

## Critères techniques

Le formulaire se compose de 9 champs.

![Critères techniques](/img/settings/criteria/settings_open_tender_technical_create.png)

1. **Libellé** – Titre du critère
2. **Poids** –
   - Si pas d'enfant → indépendant
   - Si a un enfant → la somme des poids des enfants doit être égale au poids du parent
3. **Groupe** – Sélectionnez **Technique**
4. **Critère parent** –
   - Niveau supérieur (pas d'enfant)
   - Ou sélectionnez le parent dans la liste déroulante
5. **Type de validation** – Nombre
6. **Valeur minimale** – Valeur minimale autorisée
7. **Valeur maximale** – Valeur maximale autorisée
8. **Supérieur à (gt)** – La valeur ne doit pas être inférieure à ceci
9. **Description** – Optionnel

---

## Critères financiers

Le formulaire se compose de 6 champs.

![Critères financiers](/img/settings/criteria/settings_open_tender_financial_create.png)

1. **Libellé** – Titre du critère
2. **Poids** –
   - Même règle que les critères techniques
3. **Groupe** – Sélectionnez **Financier**
4. **Critère parent** –
   - Niveau supérieur ou sélectionnez le parent
5. **Type de validation** – Deux types :
   - **Nombre**
     - Nécessite des valeurs minimale, maximale et supérieure à
   - **Devise prise en charge**
     - Affiche les devises disponibles lors de l'évaluation
6. **Description** – Optionnel

## Remarques

- Assurez-vous que la répartition du poids est correcte lors de l'utilisation de critères parent-enfant
- Les règles de validation doivent être correctement définies pour éviter les erreurs lors de l'évaluation
- La structure des critères a un impact direct sur les résultats de l'évaluation des offres
