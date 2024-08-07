const nombre = "Jorge";

const saludar = (name: string): string => {
  return `Hola ${name}`;
};

console.log(saludar(nombre));

saludar("Pedro");
saludar("Maria");

const calcularTotal = (quantity: number, price: number):number => {
  return quantity * price;
};
calcularTotal(5, 10);