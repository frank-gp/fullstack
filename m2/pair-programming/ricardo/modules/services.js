// services/movieService.js

// const fetch = require('node-fetch');

async function getMovies() {
  // return "temp"
  try {
    const apiUrl = "https://api.1rodemayo.com/movies?quantity=1";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("No se pudo obtener la respuesta de la API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error al obtener datos de la API");
  }
}
let data = getMovies();
// console.log(data);

async function asdf9() {
  const asdf = await getMovies();
  console.log(asdf);
}
asdf9();
// module.exports = { getMovies };
