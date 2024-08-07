const add = require("../add.js");

const mockAdd = jest.fn(add);

describe("func add()", () => {
  //
  test("return null", () => {
    expect(mockAdd(1, true)).toBe(null);
    expect(mockAdd(false, 10)).toBe(null);
    expect(mockAdd(1, "string")).toBe(null);
  });

  it("return result", () => {
    expect(mockAdd(10, 15)).toBe(25);
    expect(mockAdd(-8, 8)).toBe(0);
    expect(mockAdd(-20, -30)).toBe(-50);
    console.log(mockAdd.mock);
  });

  it("register 10 and 15", () => {
    expect(mockAdd).toHaveBeenCalledWith(10, 15);
  });
});
