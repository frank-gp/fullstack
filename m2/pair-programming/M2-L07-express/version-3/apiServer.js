const router = require("./apiRouter")

const express = require("express");
const app = express();

app.use("/", router)



module.exports = app