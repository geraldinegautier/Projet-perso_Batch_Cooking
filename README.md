# Projet-perso_Batch_Cooking
STRUCTURE

Fonctionnalités principales :

### Gestion des Recettes ###
  # Ajouter et modifier des recettes : L'utilisateur peut ajouter des recettes avec une liste d'ingrédients, des instructions, et éventuellement des catégories (petit-déjeuner, déjeuner, etc.).
  # Tests : Valider la création, modification, et suppression de recettes. Tester également la validation des champs obligatoires (nom, ingrédients, etc.).

### Liste de courses par magasin ### 
  # Assignation des ingrédients aux magasins : L'utilisateur peut assigner des ingrédients spécifiques à des magasins (ex: légumes au marché, produits laitiers au supermarché).
  # Génération de la liste de courses : Une fois les recettes sélectionnées pour la semaine, l'application génère une liste de courses par magasin.
  # Tests : Tester la logique d'assignation des ingrédients aux magasins, et vérifier que la liste de courses générée regroupe correctement les ingrédients par magasin.

### Batch Cooking ### 
  # Regroupement des recettes : Permettre à l'utilisateur de sélectionner plusieurs recettes pour les préparer en une seule session de "batch cooking". L'application devrait alors regrouper les tâches communes (ex: éplucher les légumes une fois pour plusieurs recettes).
  # Planification des étapes de cuisson : Organiser les étapes de cuisson pour optimiser le temps (ex: commencer par cuire les ingrédients qui prennent le plus de temps).
  # Tests : Valider le regroupement des tâches, vérifier l'optimisation de la préparation des recettes et tester différentes combinaisons de recettes pour s'assurer que les étapes sont correctement ordonnées.

### Sauvegarde et partage ### 
  # Sauvegarde des sessions de batch cooking : Permettre à l'utilisateur de sauvegarder ses sessions planifiées et de les réutiliser.
  # Partage de listes : Permettre l'exportation ou le partage des listes de courses et des plans de batch cooking.
  # Tests : Tester la sauvegarde, la récupération des sessions, et la fonctionnalité de partage.

### Gestion des stocks ### 
  # Inventaire personnel : L'utilisateur peut tenir un inventaire des ingrédients qu'il a déjà chez lui, et l'application soustrait automatiquement ces ingrédients de la liste de courses.
  # Tests : Valider la gestion de l'inventaire, vérifier que la liste de courses est mise à jour en fonction de l'inventaire.
