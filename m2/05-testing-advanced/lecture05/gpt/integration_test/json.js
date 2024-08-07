// api.js

const fs = require("fs");
const path = require("path");

async function fetchData() {
  try {
    const filePath = path.join(__dirname, "data.json");
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

module.exports = fetchData;
