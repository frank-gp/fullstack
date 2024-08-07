// src/modules/users/users.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  HttpStatus,
  Res,
  UseGuards,
  NotFoundException,
  BadRequestException,
  UseInterceptors,
  Req,
  HttpException,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './users.service';
import { Response } from 'express';
import { IUser } from './users.interfaces';
import { UserWithoutPassword } from './user.types';
import { AuthGuard } from '../auth/auth.guard';
import { UsersDbService } from './usersDb.service';
import { User as UserEntity } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { DateAdderInterceptor } from 'src/interceptors/date-adder.interceptor';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Roles } from './decorator/roles.decorator';
import { RolesEnum } from './enum/roles.enum';
import { RolesGuard } from './roles.guard';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly usersDbService: UsersDbService,
  ) {}

  @Get()
  @Roles(RolesEnum.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  // @UsePipes(new ValidationPipe({ transform: true }))
  async getUsers(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 5,
    @Res() res: Response,
  ) {
    try {
      const users = await this.usersDbService.getAllUsers(page, limit);
      // return users;

      res.status(HttpStatus.OK).json(users);
    } catch (error) {
      // throw new BadRequestException(error.message);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async getUser(@Param('id', ParseUUIDPipe) id: string, @Res() res: Response) {
    try {
      // const user = await this.userService.getUserById(Number(id));
      const user = await this.usersDbService.getUserById(id);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      res.status(HttpStatus.OK).json(user);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post()
  @UseInterceptors(DateAdderInterceptor)
  async createUser(
    @Body() user: CreateUserDto,
    @Res() res: Response,
    @Req() req: Request & { now: string },
  ) {
    console.log('76 req.now', req.now);
    try {
      const savedUser = await this.usersDbService.saveUser(user);
      res.status(HttpStatus.CREATED).json(savedUser);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() user: UpdateUserDto,
    @Res() res: Response,
  ) {
    try {
      // const updatedId = await this.userService.updateUser(Number(id), user);
      const updatedId = await this.usersDbService.updateUser(id, user);
      if (updatedId === null) {
        throw new NotFoundException('User not found');
      }
      res.status(HttpStatus.OK).json({ id: updatedId });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() res: Response,
  ) {
    try {
      // const deletedId = await this.userService.deleteUser(Number(id));
      const deletedId = await this.usersDbService.deleteUser(id);
      if (deletedId === null) {
        throw new NotFoundException('User not found');
      }
      res.status(HttpStatus.OK).json({ id });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
