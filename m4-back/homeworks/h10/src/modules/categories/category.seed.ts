// src/category/category.seed.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';

@Injectable()
export class CategorySeederService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async seed() {
    const categories = [
      { name: 'smartphone' },
      { name: 'monitor' },
      { name: 'keyboard' },
      { name: 'mouse' },
      // Agrega más categorías si es necesario
    ];

    for (const category of categories) {
      const exists = await this.categoryRepository.findOneBy({ name: category.name });
      if (!exists) {
        await this.categoryRepository.save(category);
      }
    }
  }
}
