// var url = "https://students-api.2.us-1.fl0.io/movies";
// var url = "https://webpt19b.web.app/data/movies.json";
// var url = "https://webpt19b.cyclic.app/movies";
var url = "https://api.1rodemayo.com/movies";
const movieListContainer = document.getElementById("movieList");

// Fetch data from the specified URL
fetch(url)
  //
  .then(handleResponse)
  .then(renderHTML)
  .catch(handleError);

// Handle the fetch response
function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  return response.json();
}

// Handle errors during the fetch
function handleError(error) {
  console.error("Error:", error);
  // Handle errors as needed
}

// Render HTML based on the movie data
function renderHTML(data) {
  const movieElements = data.map((movie) => {
    return /* html */ `
      <div class="card_item">
        <a href="${movie.poster}" target="_blank">
          <img src="${movie.poster}" alt="${movie.title}">
          <h3>${movie.title}</h3>
        </a>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <p>Duration: ${movie.duration}</p>
        <p>Genre: ${movie.genre.join(", ")}</p>
        <p>Rating: ${movie.rate}</p>
      </div>
    `;
  });

  // Set the HTML content of the movie list container
  movieListContainer.innerHTML = movieElements.join("");
}
