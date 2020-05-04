<<<<<<< HEAD
require("dotenv").config();
=======
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../database/models");

<<<<<<< HEAD



=======
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
/**
 * GET for dashboard access
 */
router.get("/", passport.authenticate("jwt", { session: false }), function (
  req,
  res
) {
<<<<<<< HEAD

    const secureAdmin = {
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
      };
  

  res.send(secureAdmin);
});

module.exports = router;
=======
  const secureAdmin = {
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    email: req.user.email,
  };
  res.send(secureAdmin);
});

module.exports = router;
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
