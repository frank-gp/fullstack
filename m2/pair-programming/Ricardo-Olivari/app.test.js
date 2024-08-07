describe("suit 1", () => {
  it("Test 1", () => {
    expect(true).toBe(true);
  });

  it.skip("Test 2", () => {
    expect(true).toBe(true);
  });

  it.only("Test 3", () => {
    expect(true).toBe(true);
  });

  test.only("Test 4", () => {
    function divide(dividendo, divisor) {
      if (divisor === 0) {
        throw new Error("No se puede dividir por cero");
      }
      return dividendo / divisor;
    }

    expect(() => {
      divide(10, 0);
    }).toThrow("No se puede dividir por cero");
  });
});

/*
DOCUMENTATION:

#install jest global mode
npm i -g jest

#run jest
npx jest app.test.js
npx jest --watchAll app.test.js
*/
