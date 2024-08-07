const mongoose = require("mongoose");

const dbCon = async () => {
  // realizar la conexion con la base de datos
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = dbCon;
