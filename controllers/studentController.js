const studentModel = require("../models/studentModel");

const createStudent = async (req, res) => {
  const { name, email } = req.body;

  try {
    const student = await studentModel.create({
      name: name,
      email: email,
    });

    res.status(201).json({
      message: "Student created successfully",
      student: student,
    });
  } catch (error) {
    console.error("Create Error:", error);
    res.status(500).json({ error: "Error creating student" });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await studentModel.findAll();
    res.json(students);
  } catch (error) {
    console.error("Get All Error:", error);
    res.status(500).json({ error: "Error fetching students" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findByPk(id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    console.error("Get By ID Error:", error);
    res.status(500).json({ error: "Error fetching student" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const student = await studentModel.findByPk(id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    student.name = name || student.name;
    await student.save();

    res.json({
      message: "Student updated successfully",
      student: student,
    });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ error: "Error updating student" });
  }
};

const deleteStudent = (req, res) => {
  try {
    const { id } = req.params;

    const student = studentModel.destroy({
      where: { id: id },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ error: "Error deleting student" });
  }
};


module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
