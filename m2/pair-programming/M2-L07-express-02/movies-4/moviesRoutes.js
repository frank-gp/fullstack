const {rootController, moviesController} = require("./moviesControllers.js")

const { Router } = require("express");
const router = Router();

router.get("/", rootController);
router.get("/movies", moviesController);

module.exports = router