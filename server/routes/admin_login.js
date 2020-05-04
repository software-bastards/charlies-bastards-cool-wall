require("dotenv").config();
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, admin, info) => {
    if (err) {
      return res.status(500).send(err);
    }
<<<<<<< HEAD
    
=======

>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
    if (!admin) {
      return res.status(400).send({ message: info.message });
    }

    const token = jwt.sign(JSON.stringify(admin), ACCESS_TOKEN_SECRET);
<<<<<<< HEAD

=======
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
    const secureAdmin = {
      firstname: admin.firstname,
      lastname: admin.lastname,
      email: admin.email,
    };
<<<<<<< HEAD

    return res.status(200).send({ secureAdmin , token });
=======
    return res.status(200).send({ secureAdmin, token });
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
  })(req, res);
});

module.exports = router;
