require("dotenv").config();

const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const coursesRoutes = require("./routes/coursesRoutes");

const { sequelize } = require("./models");

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);
app.use("/courses", coursesRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });