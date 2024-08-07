const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Ruta principal
app.get('/', (req, res) => {
    // URL de la API
    const apiUrl = 'http://api.1rodemayo.com/movies';

    // Realizar la solicitud GET a la API
    axios.get(apiUrl)
        .then(response => {
            // Enviar los datos obtenidos de la API como respuesta a la solicitud HTTP
            res.json(response.data);
        })
        .catch(error => {
            // Manejar errores
            console.error('Error al obtener datos de la API:', error);
            // Enviar un mensaje de error como respuesta
            res.status(500).send('Error al obtener datos de la API');
        });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
