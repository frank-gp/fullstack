const express = require("express");
const router = require("./routes/");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("estamos pasando por mi propio middleware");
  next();
});

app.use(router);

module.exports = app;
