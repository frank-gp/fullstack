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
  
//   module.exports = MovieModelClass;
  
//   // services/MovieService.js
//   const MovieModelClass = require("../models/Movie");
  
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
    //   if (!title || !poster || !director) {
    //     throw new Error("Title, poster, and director are required.");
    //   }
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