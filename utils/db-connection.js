require("dotenv").config();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.log("Database connection failed");
    console.log(err);
    return;
  }

  console.log("MySQL Connected Successfully");

  const createStudentTableQuery = `
  CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  age INT NOT NULL
  )
`;

  connection.query(createStudentTableQuery, (err, results) => {
    if (err) {
      console.log("Error creating student table");
      console.log(err);
      return;
    }
    console.log("Student table created or already exists");
  });
});

module.exports = connection;
