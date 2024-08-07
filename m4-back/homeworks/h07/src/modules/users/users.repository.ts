import { Injectable } from '@nestjs/common';
import { IUser } from './users.interfaces';

@Injectable()
export class UsersRepository {
  private users: IUser[] = [
    {
      id: 1,
      email: 'user@gmail.com',
      name: 'User 1',
      password: '123',
      address: 'address 1',
      phone: '123456789',
      country: 'country 1',
      city: 'city 1',
    },
    {
      id: 2,
      email: 'user2@gmail.com',
      name: 'User 2',
      password: '123',
      address: 'address 2',
      phone: '123456789',
      country: 'country 2',
      city: 'city 2',
    },
  ];

  async getUsers(page: number, limit: number): Promise<IUser[]> {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedUsers = this.users.slice(startIndex, endIndex);
    return paginatedUsers;
    // const start = (page - 1) * limit;
    // return this.users.slice(start, start + limit);
  }

  async getUserById(id: number): Promise<IUser | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async createUser(user: Omit<IUser, 'id'>): Promise<number> {
    let id = this.users.length + 1;
    // const id =      this.users.length > 0 ? Math.max(...this.users.map((u) => u.id)) + 1 : 1;

    const newUser: IUser = { id, ...user };
    this.users.push(newUser);
    return newUser.id;
  }

  async updateUser(id: number, user: Partial<IUser>): Promise<number | null> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...user };
      return id;
    }
    return null; // Devuelve null si el usuario no se encuentra
  }

  async deleteUser(id: number): Promise<number | null> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return id;
    }
    return null; // Devuelve null si el usuario no se encuentra
  }

  async findUserByEmail(email: string): Promise<IUser | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
