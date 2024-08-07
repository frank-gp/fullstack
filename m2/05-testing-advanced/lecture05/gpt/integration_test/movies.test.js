// movies.test.js
// npx jest --watchAll gpt/integration_test/movies.test.js

const axios = require('axios');

test('fetching movies from API returns expected data structure', async () => {
  // Make a GET request to the API
  const response = await axios.get('https://api.1rodemayo.com/movies');

  // Assert that the response status is 200 (OK)
  expect(response.status).toBe(200);

  // Assert that the response data is an array
  expect(Array.isArray(response.data)).toBe(true);

  // Assert the structure of each movie object in the response
  response.data.forEach(movie => {
    expect(movie).toHaveProperty('id');
    expect(movie).toHaveProperty('title');
    expect(movie).toHaveProperty('year');
    expect(movie).toHaveProperty('genre');
    expect(movie).toHaveProperty('rate');
    expect(movie).toHaveProperty('poster');
  });
});
