// routes/exampleRoutes.js

const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.getExampleData);

module.exports = router;
