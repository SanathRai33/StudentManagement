const sequelize = require("../utils/db-connection");

const Student = require("./students");
const Course = require("./courses");

const StudentCourse = sequelize.define("StudentCourse", {});

Student.belongsToMany(Course, { through: StudentCourse });
Course.belongsToMany(Student, { through: StudentCourse });

module.exports = {
  sequelize,
  Student,
  Course,
  StudentCourse,
};