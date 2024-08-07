// controllers/moviesController.js
const MovieService = require('../services/moviesService');

const movieService = new MovieService();

exports.getMovies = async (req, res) => {
    try {
        const movies = await movieService.fetchMovies();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
