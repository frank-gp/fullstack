// api.test.js
// npx jest --watchAll gpt/integration_test/api.test.js

const fetchData = require('./api');

test('fetchData returns data from API', async () => {
  const data = await fetchData();
  expect(data).toBeDefined();
});

// test('fetchData handles API errors gracefully', async () => {
//   jest.spyOn(console, 'error').mockImplementation(() => {});
//   const data = await fetchData();

//   // Check if data is null or undefined, indicating an error
//   expect(data).toBeNull();
//   expect(console.error).toHaveBeenCalled();
// });
