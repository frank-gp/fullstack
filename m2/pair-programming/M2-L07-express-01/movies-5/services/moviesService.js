// services/exampleService.js
const tempData = require("./tempData"); // Adjust the path as necessary

class MovieService {
  constructor() {
    this.movies = tempData;
  }

  async fetchMovies() {
    // Simulating fetching movies from a database
    return this.movies;
  }
}

module.exports = MovieService;
