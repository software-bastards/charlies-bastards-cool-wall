const express = require("express");
const router = express.Router();
const multer = require("multer");
const db = require("../database/models");
const tech_list = db.tech_list;

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

let upload = multer({ storage: storage }).single("svgImage");

router.post("/", function (req, res) {
  upload(req, res, function (err) {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return res.send(err);
    } else if (err) {
      return res.send(err);
    }
    console.log(req.file.path);
    return res.status(200).send(req.file.path);
  });
});

module.exports = router;
