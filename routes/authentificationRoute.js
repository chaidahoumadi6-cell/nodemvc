//Le fichier authentificatioN Route js à pour mission de tracer les routes pour enregister ou créer un utilisateur

const express = require("express");

const authController = require("../controllers/authentificationController");

const router = express.Router();

router.get("/register", authController.registerView);

router.post("/register", authController.registerUser);
// J'exporte le "router" pour le rendre accessible depuis d'autres fichier
module.exports = router;