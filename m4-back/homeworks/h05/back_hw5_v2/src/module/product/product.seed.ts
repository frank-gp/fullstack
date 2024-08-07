import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CategoryEntity } from '../category/entities/category.entity';
import * as productSeed from '../../seed/data/products-seeder.json';

@Injectable()
export class ProductSeed {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async seedProduct() {
    const existProduct = await this.productRepository.find();
    if (existProduct.length > 0) return console.log('product already exist');

    for (const element of productSeed) {
      const foundCategory = await this.categoryRepository.findOneBy({
        name: element.category,
      });

      const saveProduct = await this.productRepository.save({
        ...element,
        category: foundCategory,
      });
    }

    const [firstProduct] = await this.productRepository.find({ take: 1 });

    // console.log('firstProduct', firstProduct);

    const lastProduct = await this.productRepository.find({
      order: { id: 'DESC' },
      relations: ['orderDetails', 'category'],
      take: 1,
    });

    // console.log('lastProduct', lastProduct);
  }
}
