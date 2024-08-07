const { default: axios } = require("axios");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! 3005");
});

app.get("/users", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data.map((user) => {
        return { name: user.name, email: user.email };
      });
    })
    .then((users) => {
      res.send(users);
    });
});

app.listen(3005, () => {
  console.log("Listening on port 3005");
});
