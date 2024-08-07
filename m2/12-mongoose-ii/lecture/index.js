const dbCon = require("./src/config/dbCon");
const app = require("./src/server.js");

dbCon().then(() => {
  app.listen(3001, () => {
    console.log("Servidor escuchando en el puerto 3001");
  });
});
