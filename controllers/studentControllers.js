const db = require('../utils/db-connection.js');
const Student = require('../models/students.js');
const IdCard = require('../models/identityCard.js');
const Departments = require('../models/department.js');
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

const addtoStudentAndIdentityCard = async(req,res)=>{
try{
const student =await Student.create(req.body.students);
const idcard = await IdCard.create({
    ...req.body.IdentityCard,
    StudentId:student.id
});
 res.status(201).json({student,idcard});
}
catch(error){
  res.status(500).json({error:error.message});
  return;
}
}

const addingValueToStudentAndDepartment = async(req,res)=>{
     try{
          const department = await Departments.create(req.body.department);
          const student = await Student.create({
            ...req.body.students,
            DepartmentId:department.id
               
          });
          res.status(201).json({student,department});
     }
     catch(error){
       res.status(500).json({error:error.message});
       return;
     }
}

module.exports ={
    addEntries,
    updateEntry,
    deleteEntry,
    addtoStudentAndIdentityCard,
    addingValueToStudentAndDepartment
}
