import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersDbService } from './usersDb.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UsersDbService, UsersRepository],
  controllers: [UserController],
})
export class UsersModule {}
