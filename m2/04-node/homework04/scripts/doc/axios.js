// Assuming you have Axios included in your project

const url = "https://webpt19b.web.app/data/movies.json";
const movieListContainer = document.getElementById("movieList");

// Using Axios to fetch data
axios.get(url)
  .then(response => {
    // Handle the response status
    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    // Handle the JSON data
    return response.data;
  })
  .then(renderHTML)
  .catch(error => {
    console.error('Error:', error);
    // Handle errors as needed
  });

// Render HTML based on the movie data
function renderHTML(data) {
  const movieElements = data.map((movie) => {
    return /* html */ `
      <div class="card_item">
        <a href="#">
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
