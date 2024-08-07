// ========== services ==========


// ========== controllers ==========


// ========== routes ==========

// ========== server ==========
const app = require("./src/moviesServer.js")

app.listen(3000, () => {
  console.log("server: movies v2 http://localhost:3000");
});
