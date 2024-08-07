import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductService } from './products.service';
import { ProductsRepository } from './products.repository';

@Module({
  providers: [ProductService, ProductsRepository],
  controllers: [ProductController],
})
export class ProductsModule {}
