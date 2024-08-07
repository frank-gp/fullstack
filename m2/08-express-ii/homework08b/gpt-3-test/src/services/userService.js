class UserService {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user) {
    const nextId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    const newUser = { id: nextId, ...user };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id, updatedUser) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
      return this.users[index];
    }
    return null;
  }

  deleteUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = UserService;
