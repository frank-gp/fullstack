class ShoppingCart {
  constructor() {
    this.cart = [];
  }

  addProduct(product) {
    this.cart.push(product);
  }

  calculateTotal() {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  applyDiscount(percent) {
    const total = this.calculateTotal();
    const discount = (total * percent) / 100;
    return total - discount;
  }
}

module.exports = ShoppingCart;
