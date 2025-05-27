const db = require('../utils/db-connection.js');
const Student = require('../models/students.js');

const addEntries = async (req,res)=>{
    try{
     const {email,name} = req.body;
     const student = await Student.create(
     {
        email:email,
        name:name
     });

     res.status(201).send(`user with name ${name} is created`);
    }
    catch(err){
        res.status(500).send('unable to make an entry');
    }
};

const updateEntry = async (req,res)=>{
    try{
        const {id}=req.params;
        const {name}=req.body;
      const student = await Student.findByPk(id);
      if(!student){return res.status(404).send('user is not found');}
      student.name = name;
      await  student.save();
     return res.status(200).send('user has been updated');
    }
    catch(error){
     console.log(error);
     res.status(500).send(`error in updateEntry`);
    }
}

const deleteEntry = async (req,res)=>{
   try{
    const {id}=req.params;
    const student = await Student.destroy({
        where:{id:id}
    })
    if(!student){
        return res.status(404).send('user is not found');
    }
    res.status(200).send(`user is deleted`);
   }
   catch(error){
      console.log(error);
      res.status(500).send('Error in delete');
   }

}




module.exports ={
    addEntries,
    updateEntry,
    deleteEntry
}
