const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const teacherController = require("./controllers/Teacher.controller");
const classController = require("./controllers/Classes.controller");

app.use("/teachers", teacherController);
app.use("/classes", classController);

module.exports = app;
