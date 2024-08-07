const { Router } = require("express");
const moviesRouter = require("./moviesRouter");

const router = new Router();

router.use("/movies", moviesRouter);

module.exports = router;
