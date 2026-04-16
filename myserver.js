// Le fichier myserver.js à pour mission de créer le serveur de l'application

// J'importe le package HTTP
const http = require("http");

// J'importe l' application app.js
const app = require("./app");

// Je créer un serveur
const serveur = http.createServer(app);

const numeroport = 3009
serveur.listen(numeroport,() => {
    console.log("Le serveur est à l'écoute sur le port ", numeroport);
})