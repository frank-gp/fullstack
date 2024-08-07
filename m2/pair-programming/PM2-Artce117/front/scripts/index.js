const { setCardHandler, errorHandler } = require("./renderCards");
const axios = require("axios");

let urlServer = "http://localhost:3000/movies";
let url = "https://students-api.2.us-1.fl0.io/movies";
let altUrl = "https://api.1rodemayo.com/movies";

// * Petición con Ajax
// $.get(url, (data, status) => {
//   setCardHandler(data);
// });

// * Petición con axios
const promise = axios.get(urlServer);

// * Succes Handler
promise
  .then((res) => {
    console.log(res.data);
    setCardHandler(res.data);
  })
  // ! Error Handler
  .catch((err) => {
    errorHandler(err);
  });
