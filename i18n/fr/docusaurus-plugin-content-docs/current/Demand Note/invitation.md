---
title: Invitation
sidebar_label: Invitation
sidebar_position: 8
---

# Invitation à la Note de demande

La fonctionnalité **Invitation** avertit les utilisateurs sélectionnés (Réviseur, Vérificateur, Approbateur) par e-mail de prendre des mesures sur une Note de demande.

## Aperçu

![Invitation à la Note de demande](/img/demand_note/demand_note_invitation.png)

L'e-mail contient un lien d'invitation qui permet aux utilisateurs d'accéder à la note de demande et de procéder à leur décision.

## Processus d'invitation

- Lorsqu'une Note de demande est envoyée pour révision, les utilisateurs sélectionnés reçoivent une notification par e-mail
- L'e-mail comprend un lien sécurisé pour accéder à la note de demande
- Cliquer sur le lien redirige l'utilisateur vers la page de révision

## Actions disponibles

Une fois redirigé, l'utilisateur peut :

- **Accepter** la Note de demande  
  - Approuve la note de demande pour l'étape suivante du flux de travail

- **Rejeter** la Note de demande  
  - Renvoie la note de demande avec des commentaires ou un statut de rejet

## Remarques

- Le lien d'invitation est spécifique au rôle (Réviseur, Vérificateur, Approbateur)
- Les utilisateurs doivent avoir un accès approprié pour effectuer des actions
- Le flux de travail progresse en fonction de l'action entreprise par chaque rôle


# Page d'invitation à la Note de demande

La **Page d'invitation** est accessible via le lien d'invitation par e-mail. Elle affiche les détails de la Note de demande et permet aux utilisateurs autorisés de prendre des mesures dans le flux de travail d'approbation.

## Accéder à la page

- Cliquez sur le lien d'invitation reçu par e-mail
- Le lien redirige vers l'application et ouvre la page des détails de la Note de demande

## Aperçu

![Page d'invitation](/img/demand_note/demand_note_invitation_page.png)

Cette page offre une vue complète de la Note de demande ainsi que des options pour l'approuver ou la rejeter.

## Actions disponibles

Situées dans le coin inférieur droit :

### Approuver
- Approuve la Note de demande pour l'étape suivante du flux de travail
- Lors d'un clic, une fenêtre de confirmation apparaît avec un champ de motif

![Modale d'approbation](/img/demand_note/demand_note_invitation_accept.png)

### Rejeter
- Renvoie la Note de demande avec des commentaires ou un statut de rejet
- Lors d'un clic, une fenêtre apparaît nécessitant un motif de rejet

![Modale de rejet](/img/demand_note/demand_note_invitation_reject.png)

### Télécharger
- Permet aux utilisateurs de télécharger la Note de demande au format PDF pour référence hors ligne

## Flux de travail d'approbation

- Le processus d'approbation suit un flux séquentiel :
  - **Réviseur → Vérificateur → Approbateur**
- Chaque rôle doit approuver avant de passer à l'étape suivante
- S'il est rejeté à n'importe quelle étape, le processus est renvoyé avec des commentaires

## Approbation finale

- Une fois que l'**Approbateur** approuve la Note de demande :
  - Le cycle d'approbation est terminé
  - Le statut est mis à jour en **Approuvé** sur la page de liste

![Statut approuvé](/img/demand_note/demand_note_approved.png)

## Remarques

- Un motif est requis pour l'approbation et le rejet
- Assurez-vous que tous les détails sont examinés attentivement avant de prendre une mesure
- L'accès à cette page est limité aux seuls utilisateurs invités
