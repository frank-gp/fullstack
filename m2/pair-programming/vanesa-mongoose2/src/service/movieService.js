// funcion que se comunica con la base de datos para pedir info de los usuarios y darle el formato adecuado

// class Movie {
//   constructor(title, year, director, duration, genre, rate, poster) {
//       if (!title || !poster || !director) {
//           throw new Error('Missing required properties (title, poster, director)');
//       }
//       this.title = title;
//       this.year = year;
//       this.director = director;
//       this.duration = duration;
//       this.genre = genre;
//       this.rate = rate;
//       this.poster = poster;
//   }
// }

// const movies = [
//   new Movie(
//       "Avatar",
//       2009,
//       "James Cameron",
//       "2h 42min",
//       ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//       7.8,
//       "https://i.postimg.cc/vTgM6SgK/avatar.webp"
//   ),
//   new Movie(
//       "Inception",
//       2010,
//       "Christopher Nolan",
//       "2h 28min",
//       ["Action", "Adventure", "Sci-Fi", "Thriller"],
//       8.8,
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
//   ),
//   new Movie(
//       "The Avengers",
//       2012,
//       "Joss Whedon",
//       "2h 23min",
//       ["Action", "Adventure", "Sci-Fi"],
//       8.0,
//       "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
//   ),
// ];
const {movieCollection} = require("../models/Movie");




module.exports = {
  getMovies: async () => {
      const movieFind = await movieCollection.find();
      return movieFind;
  },

  createMovie: async (movie) =>{
    
    const newMovie = await movieCollection.create({title: "peli"});
    console.log(newMovie)
    return newMovie

  }
 
};

