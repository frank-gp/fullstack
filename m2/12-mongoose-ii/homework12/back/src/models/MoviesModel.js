const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  //
  title: String,
  year: Number,
  director: String,
  duration: String,
  genre: [String],
  rate: Number,
  poster: String,
});

const MoviesModel = mongoose.model("moviescollections", moviesSchema);

module.exports = MoviesModel;
