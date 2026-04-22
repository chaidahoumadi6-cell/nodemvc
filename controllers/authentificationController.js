const connection = require("express-myconnection");
/*const { emit } = require("../app");*/

// Le fichier Authentification Controller.js à pour mission de gérer les authentification des utilisations
module.exports = {
    registerView : (req, res) => {
        res.render("register");
    },
    // Objet requête Express contenant les données d'inscription dans req.body
    registerUser: async (req, res) => {
        console.log("### Controller RegisterUser");
        console.log("controller",req.body);

        const emailUser = req.body.email;
        const passwordUser = req.body.motdepasse;

        console.log("emailUser", emailUser);
        console.log("password", passwordUser);
    
        // Je m'assure que le mail et le mot de passe sont bien renseignés
        // Deux conditions à vérifier
            // 1. Si la variable emailUser est vide
            // 2. Si la variable passworUser est vide
        if(!emailUser|| !passwordUser){
            return res.render('register', {
                error: "Veuillez compléter tous les champs."
                
            });
        }

        // Il n'y a pas d'erreur passe à la suite
        let requeteSql = "INSERT INTO user(id, email, password) VALUES(?, ?, ?)";

        // Tableau des valeurs à insérer dans la requête SQL
        // null est souvent utilisé pour un champ ID auto-incrémenté
        let ordreDonnees = [null, emailUser, passwordUser];

        // Connexion à la base de données via le middleware
        req.getConnection((erreur, connection) => {
            // Vérification d'une erreur de connexion à la base de données
            if(erreur) {
                console.log("Erreur connexion à la BDD: ", erreur);
            } else {
                // Exécution de la requête SQL avec les données fournies
                connection.query(requeteSql, ordreDonnees, (erreur, nouvelUtilisateur) => {
                    // Vérification d'une erreur lors de l'exécution de la requête
                    if(erreur) {
                        // Message de succès dans la console
                        console.log("Erreur de requête:", err);
                    } else {
                        console.log("Utilisateur créer avec succès");
                         // Redirection vers la page d'accueil après création
                        res.redirect("/");
                    }
                })
            }
        });
            
    }
}