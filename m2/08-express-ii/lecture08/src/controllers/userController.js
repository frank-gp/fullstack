const usersService = require("../services/usersService.js");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await usersService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "error interno del servidor " });
    }
  },

  createUser: async (req, res) => {
    const { name } = req.body;
    console.log(name)
    try {
      await usersService.createUser(name);
      res.status(201).json({message: "usuario creado correctamente"});
      // res.status(200).json(name)
    } catch (error) {
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  },
};
