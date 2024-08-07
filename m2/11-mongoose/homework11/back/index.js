const server = require("./src/server.js");
const dbCon = require("./src/config/dbCon.js");

dbCon()
  .then((res) => {
    server.listen(3000, () => {
      console.info("start server");
    });
  })
  .catch((err) => {
    console.log("Error al conectarse a la base de datos");
  });
