// src/product/product.seed.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { Category } from '../categories/categories.entity';

@Injectable()
export class ProductSeederService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async seed() {
    const products = [
      {
        name: 'Iphone 15',
        description: 'The best smartphone in the world',
        price: 150,
        stock: 12,
        category: 'smartphone',
      },
      {
        name: 'Samsung Galaxy S23',
        description: 'The best smartphone in the world',
        price: 100,
        stock: 12,
        category: 'smartphone',
      },
    ];

    for (const product of products) {
      const category = await this.categoryRepository.findOneBy({ name: product.category });
      if (category) {
        const exists = await this.productRepository.findOneBy({ name: product.name });
        if (!exists) {
          await this.productRepository.save({
            ...product,
            category: category,
          });
        }
      }
    }

    
  }
}
