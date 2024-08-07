import { Inject, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { IUser } from './user.interfaces';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    @Inject('API_USERS') private apiUsers: IUser[],
  ) {}

  async getUsers() {
    const dbUsers = await this.usersRepository.getUsers();
    const users = [...dbUsers, ...this.apiUsers];
    return users;
  }

  getUserById(id: number) {
    return this.usersRepository.getById(id);
  }

  getUserByName(name: string) {
    return this.usersRepository.getByName(name);
  }

  createUser(user: Omit<IUser, 'id'>): Promise<IUser> {
    return this.usersRepository.createUser(user);
  }
}
