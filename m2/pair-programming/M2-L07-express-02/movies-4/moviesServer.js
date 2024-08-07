const express = require("express");
const router = require("./moviesRoutes.js")
const app = express();
app.use("/", router);

module.exports = app