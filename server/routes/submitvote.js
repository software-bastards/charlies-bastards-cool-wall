const express = require("express");
const router = express.Router();
const db = require("../database/models");
const vote_table = db.vote_table;

/**
 * POST for Vote Submission into vote_table
 */
router.post("/", function(req, res, next) {
  vote_table
    .bulkCreate(req.body, {
      returning: true
    })
    .then(() =>
      res.status(200).send({ message: "You've successfully casted your vote!" })
    )
    .catch(userErr => console.error(`User error: ${userErr}`));
});

module.exports = router;
