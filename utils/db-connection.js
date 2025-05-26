
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('studentmanagement','root','7355',{
    host:'localhost',
    dialect:'mysql'
});

(async()=>{
    try{
        await sequelize.authenticate();
        console.log('connection is created');
    }
    catch(error){
        console.log(error);
    }
})();

module.exports={sequelize};