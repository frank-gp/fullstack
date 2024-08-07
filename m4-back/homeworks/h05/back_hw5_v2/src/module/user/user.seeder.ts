import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

const userDemo = {
  id: 'userdemo-0001-abcd-efgh-36characters',
  name: 'User Demo',
  email: 'User_Demo@User_Demo.com',
  password: 'PassWord_Demo',
  phone: 123456789,
  country: 'Viet Nam',
  address: 'HCM',
};

@Injectable()
export class UserSeeder {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    // this.seed();
  }

  async seed() {
    console.log('UserSeeder');
    const existUser = await this.userRepository.find();
    if (existUser.length > 0) return console.log('user already exist');
    const saveUser = await this.userRepository.save(userDemo);
    // console.log('saveUser', saveUser);
  }
}
