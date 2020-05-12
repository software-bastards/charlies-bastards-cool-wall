const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../database/models");

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

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> feature-admin-register
