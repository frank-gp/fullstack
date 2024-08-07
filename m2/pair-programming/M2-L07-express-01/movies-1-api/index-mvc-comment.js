// Importing Express library
const express = require("express");

// Creating an Express application instance
const app = express();

// services
// Function to fetch movie data from temporary data source
function getMoviesServices() {
  // Importing temporary data module
  const tempData = require("./tempData.js");
  return tempData; // Returning fetched movie data
}

// controllers
// Controller for handling root route ("/") requests
const helloWordController = (req, res) => {
  res.send("Hello World! | movies-1/index-mvc"); // Sending "Hello World!" response
};

// Controller for handling "/movies" route requests
const getMoviesController = (req, res) => {
  // Fetching movies data
  const movies = getMoviesServices();
  res.json(movies); // Sending JSON response with fetched movies data
};

// routes
// Creating a router instance
const routes = express.Router();
// Defining routes
routes.get("/", helloWordController); // Handling root ("/") route
routes.get("/movies", getMoviesController); // Handling "/movies" route

// Using the defined routes
app.use("/", routes);

//server
// Starting the server on port 3000
app.listen(3000, () => {
  console.log("Server movies-1/index-mvc in http://localhost:3000"); // Logging server start message
});
