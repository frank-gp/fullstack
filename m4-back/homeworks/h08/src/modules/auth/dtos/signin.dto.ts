// src/auth/dto/signin.dto.ts

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class SignInDto {
  @IsEmail(
    {},
    { message: 'El correo electrónico debe tener una estructura válida' },
  )
  @IsNotEmpty({ message: 'El correo electrónico es requerido' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  @MinLength(3, { message: 'La contraseña debe tener al menos 3 caracteres' })
  password: string;
}
