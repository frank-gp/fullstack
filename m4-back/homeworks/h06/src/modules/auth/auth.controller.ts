// src/auth/auth.controller.ts
import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { SignInDto } from './signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signIn(
    // @Body('email') email: string,
    // @Body('password') password: string,
    @Body() login: SignInDto,
    @Res() res: Response,
  ) {
    const { email, password } = login;
    if (!email || !password) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'Email and password are required' });
      return;
    }
    try {
      await this.authService.signIn(email, password);
      res.status(HttpStatus.OK).json({ message: 'Successfully signed in' });
    } catch (error) {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Email or password incorrect' });
    }
  }
}
