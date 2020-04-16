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
const uncoolvotesRouter = require("./routes/combinedvotes");

const combinedvotesRouter = require('./routes/combinedvotes')

const app = express();

//connect db
db.connector.sync();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/techlist", techlistRouter);
app.use("/submitvote", submitvoteRouter);
app.use("/uncoolvotes", uncoolvotesRouter);
app.use('/combinedvotes', combinedvotesRouter);

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
