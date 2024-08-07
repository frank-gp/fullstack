import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { IUser } from './user.interfaces';
import { User as UserEntity } from './users.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { DateAdderInterceptor } from 'src/interceptors/date-adder.interceptor';
import { UsersDbService } from './usersDb.service';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersDbService: UsersDbService,
  ) {}

  @Get()
  getUsers(@Query('name') name?: string) {
    if (name) {
      return this.usersService.getUserByName(name);
    }
    return this.usersService.getUsers();
  }

  @Get('profile')
  getUserProfile(@Headers('token') token?: string) {
    if (token !== '1234') {
      return 'No autorizado';
    }
    return 'This action returns a user profile';
  }

  @Get('profile/images')
  @UseGuards(AuthGuard)
  getUserImages() {
    return 'This action returns a user images';
  }

  @HttpCode(418)
  @Get('coffee')
  getCoffee() {
    return 'No se hacer cafe, soy un tetera';
  }

  @Get('message')
  getMessage(@Res() response: Response) {
    response.status(200).send('Hola mundo');
  }

  @Get('request')
  getRequest(@Req() request: Request) {
    console.log(request);
    return 'This action returns a request 123';
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  @UseInterceptors(DateAdderInterceptor)
  createUser(
    @Body() user: UserEntity,
    @Req() request: Request & { now: string },
  ) {
    // return this.usersService.createUser(user);
    return this.usersDbService.saveUser({ ...user, createdAt: request.now });
  }

  @Put()
  updateUser() {
    return 'This action updates a user';
  }

  @Delete()
  deleteUser() {
    return 'This action deletes a user';
  }
}