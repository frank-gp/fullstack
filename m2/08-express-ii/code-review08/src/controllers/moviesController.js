// ========== src\controllers\moviesController.js ==========

// const {showMessage} = require('../services/showMessage')

// import showMessage from "../services/showMessage.js";
// import showMessage, { showMessage2 as alias } from "../services/showMessage.js";
import { getMovies } from "../services/moviesServices.js";

const moviesController = async (req, res) => {
  try {
    // res.send(await showMessage());
    res.json(await getMovies());
    // res.send(await getMovies())
  } catch (error) {
    console.log("error", error.message);
    res.status(404).json({ error: "hola esta ruta no existe" });
  }
};

// module.exports = {moviesController}

export { moviesController };
