import {
  Body,
  ConflictException,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CategoryService } from './categories.service';
import { CategorySeederService } from './category.seed';
import { Category } from './categories.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly categorySeederService: CategorySeederService,
  ) {}

  @Post('seeder')
  @HttpCode(HttpStatus.CREATED)
  async seeder() {
    await this.categorySeederService.seed();
    return {
      message: 'categories Database seeding successful',
    };
  }

  @Get()
  async getCategories() {
    return await this.categoryService.getCategories();
  }

  @Post()
  async addCategories(@Body() category: any) {
    try {
      return await this.categoryService.addCategories(category);
    } catch (error) {
      if (error instanceof ConflictException) {
        // Handle the conflict exception and send a custom message
        return {
          statusCode: 409,
          message: error.message,
        };
      }
      // Re-throw the error if it's not a conflict exception
      throw error;
    }
  }
}
