// controllers/movieController.js

const movieService = require("./services.js");

async function getMovies(req, res) {
  try {
    const movies = await movieService.getMovies();
    res.json(movies);
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    res.status(500).send("Error al obtener datos de la API");
  }
}

module.exports = { getMovies };
