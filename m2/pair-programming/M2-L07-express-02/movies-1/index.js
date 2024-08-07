const express = require("express");

const app = express();

const tempData = [
    {movie: "sherk 1"}
]

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/movies", (req, res) => {
  res.json(tempData);
});

app.listen(3000, () => {
  console.log("server: movies v1");
});
