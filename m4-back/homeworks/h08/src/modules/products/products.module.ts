import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductService } from './products.service';
import { ProductsRepository } from './products.repository';
import { ProductsDbService } from './productsDb.service';
import { Product } from './products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSeederService } from './product.seed';
import { Category } from '../categories/categories.entity';
import { CategoryService } from '../categories/categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  providers: [
    ProductService,
    ProductsDbService,
    ProductsRepository,
    ProductSeederService,
    CategoryService
  ],
  controllers: [ProductController],
  exports: [ProductSeederService],
})
export class ProductsModule {}
