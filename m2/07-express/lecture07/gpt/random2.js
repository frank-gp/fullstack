const express = require("express");

const app = express();

// Define el manejador de rutas
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});


// ========== port random ==========
const http = require("http");

// Intenta escuchar en el puerto 3000
const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

// Manejar el evento de error si el puerto 3000 está ocupado
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    // Puerto 3000 está ocupado, selecciona un puerto aleatorio disponible
    server.listen(0, () => {
      const port = server.address().port;
      console.log(`El servidor está escuchando en el puerto ${port}`);
    });
  } else {
    // Otro tipo de error
    console.error("Error al iniciar el servidor:", err);
  }
});
