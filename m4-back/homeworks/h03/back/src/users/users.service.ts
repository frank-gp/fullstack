import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async getUsers() {
    const dbUsers = await this.usersRepository.getUsers();
    return dbUsers;
  }
}
