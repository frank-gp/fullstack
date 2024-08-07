// hoisting

console.log(num1);

var num1; // declaracion
num1 = 5; // inicializacion
var num2 = 10;

console.log(num1);

function sumar(a, b) {
  return a + b;
}

function miFunc() {
  var num = 10;
  num1 = 8;
  console.log(num1);
  console.log(num2);
  console.log(num);
}

miFunc();

console.log(num1);
console.log(num2);
// console.log(num);
