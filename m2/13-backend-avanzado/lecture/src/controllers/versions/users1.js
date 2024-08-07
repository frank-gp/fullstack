const usersService = require("../services/usersService.js");

const getUsers = async (req, res) => {
  const users = await usersService.getUsers();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUserById(id);
  res.status(200).json(user);
};

const getuserByName = async (req, res) => {
  const { name } = req.body;
  const user = await usersService.findUserByName(name);
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = await usersService.createUser({ name, email, age });
  res.status(201).json(newUser);
};

const addVehicle = async (req, res) => {
  const { userId, vehicleId } = req.body;
  await usersService.addVehicle({ userId, vehicleId });
  res.status(200).json({ message: "Todo correcto" });
};

module.exports = {
  getUsers,
  getUserById,
  getuserByName,
  createUser,
  addVehicle,
};
