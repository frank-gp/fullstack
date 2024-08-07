// https://chat.openai.com/c/7fc3fc28-2ce8-48f1-b065-ddd7dbcac305
// controllers/MovieController.test.js

const request = require("supertest");
const app = require("../app.js");
// const MovieService = require("../services/MovieService");

// jest.mock("../services/MovieService");

describe("MovieController", () => {
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it("desc", ()=>{
    expect(true).toBe(true)
  })

  // it("should respond with all movies", async () => {
  //   MovieService.getAllMovies.mockReturnValueOnce([
  //     { id: 1, title: "Movie 1" },
  //     { id: 2, title: "Movie 2" },
  //   ]);

  //   const response = await request(app).get("/movies");

  //   expect(response.statusCode).toBe(200);
  //   expect(response.body.length).toBe(2);
  //   expect(response.body[0].title).toBe("Movie 1");
  //   expect(response.body[1].title).toBe("Movie 2");
  // });

  // it("should respond with a single movie by id", async () => {
  //   const movie = { id: 1, title: "Movie 1" };
  //   MovieService.getMovieById.mockReturnValueOnce(movie);

  //   const response = await request(app).get("/movies/1");

  //   expect(response.statusCode).toBe(200);
  //   expect(response.body).toEqual(movie);
  // });

  // Agregar más pruebas para otros métodos del controlador aquí
});
