// src\services\usersService.js

const User = require("../models/User");

module.exports = {
  getUsers: async () => {
    const users = await User.find({});
    return users;
  },
  createUser: async (name, email) => {
    users.push({ name, email });
    return { name, email };
  },
};
