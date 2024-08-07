// src/users/dto/create-user.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsNumberString,
} from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(80, { message: 'El nombre no debe superar los 80 caracteres' })
  @ApiProperty({
    description: 'User name description',
    example: 'New User 1',
  })
  name: string;

  @IsEmail(
    {},
    { message: 'El correo electrónico debe tener una estructura válida' },
  )
  @IsNotEmpty({ message: 'El correo electrónico es requerido' })
  @ApiProperty({
    description: 'User email description',
    example: 'user1@gmail.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @MaxLength(15, { message: 'La contraseña no debe superar los 15 caracteres' })
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, {
    message:
      'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*',
  })
  @ApiProperty({
    description: 'User password description',
    example: 'P4ss123@',
  })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'La dirección es requerida' })
  @MinLength(3, { message: 'La dirección debe tener al menos 3 caracteres' })
  @MaxLength(80, { message: 'La dirección no debe superar los 80 caracteres' })
  @ApiProperty({
    description: 'User address description',
    example: 'Calle 123',
  })
  address: string;

  @IsNumberString({}, { message: 'El número de teléfono debe ser un número' })
  @IsNotEmpty({ message: 'El número de teléfono es requerido' })
  @ApiProperty({
    description: 'User phone description',
    example: '123456789',
  })
  phone: string;

  @IsString()
  @IsNotEmpty({ message: 'El país es requerido' })
  @MinLength(5, { message: 'El país debe tener al menos 5 caracteres' })
  @MaxLength(20, { message: 'El país no debe superar los 20 caracteres' })
  @ApiProperty({
    description: 'User country description',
    example: 'Colombia',
  })
  country: string;
  
  @IsString()
  @IsNotEmpty({ message: 'La ciudad es requerida' })
  @MinLength(5, { message: 'La ciudad debe tener al menos 5 caracteres' })
  @MaxLength(20, { message: 'La ciudad no debe superar los 20 caracteres' })
  @ApiProperty({
    description: 'User city description',
    example: 'Bogotá',
  })
  city: string;
}
