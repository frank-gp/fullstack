import { Injectable } from '@nestjs/common';
import { IUser } from './user.interfaces';

@Injectable()
export class UsersRepository {
  private users: IUser[] = [
    {
      id: 1,
      name: 'Bartolomaiu',
      email: 'barto@mail.com',
    },
    {
      id: 2,
      name: 'Kamil',
      email: 'kamil@mail.com',
    },
    {
      id: 3,
      name: 'Henry',
      email: 'henry@mail.com',
    },
  ];

  async getUsers() {
    return this.users;
  }

  async getById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  async getByName(name: any) {
    return this.users.find((user) => user.name === name);
  }

  async createUser(user: Omit<IUser, 'id'>) {
    const id = this.users.length + 1;
    this.users = [...this.users, { id, ...user }];
    return { id, ...user };
  }
}
