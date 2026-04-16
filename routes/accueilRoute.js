// Import le fichier Express
const express = require("express");

// Création d'un routeur Express pour gérer les routes séparément
const router = express.Router();

// Import du contrôleur qui contient la logique pour la page d'accueil
const accueilController = require("../controllers/accueilController");

// Maintenant je trace ma rout en utilisant route

// La route pour l'accueil exemple localhost:3009
router.get("/", accueilController.accueilView);

module.exports = router;