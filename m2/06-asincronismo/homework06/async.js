// const renderMovieCards = require("./renderCards.js");
const axios = require("axios");

// var url = "https://students-api.2.us-1.fl0.io/movies";
var url = "https://api.1rodemayo.com/movies";

// $.get(url, (data, status) => {
//   renderMovieCards(data);
//   console.log(status);
// });

// ========== code_review_jquery... ==========
// const getMovies = () => {
//   $.ajax({
//     url: url,
//     method: "GET",
//     success: function (response) {
//       console.log(response);
//       // renderData(response);
//     },
//     error: function (error) {
//       console.log(error);
//     },
//   });
// };
// ========== code_review_jquery. ==========

// ========== axios ==========
const fetchData = async () => {
  const response = await axios.get(url);
  console.log(response.data);
  renderMovieCards(response.data);
};

fetchData();
// ========== axios ==========

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));
