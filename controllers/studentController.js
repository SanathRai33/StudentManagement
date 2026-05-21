const db = require("../utils/db-connection");


const createStudent = (req, res) => {

  const { name, email, age } = req.body;

  const query = `
    INSERT INTO students (name, email, age)
    VALUES (?, ?, ?)
  `;

  db.execute(query, [name, email, age], (err, result) => {

    if (err) {
      console.log("Insert Error:", err);
      return res.status(500).send("Error inserting student");
    }

    console.log("Student Inserted");

    res.send("Student added successfully");
  });

};


const getStudents = (req, res) => {

  const query = `SELECT * FROM students`;

  db.execute(query, (err, result) => {

    if (err) {
      console.log("Fetch Error:", err);
      return res.status(500).send("Error fetching students");
    }

    res.json(result);
  });

};


const getStudentById = (req, res) => {

  const { id } = req.params;

  const query = `
    SELECT * FROM students
    WHERE id = ?
  `;

  db.execute(query, [id], (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).send("Error fetching student");
    }

    if (result.length === 0) {
      return res.status(404).send("Student not found");
    }

    res.json(result[0]);
  });

};


const updateStudent = (req, res) => {

  const { id } = req.params;

  const { name, email, age } = req.body;

  const query = `
    UPDATE students
    SET name = ?, email = ?, age = ?
    WHERE id = ?
  `;

  db.execute(query, [name, email, age, id], (err, result) => {

    if (err) {
      console.log("Update Error:", err);
      return res.status(500).send("Error updating student");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Student not found");
    }

    console.log("Student Updated");

    res.send("Student updated successfully");
  });

};


const deleteStudent = (req, res) => {

  const { id } = req.params;

  const query = `
    DELETE FROM students
    WHERE id = ?
  `;

  db.execute(query, [id], (err, result) => {

    if (err) {
      console.log("Delete Error:", err);
      return res.status(500).send("Error deleting student");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Student not found");
    }

    console.log("Student Deleted");

    res.send("Student deleted successfully");
  });

};


module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};