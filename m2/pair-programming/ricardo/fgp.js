const express = require("express");

const app = express();

app.use(express.json());

let tempData = [];

app.get("/movies", (req, res) => {
  res.json(tempData);
});

app.post("/movies", (req, res) => {
  const object1 = req.body;
  const { title } = object1;
  if (title) {
    console.log(title);

    tempData.push(object1);
    res.send("success");
  } else {
    res.send("el titulo no existe");
  }
});

app.listen(3000, console.log("http://127.0.0.1:3000/movies"));
