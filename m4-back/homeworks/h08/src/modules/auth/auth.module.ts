// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersRepository } from '../users/users.repository';
import { AuthGuard } from './auth.guard';
import { UsersDbService } from '../users/usersDb.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService, AuthGuard, UsersRepository, UsersDbService],
  controllers: [AuthController],
})
export class AuthModule {}
