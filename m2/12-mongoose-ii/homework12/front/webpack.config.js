module.exports = {
  entry: "./scripts/index.js",

  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  // other webpack configuration settings...
  // mode: "development", // or 'production' or 'none'
  mode: "production", // or 'production' or 'none'
};
