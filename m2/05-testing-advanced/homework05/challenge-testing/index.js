class CarritoCompra {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    const { nombre, precio } = producto;

    if (typeof precio != "number") throw Error("no es un numero");

    this.productos.push(producto);
  }

  calcularTotal() {
    // const sum = this.productos.reduce((total, value) => {
    //   return total + value.precio;
    // }, 0);

    const sum = this.productos.reduce((accumulator, currentValue) => {
      //   console.log(accumulator, currentValue);
      return accumulator + currentValue.precio;
    }, 0);

    // let total = 0;
    // for (const producto of this.productos) {
    //   total += producto.precio;
    // }
    // return total;
    return sum;
  }

  aplicarDescuento(porcentaje) {
    const total = this.calcularTotal();
    const descuento = (total * porcentaje) / 100;
    return total - descuento;
  }
}

module.exports = CarritoCompra;
