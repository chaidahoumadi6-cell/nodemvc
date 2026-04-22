// Configurer la connection à la base de données
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Hakim02112006",
    BD: "maygourmet",
    dialect:"mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}
/*
Les paramètres HOST, USER, PASSWORD, BD et dialect sont utilisés pour se connecter à MySQL.
Le paramèter pool est utilisé pour sequelize:
max: */