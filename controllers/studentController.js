const Students = require("../models/students");
const Departments = require("../models/departments");


const createStudent = async (req, res) => {

  try {

    const {
      name,
      email,
      age,
      departmentName
    } = req.body;


    const department = await Departments.create({
      departmentName
    });

    const student = await Students.create({

      name,
      email,
      age,

      DepartmentId: department.id

    });

    res.status(201).json(student);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error creating student");

  }

};


const getStudents = async (req, res) => {

  try {

    const students = await Students.findAll({

      include: Departments

    });

    res.json(students);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error fetching students");

  }

};


module.exports = {
  createStudent,
  getStudents
};