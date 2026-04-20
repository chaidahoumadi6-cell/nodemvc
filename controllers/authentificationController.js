// Le fichier Authentification Controller.js à pour mission de gérer les authentification des utilisations
module.exports = {
    registerView : (req, res) => {
        res.render("register");
    },
    // Objet requête Express contenant les données d'inscription dans req.body
    registerUser: async (req, res) => {
        console.log("### Controller RegisterUser");
        console.log("controller",req.body);
    }
}