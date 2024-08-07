const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({});

const movieCollection = mongoose.model("moviescollections", movieSchema);

module.exports = { movieCollection };
