// routes/movieRoutes.js

const express = require('express');
const movieController = require('./controller.js');

const router = express.Router();

router.get('/', movieController.getMovies);

module.exports = router;
