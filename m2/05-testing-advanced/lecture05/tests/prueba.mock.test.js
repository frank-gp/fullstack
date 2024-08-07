it("true is true", () => expect(true).toBe(true));

const sumar = (a, b) => {
  return a + b;
};

it("sumar", () => {
  expect(sumar(2, 2)).toBe(4);
});

const mockSumar = jest.fn(sumar);

it("sumar", () => {
  expect(mockSumar(2, 2)).toBe(4);
});

it("test", () => {
  const database1 = [1, 2, 3, 4];

  const mockDatabase = jest.fn(() => {
    return [
      { name: "Product A", price: 10, quantity: 2 },
      { name: "Product B", price: 5, quantity: 3 },
    ];
  });

//   mockDatabase.push(5);

  console.log(mockDatabase);
  expect(true).toBe(true);
});
