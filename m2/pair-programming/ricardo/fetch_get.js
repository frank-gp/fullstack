const express = require("express");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    const apiUrl = "http://api.1rodemayo.com/movies";

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("No se pudo obtener la respuesta de la API");
    }

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    res.status(500).send("Error al obtener datos de la API");
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
