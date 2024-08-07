// ========== service ==========
const databaseService = require("./apiService")

const homeController = (req, res) => {
  res.send("home version 3");
};

const moviesController = (req, res) => {
  const movies = databaseService();
  res.json(movies);
};


module.exports = {homeController, moviesController}