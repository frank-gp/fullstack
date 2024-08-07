import { Injectable } from '@nestjs/common';

/* 
Users

id:number
email: string
name: string
password: string
address: string
phone: string
country?: string | undefined
city?: string | undefined
 */

@Injectable()
export class UsersRepository {
  private users = [
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

  async getUsers() {
    return this.users;
  }
}
