const axios = require("axios");

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

// Los métodos de axios siempre retornan una promesa
// Cuando axios realiza una solicitud y obtiene un resultado favorable axios resuelve...
// Cuando axios realiza una solicitud y No obtiene resultado favorable axios rechaza


// Importante para lo metodos POST!

axios.post(apiUrl, {
    title: "Lo que el viento se llevó",
    year: "1989",
});

axios.put(apiUrl, {})

axios.delete(apiUrl, {})