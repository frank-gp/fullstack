// api.js

const axios = require("axios");

async function fetchData() {
  try {
    const response = await axios.get("https://api.1rodemayo.com/movies");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
// console.log("test");

module.exports = fetchData;
