// const { getItemsDB } = require("./getItemsDB.js");

const calcTotalMock = (getItemsParameter) => {
  const items = getItemsParameter();

  let total = 0;
  for (const iterator of items) {
    total += iterator.quantity * iterator.price;
  }

  return total;
};

// console.log(calcTotalMock(getItemsDB));

module.exports = { calcTotalMock };
