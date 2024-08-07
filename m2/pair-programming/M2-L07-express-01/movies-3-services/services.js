const tempData = require("./tempData.js");

function getMoviesServices() {
  return tempData;
}

module.exports = {
  getMovies: getMoviesServices
};
