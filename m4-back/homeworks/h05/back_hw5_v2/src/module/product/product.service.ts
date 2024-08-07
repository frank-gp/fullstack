import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../category/entities/category.entity';
import * as productSeed from '../../seed/data/products-seeder.json';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.save(createProductDto);
  }

  async findAll() {
    return this.productRepository.find();
  }

  async findOne(id: string) {
    return this.productRepository.findOneBy({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    if (this.findOne(id)) throw new NotFoundException('Product not found');
    return this.productRepository.save({ ...updateProductDto, id });
  }

  async remove(id: string) {
    return this.productRepository.delete(id);
  }

  async removeAll() {
    return this.productRepository.delete({});
  }

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

    console.log('firstProduct', firstProduct);

    const lastProduct = await this.productRepository.find({
      order: { id: 'DESC' },
      relations: ['orderDetails', 'category'],
      take: 1,
    });

    // console.log('lastProduct', lastProduct);
  }
}
