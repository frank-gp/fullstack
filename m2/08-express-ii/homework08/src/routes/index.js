const { Router } = require("express")
const moviesController = require("../controllers/moviesControllers")

const indexRouter = Router()

indexRouter.get("/movies", moviesController.getMovies)

indexRouter.post("/movies", moviesController.createMovie)

module.exports = indexRouter