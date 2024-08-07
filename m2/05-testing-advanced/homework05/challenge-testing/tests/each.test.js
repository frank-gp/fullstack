let variable1 = "000 empty";

beforeEach(() => {
  variable1 = "variable1: 111 beforeEach";
});

afterEach(() => {
  variable1 = "variable1: 222 afterEacha";
});
describe("Suite: ShoppingCart", () => {
  test("Testing beforeEach & afterEach", () => {
    console.log(variable1); // Mostrará "variable1: beforeEach"
    expect(true).toBe(true);
    console.log(variable1); // Mostrará "variable1: afterEach"
  });
});
