const add = require("../add.js");

describe("func add()", () => {
  //
  test("return null", () => {
    expect(add(1, true)).toBe(null);
    expect(add(false, 10)).toBe(null);
    expect(add(1, "string")).toBe(null);
  });

  it("return result", () => {
    expect(add(2, 2)).toBe(4);
    expect(add(-8, 8)).toBe(0);
  });
});
