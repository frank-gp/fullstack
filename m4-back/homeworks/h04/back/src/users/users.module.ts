import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { UsersRepository } from './users.repository';

@Module({
  providers: [UserService, UsersRepository],
  controllers: [UserController],
})
export class UsersModule {}
