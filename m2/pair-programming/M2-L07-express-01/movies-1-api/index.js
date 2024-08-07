const express = require("express");
const tempData = require("./tempData.js");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! | movies 1");
});

app.get("/movies", (req, res) => {
  res.json(tempData);
});

app.listen(3000, () => {
  console.log("Server movies-1 in http://localhost:3000");
});
