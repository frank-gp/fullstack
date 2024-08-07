require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
let dbName = process.platform === "win32" ? "test" : "moviesDB";

const dbCon = async () => {
  try {
    await mongoose.connect(MONGO_URI, { dbName: dbName });
    console.log("✅ Connected to database successfully");
  } catch (error) {
    console.error("❌ Failed to connect to database:", error);
  }
};

module.exports = dbCon;
