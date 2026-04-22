// Importation de la configuration de la base de données
const dbConfig = require("../config/db.config");

// Importation de la bibliothèque Sequelize (ORM)
const Sequelize = require("sequelize");

// Création d'une instance de Sequelize pour se connecter à la base de données
const sequelize = new Sequelize(
    dbConfig.BD, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User")(sequelize, Sequelize);

module.exports = db;