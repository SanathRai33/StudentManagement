require("dotenv").config();

const express = require("express");
const sequelize = require("./utils/db-connection");
const studentRoutes = require("./routes/studentsRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/students", studentRoutes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Students table created");

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
