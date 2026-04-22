const db = require("../models");
const User = db.user;
const Op = db.sequelize.Op;

// Fonction pour créer un nouvel utilisateur
/** Je m'assure que le mail et le mot de passe sont bien renseignés
     Deux conditions à vérifier:
        1. Si la variable emailUser est vide OU
        2. Si la variable passwordUser est vide  ALORS
     J'arrête la création du compte utilisateur
    */
exports.create = (req, res) => {
    // Je récupère le email saisie côté front-end. Je stocke l'email dans la variable emailUser.
    // Récupération de l'email envoyé dans la requête (body)
    const emailUser = req.body.email;
    // Récupération du mot de passe envoyé dans la requête
    const passwordUser =req.body.motdepasse;

    // Vérification des donnée email et le mot de passe
    if(!emailUser || !passwordUser) {
        res.status(400).send({
            message: "Veuillez compéter les champs"
        });

        return;
    }


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
};

// Méthode pour récupérer un utilisateur particulier grâce à son id (identifiant)
exports.findOne = (req, res) => {
    // Je récupérer l'id de l'utilisateur, puis je le stocke l'id dans la variable idUser
    const idUser = req.params.id;

    // Je recherche l'utilisateur dans la base de donnése
    User.findByPk(idUser)
        .then(data => {
            if(data) { // Si je trouve l'utilisateur (data) 
                res.send(data); //ALORS je l'utilisateur (data)
            } else {
                res.status(404).send({
                    message:`L'utilisateur avec l'identifiant ${idUser} n'existe pas.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message : `Erreur lors de la recherche de l' utilisateur avec l'identifiant ${idUser}`
            });
        });
};


exports.findAll = (req,res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "erreur lors de la récupèration de tous les utilisateurs."
            });
        });
}