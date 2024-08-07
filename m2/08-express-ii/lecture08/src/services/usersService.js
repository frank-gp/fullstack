// usersService.js
const users = [
  {
    id: 1,
    name: "Jorge",
  },
  {
    id: 2,
    name: "Belu",
  },
  {
    id: 3,
    name: "Alejo",
  },
];
let id = 4
module.exports = {
  getUsers: async () => {
    return users;
  },
  createUser: async (name) => {
    const newUser = {
      id,
      name,
    };
    id++;
    users.push(newUser);
  },
};
