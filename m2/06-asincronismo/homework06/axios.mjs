import axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

const renderMovieCards = (data) => {
  // Implement renderMovieCards function
  console.log("Rendering movie cards:", data);
};

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// const url = "https://example.com/movies"; // Replace with your actual URL
var url = "https://api.1rodemayo.com/movies";

const fetchDataAndRender = async () => {
  const data = await fetchData(url);
  if (data) {
    renderMovieCards(data);
  } else {
    console.log("Failed to fetch data.");
  }
};

fetchDataAndRender();
