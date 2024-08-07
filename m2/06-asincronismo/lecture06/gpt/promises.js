// Creamos una función que retorna una promesa
function ejemploPromesa() {
  return new Promise((resolve, reject) => {
    // Simulamos una operación asíncrona (en este caso, un temporizador)
    setTimeout(() => {
      const randomNumber = Math.random(); // Generamos un número aleatorio

      // Si el número aleatorio es mayor o igual a 0.5, resolvemos la promesa
      if (randomNumber >= 0.5) {
        resolve("Promesa cumplida"); // Resolvemos la promesa con este mensaje
      } else {
        reject("Promesa rechazada"); // Rechazamos la promesa con este mensaje
      }
    }, 2000); // Simulamos un tiempo de espera de 2 segundos
  });
}

// Llamamos a la función y manejamos los tres posibles estados de la promesa
ejemploPromesa()
  .then((mensaje) => {
    console.log("Estado cumplido:", mensaje); // La promesa se cumplió
  })
  .catch((mensaje) => {
    console.error("Estado rechazado:", mensaje); // La promesa fue rechazada
  })
  .finally(() => {
    console.log("La promesa ha sido resuelta."); // Independientemente del resultado, la promesa ha sido resuelta
  });
