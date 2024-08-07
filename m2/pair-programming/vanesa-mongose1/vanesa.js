/*const express = require('express');
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');


const app = express();
const port = 3000;
const url = process.env.MONGO_URI;
const dbName = 'prueba';

const client = new MongoClient(url, { useUnifiedTopology: true });

// Middleware para parsear el body de las peticiones
app.use(express.json());

// Endpoint para obtener todos los usuarios
app.get('/movies', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('movie');
    const movies = await collection.find().toArray();
    res.json(movies);
  } catch (error) {
    console.error('Error al obtener movies:', error);
    res.status(500).json({ error: 'Error al obtener movies' });
  }
});
app.listen(3000,() => {
    console.log("servidor iniciado");
});*/

const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const url = process.env.MONGO_URI;
const dbName = 'prueba';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conectado a la base de datos');
});

const movieSchema = new mongoose.Schema({
    
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: String,
    rate: Number,
    poster: String,
  
});
const Movie = mongoose.model('Movie', movieSchema);

// Middleware para parsear el body de las peticiones
app.use(express.json());

// Endpoint para obtener todas las películas
app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error('Error al obtener películas:', error);
    res.status(500).json({ error: 'Error al obtener películas' });
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
