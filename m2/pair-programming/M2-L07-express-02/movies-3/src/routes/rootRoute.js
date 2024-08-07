const { rootController } = require("../controllers/");

const { Router } = require("express");
const router = Router();

router.get("/", rootController);

module.exports = router;
