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
  // console.log(movies);
  return movies;
};
// movieService()

const moviesController = async (req, res) => {
  try {
    let movies = await movieService();
    res.json(movies);
  } catch (error) {
    console.error("Error al obtener movies:", error);
    res.status(500).json({ error: "Error al obtener movies" });
  }
};

// Endpoint para obtener todos los usuarios
app.get("/", moviesController);

// Endpoint para agregar una nueva película
app.post("/", async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection("movies");
    // const newMovie = req.body; // Assuming the request body contains the movie object
    const newMovie = req.body; // Assuming the request body contains the movie object
    const result = await collection.insertOne(newMovie);
    console.log(result);
    // console.log("New movie added:", result.ops[0]);
    res.json({ message: "successful" });
    // res.status(201).json(result.ops[0]);
  } catch (error) {
    console.error("Error al agregar nueva película:", error);
    res.status(500).json({ error: "Error al agregar nueva película" });
  }
});


app.listen(3000, () => {
  console.log("servidor iniciado");
});
