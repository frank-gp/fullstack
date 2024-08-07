// var url = "https://students-api.2.us-1.fl0.io/movies";
var url = "https://webpt19b.web.app/data/movies.json";

const movieListContainer = document.getElementById("movieList");

$.get(url, (data, status) => {
  console.log(status);
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

  movieListContainer.innerHTML = movieElements.join("");
});
