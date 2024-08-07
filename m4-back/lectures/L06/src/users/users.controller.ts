import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  ParseUUIDPipe,
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
// import { IUser } from './user.interfaces';
// import { User as UserEntity } from './users.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { DateAdderInterceptor } from 'src/interceptors/date-adder.interceptor';
import { UsersDbService } from './usersDb.service';
import { CreateUserDto } from './dtos/CreateUser.dto';

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
      return this.usersDbService.getUserByName(name);
    }
    return this.usersDbService.getUsers();
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

  // @HttpCode(418)
  @Get('coffee')
  getCoffee() {
    console.log('62 getCoffee');
    try {
      throw new Error('No se hacer cafe, soy un tetera');
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.I_AM_A_TEAPOT,
          error: 'Envio de caffe fallido',
        },
        HttpStatus.I_AM_A_TEAPOT,
      );
    }
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
  async getUserById(@Param('id', ParseUUIDPipe) id: string) {
    const user = await this.usersDbService.getUserById(id);
    if(!user) {
      throw new NotFoundException('User not found');
    }
    return user
  }

  @Post()
  @UseInterceptors(DateAdderInterceptor)
  createUser(
    @Body() user: CreateUserDto,
    @Req() request: Request & { now: string },
  ) {
    // return this.usersService.createUser(user);
    console.log('88 user', user);
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
