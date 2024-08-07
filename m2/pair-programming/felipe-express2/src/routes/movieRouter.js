const { Router } = require("express");
const movieController = require("../controllers/movieControler");

const movieRouter = Router();

/* movieRouter.get("/", movieController); */

movieRouter.route("/").get(movieController).post(movieController);

module.exports = movieRouter;
