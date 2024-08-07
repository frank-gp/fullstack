// src/products/dto/create-product.dto.ts

import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
  IsUrl,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(100, { message: 'El nombre no debe superar los 100 caracteres' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'La descripción es requerida' })
  @MinLength(5, { message: 'La descripción debe tener al menos 5 caracteres' })
  @MaxLength(500, {
    message: 'La descripción no debe superar los 500 caracteres',
  })
  description: string;

  @IsNumber()
  @Min(0, { message: 'El precio debe ser al menos 0' })
  price: number;

  @IsNumber()
  @Min(0, { message: 'El stock debe ser al menos 0' })
  stock: number;

  @IsString()
  @IsNotEmpty({ message: 'La categoría es requerida' })
  @MinLength(3, { message: 'La categoría debe tener al menos 3 caracteres' })
  @MaxLength(50, { message: 'La categoría no debe superar los 50 caracteres' })
  category: string;

  @IsUrl({}, { message: 'La URL de la imagen debe ser válida' })
  imgUrl: string;
}
