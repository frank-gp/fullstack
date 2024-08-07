const express = require("express");
// require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 3000;
// const url = process.env.MONGO_URI;
const url = "mongodb+srv://user_tutorial:password_tutorial@prueba.9ezomvy.mongodb.net/";
const dbName = "database1";

const client = new MongoClient(url, { useUnifiedTopology: true });

// Middleware para parsear el body de las peticiones
app.use(express.json());

const movieService = async () => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("movies");
  const movies = await collection.find().toArray();
  console.log(movies);
  return movies;
};
// movieService()

const moviesController = async (req, res) => {
  try {
    let movies =  await movieService();
    res.json(movies);
  } catch (error) {
    console.error("Error al obtener movies:", error);
    res.status(500).json({ error: "Error al obtener movies" });
  }
};

// moviesController()
// Endpoint para obtener todos los usuarios
app.get("/", moviesController);
app.listen(3000, () => {
  console.log("servidor iniciado");
});
