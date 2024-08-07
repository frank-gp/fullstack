const express = require('express');
const request = require('supertest');
const movieRoutes = require('../routes/movieRoutes');

// Crear una instancia de Express para las pruebas
const app = express();
app.use(express.json());
app.use('/movies', movieRoutes);

describe('MovieController', () => {
  it('should respond with all movies', async () => {
    // Simular datos en MovieService si es necesario
    // MovieService.getAllMovies.mockReturnValueOnce([...]);

    const response = await request(app).get('/movies');

    expect(response.statusCode).toBe(200);
    // Agregar más expectativas según corresponda
  });

  it('should respond with a single movie by id', async () => {
    // Simular datos en MovieService si es necesario
    // MovieService.getMovieById.mockReturnValueOnce(...);

    const response = await request(app).get('/movies/1');

    expect(response.statusCode).toBe(200);
    // Agregar más expectativas según corresponda
  });

  // Agregar más pruebas según sea necesario
});
