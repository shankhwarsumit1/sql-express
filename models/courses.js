const {sequelize}=require('../utils/db-connection')
const{DataTypes}=require('sequelize');
const Courses = sequelize.define('courses',
    {
        id:{type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)

module.exports = Courses;