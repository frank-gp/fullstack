// services
function getMoviesServices() {
  const tempData = require("./tempData.js");
  return tempData;
}

// controllers
const helloWordController = (req, res) => {
  res.send("Hello World! | movies-1/index-mvc");
};

const getMoviesController = (req, res) => {
  const movies = getMoviesServices();
  res.json(movies);
};

// routes
const { Router } = require("express");
const router = Router();

router.get("/", helloWordController);
router.get("/movies", getMoviesController);

// server
const express = require("express");
const app = express();
app.use("/", router);

app.listen(3000, () => {
  console.log("Server movies-1/index-mvc in http://localhost:3000");
});
