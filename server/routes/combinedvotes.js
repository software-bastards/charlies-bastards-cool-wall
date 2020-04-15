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
<<<<<<< HEAD
            `SUM(case when vote_table.vote_type="cool" then 1 else 0 end)`
=======
            `SUM(CASE  WHEN vote_type ='cool' THEN 1 ELSE 0 END)`
>>>>>>> 059db9a00f3063fc42090cc9b4919a4a80ef72ad
          ),
          "cool_votes",
        ],
        [
          sequelize.literal(
<<<<<<< HEAD
            `SUM(case when vote_table.vote_type="uncool" then 1 else 0 end)`
=======
            `SUM(CASE WHEN vote_type ='uncool' THEN 1 ELSE 0 END)`
>>>>>>> 059db9a00f3063fc42090cc9b4919a4a80ef72ad
          ),
          "uncool_votes",
        ],
        [
          sequelize.literal(
<<<<<<< HEAD
            `SUM(case when vote_table.vote_type="subzero" then 1 else 0 end)`
=======
            `SUM(CASE WHEN vote_type ='subzero' THEN 1 ELSE 0 END)`
>>>>>>> 059db9a00f3063fc42090cc9b4919a4a80ef72ad
          ),
          "subzero_votes",
        ],
      ],
<<<<<<< HEAD
=======

>>>>>>> 059db9a00f3063fc42090cc9b4919a4a80ef72ad
      include: [
        {
          model: tech_list,
          as: "tech_list",
          attributes: ["name"],
          include: [],
        },
      ],
<<<<<<< HEAD
=======

>>>>>>> 059db9a00f3063fc42090cc9b4919a4a80ef72ad
      group: ["tech_id"],
    })
    .then((votes) => {
      res.send(votes);
    })
    .catch((err) => console.error(err));
});

module.exports = router;

<<<<<<< HEAD
/*select sum(case when vote_table.vote_type="cool" then 1 else 0 end) as coolvotes, sum(case when vote_table.vote_type="uncool" then 1 else 0 end) as uncoolvotes, sum(case when vote_table.vote_type="subzero" then 1 else 0 end) as subzerovotes, tech_list.name from vote_table join tech_list on vote_table.tech_id=tech_list.id group by vote_table.tech_id; */
=======
/**
select tech_list.name,  sum(case when vote_table.vote_type= 'cool' then 1 else 0 end) AS cool_vote, sum(case when vote_table.vote_type= 'uncool' then 1 else 0 end) AS uncool_vote, sum(case when vote_table.vote_type= 'subzero' then 1 else 0 end) AS subzero_vote from vote_table join tech_list on tech_list.id = vote_table.tech_id group by vote_table.tech_id; */
>>>>>>> 059db9a00f3063fc42090cc9b4919a4a80ef72ad
