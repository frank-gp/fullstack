const tempData = require("./tempData.js");

module.exports = {
  getData: () => {
    return tempData;
  },
  
  addMovie: (movie) => {
    tempData.push(movie);
    return movie;
  },
};
