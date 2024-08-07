//SERVICES
class Movies {
  constructor() {
    this.movies = [];
  }

  getMovies() {
    return this.movies;
  }

  addMovie(title, director, year, duration, genre, rate, poster) {
    const newMovie = {
      title,
      director,
      year,
      duration,
      genre,
      rate,
      poster,
    };
    this.movies.push(newMovie);
  }
}

const newMovies = new Movies();

//CONTROLLER -->

const movieController = (req, res) => {
  console.log("prueba movieController");
  console.log(req.body);
  if (req.method === "GET") {
    console.log("prueba getpoint");
    res.status(200).json(newMovies.getMovies());
    res.send("GET send");
  } else if (req.method === "POST") {
    console.log("Prueba post");
    console.log(req.body); //undefined
    const { title } = req.body;
    newMovies.addMovie("pelicula 2");
    //const { title, director, year, duration, genre, rate, poster } = req.body;
    // Validaciones aqui:

    console.log(title); //undefined
    newMovies.addMovie(title);
    res.send("POST send");
    // res.status(200).json({ message: "Pelicula agregada" });
  }
};

// ROUTER -->

const { Router } = require("express");

const movieRouter = Router();

/* movieRouter.get("/", movieController); */

movieRouter.route("/").get(movieController).post(movieController);

//SERVER -->

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(movieRouter);

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

module.exports = app;

// INDEX -->

app.listen(3001, () => {
  console.log("Servidor encendido");
});
