// En este modulo van a estar la funciones que establece la LOGICA DE NEGOCIO de cada una de las

// Para esa ruta GET /users =>

// Vamos a ir a la base de datos a pedir la informacion de los usuarios
// Y responder al cliente con la informacion obtenida

const userController = (req, res) => {
  //   console.log("Estamos recibiendo un solicitud");
  res.status(200).send("Estamos recibiendo un solicitud para obtener datos de usuarios");
};

const postController = (req, res) => {
  //   console.log("Estamos recibiendo un solicitud");
  res.status(200).send("Estamos enviando informacion sobre post");
};

module.exports = { userController, postController };
