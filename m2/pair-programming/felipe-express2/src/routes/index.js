const { Router } = require("express");
const movieRouter = require("./movieRouter");
//const cors = require("cors");

const router = Router();

//router.use(cors());

router.use("/movies", movieRouter);

module.exports = router;
