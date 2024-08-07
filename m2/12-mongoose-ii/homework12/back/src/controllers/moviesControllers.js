const movieService = require("../services/movieService");
// const newClass = new movieService()
const moviesController = {
  getMovies: async (req, res) => {
    const movies = await movieService.getMoviesService();
    // res.json(movieService.getData());
    res.json(movies);
  },

  getByIdController: async (req, res) => {
    const { id } = req.params;
    const getByIdService = await movieService.getByIdService(id);
    res.json(getByIdService);
  },

  getByTitleController: async (req, res) => {
    const { title } = req.body;
    const getBy = await movieService.getByTitleService(title);
    res.status(200).json(getBy);
  },

  createMovie: async (req, res) => {
    try {
      // console.log(req.body)
      const reqBody = req.body;
      movieService.createMoviesService(reqBody);
      res.status(200).json([{ message: "se crearon las pelis" }]);
    } catch (error) {
      res.status(400).json({ messagea: "error " + error.message });
    }
  },
};

module.exports = moviesController;
