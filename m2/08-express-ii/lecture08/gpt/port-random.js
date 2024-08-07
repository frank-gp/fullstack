const express = require('express');
const http = require('http');

const app = express();

// Define el manejador de rutas
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Crea un servidor HTTP utilizando Express
const server = http.createServer(app);

// Elige un puerto aleatorio disponible
server.listen(0, () => {
  const port = server.address().port;
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
