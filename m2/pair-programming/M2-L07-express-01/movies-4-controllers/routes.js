const express = require("express");
const router = express.Router();
const { helloWordController, getMoviesController } = require("./controllers");

router.get("/", helloWordController);

router.get("/movies", getMoviesController);

module.exports = router;
