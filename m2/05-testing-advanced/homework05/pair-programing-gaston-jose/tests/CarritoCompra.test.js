const CarritoCompra = require("../index");
let newCarritoCompra;
beforeEach(() => {
  newCarritoCompra = new CarritoCompra();
});

describe("Inicializa el carrito", () => {
  console.log(newCarritoCompra);
  it("Lo inicializa con un array vacio", () => {
    expect(newCarritoCompra.carrito).toEqual([]);
  });
  it("verificar si es clase", () => {
    expect(typeof newCarritoCompra).toBe("object");
    expect(typeof CarritoCompra).toBe("function");
  });
  it("verificar si tiene metodo agregarProducto", () => {
    expect(newCarritoCompra.agregarProducto).toBeDefined();
  });
});

describe("Recibe un objeto representando un producto", () => {
  it("Lo recibe y lo agrega al carrito", () => {
    const Producto1 = { name: "producto 1", price: 30, quantity: 2 };
    expect(newCarritoCompra.agregarProducto(Producto1)).not.toEqual([]);
  });
});

describe("Calcula el total de la compra", () => {
  const Producto1 = { name: "producto 1", price: 30, quantity: 2 };
  const Producto2 = { name: "producto 2", price: 50, quantity: 4 };
  const Producto3 = { name: "producto 3", price: 90, quantity: 6 };
  it("Sumando los precios de todos los productos", () => {
    newCarritoCompra.agregarProducto(Producto1);
    newCarritoCompra.agregarProducto(Producto2);
    newCarritoCompra.agregarProducto(Producto3);
    expect(newCarritoCompra.calcularTotal()).toEqual(Producto1.price + Producto2.price + Producto3.price); // el 30 es momentaneo
  });
});

describe("Aplicar un descuento al total de la compra", () => {
  it("Segun un descuento especificado", () => {
    expect(newCarritoCompra.aplicarDescuento(10)).toBeLessThanOrEqual(225);
  });
});
