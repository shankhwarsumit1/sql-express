const db = require('../utils/db-connection.js');


const addEntries = (req,res)=>{
    const {email,name} = req.body;
    const insertQuery = `INSERT INTO students (email,name)
    values(?,?)`;
    db.execute(insertQuery,[email,name],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        console.log("value inserted");
        res.status(200).send(`student with name ${name} is added in database`);
    })
};

const updateEntry = (req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    const {email}=req.body;
    const updateQuery = `UPDATE students
    SET name = ?, email = ? where id=?`

    db.execute(updateQuery,[name,email,id],(err,result)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message);
        return;
    }
    if(result.affectedRows===0){
        res.status(404).send(`student not found`);
        return;
    }
    res.status(200).send('user has been updated');

    })
}

const deleteEntry = (req,res)=>{
    const {id}=req.params;
    const deleteQuery = `
    DELETE FROM students
    WHERE id = ?`
    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return ;
        }
        if(result.affectedRows===0){
            res.status(404).send(`student is not found`);
            return ;
        }
        res.status(200).send(`user with id ${id} is deleted`);
    })
}




module.exports ={
    addEntries,
    updateEntry,
    deleteEntry
}
