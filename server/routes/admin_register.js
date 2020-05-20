const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../database/models");
const passport = require("passport");
const Admin = db.admin_login;
const passport = require("passport");

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

<<<<<<< HEAD
router.put("/", passport.authenticate("jwt", { session: false }), function(req, res) {
  /* Hashing incoming password */
=======
router.put("/", passport.authenticate("jwt", { session: false }), function (
  req,
  res
) {
  /* Hashing incoming password */
  console.log(req.body);
>>>>>>> feature-admin-register
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      /* Add the new user to the database table with hashedPassword. */
<<<<<<< HEAD
      Admin.update({ password: hashedPassword }, { where: { email: req.body.email } })
        .then(() =>
          res.status(200).send({ message: "You've successfully changed your password!" })
=======
      Admin.update(
        { password: hashedPassword },
        { where: { email: req.body.email } }
      )
        .then(() =>
          res
            .status(200)
            .send({ message: "You've successfully changed the password!" })
>>>>>>> feature-admin-register
        )
        .catch((userErr) => console.error(`User error: ${userErr}`));
    })
    .catch((hashErr) => console.error(`Hashing gave errors: ${hashErr}`));
});

<<<<<<< HEAD


=======
>>>>>>> feature-admin-register
module.exports = router;
