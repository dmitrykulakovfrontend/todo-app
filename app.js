const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const todoRouter = require("./routes/todo");

const app = express();
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;

connectDB();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use("/", indexRouter);
//app.use("/users", usersRouter);
app.use("/todo", todoRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
