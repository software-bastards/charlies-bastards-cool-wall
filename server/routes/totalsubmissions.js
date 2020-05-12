const express = require("express");
const router = express.Router();
const db = require("../database/models");
const sequelize = require("sequelize");
const vote_table = db.vote_table;

/* GET for Total Submissions in vote_table column createdAt —> count the bulk submissions */

router.get("/", function (req, res, next) {
  vote_table
    .findAll({
      attributes: [
        [sequelize.literal(`COUNT(DISTINCT createdAt)`), "total_submissions"],
      ],
    })
    .then((total_submissions) => res.send(total_submissions))
    .catch((err) => console.error(err));
});

module.exports = router;
