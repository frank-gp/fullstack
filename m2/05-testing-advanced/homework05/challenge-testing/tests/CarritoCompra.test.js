/* 
npx jest --watchAll challenge-testing/tests/CarritoCompra.test.js
 */

const CarritoCompra = require("../index.js");

var producto1 = { nombre: "Producto 1", precio: 10 };
let newCarrito;

beforeEach(() => {
  newCarrito = new CarritoCompra();
});

describe("Suit: CarritoCompra", () => {
  //

  it("A1: agregarProducto()", () => {
    var producto1 = { nombre: "Producto 1", precio: 10 };
    newCarrito.agregarProducto(producto1);
    expect(newCarrito.productos).toEqual([producto1]);
    expect(newCarrito.productos.length).toBe(1);
    expect(newCarrito.productos[0]).toBe(producto1);
  });

  it("A2: calcularTotal()", () => {
    const productos = [
      { nombre: "Producto 1", precio: 10 },
      { nombre: "Producto 2", precio: 20 },
      { nombre: "Producto 3", precio: 30 },
    ];
    productos.forEach((producto) => newCarrito.agregarProducto(producto));
    expect(newCarrito.calcularTotal()).toBe(60);
  });

  it("A3: aplicarDescuento()", () => {
    newCarrito.productos = [
      { nombre: "Producto 1", precio: 10 },
      { nombre: "Producto 2", precio: 20 },
    ];

    const porcentajeDescuento = 10; // 10%
    const totalConDescuento = newCarrito.aplicarDescuento(porcentajeDescuento);
    expect(totalConDescuento).toBe(27); // 10% de descuento en $30 (total de la compra)
  });
});

describe("Suit B: Optional", () => {
  // ========== optional ==========

  it("leng", () => {
    expect(newCarrito.productos).toHaveLength(0);
    expect(newCarrito.productos).toEqual([]);
    expect(newCarrito.productos).not.toEqual([{}]);
  });

  it("error", () => {
    var productoError = { nombre: "Producto 1", precio: "string" };
    let agregarError = () => newCarrito.agregarProducto(productoError);

    expect(agregarError).toThrow("no es un numero");
    expect(agregarError).toThrowError("no es un numero");
  });

  it("Instance", () => {
    expect(newCarrito instanceof CarritoCompra).toBe(true);
    expect(newCarrito).toBeInstanceOf(CarritoCompra);
  });

  it("toBeDefined", () => {
    expect(newCarrito.calcularTotal()).toBeDefined();
    expect(newCarrito.agregarProducto).toBeDefined();
    //
    expect(Array.isArray(newCarrito.productos)).toBeTruthy();
  });

  it("typeof", () => {
    expect(typeof CarritoCompra).toBe("function");
    expect(typeof newCarrito).toBe("object");
    expect(typeof newCarrito.agregarProducto).toBe("function");
    expect(typeof newCarrito.calcularTotal).toBe("function");
    expect(typeof newCarrito.aplicarDescuento).toBe("function");
  });
});
