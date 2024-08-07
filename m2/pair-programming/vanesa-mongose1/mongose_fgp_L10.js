// ========== M210_mongose ==========

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// const url = "mongodb+srv://user_tutorial:password_tutorial@prueba.9ezomvy.mongodb.net/";
const url = "mongodb+srv://user_tutorial:password_tutorial@cluster0.olzxglo.mongodb.net/";
const moviesDatabase = "moviesDatabase";
const moviesSchema = new mongoose.Schema({ _id: Number });
const moviescollections = mongoose.model("moviescollections", moviesSchema);

const dbCon = async () => {
  await mongoose.connect(url + moviesDatabase);
  console.log("connect to database successful");
};
dbCon();

const getMovieService = async () => {
  const movieFind = await moviescollections.find();
  console.log(movieFind);
  return movieFind;
};

getMovieService();

app.get("/", async (req, res) => {
  const usersC = await getMovieService();
  res.json(usersC);
});

app.listen(3000, console.log("server start"));
