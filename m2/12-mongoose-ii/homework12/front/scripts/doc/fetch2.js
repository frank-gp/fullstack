function createCard(movie) {
  return /* html */ `
  <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
    <div class="card">
      <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text fs-6">${movie.year} | ${movie.duration}</p>
        <p class="card-text">${movie.genre.join(", ")}</p>
        <p class="card-text">Director: ${movie.director}</p>
        <p class="card-text">Rating: ${movie.rate}</p>
      </div>
    </div>
  </div>
`;
}

// Function to render movie cards
function renderMovieCards(movies) {
  const movieCardsRow = document.getElementById("movieCardsRow");
  const cardHtmlArray = movies.map((movie) => createCard(movie));
  movieCardsRow.innerHTML = cardHtmlArray.join("");
}

// Fetch data from the API
var url = "https://webpt19b.web.app/data/movies.json";
var url = "https://api.1rodemayo.com/movies";
fetch(url)
  .then((response) => response.json())
  .then((data) => renderMovieCards(data))
  .catch((error) => console.error("Error fetching data:", error));
