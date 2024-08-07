function operacion(a, b, callback) {
  var resultado = a + b;
  callback(resultado);
}

let funcionCallback = function (resultado) {
  console.log(`El resultado es: ${resultado}`);
};

operacion(5, 3, funcionCallback);
