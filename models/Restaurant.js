const {sequelize} = require('../db');
const { Sequelize, DataTypes, Model } = require('sequelize');

// TODO - create a Restaurant model
class Restaurant extends Model{};

Restaurant.init({
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        cuisine: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'Restaurant'
    })

module.exports = {Restaurant};