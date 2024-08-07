class CarritoCompra {
  constructor() {
    this.carrito = [];
  }

  agregarProducto(producto) {
    this.carrito.push(producto);
  }

  calcularTotal() {
    let total = 0;

    for (var i = 0; i < this.carrito.length; i++) {
      total += this.carrito[i].price;
    }
    return total;
  }

  aplicarDescuento(porcentaje) {
    const descuento = (porcentaje / 100) * this.calcularTotal();
    const descontado = this.calcularTotal() - descuento;

    return descontado;
  }
}

module.exports = CarritoCompra;
