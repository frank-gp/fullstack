// src/users/user.service.ts
import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserWithoutPassword } from './user.types';
import { IUser } from './users.interfaces';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(user: Omit<IUser, 'id'>): Promise<number> {
    return await this.usersRepository.createUser(user);
  }

  async getAllUsers(
    page: number = 1,
    limit: number = 5,
  ): Promise<UserWithoutPassword[]> {
    const users = await this.usersRepository.getUsers(page, limit);
    return users.map(({ password, ...rest }) => rest);
  }

  async getUserById(id: number): Promise<UserWithoutPassword | undefined> {
    const user = await this.usersRepository.getUserById(id);
    if (!user) return undefined;
    const { password, ...rest } = user;
    return rest;
  }

  async updateUser(id: number, user: Partial<IUser>): Promise<number | null> {
    return await this.usersRepository.updateUser(id, user);
  }

  async deleteUser(id: number): Promise<number | null> {
    return await this.usersRepository.deleteUser(id);
  }

  async findUserByEmail(email: string): Promise<IUser | undefined> {
    return await this.usersRepository.findUserByEmail(email);
  }
}
