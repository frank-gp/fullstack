const movieService = require("../services/movieService");
// const newClass = new movieService()
const moviesController = {
  getMovies: async (req, res) => {
    const movies =await movieService.getMoviesService();
    // res.json(movieService.getData());
    res.json(movies);
  },

  createMovie: async (req, res) => {
    try {
      // console.log(req.body)
      const { title, year, director, duration, genre, rate, poster } = req.body;
      movieService.createMoviesService(title, year, director, duration, genre, rate, poster);
      res.status(200).json([{ message: "se crearon las pelis" }]);
    } catch (error) {
      res.status(400).json({ messagea: "error " + error.message });
    }
  },
};

module.exports = moviesController;
