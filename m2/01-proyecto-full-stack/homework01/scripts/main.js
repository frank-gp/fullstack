const movieListContainer = document.getElementById("movieList");

const movieElements = tempData.map((movie) => {
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

movieListContainer.innerHTML = movieElements.join("");
