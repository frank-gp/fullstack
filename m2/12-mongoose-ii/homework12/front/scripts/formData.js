function formDataCreateMovie() {
  const movieForm = document.getElementById("movieForm");
  const selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map((genre) => genre.value);

  // Obtener los valores del formulario
  const formData = new FormData(movieForm);
  const movieData = Object.fromEntries(formData.entries());
  movieData.genre = selectedGenres;

  return movieData;
}

module.exports = formDataCreateMovie;
