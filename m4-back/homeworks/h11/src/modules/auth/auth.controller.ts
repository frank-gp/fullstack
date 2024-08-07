// src/auth/auth.controller.ts
import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { SignInDto } from './dtos/signin.dto';
import { SignUpDto } from './dtos/signup.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Body() body: SignUpDto,
    @Res() res: Response,
    //
  ) {
    try {
      const result = await this.authService.signUp(body);
      res.status(HttpStatus.OK).json(result);
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

  @Post('signin')
  async signIn(
    // @Body('email') email: string,
    // @Body('password') password: string,
    @Body() login: SignInDto,
    // @Res() res: Response,
  ) {
    const { email, password } = login;
    return await this.authService.signIn(email, password);
    // if (!email || !password) {
    //   res
    //     .status(HttpStatus.BAD_REQUEST)
    //     .json({ message: 'Email and password are required' });
    //   return;
    // }
    // try {
    //   const result = await this.authService.signIn(email, password);
    //   res
    //     .status(HttpStatus.OK)
    //     .json({ message: 'Successfully signed in', result });
    // } catch (error) {
    //   res
    //     .status(HttpStatus.UNAUTHORIZED)
    //     .json({ message: 'Email or password incorrect' });
    // }
  }
}
