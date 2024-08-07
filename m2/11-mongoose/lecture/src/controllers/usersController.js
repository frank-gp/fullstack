const usersService = require("../services/usersService.js");

module.exports = {
  getUsers: async (req, res) => {
    const users = await usersService.getUsers();
    res.status(200).json(users);
  },

  createUser: async (req, res) => {
    const { name, email } = req.body;
    const newUser = await usersService.createUser(name, email);
    res.status(201).json(newUser);
  },
};
