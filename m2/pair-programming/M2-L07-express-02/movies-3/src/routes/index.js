const { Router } = require("express");
// const { moviesController, rootController } = require("../controllers/");
const rootRoute = require("./rootRoute")
const moviesRoute = require("./moviesRoute")

const router = Router();

// router.get("/", rootController);
// router.get("/movies", moviesController);
router.use("/", rootRoute)
router.use("/movies", moviesRoute)

module.exports = router;
