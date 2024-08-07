// ========== controller ==========
const {homeController, moviesController} = require("../controller/apiController")


const { Router } = require("express");
const router = Router();
router.get("/", homeController);
router.get("/movies", moviesController);

module.exports = router