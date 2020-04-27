const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../database/models");
const Admin = db.admin_login;

router.post("/", (req, res) => {
  /* Hashing incoming password */
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      /* Add the new user to the database table with hashedPassword. */
      Admin.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
      })
        .then(() =>
          res.status(200).send({ message: "You've successfully signed up!" })
        )
        .catch((userErr) => console.error(`User error: ${userErr}`));
    })
    .catch((hashErr) => console.error(`Hashing gave errors: ${hashErr}`));
});

module.exports = router;
