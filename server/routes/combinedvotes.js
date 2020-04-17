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
<<<<<<< HEAD
        [
          sequelize.literal(
            `SUM(CASE  WHEN vote_type ='cool' THEN 1 ELSE 0 END)`
          ),
          "cool_votes",
        ],
        [
          sequelize.literal(
            `SUM(CASE WHEN vote_type ='uncool' THEN 1 ELSE 0 END)`
          ),
          "uncool_votes",
        ],
        [
          sequelize.literal(
            `SUM(CASE WHEN vote_type ='subzero' THEN 1 ELSE 0 END)`
          ),
          "subzero_votes",
        ],
=======
        [sequelize.literal(`SUM(case when vote_table.vote_type="uncool" then 1 else 0 end)` ), "uncool_votes"],
        [sequelize.literal(`SUM(case when vote_table.vote_type="subzero" then 1 else 0 end)` ), "subzero_votes"],
        [sequelize.literal(`SUM(case when vote_table.vote_type="cool" then 1 else 0 end)` ), "cool_votes"],

>>>>>>> 4aabe3c0a9c6a71a071a75fe0fe4b8dcf794ae2d
      ],
      include: [
        {
          model: tech_list,
          as: "tech_list",
          attributes: ["name"],
          include: [],
        },
      ],
<<<<<<< HEAD
      group: ["tech_id"],
=======
     
      group: ["tech_id"],
     
>>>>>>> 4aabe3c0a9c6a71a071a75fe0fe4b8dcf794ae2d
    })
    .then((votes) => {
      res.send(votes);
    })
    .catch((err) => console.error(err));
});

module.exports = router;

<<<<<<< HEAD
/**
select tech_list.name,  sum(case when vote_table.vote_type= 'cool' then 1 else 0 end) AS cool_vote, sum(case when vote_table.vote_type= 'uncool' then 1 else 0 end) AS uncool_vote, sum(case when vote_table.vote_type= 'subzero' then 1 else 0 end) AS subzero_vote from vote_table join tech_list on tech_list.id = vote_table.tech_id group by vote_table.tech_id; */
=======
/**select tech_list.name, count(vote_table.tech_id) from vote_table join tech_list on tech_list.id = vote_table.tech_id where vote_table.vote_type = 'cool' group by vote_table.tech_id; */
>>>>>>> 4aabe3c0a9c6a71a071a75fe0fe4b8dcf794ae2d
