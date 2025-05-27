const Student = require('./students');
const IdentityCard = require('./identityCard');
const Departments = require('./department');

Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

Departments.hasMany(Student,{ foreignKey:'studentId' });
Student.belongsTo(Departments,{foreignKey:'DepartmentId'});

module.exports={
    Student,Departments,IdentityCard
}