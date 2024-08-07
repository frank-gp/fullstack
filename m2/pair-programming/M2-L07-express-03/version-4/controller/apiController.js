// ========== service ==========
const databaseService = require("../service/apiService")

const homeController = (req, res) => {
  res.send("home version 4");
};

const moviesController = (req, res) => {
  const movies = databaseService();
  res.json(movies);
};


module.exports = {homeController, moviesController}