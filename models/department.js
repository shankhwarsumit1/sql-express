const {DataTypes}=require('sequelize');
const{sequelize}=require('../utils/db-connection');

const Department = sequelize.define('departments',{
    id:{type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
    }
})

module.exports = Department;