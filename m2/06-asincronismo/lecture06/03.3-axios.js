const axios = require("axios");

const apiUrl = "https://api.1rodemayo.com/movies?quantity=3";

const promise1 = axios.get(apiUrl);

promise1
  .then((res) => {
    // Handle successful response
    console.log("Response:", res.data);
  })
  .catch((err) => {
    // Handle error
    console.log("tuvimos un error");
    console.error("Error:", err);
  });

console.log("Se termino todo");

