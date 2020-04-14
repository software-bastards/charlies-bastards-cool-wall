<<<<<<< HEAD
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const db = require("./database/models/index.js");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var techlistRouter = require("./routes/techlist");
const submitvoteRouter = require("./routes/submitvote");

var app = express();

// view engine setup
=======
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./database/models/index.js");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const techlistRouter = require("./routes/techlist");
const submitvoteRouter = require("./routes/submitvote");

const app = express();

//connect db
db.connector.sync();

>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

<<<<<<< HEAD
app.use("/api", indexRouter);
=======
app.use("/", indexRouter);
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
app.use("/api/users", usersRouter);
app.use("/techlist", techlistRouter);
app.use("/submitvote", submitvoteRouter);

<<<<<<< HEAD
db.connector.sync();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
=======
// catch 404 and forward to error handler
app.use(function (req, res, next) {
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
  next(createError(404));
});

// error handler
<<<<<<< HEAD
app.use(function(err, req, res, next) {
=======
app.use(function (err, req, res, next) {
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
