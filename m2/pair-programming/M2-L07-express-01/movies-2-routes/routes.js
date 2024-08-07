const express = require("express");
const tempData = require("./tempData.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! | Movies 2");
});

router.get("/movies", (req, res) => {
  res.json(tempData);
});

module.exports = router;
