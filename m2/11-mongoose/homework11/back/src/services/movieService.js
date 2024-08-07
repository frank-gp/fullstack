// // const tempData = require("./tempData.js")

// class MovieModelClass {
//   constructor(id, title, year, director, duration, genre, rate, poster) {
//     this.id = id;
//     this.title = title;
//     this.year = year;
//     this.director = director;
//     this.duration = duration;
//     this.genre = genre;
//     this.rate = rate;
//     this.poster = poster;
//   }
// }

// class MovieServiceClass {
//   constructor() {
//     this.movies = [];
//     // this.movies = tempData;
//   }

//   getAllMovies() {
//     return this.movies;
//   }

//   getMovieById(id) {
//     return this.movies.find((movie) => movie.id === id);
//   }

//   createMovie(title, year, director, duration, genre, rate, poster) {
//     // console.log(title, year, director, duration, genre, rate, poster);
//     if (!title) {
//       throw Error("title are required.");
//     }
//     if (!poster) throw new Error("poster are required.");
//     if (!director) throw new Error("director are required.");
//     const id = this.movies.length + 1;
//     const newMovie = new MovieModelClass(id, title, year, director, duration, genre, rate, poster);
//     this.movies.push(newMovie);
//     return newMovie;
//   }

//   updateMovie(id, title, year, director, duration, genre, rate, poster) {
//     const movieIndex = this.movies.findIndex((movie) => movie.id === id);
//     if (movieIndex !== -1) {
//       this.movies[movieIndex] = new MovieModelClass(id, title, year, director, duration, genre, rate, poster);
//       return this.movies[movieIndex];
//     }
//     return null;
//   }

//   deleteMovie(id) {
//     const movieIndex = this.movies.findIndex((movie) => movie.id === id);
//     if (movieIndex !== -1) {
//       const deletedMovie = this.movies.splice(movieIndex, 1);
//       return deletedMovie[0];
//     }
//     return null;
//   }
// }

// const moviesArray = [
//   new MovieModelClass(
//     "Guardians of the Galaxy Vol. 2",
//     2017,
//     "James Gunn",
//     "2h 16min",
//     ["Action", "Adventure", "Comedy"],
//     7.7,
//     "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
//   ),
//   new MovieModelClass(
//     "Star Wars: Episode IV - A New Hope",
//     1977,
//     "George Lucas",
//     "2h 1min",
//     ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//     8.7,
//     "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
//   ),
//   new MovieModelClass(
//     "The Lord of the Rings: The Fellowship of the Ring",
//     2001,
//     "Peter Jackson",
//     "2h 58min",
//     ["Action", "Adventure", "Drama", "Fantasy"],
//     8.8,
//     "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
//   ),
// ];

// const newMovieService = new MovieServiceClass();

// // newMovieService.createMovie([...moviesArray]);
// // console.log(newMovieService);
// newMovieService.createMovie(
//   "Guardians of the Galaxy Vol. 2",
//   2017,
//   "James Gunn",
//   "2h 16min",
//   ["Action", "Adventure", "Comedy"],
//   7.7,
//   "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
// );

// newMovieService.createMovie(
//   "Star Wars: Episode IV - A New Hope",
//   1977,
//   "George Lucas",
//   "2h 1min",
//   ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//   8.7,
//   "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
// );

// newMovieService.createMovie(
//   "The Lord of the Rings: The Fellowship of the Ring",
//   2001,
//   "Peter Jackson",
//   "2h 58min",
//   ["Action", "Adventure", "Drama", "Fantasy"],
//   8.8,
//   "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
// );
// // console.log(newMovieService);
// module.exports = newMovieService;

const MoviesModel = require("../models/MoviesModel.js");

class MovieClass {
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

module.exports = {
  getMoviesService: async () => {
    const movieFind = await MoviesModel.find();

    return movieFind;
  },

  createMoviesService: async (title, year, director, duration, genre, rate, poster) => {
    console.log(title, year, director, duration, genre, rate, poster);
    // if (!title) {
    //   throw Error("title are required.");
    // }
    // if (!poster) throw new Error("poster are required.");
    // if (!director) throw new Error("director are required.");
    // const id = this.movies.length + 1;
    // const newMovie = new MovieModelClass(id, title, year, director, duration, genre, rate, poster);
    // this.movies.push(newMovie);
    // return newMovie;
  },
};
