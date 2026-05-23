require("dotenv").config();

const express = require("express");
const sequelize = require("./utils/db-connection");
const studentRoutes = require("./routes/studentRoutes");

require("./models/students");
require("./models/departments");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Student Management API");
});

app.use("/students", studentRoutes);

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tables created successfully");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });