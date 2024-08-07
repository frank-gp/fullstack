const express = require("express");

const app = express();

// app.get("/movies", async (req, res) => {
//   const response = await fetch("https://api.1rodemayo.com/movies");
//   const data = await response.json();
//   res.json(data);
// });

app.get("/movies", (req, res) => {
  fetch("https://api.1rodemayo.com/movies")
    .then((response) => response.json())
    .then((data) => res.json(data));
});

app.listen(3000, console.log("http://127.0.0.1:3000/movies"));
