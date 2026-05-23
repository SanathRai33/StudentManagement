const { Student, Course } = require("../models");

const addCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({
      message: "Error creating course",
      error,
    });
  }
};

const addStudentToCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const student = await Student.findByPk(studentId);
    const course = await Course.findByPk(courseId);

    if (!student || !course) {
      return res.status(404).json({
        message: "Student or Course not found",
      });
    }

    await student.addCourse(course);

    res.status(200).json({
      message: "Student added to course successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding student to course",
      error,
    });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: Student,
    });

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching courses",
      error,
    });
  }
};

module.exports = {
  addCourse,
  addStudentToCourse,
  getCourses,
};