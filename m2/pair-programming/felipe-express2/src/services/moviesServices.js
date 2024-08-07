const tempData = require("./tempData.js");

class Movies {
  constructor() {
    this.movies = tempData;
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

module.exports = { newMovies };
// console.log(newMovies.getMovies());
