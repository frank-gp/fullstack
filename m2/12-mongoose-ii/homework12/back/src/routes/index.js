const { Router } = require("express")
const moviesController = require("../controllers/moviesControllers")

const indexRouter = Router()

indexRouter.get("/movies", moviesController.getMovies)

indexRouter.get("/movies/title", moviesController.getByTitleController)

indexRouter.get("/movies/:id", moviesController.getByIdController)

indexRouter.post("/movies", moviesController.createMovie)

module.exports = indexRouter