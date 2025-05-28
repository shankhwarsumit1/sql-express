const Student = require('./students');
const IdentityCard = require('./identityCard');
const Departments = require('./department');
const Courses = require('./courses');
const studentCourses = require('./studentCourses');
const Students = require('./students');

Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

Departments.hasMany(Student,{ foreignKey:'studentId' });
Student.belongsTo(Departments,{foreignKey:'DepartmentId'});

Student.belongsToMany(Courses,{through:studentCourses});
Courses.belongsToMany(Students,{through:studentCourses});

module.exports={
    Student,Departments,IdentityCard,Courses,studentCourses
}