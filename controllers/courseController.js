const Courses = require('../models/courses');
const Students = require('../models/students');
const StudentCourses = require('../models/studentCourses');
const { studentCourses } = require('../models');
const addCourse = async(req,res)=>{
    try{
           const {name}=req.body;
           const course = Courses.create({
            name:name
           })
           res.status(201).json({'name':name});
    }
    catch(err){
        console.log(err);
        res.status(500).json({'error':err.message});
    }
}

const addStudentCourses = async (req, res) => {
    try {
        const { studentId, courseId } = req.body;

        // Find the student
        const student = await Students.findByPk(studentId);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        // Find all courses matching the provided IDs
        const courses = await Courses.findAll({
            where: { id: courseId }
        });

        // Check if all requested courses were found
        if (!courses.length || courses.length !== courseId.length) {
            return res.status(404).json({ error: 'One or more courses not found' });
        }

        // Add all found courses to the student
        await student.addCourses(courses); // Note: addCourses for multiple

        // Fetch the updated student with all their courses
        const updatedStudent = await Students.findByPk(studentId, {
            include: [Courses]
        });

        res.status(200).json(updatedStudent);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

module.exports={addCourse,addStudentCourses}