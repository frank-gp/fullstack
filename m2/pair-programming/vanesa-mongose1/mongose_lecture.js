const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

let MONGO_URI = process.env.MONGO_URI;

const app = express();
// url of compass
const database = "prueba";
const url0 = MONGO_URI + database;
const url1 = "mongodb+srv://user_tutorial:password_tutorial@prueba.9ezomvy.mongodb.net/prueba";
const url2 = "mongodb+srv://user_tutorial:password_tutorial@prueba.9ezomvy.mongodb.net/prueba?retryWrites=true&w=majority&appName=prueba";

const moviesSchema = new mongoose.Schema({ title: String });

const MovieCollection = mongoose.model("movies", moviesSchema);

const dbCon = async () => {
  // realizar la conexion con la base de datos
  await mongoose.connect(url0);
};

dbCon().then(console.log("connect to database successful"));

const getUserService = async () => {
  const movieFind = await MovieCollection.find();
  console.log(movieFind);
  return movieFind;
};

getUserService();
app.get("/", async (req, res) => {
  const usersC = await getUserService();
  res.json(usersC);
});

app.listen(3000, console.log("server start"));
