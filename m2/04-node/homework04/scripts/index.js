const renderMovieCards = require("./renderCards.js");

// var url = "https://students-api.2.us-1.fl0.io/movies";
var url = "https://api.1rodemayo.com/movies";
$.get(url, (data, status) => {
  renderMovieCards(data);
  console.log(status);
});
