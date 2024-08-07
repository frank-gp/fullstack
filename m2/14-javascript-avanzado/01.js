// Contexto de ejecucion

console.log("Hola, esto es una ejecución");

// pila de ejecucion
const sumar = (a, b) => {
  console.log("Estamos sumando números");
  return a + b;
};

const restar = (a, b) => a - b;

sumar(4, 5);

restar(5, 1);

sumar(4, 8);

console.log("Hemos finalizado");
