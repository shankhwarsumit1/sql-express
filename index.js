const express = require('express');
const studentRoutes = require('./routes/studentRoutes.js')
const {sequelize} = require('./utils/db-connection.js');
const Student = require('./models/students.js');
const app = express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Express response')
})

sequelize.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
    console.log('Express is running on port 3000')
})
}).catch((err)=>{
    console.log(err);
})
app.use('/students',studentRoutes)

