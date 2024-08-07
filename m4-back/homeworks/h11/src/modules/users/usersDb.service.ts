// src/modules/users/usersDb.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersDbService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async saveUser(user: any) {
    return await this.usersRepository.save(user);
  }

  async getAllUsers(page: number, limit: number) {
    const [result, total] = await this.usersRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    const newResult = result.map((user) => {
      const { password, ...restUser } = user;
      return restUser;
    });

    return newResult;
  }

  async getUserById(id: string) /* : Promise<User> */ {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: ['orders'],
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const { password, isAdmin, ...restUser } = user;

    return restUser;
  }

  findUserByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  async updateUser(id: string, userData: Partial<any>): Promise<User | null> {
    const userFound = await this.usersRepository.findOne({ where: { id } });
    if (!userFound) {
      return null;
    }
    Object.assign(userFound, userData);
    return await this.usersRepository.save(userFound);
  }

  async deleteUser(id: string): Promise<any | null> {
    const deleteResult = await this.usersRepository.delete(id);
    if (deleteResult.affected === 0) {
      return null;
    }
    return deleteResult;
  }
}
