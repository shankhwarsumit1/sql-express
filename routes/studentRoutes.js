const express = require('express');
const studentController  = require("../controllers/studentControllers")
const router = express.Router();

router.post('/add',studentController.addEntries);
router.put('/update/:id',studentController.updateEntry);
router.delete('/delete/:id',studentController.deleteEntry);
router.post('/addingStudentWithIdcard',studentController.addtoStudentAndIdentityCard);
router.post('/addingStudentWithDepartment',studentController.addingValueToStudentAndDepartment);
module.exports= router;