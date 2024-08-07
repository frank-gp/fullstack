const express = require("express");
const movieRoutes = require("./routes.js");

const app = express();
const port = 3000;

// Usar las rutas de películas
app.use("/movies", movieRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
