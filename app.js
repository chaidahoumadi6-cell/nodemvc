// Le fichier app.js est une application de type expressjs

const express = require("express");

// Import mysql2
const mysql2 = require("mysql2");

// Import express connection
const myconnection = require('express-myconnection');


// J'importe la route Accueil Route.js
const accueilRoute = require("./routes/accueilRoute");

// J' importe la rout authentificationRoute.js
const authlRoute = require("./routes/authentificationRoute");

const db = require("./models");

// J' initie l' aplication express
const app = express();

// Définit le dossier où se trouvent les fichiers de views
app.set("views", "./views");

// Définit le moteur de template utilisé (ici EJS)
app.set("view engine", "ejs");

// Utiliser les fichiers statiques qui sont dans le dossier public
app.use(express.static('public'));

// Extrair les données saisise dans le formulaire
app.use(express.urlencoded({extended: false}));

db.sequelize.sync().then(() => {
    console.log("sync db");
}).catch((err) => {
    console.log("Failed to sync db :" + err.message);
});


//app.use(myconnection(mysql2, optionsConnexioBaseDeDonnees, 'pool'));

// Utilise le routeur A  ccueil Route pour gérer les routes à partir de "/"
app.use("/",accueilRoute);
// Ici je laisse la route à "/", pui dans authentification controller.js je précise la route get("/authRoute")
app.use("/", authlRoute);

// Exporte l'application pour l'utiliser dans d'autres fichiers
module.exports = app;