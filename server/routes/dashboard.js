const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../database/models");
// const Admin = db.admin_login;

/**
 * GET for dashboard access
 */
router.get("/", passport.authenticate("jwt", { session: false }), function (
  req,
  res
) {
  const secureAdmin = {
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    email: req.user.email,
  };
  res.send(secureAdmin);
});

module.exports = router;
