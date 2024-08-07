const usersService = require("../services/usersService.js");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await usersService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await usersService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getuserByName: async (req, res) => {
    try {
      const { name } = req.body;
      const user = await usersService.findUserByName(name);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const newUser = await usersService.createUser({ name, email, age });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addVehicle: async (req, res) => {
    try {
      const { userId, vehicleId } = req.body;
      await usersService.addVehicle({ userId, vehicleId });
      res.status(200).json({ message: "Todo correcto" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
