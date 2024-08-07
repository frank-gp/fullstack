// ========== models/Movie.js ==========
class MovieModelClass {
  constructor(id, title, year, director, duration, genre, rate, poster) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

// module.exports = MovieModelClass;

// ========== services/MovieService.js ==========
// const MovieModelClass = require("../models/Movie");

class MovieServiceClass {
  constructor() {
    this.movies = [];
  }

  getAllMovies() {
    return this.movies;
  }

  getMovieById(id) {
    return this.movies.find((movie) => movie.id === id);
  }

  createMovie(title, year, director, duration, genre, rate, poster) {
    if (!title) throw new Error("Title are required.");
    if (!poster) throw new Error("poster are required.");
    if (!director) throw Error("director are required.");

    const id = this.movies.length + 1;
    const newMovie = new MovieModelClass(id, title, year, director, duration, genre, rate, poster);
    this.movies.push(newMovie);
    return newMovie;
  }

  updateMovie(id, title, year, director, duration, genre, rate, poster) {
    const movieIndex = this.movies.findIndex((movie) => movie.id === id);
    if (movieIndex !== -1) {
      this.movies[movieIndex] = new MovieModelClass(id, title, year, director, duration, genre, rate, poster);
      return this.movies[movieIndex];
    }
    return null;
  }

  deleteMovie(id) {
    const movieIndex = this.movies.findIndex((movie) => movie.id === id);
    if (movieIndex !== -1) {
      const deletedMovie = this.movies.splice(movieIndex, 1);
      return deletedMovie[0];
    }
    return null;
  }
}

const newMovieServiceClass = new MovieServiceClass();

newMovieServiceClass.createMovie("Click", 2006, "Frank Coraci", "1h 47min", ["Comedy", "Drama", "Fantasy"], 6.4, "https://pics.filmaffinity.com/click-924581501-large.jpg");

// module.exports = newMovieServiceClass;

// ========== controllers/MovieController.js ==========
// const newMovieServiceClass = require("../services/MovieService");

const movieController = {
  getAllMovies(req, res) {
    const movies = newMovieServiceClass.getAllMovies();
    res.json(movies);
  },

  getMovieById(req, res) {
    const movie = newMovieServiceClass.getMovieById(parseInt(req.params.id));
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  },

  createMovie(req, res) {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    try {
      const newMovie = newMovieServiceClass.createMovie(title, year, director, duration, genre, rate, poster);
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateMovie(req, res) {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const updatedMovie = newMovieServiceClass.updateMovie(parseInt(req.params.id), title, year, director, duration, genre, rate, poster);
    if (updatedMovie) {
      res.json(updatedMovie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  },

  deleteMovie(req, res) {
    const deletedMovie = newMovieServiceClass.deleteMovie(parseInt(req.params.id));
    if (deletedMovie) {
      res.json(deletedMovie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  },
};

// module.exports = movieController;

// ========== routes/movieRoutes.js ==========
// const express = require("express");

const { Router } = require("express");
const movieRoutes = Router();

// const movieController = require("../controllers/MovieController");

movieRoutes.get("/", movieController.getAllMovies);
movieRoutes.get("/:id", movieController.getMovieById);
movieRoutes.post("/", movieController.createMovie);
movieRoutes.put("/:id", movieController.updateMovie);
movieRoutes.delete("/:id", movieController.deleteMovie);

// module.exports = movieRoutes;

// ========== app.js ==========
const express = require("express");
// const bodyParser = require("body-parser");
// const movieRoutes = require("./routes/movieRoutes");

const app = express();

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Rutas de la API para las películas
app.use("/movies", movieRoutes);

// Manejador de errores para rutas no encontradas
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
