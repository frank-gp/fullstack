const { default: axios } = require("axios");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! " + new Date().toString());
});

app.get("/users", (req, res) => {
  axios
    .get("http://host.docker.internal:3005/users")
    .then((response) => {
      res.send({ from_localhost: response.data });
    })
    .catch((error) => {
      res.send({ error: error });
    });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
