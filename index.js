const express = require('express');
const studentRoutes = require('./routes/studentRoutes.js')
const app = express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Express response')
})
app.use('/students',studentRoutes)

app.listen(3000,()=>{
    console.log('Express is running on port 3000')
})