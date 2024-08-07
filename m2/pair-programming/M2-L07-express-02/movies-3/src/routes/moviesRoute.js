const { moviesController } = require("../controllers/");

const { Router } = require("express");
const router = Router();

router.get("/", moviesController);

module.exports = router;
