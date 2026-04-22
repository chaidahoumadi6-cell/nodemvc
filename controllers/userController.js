const db = require("../models");
const User = db.user;
const Op = db.sequelize.Op;

// Fonction pour créer un nouvel utilisateur
exports.create = (req, res) => {
    // Récupération de l'email envoyé dans la requête (body)
    const emailUser = req.body.email;
    // Récupération du mot de passe envoyé dans la requête
    const passwordUser =req.body.motdepasse;

    // Création d'un objet utilisateur avec les données reçues
    const user = {
        email: emailUser,
        password: passwordUser
    };
    // Appel à la méthode create du modèle User pour enregistrer en base de données
    User.create(user).then(data => {
        // Si succès, on renvoie les données de l'utilisateur créé
        res.send(data);
    }).catch(err => {
        // En cas d'erreur, on renvoie un statut 500 avec un message
        res.status(500).send({
            message:
                err.message || "Il y a une erreur lors de la creationde user"
        });
    });
}