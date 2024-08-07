const CarritoCompra = require("./index");

const carritoCompra = new CarritoCompra();
// * constructor(): Inicializa el carrito como un array vacío.
describe("Tests de la clase CarritoCompra", () => {
  it("Debe verificar si CarritoCompra permite instanciar objetos", () => {
    expect(new CarritoCompra()).toBeInstanceOf(CarritoCompra);
  });

  it("Debe inicalizar el carrito como un array vacio", () => {
    expect(carritoCompra.productos).toEqual([]);
  });

  it("Debe validar que contenga la funcion 'agregarProducto'", () => {
    expect(typeof carritoCompra.agregarProducto).toEqual("function");
  });

  it("Debe validar que contenga la funcion 'calcularTotal'", () => {
    expect(typeof carritoCompra.calcularTotal).toEqual("function");
  });

  it("Debe validar que contenga la funcion 'aplicarDescuento'", () => {
    expect(typeof carritoCompra.aplicarDescuento).toEqual("function");
  });
});

// * agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
describe("Tests de la funcion 'agregarProducto'", () => {
  it("Debe validar que reciba un objeto por parametro", () => {
    expect(() => carritoCompra.agregarProducto(123)).toThrow(
      "El parámetro debe ser un objeto"
    );
    expect(() => carritoCompra.agregarProducto(null)).toThrow(
      "El parámetro debe ser un objeto"
    );
  });

  it("Debe agregar el producto al carrito", () => {
    const producto = { name: "Producto", price: 10 };
    carritoCompra.agregarProducto(producto);
    expect(carritoCompra.productos).toContain(producto);
  });
});

// * calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
describe("Tests de la funcion 'calcularTotal'", () => {
  it("Debe validar que el producto tenga las propiedades 'price' y 'quantity'", () => {
    carritoCompra.productos = [
      { name: "Producto1", price: 20, quantity: 1 },
      { name: "Producto2", price: 30, quantity: 2 },
      { name: "Producto3", price: 50, quantity: 4 },
    ];
    expect(carritoCompra.validarObjetos(carritoCompra.productos)).toBe(true);
  });

  it("Debe calcular el total de la compra sumando los precios de todos los productos en el carrito", () => {
    expect(
      carritoCompra.calcularTotal([
        { name: "Producto1", price: 20, quantity: 1 },
        { name: "Producto2", price: 30, quantity: 2 },
        { name: "Producto3", price: 50, quantity: 4 },
      ])
    ).toEqual(280);
  });
});

// * aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
describe("Tests de la funcion 'aplicarDescuento'", () => {
  it("Debe verificar que reciba un numero por parametro", () => {
    expect(() => carritoCompra.aplicarDescuento([])).toThrow(
      "El parámetro debe ser un numero"
    );
    expect(() => carritoCompra.aplicarDescuento(null)).toThrow(
      "El parámetro debe ser un numero"
    );
  });

  it("Debe aplicar un descuento al total de la compra según el porcentaje especificado", () => {
    expect(carritoCompra.aplicarDescuento(4)).toEqual(268.8);
  });

  it("debe arrojar un error si el descuento es mayor al 50%", () => {
    expect(() => carritoCompra.aplicarDescuento(100)).toThrowError(
      "El descuento no puede ser mayor al 50%"
    );
  });
});
