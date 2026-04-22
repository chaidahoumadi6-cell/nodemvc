//Le fichier authentificatioN Route js à pour mission de tracer les routes pour enregister ou créer un utilisateur

const express = require("express");

const authController = require("../controllers/authentificationController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/register", authController.registerView);
//
router.post("/register", userController.create);

// Route API pour rechercher un utilisateur à l'aide de son ID
router.get("/users/:id", userController.findOne);

router.get("/users", userController.findAll);

//router.post("/register", authController.registerUser);
// J'exporte le "router" pour le rendre accessible depuis d'autres fichier
module.exports = router;