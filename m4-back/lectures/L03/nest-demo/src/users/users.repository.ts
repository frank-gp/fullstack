import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private users = [
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
}
