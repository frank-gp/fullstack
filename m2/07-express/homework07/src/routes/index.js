const { Router } = require("express")
const rootController = require("../controllers")

const router = Router()

router.get("/", rootController)

module.exports = router