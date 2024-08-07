const express = require("express");
const routes = require("./routes");

const app = express();

// Routes
app.use("/", routes);

app.listen(3000, () => {
  console.log(`Server movies-3 in http://localhost:3000`);
});
