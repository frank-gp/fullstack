import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersDbService } from './usersDb.service';
import { User } from './users.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RolesEnum } from '../roles.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersDbService: UsersDbService,
    private readonly jwtService: JwtService,
  ) {}

  async sighUp(user: Omit<User, 'id'>) {
    const dbUser = await this.usersDbService.getUserByEmail(user.email);
    if (dbUser) {
      throw new BadRequestException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    if (!hashedPassword) {
      throw new BadRequestException('Password could not be hashed');
    }

    return this.usersDbService.saveUser({ ...user, password: hashedPassword });
    // return { success: 'User created successfully' };
  }

  async signIn(email: string, password: string) {
    const dbUser = await this.usersDbService.getUserByEmail(email);

    if (!dbUser) {
      throw new BadRequestException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, dbUser.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password');
    }

    const userPayload = {
      sub: dbUser.id,
      id: dbUser.id,
      email: dbUser.email,
      // isAdmin: dbUser.isAdmin,
      roles: [dbUser.isAdmin ? RolesEnum.Admin : RolesEnum.User],
    };
    const token = this.jwtService.sign(userPayload);

    return { success: 'User logged in successfully', token };
  }
}
