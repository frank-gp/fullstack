const tempData = [
  {
    title: "Titanic",
    year: 1997,
    director: "James Cameron",
    duration: "3h 14min",
    genre: ["Drama", "Romance"],
    rate: 7.8,
    poster: "https://pics.filmaffinity.com/titanic-321994924-large.jpg",
  },
];

// SERVICES
class Movies {
  constructor() {
    this.movies = tempData;
  }
  getMovies() {
    return this.movies;
  }
  addMovie(movie) {
    this.movies.push(movie);
  }
}
const newMovies = new Movies();

// CONTROLLER
const movieController = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(newMovies.getMovies());
  } else if (req.method === "POST") {
    const { title, director, year, duration, genre, rate, poster } = req.body;
    const newMovie = { title, director, year, duration, genre, rate, poster };
    newMovies.addMovie(newMovie);
    res.send("Send data successful");
  }
};

// ROUTER
const { Router } = require("express");
const movieRouter = Router();
movieRouter.route("/").get(movieController).post(movieController);

// SERVER
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/movies", movieRouter);

// INDEX
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
