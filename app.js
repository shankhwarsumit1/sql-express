const express = require('express');
const studentRoutes = require('./routes/studentRoutes.js')
const {sequelize} = require('./utils/db-connection.js');
const courseRouter = require('./routes/courseRouter.js');
require('./models/index.js');

const app = express();

app.use(express.json());
sequelize.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
    console.log('Express is running on port 3000')
})      

}).catch((err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.send('Express response')
})

app.use('/students',studentRoutes)

app.use('/courses',courseRouter);
