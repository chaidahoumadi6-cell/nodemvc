// Le fichier app.js est une application de type expressjs

const express = require("express");

// Import mysql2
const mysql2 = require("mysql2");

// Import express connection
const myconnection = require('express-myconnection');


// J'importe la route Accueil Route
const accueilRoute = require("./routes/accueilRoute");
const authlRoute = require("./routes/authentificationRoute");

// J' initie l' aplication express
const app = express();

// Définit le dossier où se trouvent les fichiers de views
app.set("views", "./views");

// Définit le moteur de template utilisé (ici EJS)
app.set("view engine", "ejs");

app.use(express.static('public'));

// Configurer la connection à la base de données
const optionsConnexioBaseDeDonnees = {
    host: "localhost",
    user: "root",
    password: "Hakim02112006",
    database: "maygourmet",
    port: 3306
};

app.use(myconnection(mysql2, optionsConnexioBaseDeDonnees, 'pool'));

// Utilise le routeur A  ccueil Route pour gérer les routes à partir de "/"
app.use("/",accueilRoute);
// Ici je laisse la route à "/", pui dans authentification controller.js je précise la route get("/authRoute")
app.use("/", authlRoute);

// Exporte l'application pour l'utiliser dans d'autres fichiers
module.exports = app;