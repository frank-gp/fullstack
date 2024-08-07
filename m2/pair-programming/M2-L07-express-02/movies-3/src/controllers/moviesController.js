const databaseServices =  require("../services/movieServices.js")

const moviesController = (req, res) => {
  const tempData = databaseServices();
  res.json(tempData);
};


module.exports = { moviesController}