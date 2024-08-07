const express = require("express");
const UserService = require("../services/userService");

const router = express.Router();
const userService = new UserService();

router.get("/", async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", (req, res) => {
  const user = userService.getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.post("/", (req, res) => {
  const newUser = userService.createUser(req.body);
  res.status(201).json(newUser);
});

router.put("/:id", (req, res) => {
  const updatedUser = userService.updateUser(req.params.id, req.body);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.delete("/:id", (req, res) => {
  const result = userService.deleteUser(req.params.id);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;
