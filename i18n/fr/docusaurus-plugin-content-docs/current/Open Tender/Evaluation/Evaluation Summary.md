---
id: open-tender-evaluation-summary
title: Open Tender – Evaluation Summary
sidebar_label: Evaluaiton Summary
sidebar_position: 6
---

# Résumé de l'évaluation

La page **Résumé de l'évaluation** fournit un aperçu complet du processus d'évaluation de l'appel d'offres, centralisant les métadonnées de l'appel d'offres, les entrées des évaluateurs et les calculs de notation finale.

![Vue du résumé de l'évaluation](/img/open_tender/evaluation/evaluation-summary/evaluation_summary.png)

## Détails de l'appel d'offres
Cette section affiche les informations de base de l'appel d'offres, notamment :
* **Numéro de référence**
* **Statut**
* **Date de publication**
* **Date de soumission**
* **Date d'ouverture**

![Détails de l'appel d'offres](/img/open_tender/evaluation/evaluation-summary/evaluation_summary_details.png)

---

## Sections d'évaluation
Le résumé est divisé en trois blocs principaux. Chaque bloc affiche les critères définis, la liste des évaluateurs et la notation spécifique donnée pour chaque critère.

### 1. Évaluation administrative
Une vue en bloc englobant toutes les exigences administratives. Elle valide si les fournisseurs répondent aux conditions préalables de base et affiche la notation fournie par chaque évaluateur.

![Évaluation administrative](/img/open_tender/evaluation/evaluation-summary/evaluation_summary_administrative.png)

### 2. Évaluation technique
Cette section gère l'évaluation qualitative de l'offre. 
* **Score calculé :** Le système calcule automatiquement un score technique pondéré pour chaque fournisseur.
* **Pondération :** Indexé sur **70 %** du score total.

![Évaluation technique](/img/open_tender/evaluation/evaluation-summary/evaluation_summary_technical.png)

### 3. Évaluation financière
Cette section gère l'évaluation liée aux coûts.
* **Score calculé :** Le système calcule un score financier pondéré basé sur le prix de l'offre.
* **Pondération :** Indexé sur **30 %** du score total.

![Évaluation financière](/img/open_tender/evaluation/evaluation-summary/evaluation_summary_financial.png)

---

## Notation finale et logique d'attribution
L'application agrège les données des sections ci-dessus pour déterminer l'offre gagnante :

* **Score technique pondéré :** 70 %
* **Score financier pondéré :** 30 %
* **Score global :** La somme des deux scores pondérés.

Le **Score global** évalue et identifie le fournisseur auquel l'attribution doit être assignée.

---

## Exportation de données
Au-delà de l'interface Web, l'application prend en charge la portabilité des données à des fins de vérification. Les utilisateurs peuvent exporter un **téléchargement Excel** qui contient les mêmes informations complètes dans un format de feuille de calcul structuré.

![Options d'exportation](/img/open_tender/evaluation/evaluation-summary/evaluation_summary_options.png)
