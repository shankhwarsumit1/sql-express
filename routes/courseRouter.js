const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.post('/addCourse',courseController.addCourse);
router.post('/addStudentCourses',courseController.addStudentCourses);

module.exports=router;