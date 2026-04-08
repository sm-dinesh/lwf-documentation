---
id: open-tender-send-for-evaluation
title: Open Tender – Start Evaluaiton
sidebar_label: Start Evaluaiton
sidebar_position: 2
---

## Ouverture des offres

Avant de commencer l'évaluation, toutes les offres doivent être ouvertes par le **Responsable des achats**.

![Bouton Ouvrir l'offre](/img/open_tender/evaluation/evaluation-team/open_bid_button.png)

- Cliquez sur **Ouvrir l'offre** pour commencer l'ouverture des offres soumises.

---

## Entrer la clé de l'offre

![Saisie de la clé de l'offre](/img/open_tender/evaluation/evaluation-team/bid_key_input.png)

- Entrez la **clé de l'offre fournie par le soumissionnaire**.
- Chaque offre doit être ouverte individuellement à l'aide de sa clé respective.

**Note :**  
Toutes les offres doivent être ouvertes avec succès avant de passer à l'évaluation.

---

## Démarrer l'évaluation

![Démarrer l'évaluation](/img/open_tender/evaluation/evaluation-team/send_for_evaluation.png)

- Après avoir ouvert toutes les offres :
  - Cliquez sur le **menu déroulant Évaluation**
  - Sélectionnez **Démarrer l'évaluation**

---

## Fenêtre de confirmation de l'évaluation

![Fenêtre Évaluation](/img/open_tender/evaluation/evaluation-team/send_for_evaluation_model.png)

- Affiche les **membres de l'équipe d'évaluation assignés**.
- Confirme que l'évaluation est prête à commencer.

### Action

- Cliquez sur **Démarrer l'évaluation** pour continuer.

**Comportement :**
- Déclenche une notification à l'**Évaluateur administratif**.

---

## Notification par e-mail

![E-mail d'évaluation administrative](/img/open_tender/evaluation/evaluation-team/administrative_evaluation_request_email.png)

- L'évaluateur administratif reçoit une notification par e-mail.
- L'e-mail contient un bouton **Démarrer l'évaluation de l'offre**.

---

## Éléments à prendre en compte pour l'évaluation

Pour gérer efficacement le flux d'évaluation au sein d'un système de passation de marchés ou d'appels d'offres, la logique doit imposer des transitions d'état strictes. Vous trouverez ci-dessous une ventilation de la manière de structurer cette logique pour les étapes administrative, technique et financière.

Flux logique d'évaluation
1. **Séquençage des étapes**
Le processus doit être linéaire. Une offre ne peut pas entrer dans l'étape technique tant que l'évaluation administrative n'est pas entièrement terminée, et elle ne peut pas entrer dans l'étape financière tant que l'étape technique n'est pas clôturée.

- **Étape administrative :** Examen initial des documents.

- **Étape technique :** Notation basée sur les spécifications et l'expertise.

- **Étape financière :** Comparaison des prix des offres et des conditions commerciales.

2. **Règles de gestion des membres**
La possibilité d'ajouter ou de modifier des membres du comité est directement liée à l'avancement de l'étape actuelle :

- **La fenêtre "Ouverte" :** Vous ne pouvez ajouter des membres à un groupe (par exemple, le comité technique) que si au moins un membre n'a pas encore soumis son évaluation pour cette étape spécifique.

- **Le mécanisme de "Verrouillage" :** Dès que le dernier membre clique sur "Soumettre" pour une étape, le système déclenche une mise à jour du statut.

- **Immuabilité :** Une fois que le statut de l'étape est marqué comme terminé, la liste des membres pour cette étape est verrouillée. Vous ne pouvez pas ajouter, supprimer ou modifier des membres pour une étape précédente une fois que le processus a avancé.

3. **Validation dynamique des scores**
L'intégrité du score total dépend du statut actif de l'évaluateur.

- **Conséquences de la suppression :** Si un membre a déjà soumis son évaluation mais est supprimé de la liste d'évaluation avant que l'étape ne soit verrouillée, son score est immédiatement exclu du calcul final.

- **Vérification de l'éligibilité :** Le système ne doit agréger que les scores des utilisateurs qui restent sur la liste d'évaluation active.

- **Logique de progression automatique :** La suppression d'un membre réduit le nombre d' "Évaluations totales requises". Si la suppression d'un membre fait en sorte que tous les membres restants ont déjà soumis leur évaluation, l'étape est automatiquement verrouillée et passe au niveau suivant.

---

## Démarrer l'évaluation de l'offre

- Cliquez sur **Démarrer l'évaluation de l'offre** depuis l'e-mail.
- Redirige l'évaluateur vers le système pour commencer le processus d'évaluation.

---

## Résumé

Ce processus garantit :

- Toutes les offres sont ouvertes en toute sécurité à l'aide des clés fournies par les soumissionnaires  
- L'évaluation ne commence qu'après un accès complet aux offres  
- Une notification appropriée est envoyée aux membres de l'équipe d'évaluation  
- Un flux de travail d'évaluation contrôlé et auditable  
