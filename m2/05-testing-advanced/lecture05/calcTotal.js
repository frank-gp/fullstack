const add = (a, b) => {
  // return typeof a !== "number" || typeof b !== "number" ? a + b : null;
  if (typeof a !== "number" || typeof b !== "number") return null;
  return a + b;
};

const calcTotal = (arrayParameter) => {
  if (!arrayParameter.length) throw Error("invalid invoice");

  let total = 0;

  for (const iterator of arrayParameter) total += iterator.quantity * iterator.price;

  return total;
};

module.exports = { add, calcTotal };
