const {sequelize}=require('../utils/db-connection');
const { DataTypes } = require('sequelize'); 
const Students = sequelize.define('students',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=Students;