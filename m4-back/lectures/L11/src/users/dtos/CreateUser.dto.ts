import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User name description',
    example: 'Fabrizio',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'User email description',
    example: 'fabrizio@gmail.com',
  })
  email: string;

  /**
  *la contraseña, debe ser una contraseña dificil de encontrar
  @example Strong!(Password
  */
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  // @ApiProperty({
  //   description: 'User password description',
  //   example: '123456',
  // })
  password: string;

  @IsEmpty()
  @ApiProperty({
    description: 'User isAdmin description',
    example: false,
  })
  isAdmin: boolean;
}
