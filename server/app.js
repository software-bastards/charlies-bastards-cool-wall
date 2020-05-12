require("dotenv").config();
require("./auth/index");

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./database/models/index.js");
require("./auth");

//GET ROUTES
const indexRouter = require("./routes/index");

//GET routes
const techlistRouter = require("./routes/techlist");
const combinedvotesRouter = require("./routes/combinedvotes");
const dashboardRouter = require("./routes/dashboard");

//POST routes
const submitvoteRouter = require("./routes/submitvote");
const adminregisterRouter = require("./routes/admin_register");
const adminloginRouter = require("./routes/admin_login");

const app = express();

//connect db
db.connector.sync();

app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use("/techlist", techlistRouter);
app.use("/combinedvotes", combinedvotesRouter);
app.use("/submitvote", submitvoteRouter);
app.use("/admin_register", adminregisterRouter);
app.use("/admin_login", adminloginRouter);
app.use("/dashboard", dashboardRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;