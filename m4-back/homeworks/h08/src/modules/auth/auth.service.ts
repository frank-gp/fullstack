// src/auth/auth.service.ts
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { SignUpDto } from './dtos/signup.dto';
import * as bcrypt from 'bcrypt';
import { UsersDbService } from '../users/usersDb.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly usersDbService: UsersDbService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(bodyObject: SignUpDto) {
    const foundUser = await this.usersDbService.findUserByEmail(
      bodyObject.email,
    );
    if (foundUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(bodyObject.password, 10);
    if (!hashedPassword) {
      throw new BadRequestException('Password could not be hashed');
    }

    const user = await this.usersDbService.saveUser({
      ...bodyObject,
      password: hashedPassword,
    });
    const { password, ...userRest } = user;
    return { success: 'User created successfully', result: userRest };
  }

  // ==========  ==========
  async signIn(email: string, password: string) {
    const foundUser = await this.usersDbService.findUserByEmail(email);
    if (!foundUser) {
      throw new BadRequestException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, foundUser.password);
    console.log("isPasswordValid", isPasswordValid)
    if (!isPasswordValid) {
      throw new BadRequestException('Wrong password');
    }

    const userPayload = {
      sub: foundUser.id,
      id: foundUser.id,
      email: foundUser.email,
      //
    };
    const token = this.jwtService.sign(userPayload);

    return { success: 'User logged in successfully', token };
  }
}
