
// var url = "https://students-api.2.us-1.fl0.io/movies";
// var url = "https://api.1rodemayo.com/movies";
var url;

if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  url = "http://localhost:3000/movies";
} else {
  url = "/movies";
}

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

// ========== renderCard... ==========
const movieCardsRow = document.getElementById("movieCardsRow");
if (movieCardsRow) {
  const renderMovieCards = require("./renderCards.js");
  const axios = require("axios");
  const fetchData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    renderMovieCards(response.data);
  };

  fetchData();
}
// ========== renderCard. ==========

// ========== renderCard... ==========
const movieForm = document.getElementById("movieForm");

if (movieForm) {
  const resetFormFunc = () => {
    movieForm.reset();
  };
  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", resetFormFunc);
}
if (movieForm) {
  const formDataCreateMovie = require("./formData.js");
  const axios = require("axios");
  const postData = async (e) => {
    e.preventDefault();

    let message = document.querySelector("#message");
    let formData = formDataCreateMovie();
    axios
      .post(url, formData)
      .then(function (response) {
        console.log("Respuesta del servidor:", response.data);
        message.innerHTML = response.data[0].message;
        movieForm.reset();
      })
      .catch(function (error) {
        console.error("Error al enviar los datos:", error);
      });
  };

  movieForm.addEventListener("submit", postData);
}
// ========== renderCard. ==========
