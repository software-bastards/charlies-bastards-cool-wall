const express = require("express");
const router = express.Router();
const db = require("../database/models");
const vote_table = db.vote_table;

/**
 * GET for fetching the vote list
 */
router.get("/", function (req, res, next) {
  vote_table
    .findAll()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => console.error(err));
});

module.exports = router;
