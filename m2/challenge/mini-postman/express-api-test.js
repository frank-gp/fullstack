const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/api", (req, res) => {
  console.log(req.body);
  // res.send(req.body);
  res.json({ message: "Data get successfully", data: req.body });

});

app.post("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.put("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.delete("/api", (req, res) => {
  console.log(req.body);
  // res.send(req.body);
  res.json({ message: "Data deleted successfully", data: req.body });

});

app.listen(3000, console.log("Server express-api-test.js is running on http://127.0.0.1:3000"));
