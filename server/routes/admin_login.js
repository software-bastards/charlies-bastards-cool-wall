require("dotenv").config();
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, admin, info) => {
    if (err) {
      res.status(500).send(err);
    }
    if (!admin) {
      res.status(400).send({ message: info.message });
    }

    const token = jwt.sign(JSON.stringify(admin), ACCESS_TOKEN_SECRET);

    const secureAdmin = {
      firstname: admin.firstname,
      lastname: admin.lastname,
      email: admin.email,
    };

    return res.status(200).send({ secureAdmin, token });
  })(req, res);
});

module.exports = router;
