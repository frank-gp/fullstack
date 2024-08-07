const express = require("express");
const indexRouter = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Define a custom token for Morgan to display the client's domain
morgan.token("domain", function (req, res) {
  return req.headers["host"];
});

// Use Morgan middleware with the custom token
app.use(morgan(" :method :status :domain:url :res[content-length] - :response-time ms"));

// app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static("front"));
app.use(indexRouter);

module.exports = app;
