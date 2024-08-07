import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersDbService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.usersRepository.find();
  }

  getUserByName(name: string) {
    return this.usersRepository.findOne({ where: { name } });
  }

  saveUser(user: Omit<User, 'id'>) {
    return this.usersRepository.save(user);
  }

  getUserById(id: string) {
    return this.usersRepository.findOne({ where: { id } });
  }

  getUserByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }
}
