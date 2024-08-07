const axios = require("axios");

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

const fetchMovies = async () => {
  const response1 = await axios.get(apiUrl);
  console.log(response1.data);
};

// fetchMovies();

const fetchMovies2 = async () => {
  try {
    console.log("Estamos por Intentar un par de operaciones");
    const response1 = await axios.get(apiUrl);
    console.log(response1.data);
    console.log("Ha finalizado todo con exito");
  } catch (error) {
    console.log("Tuvimos un error. Estamos en el bloque catch");
    console.log(error.message);
  }
};

fetchMovies2();
