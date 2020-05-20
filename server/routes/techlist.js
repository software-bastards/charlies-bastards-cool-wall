const express = require("express");
const router = express.Router();
const db = require("../database/models");
const tech_list = db.tech_list;
fs = require("fs");

/**
 * GET for fetching the vote list
 */
router.get("/", function (req, res, next) {
  // fs.readFile("uploads/svgImage-1589634400701-581861273", "utf8", function (
  //   err,
  //   data
  // ) {
  //   if (err) {
  //     return console.log(err);
  //   }
  // });
  tech_list
    .findAll({ raw: true })
    .then((technologies) => {
      const updatedTech = technologies.map((item) => {
        return {
          ...item,
          svgpath: `http://localhost:5000/vue.png`,
        };
      });
      res.send(updatedTech);
    })
    .catch((err) => console.error(err));
});

module.exports = router;
