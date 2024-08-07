// api.test.js
// npx jest --watchAll gpt/integration_test/json.test.js

const fetchData = require("./json.js");

test("fetchData returns data from data.json", async () => {
  const data = await fetchData();
  expect(data).toEqual({ key: "value" });
});
