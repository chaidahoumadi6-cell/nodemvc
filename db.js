/**
 * Permet à sequelize de se connecter à la base de donnnées
 */

// on extrait la classe avec une majuscule
const Sequelize = require("sequelize");

// Je configure les éléments attendus pour me connecter à Mysql une seule variable "sequelize"
const sequelize = new Sequelize(
    'maygourmet', 'root', 'Hakim02112006', {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = sequelize;