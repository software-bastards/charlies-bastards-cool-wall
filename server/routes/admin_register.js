const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../database/models");
const passport = require("passport");
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

router.put("/", passport.authenticate("jwt", { session: false }), function (
  req,
  res
) {
  /* Hashing incoming password */
  console.log(req.body);
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      /* Add the new user to the database table with hashedPassword. */
      Admin.update(
        { password: hashedPassword },
        { where: { email: req.body.email } }
      )
        .then(() =>
          res
            .status(200)
            .send({ message: "You've successfully changed the pssword!" })
        )
        .catch((userErr) => console.error(`User error: ${userErr}`));
    })
    .catch((hashErr) => console.error(`Hashing gave errors: ${hashErr}`));
});

module.exports = router;
