// ========== services ==========
function databaseServices() {
  const tempData = require("./tempData.js");
  return tempData;
}

// ========== controllers ==========
const rootController = (req, res) => {
  res.send("Hello world");
};

const moviesController = (req, res) => {
  const tempData = databaseServices();
  res.json(tempData);
};

// ========== routes ==========
const { Router } = require("express");
const router = Router();

router.get("/", rootController);
router.get("/movies", moviesController);

// ========== server ==========
const express = require("express");
const app = express();
app.use("/", router);

app.listen(3000, () => {
  console.log("server: movies v1.2 http://localhost:3000");
});
