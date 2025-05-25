const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'7355',
    database:'testdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return ;
    }
    console.log('connection has been created');

    const createQuery = `create table IF NOT EXISTS students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(256))`

    connection.execute(createQuery,(err)=>{
        if(err){
          console.log(err);
          connection.end();
          return ;
        }
        console.log('Table is created');
    })
})

module.exports=connection;