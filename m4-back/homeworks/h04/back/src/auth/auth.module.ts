// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersRepository } from '../users/users.repository';
import { AuthGuard } from './auth.guard';

@Module({
  providers: [AuthService, AuthGuard, UsersRepository],
  controllers: [AuthController],
})
export class AuthModule {}
