const validateUser = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    // next("Hay un error en el nombre, Faltan datos");
    return res.status(400).json({error: "Falta el dato del nombre (validateUser.js)"})
  } else {
    // console.log("El nombre esta correcto");
    next();
  }
};

module.exports = validateUser;
