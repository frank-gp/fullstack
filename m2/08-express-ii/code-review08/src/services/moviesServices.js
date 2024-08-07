// ========== src\services\moviesServices.js ==========
import { MoviesClass } from "../models/moviesClass.js";

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
  // const moviesList = movies.map((movie) => new MoviesClass(movie.title, movie.poster, movie.director));
  const moviesList = movies.map((movie) => new MoviesClass(movie.title, movie.year, movie.director, movie.duration, movie.genre, movie.rate, movie.poster));
  // title, year, director, duration, genre, rate, poster
  return moviesList;
};

export { getMovies };
