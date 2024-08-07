const request = require("supertest");
const app = require("../src/app");

describe("User API", () => {
  it("should create a new user", async () => {
    const res = await request(app).post("/users").send({ name: "John Doe", email: "john@example.com" });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual("John Doe");
    expect(res.body.email).toEqual("john@example.com");
  });

  it("should get all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // it('should update an existing user', async () => {
  //     const createUserRes = await request(app)
  //         .post('/users')
  //         .send({ name: 'Jane Doe', email: 'jane@example.com' });

  //     const res = await request(app)
  //         .put(`/users/${createUserRes.body.id}`)
  //         .send({ name: 'Jane Smith' });

  //     expect(res.statusCode).toEqual(200);
  //     expect(res.body.name).toEqual('Jane Smith');
  // });

  // it('should delete an existing user', async () => {
  //     const createUserRes = await request(app)
  //         .post('/users')
  //         .send({ name: 'John Smith', email: 'johnsmith@example.com' });

  //     const res = await request(app).delete(`/users/${createUserRes.body.id}`);
  //     expect(res.statusCode).toEqual(204);
  // });

  it("should handle getting a non-existent user", async () => {
    const res = await request(app).get("/users/nonexistent");
    expect(res.statusCode).toEqual(404);
  });

  it("should handle updating a non-existent user", async () => {
    const res = await request(app).put("/users/nonexistent").send({ name: "Test" });
    expect(res.statusCode).toEqual(404);
  });

  it("should handle deleting a non-existent user", async () => {
    const res = await request(app).delete("/users/nonexistent");
    expect(res.statusCode).toEqual(404);
  });
});
