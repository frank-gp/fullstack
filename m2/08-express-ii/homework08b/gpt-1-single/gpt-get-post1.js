// models/Movie.js
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

module.exports = MovieModelClass;

// services/MovieService.js
const MovieModelClass = require("../models/Movie");

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
    if (!title || !poster || !director) {
      throw new Error("Title, poster, and director are required.");
    }
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

module.exports = new MovieServiceClass();

// controllers/MovieController.js
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

// routes/movieRoutes.js
const express = require("express");
const router = express.Router();
const movieController = require("../controllers/MovieController");

router.get("/", movieController.getAllMovies);
router.get("/:id", movieController.getMovieById);
router.post("/", movieController.createMovie);
router.put("/:id", movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;

// app.js
const express = require("express");
const bodyParser = require("body-parser");
const movieRoutes = require("./routes/movieRoutes");

const app = express();

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

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
  console.log(`Server is running on port ${PORT}`);
});
