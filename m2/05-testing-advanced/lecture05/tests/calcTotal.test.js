// it("true is true", () => expect(true).toBe(true));

const { calcTotal } = require("../calcTotal.js");

describe("suit test", () => {
  //
  it("total 1 item", () => {
    const array1 = [{ name: "Product A", price: 10, quantity: 2 }];
    expect(calcTotal(array1)).toEqual(20);
  });
  //
  it("total 3 items", () => {
    const array2 = [
      { name: "Product A", price: 10, quantity: 2 },
      { name: "Product B", price: 20, quantity: 3 },
      { name: "Product C", price: 30, quantity: 4 },
    ];
    expect(calcTotal(array2)).toEqual(20 + 60 + 120);
  });
  //
  it("err: invalid invoice with array empty", () => {
    expect(() => calcTotal([])).toThrowError("invalid invoice");
  });
});
