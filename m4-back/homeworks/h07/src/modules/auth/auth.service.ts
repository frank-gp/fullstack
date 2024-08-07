// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signIn(email: string, password: string): Promise<void> {
    const user = await this.usersRepository.findUserByEmail(email);
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Email or password incorrect');
    }
    // Aquí se debería implementar la lógica de generación de tokens
  }
}
