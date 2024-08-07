const MovieServiceClass = require("../services/MovieService");

const movieController = {
  getAllMovies(req, res) {
    const movies = MovieServiceClass.getAllMovies();
    res.json(movies);
  },

  getMovieById(req, res) {
    const movie = MovieServiceClass.getMovieById(parseInt(req.params.id));
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  },

  createMovie(req, res) {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    try {
      const newMovie = MovieServiceClass.createMovie(title, year, director, duration, genre, rate, poster);
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateMovie(req, res) {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const updatedMovie = MovieServiceClass.updateMovie(parseInt(req.params.id), title, year, director, duration, genre, rate, poster);
    if (updatedMovie) {
      res.json(updatedMovie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  },

  deleteMovie(req, res) {
    const deletedMovie = MovieServiceClass.deleteMovie(parseInt(req.params.id));
    if (deletedMovie) {
      res.json(deletedMovie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  },
};

module.exports = movieController;