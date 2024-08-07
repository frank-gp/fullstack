const {Router} = require("express");
const moviesController = require("../controllers/moviesController");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.post("/", moviesController.createMovies);

module.exports = moviesRouter;
