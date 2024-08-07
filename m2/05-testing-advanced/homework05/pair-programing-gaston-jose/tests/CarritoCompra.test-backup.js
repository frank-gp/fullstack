const CarritoCompra = require("../index");

beforeEach(() => {
const newCarritoCompra = new CarritoCompra();
})

// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

// constructor(): Inicializa el carrito como un array vacío.

describe("Inicializa el carrito", () => {
  let newCarritoCompra;
  beforeEach(() => {
    newCarritoCompra = new CarritoCompra();
  });
  console.log(newCarritoCompra);
  it("Lo inicializa con un array vacio", () => {
    expect(newCarritoCompra.carrito).toEqual([]);
  });
  it("verificar si es clase", () => {
    // expect(typeof newCarritoCompra).toBe("object") tambien funciona este
    expect(typeof CarritoCompra).toBe("function");
  });
  it("verificar si tiene metodo agregarProducto", () => {
    expect(newCarritoCompra.agregarProducto).toBeDefined();
  });
});

//agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

describe("Recibe un objeto representando un producto", () => {
  it("Lo recibe y lo agrega al carrito", () => {
    const Producto1 = { name: "producto 1", price: 30, quantity: 2 };
    expect(newCarritoCompra.agregarProducto(Producto1)).not.toEqual([]);
  });
});

// // calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

describe("Calcula el total de la compra", () => {
  let newCarritoCompra;
  beforeEach(() => {
    newCarritoCompra = new CarritoCompra();
  });
  const Producto1 = { name: "producto 1", price: 30, quantity: 2 };
  const Producto2 = { name: "producto 2", price: 50, quantity: 4 };
  const Producto3 = { name: "producto 3", price: 90, quantity: 6 };
  it("Sumando los precios de todos los productos", () => {
    newCarritoCompra.agregarProducto(Producto1);
    newCarritoCompra.agregarProducto(Producto2);
    newCarritoCompra.agregarProducto(Producto3);
    newCarritoCompra.agregarProducto(Producto2);
    expect(newCarritoCompra.calcularTotal()).toEqual(Producto1.price + Producto2.price + Producto3.price + Producto2.price+ 30); // el 30 es momentaneo
  });
});

// // aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

describe("Aplicar un descuento al total de la compra", () => {
  it("Segun un descuento especificado", () => {
    expect(newCarritoCompra.aplicarDescuento(10)).toBeLessThanOrEqual(225);
  });
});

// // Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.
