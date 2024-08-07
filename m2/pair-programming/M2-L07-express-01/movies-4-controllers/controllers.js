// moviesController.js

const services = require("./services.js");
// const { getMovies } = require("./services.js");

services.getMovies();

const helloWordController = (req, res) => {
  res.send("Hello World! | Movies 3");
};

const getMoviesController = (req, res) => {
  // const movies = getMovies();
  const movies = services.getMovies();
  res.json(movies);
};

module.exports = { helloWordController, getMoviesController };
