// ========== service ==========
function databaseService() {
  const tempData = require("./tempData");
  return tempData;
}

// ========== controller ==========
const homeController = (req, res) => {
  res.send("home version 2");
};

const moviesController = (req, res) => {
  const movies = databaseService();
  res.json(movies);
};

// ========== router ==========
const { Router } = require("express");
const router = Router();

router.get("/", homeController);

router.get("/movies", moviesController);
router.get("/user", userController);

// ========== server ==========
const express = require("express");
const app = express();

app.use("/", router)

app.listen(3000, () => {
  console.log("version 2: localhost:3000");
});
