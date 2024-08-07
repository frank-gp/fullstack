const express = require("express");

const app = express();

// ========== service ==========
function databaseService() {
  const tempData = require("./tempData");
  return tempData;
}

app.get("/", (req, res) => {
  res.send("api de movies ");
  // console.log("prueba en la consola");
});

app.get("/api", (req, res) => {
  const movies = databaseService();
  res.json(movies);
});

app.listen(3000, () => {
  console.log("version 1 : localhost:3000");
});
