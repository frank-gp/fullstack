const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({ title: String });

const MoviesModel = mongoose.model("moviescollections", moviesSchema);

module.exports = MoviesModel;
