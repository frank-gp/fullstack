## movies-0-server

servidor basico de express js

```javascript
const express = require("express");

const app = express();

app.listen(3000);
```

## movies-1-api

API basica con express js

```javascript
const express = require("express");
const tempData = require("./tempData.js");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! | movies 1");
});

app.get("/movies", (req, res) => {
  res.json(tempData);
});

app.listen(3000, () => {
  console.log("Server movies-1 in http://localhost:3000");
});
```

## movies-2-routes

Modularizacion a "routes"

```javascript
const express = require("express");
const tempData = require("./tempData.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! | Movies 2");
});

router.get("/movies", (req, res) => {
  res.json(tempData);
});

module.exports = router;

```

## movies-3-services

Modularizacion a "services"

```javascript
const tempData = require("./tempData.js");

function getMovies() {
  return tempData;
}

module.exports = {
  getMovies,
};
```

## movies-4-controllers

Modularizacion a "controllers"

```javascript
const services = require("./services.js");
// const { getMovies } = require("./services.js");

services.getMovies();

const helloWordController = (req, res) => {
  res.send("Hello World! | Movies 3");
};

const getMoviesController = (req, res) => {
  // const movies = getMovies();
  const movies = services.getMovies();
  res.json(movies);
};

module.exports = { helloWordController, getMoviesController };
```
