const fs = require("node:fs");

fs.readFile("./fs-demo.md", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
