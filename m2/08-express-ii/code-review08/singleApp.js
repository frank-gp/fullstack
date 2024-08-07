// ========== Express 2 ==========

// ========== src\models\moviesClass.js ==========
class MoviesClass {
  constructor(title, poster, director) {
    if (!title || !poster || !director) {
      throw new Error("Title, poster and director are required");
    }
    this.title = title;
    this.poster = poster;
    this.director = director;
  }
}

//   export { MoviesClass };

// ========== src\services\moviesServices.js ==========
// import { MoviesClass } from "../models/moviesClass.js";

const movies = [
  {
    title: "One Piece",
    year: 2023,
    director: "Tatsuya Nagamine",
    duration: "2h 20min",
    genre: ["Animation", "Action", "Adventure"],
    rate: 8.3,
    poster: "https://pics.filmaffinity.com/one_piece-985097858-large.jpg",
  },
];

const getMovies = async () => {
  const moviesList = movies.map((movie) => new MoviesClass(movie.title, movie.poster, movie.director));
  return moviesList;
};

// export { getMovies };

// ========== src\controllers\moviesController.js ==========
// import { getMovies } from "../services/moviesServices.js";

const moviesController = async (req, res) => {
  try {
    // res.send(await showMessage());
    res.json(await getMovies());
    // res.send(await getMovies())
  } catch (error) {
    console.log("error", error.message);
    res.status(404).json({ error: "hola esta ruta no existe" });
  }
};

// export { moviesController };

// ========== src\routes\moviesRouter.js ==========
import expressRouter from "express";
// import { moviesController } from "../controllers/moviesController.js";

const router = expressRouter.Router();

const prueba = (req, res, next) => {
  next();
};

((req, res, next) => {
  console.log("prueba 2");
})();

router.get("/movies", moviesController);
router.get("/movies/:id", prueba, moviesController);

// export { router };

// ========== src\server.js ==========
import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

export { app };

// ========== index.js ==========
// import { app } from "./src/server.js";
// import { router } from "./src/routes/moviesRouter.js";

const PORT = 3000;

app.use(router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
