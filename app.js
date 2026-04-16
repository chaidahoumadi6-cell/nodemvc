// Le fichier app.js est une application de type expressjs

const express = require("express");

// J'importe la route accueilRoute
const accueilRoute = require("./routes/accueilRoute");
const authlRoute = require("./routes/authentificationRoute");

// J' initie l' aplication express
const app = express();

// Définit le dossier où se trouvent les fichiers de views
app.set("views", "./views");

// Définit le moteur de template utilisé (ici EJS)
app.set("view engine", "ejs");

// Utilise le routeur accueilRoute pour gérer les routes à partir de "/"
app.use("/",accueilRoute);
// Ici je laisse la route à "/", pui dans authentification controller.js je précise la route get("/authRoute")
app.use("/", authlRoute);

// Exporte l'application pour l'utiliser dans d'autres fichiers
module.exports = app;