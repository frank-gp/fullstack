require("dotenv").config();

const mongoose = require("mongoose");

// const MONGO_URI = process.env.MONGO_URI
const MONGO_URI = "mongodb+srv://user_tutorial:password_tutorial@cluster0.olzxglo.mongodb.net/";

const database = "moviesDatabase";
const url = MONGO_URI + database;

const conDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("se conecto");
  } catch (error) {
    console.log(error);
  }
};

module.exports = conDb;
