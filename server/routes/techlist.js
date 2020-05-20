const express = require("express");
const router = express.Router();
const db = require("../database/models");
const tech_list = db.tech_list;
const multer = require("multer");

/**
 * GET for fetching the vote list
 */
router.get("/", function (req, res, next) {
  tech_list
    .findAll()
    .then((technologies) => {
      res.send(technologies);
    })
    .catch((err) => console.error(err));
});

/**
 * multer middleware to define the storage path and file name as .png
 */

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 3);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
  },
});

let upload = multer({ storage: storage }).single("pngImage");

/**
 * post for posting new technologies with icon as a png file.
 */

router.post("/", function (req, res) {
  console.log(req.body);
  upload(req, res, function (err) {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return res.send(err);
    } else if (err) {
      return res.send(err);
    } else {
      tech_list
        .create({
          name: req.body.name,
          imagepath: req.file.path,
        })
        .then(() =>
          res
            .status(200)
            .send({ message: "You've successfully added a technology!" })
        )
        .catch((userErr) => console.error(`User error: ${userErr}`));
    }
  });
});

module.exports = router;
