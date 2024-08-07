const nombre: string = "Henry";

const apellido: string = "Perez";

const edad: number = 23;

console.log(nombre.toUpperCase());
console.log(apellido.toUpperCase());

const alive: boolean = true;

const numPares: string[] = ["2", "4", "6", "8"];

const parabras: string[] = ["hola", "mundo"];

const numeros: number[] = [];

numeros.push(1);
numeros.push(10);

let unaVariable: any = "Hola";
unaVariable = 5;
unaVariable = true;

const sumarNumeros = (arr: number[]) => {
  let suma: number = 0;
  for (const num of arr) suma += num;
  return suma;
};
