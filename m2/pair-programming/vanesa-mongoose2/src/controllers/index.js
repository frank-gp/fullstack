// funciones que establecen la logica de negocio de cada una d elas rutas.
/*const movieService = require("../service/movieService");

module.exports = {
    movies: (req, res) => {
        const movies = movieService.getMovies();
        res.status(200).json(movies);
    },
};*/

const movieService = require("../service/movieService");
// const mongoose = require("mongoose")
module.exports = {
  movies: async (req, res) => {
    try {
      const movies = await movieService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      console.error("Error getting movies:", error);
      res.status(500).json({ error: "Error getting movies" });
    }
  },

  create: async (req, res) => {
    // const moviesSchema = new mongoose.Schema({ title: String });
    // const moviescollections = mongoose.model("moviesCollections", moviesSchema);

    // const movieFind = await movieService.create({ title: "peli create" });
    // console.log(movieFind);
    res.send("hello 3")
    // return movieFind;

    // console.log(req.body);
    // res.send("hello 1");
    // try {
    // const { title, year, director, duration, genre, rate, poster } = req.body;
    //   const newMovie = await movieService.createMovie({ title: "peli 1" });
    //   res.status(201).json({ message: "Movie created successfully" });
    // } catch (error) {
    //   console.error("Error creating movie:", error);
    //   res.status(500).json({ error: "Error creating movie" });
    // }
  },
};
