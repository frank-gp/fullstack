// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:
// constructor(): Inicializa el carrito como un array vacío.
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

const CarritoCompra = require("../index");
const carrito = new CarritoCompra();

/*----------------------------
Implementacion de la clase
----------------------------*/

describe("clase CarritoCompra", () => {
  it("carritoCompra deberia ser una clase", () => {
    expect(carrito instanceof CarritoCompra).toBe(true);
  });
  it("Deberia iniciar con un array vacio", () => {
    expect(carrito.items).toEqual([]);
  });

  it("Deberia tener el metodo agregarProducto", () => {
    expect(typeof carrito.agregarProducto).toBe("function");
  });

  it("Deberia tener el metodo calcularTotal", () => {
    expect(typeof carrito.calcularTotal).toBe("function");
  });

  it("Deberia tener el metodo aplicarDescuento", () => {
    expect(typeof carrito.aplicarDescuento).toBe("function");
  });
});

/*----------------------------
Metodo agregarProductos
----------------------------*/

describe("El metodo agregarProducto", () => {
  it("Deberia recibir como parametro un objeto con la propiedad 'precio'", () => {
    expect(() => carrito.agregarProducto({ producto: "A" })).toThrowError("Debe contener precio y debe ser un numero");
  });

  it("Deberia agregar los productos que se pasan por parametro", () => {
    carrito.agregarProducto({ producto: "A", precio: 500 });
    expect(carrito.items).toEqual([{ producto: "A", precio: 500 }]);
  });

  it("Deberia manejar bien los errores con el objeto que recibe", () => {
    expect(() => carrito.agregarProducto("No soy un objeto")).toThrowError("El articulo es incorrecto");
  });
});

/*----------------------------
Metodo calcularTotal
----------------------------*/

describe("El metodo calcularTotal", () => {
  let carrito;
  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it("Deberia regresar el total de la compra de los elementos en el carrito", () => {
    carrito.agregarProducto({ producto: "A", precio: 500 });
    carrito.agregarProducto({ producto: "B", precio: 800 });
    expect(carrito.calcularTotal()).toEqual(1300);
  });
});

/*-----------------------------
Metodo aplicarDescuento
-----------------------------*/

describe("El metodo aplicarDescuento", () => {
  let carrito;
  beforeEach(() => {
    carrito = new CarritoCompra();
  });
  it("Deberia recibir como parametro un valor numerico", () => {
    expect(() => carrito.aplicarDescuento(true)).toThrowError("El valor recibido debe ser un numero");

    expect(() => carrito.aplicarDescuento("20")).toThrowError("El valor recibido debe ser un numero");
  });

  it("Deberia calcular el descuento en base al parametro recibido y retornar el nuevo precio", () => {
    carrito.agregarProducto({ producto: "A", precio: 500 });
    carrito.calcularTotal();
    expect(carrito.aplicarDescuento(10)).toEqual(450);
  });
});
