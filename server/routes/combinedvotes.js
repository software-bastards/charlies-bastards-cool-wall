const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../database/models");

const tech_list = db.tech_list;
const vote_table = db.vote_table;
router.get("/", function (req, res, next) {
  vote_table
    .findAll({
      attributes: [
        [
          sequelize.literal(
            `SUM(case when vote_table.vote_type="cool" then 1 else 0 end)`
          ),
          "cool_votes",
        ],
        [
          sequelize.literal(
            `SUM(case when vote_table.vote_type="uncool" then 1 else 0 end)`
          ),
          "uncool_votes",
        ],
        [
          sequelize.literal(
            `SUM(case when vote_table.vote_type="subzero" then 1 else 0 end)`
          ),
          "subzero_votes",
        ],
      ],
      include: [
        {
          model: tech_list,
          as: "tech_list",
          attributes: ["name"],
          include: [],
        },
      ],
      group: ["tech_id"],
    })
    .then((votes) => {
      res.send(votes);
    })
    .catch((err) => console.error(err));
});

module.exports = router;

/*select sum(case when vote_table.vote_type="cool" then 1 else 0 end) as coolvotes, sum(case when vote_table.vote_type="uncool" then 1 else 0 end) as uncoolvotes, sum(case when vote_table.vote_type="subzero" then 1 else 0 end) as subzerovotes, tech_list.name from vote_table join tech_list on vote_table.tech_id=tech_list.id group by vote_table.tech_id; */
