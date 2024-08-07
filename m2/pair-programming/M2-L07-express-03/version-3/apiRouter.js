// ========== controller ==========
const {homeController, moviesController} = require("./apiController")


const { Router } = require("express");
const router = Router();
router.get("/", homeController);
router.get("/movies", moviesController);

module.exports = router