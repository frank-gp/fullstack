const repository = require("../services/moviesService");

module.exports = {
  getAllMovies: (req, res) => {
    try {
      const movies = repository.getMovies();
      res.status(200).send(movies);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener las peliculas",
      });
    }
  },

  createMovies: (req, res) => {
    console.log(req.body);
    const { title, year, director, duration, genre, rate, poster } = req.body;
    try {
      repository.createMovie(
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
      );
      res.status(201).json({
        message: "Pelicula agregada correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Error al agregar pelicula",
      });
    }
  },
};
