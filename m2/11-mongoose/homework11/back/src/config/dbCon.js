require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
const moviesDatabase = "moviesDB";

const dbCon = async () => {
  await mongoose.connect(MONGO_URI + moviesDatabase);
  console.log("connect to database successful");
};

module.exports = dbCon;
