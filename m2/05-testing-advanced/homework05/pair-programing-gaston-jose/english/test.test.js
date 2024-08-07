const ShoppingCart = require("../index");

describe("ShoppingCart", () => {
  let newShoppingCart;

  beforeEach(() => {
    newShoppingCart = new ShoppingCart();
  });

  afterEach(() => {
    // Clean up any changes made to the cart after each test
    newShoppingCart = null;
  });

  describe("Initialize the cart", () => {
    it("Initializes it with an empty array", () => {
      expect(newShoppingCart.cart).toEqual([]);
    });

    it("Checks if it's a class", () => {
      expect(typeof ShoppingCart).toBe("function");
    });

    it("Checks if it has the addProduct method", () => {
      expect(newShoppingCart.addProduct).toBeDefined();
    });
  });

  describe("Receive an object representing a product", () => {
    const Product1 = { name: "Product 1", price: 30, quantity: 2 };

    it("Receives it and adds it to the cart", () => {
      newShoppingCart.addProduct(Product1);
      expect(newShoppingCart.cart).toContain(Product1);
    });
  });

  describe("Calculate the total of the purchase", () => {
    const Product1 = { name: "Product 1", price: 30, quantity: 2 };
    const Product2 = { name: "Product 2", price: 50, quantity: 4 };
    const Product3 = { name: "Product 3", price: 90, quantity: 6 };

    it("Summing the prices of all products", () => {
      newShoppingCart.addProduct(Product1);
      newShoppingCart.addProduct(Product2);
      newShoppingCart.addProduct(Product3);
      expect(newShoppingCart.calculateTotal()).toEqual(30 * 2 + 50 * 4 + 90 * 6);
    });
  });

  describe("Apply a discount to the total purchase", () => {
    const Product1 = { name: "Product 1", price: 30, quantity: 2 };
    newShoppingCart.addProduct(Product1);

    it("According to a specified discount", () => {
      expect(newShoppingCart.applyDiscount(10)).toBeLessThanOrEqual(54); // 10% discount of 60
    });
  });
});
