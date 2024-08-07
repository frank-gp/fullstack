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

  async saveUser(user: any/* Omit<User, 'id'> */)/* : Promise<User>  */{
    return await this.usersRepository.save(user);
  }

  async getAllUsers(page: number, limit: number): Promise<User[]> {
    const [result, total] = await this.usersRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return result;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ 
      where: { id },
      relations: ['orders'],
     });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
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
    console.log("48 deleteUser")
    const deleteResult = await this.usersRepository.delete(id);
    console.log("46 deleteResult", deleteResult);
    if (deleteResult.affected === 0) {
      return null;
    }
    return deleteResult;
  }
}
