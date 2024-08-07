const express = require("express");
const mongoose = require("mongoose");

const app = express();

const url = "mongodb+srv://user_tutorial:password_tutorial@cluster0.olzxglo.mongodb.net/";
const moviesDatabase = "moviesDatabase";
const moviesSchema = new mongoose.Schema({ title: String });
const moviescollections = mongoose.model("moviescollections", moviesSchema);

const dbCon = async () => {
  await mongoose.connect(url + moviesDatabase);
  console.log("connect to database successful");
};

const getMovieService = async () => {
  const movieFind = await moviescollections.find();
  console.log(movieFind);
  return movieFind;
};

const addMovieService = async () => {
  const movieFind = await moviescollections.create({ title: "peli create" });
  console.log(movieFind);
  return movieFind;
};

const findByIdService = async () => {
  const movieFindById = await moviescollections.findById("660ec23509b7113031bef9aa");
  console.log(movieFindById);
  return movieFindById;
};

const findOneService = async () => {
  const movieFindById = await moviescollections.findOne({ title: "peli create" });
  console.log(movieFindById);
  return movieFindById;
};

// findByIdService()
// findOneService();
addMovieService();
// getMovieService();

app.get("/", async (req, res) => {
  const usersC = await getMovieService();
  res.json(usersC);
});

dbCon().then((res) => {
  app.listen(3000, console.log("server start"));
});
