// Import Axios library
const axios = require('axios');

// Define the URL endpoint you want to make a request to
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request to the specified URL
axios.get(apiUrl)
  .then(response => {
    // Handle successful response
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });
