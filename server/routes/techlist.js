const express = require("express");
const router = express.Router();
const db = require("../database/models");
const tech_list = db.tech_list;

/**
 * GET for fetching the vote list
 */
router.get("/", function (req, res, next) {
  tech_list
    .findAll()
    .then((technologies) => res.send(technologies))
    .catch((err) => console.error(err));
});

module.exports = router;
