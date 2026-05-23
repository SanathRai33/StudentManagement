const express = require("express");

const {
  addStudent,
  addCourse,
  addStudentToCourse,
  getStudents,
  getCourses,
} = require("../controllers/coursesController");

const router = express.Router();

router.post("/", addCourse);

router.post("/student-course", addStudentToCourse);

router.get("/", getCourses);

module.exports = router;