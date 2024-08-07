// src/category/category.service.ts
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  //   async findOne(id: number): Promise<Category> {
  //     return this.categoryRepository.findOneBy({ id });
  //   }

  // async addCategories(category: Category): Promise<Category> {
  //   return this.categoryRepository.save(category);
  // }
  async addCategories(category: Category): Promise<Category> {
    // Check if the category already exists
    const existingCategory = await this.categoryRepository.findOne({ where: { name: category.name } });

    if (existingCategory) {
        // If the category exists, throw a conflict exception
        throw new ConflictException('Category already exists');
    }

    // If the category doesn't exist, save and return it
    return this.categoryRepository.save(category);
  }


  async update(id: number, category: Category): Promise<void> {
    await this.categoryRepository.update(id, category);
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
