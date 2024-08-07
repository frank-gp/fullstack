const express = require("express");
const router = express.Router();
const { getMoviesServices } = require("./services");

router.get("/", (req, res) => {
  res.send("Hello World! | Movies 3");
});

router.get("/movies", (req, res) => {
  const movies = getMoviesServices();
  res.json(movies);
});

module.exports = router;
