const add = (a, b) => {
  // return typeof a !== "number" || typeof b !== "number" ? a + b : null;
  if (typeof a !== "number" || typeof b !== "number") return null;
  return a + b;
};

module.exports = add;
