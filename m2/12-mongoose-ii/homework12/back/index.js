const server = require("./src/server.js");
const dbCon = require("./src/config/dbCon.js");

dbCon()
  .then((res) => {
    server.listen(3000, () => {
      console.info("🚀 Server started on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("❌ Error al conectarse a la base de datos");
  });
