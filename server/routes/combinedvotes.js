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
        [sequelize.literal(`SUM(case when vote_table.vote_type="uncool" then 1 else 0 end)` ), "uncool_votes"],
        [sequelize.literal(`SUM(case when vote_table.vote_type="subzero" then 1 else 0 end)` ), "subzero_votes"],
        [sequelize.literal(`SUM(case when vote_table.vote_type="cool" then 1 else 0 end)` ), "cool_votes"],

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

/**select tech_list.name, count(vote_table.tech_id) from vote_table join tech_list on tech_list.id = vote_table.tech_id where vote_table.vote_type = 'cool' group by vote_table.tech_id; */