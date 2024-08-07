const { newMovies } = require("../services/moviesServices");

/* const movieController = (req, res) => {
  res.status(200).json(newMovies.getMovies());
   }; */

const movieController = (req, res) => {
  if (req.method === "GET") {
    console.log("GET test point");
    res.status(200).json(newMovies.getMovies());
  } else if (req.method === "POST") {
    console.log("POST test");
    const { title, director, year, duration, genre, rate, poster } = req.body;
    const newMovie = {
      title,
      director,
      year,
      duration,
      genre,
      rate,
      poster,
    };
    newMovies.addMovie(newMovie);
    res.send("POST sent");
  }
};

module.exports = movieController;
