const {DataTypes} = require('sequelize');
const {sequelize}=require('../utils/db-connection');

const IdentityCard = sequelize.define('identityCard',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    cardNo:{
            type:DataTypes.INTEGER,
            unique:true
    }
})

module.exports = IdentityCard;