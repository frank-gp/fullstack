// src/category/category.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories.entity';
import { CategoryService } from './categories.service';
import { CategorySeederService } from './category.seed';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService, CategorySeederService],
  controllers: [CategoriesController],
  exports: [CategorySeederService],
})
export class CategoryModule {}
