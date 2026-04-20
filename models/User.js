/**
 *  User.js est un modéle qui sert à créer des utilisateurs
 *  Le modélee User est de : id, email et password
 **/

const DataTypes = require("sequelize");

const sequelize = require("../db");
const { Types } = require("mysql2");

module.exports = sequelize.define(
    'user', {
        id: {
            Type: DataTypes.INTEGER,
            autoIncrement: true,
            primarykey: true,
        },
        email: {
            Type: DataTypes.STRING,
            unique: true,
        },
        password: {
            Type: DataTypes.STRING,
        }
    }
);
