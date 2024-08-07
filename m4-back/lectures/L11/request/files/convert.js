/* const fs = require('fs');

fs.readFile('./request/white.jpg', (err, data) => {
  if (err) throw err;

  console.log(data)
  // Convertir el buffer a cadena hexadecimal
  const dataHex = data.toString('hex');

  // Escribir la cadena hexadecimal en un archivo
  fs.writeFile('./request/buffer.txt', dataHex, (err) => {
    if (err) throw err;
    console.log('El archivo nest.txt ha sido guardado correctamente.');
  });
}); */



/* const fs = require('fs');

fs.readFile('./request/nest.jpg', (err, data) => {
  if (err) throw err;

  // data contiene el contenido binario de la imagen JPEG
  console.log(data); // Esto imprimirá el contenido binario en formato Buffer
}); */



const fs = require('fs');

fs.readFile('./request/white.jpg', (err, data) => {
    if (err) throw err;

    // Escribir el contenido binario en un archivo
    fs.writeFile('./request/binary.txt', data, (err) => {
        if (err) throw err;
        console.log('El contenido binario de la imagen se ha guardado en binary.txt');
    });
});


