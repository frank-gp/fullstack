// const { getItemsDB } = require("../getItemsDB.js");
const { calcTotalMock } = require("../calcTotalMock.js");

const getItemsDB_Mock = jest.fn(() => {
  return [
    { name: "Product A", price: 10, quantity: 2 },
    { name: "Product B", price: 5, quantity: 3 },
  ];
});

describe("func calcTotalMock()", () => {
  it("run getItemsDB", () => {
    calcTotalMock(getItemsDB_Mock);
    expect(getItemsDB_Mock).toHaveBeenCalled();
  });
});
