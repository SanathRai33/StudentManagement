require("dotenv").config();
const express = require("express");
const studentRoutes = require("./routers/studentRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/students", studentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
