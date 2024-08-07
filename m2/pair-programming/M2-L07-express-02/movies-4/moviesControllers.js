const databaseServices =  require("./movieServices.js")

const rootController = (req, res) => {
  res.send("Hello world");
};

const moviesController = (req, res) => {
  const tempData = databaseServices();
  res.json(tempData);
};


module.exports = {rootController, moviesController}