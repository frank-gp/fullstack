// ========== src\routes\moviesRouter.js ==========
// const express = require("express");
import express from "express";
import { moviesController } from "../controllers/moviesController.js";
import { validateMovie } from "../middlewares/moviesMiddleware.js";

// const app = express()
// Create a new router
const router = express.Router();

const prueba = (req, res, next) => {
  next();
};

((req, res, next) => {
  console.log("prueba 2");
})();

// router.get("/movies", validateMovie, moviesController);
router.get("/movies", moviesController);
router.get("/movies/:id", validateMovie, prueba, moviesController);
router.post("/movies/:id", moviesController);

// common js
// module.exports = {router}

//ECMAScript  module
export { router };
