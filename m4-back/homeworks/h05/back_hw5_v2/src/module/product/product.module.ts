import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { ProductSeed } from './product.seed';
import { CategoryEntity } from '../category/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, ProductEntity])],
  controllers: [ProductController],
  providers: [ProductService, ProductSeed],
})
export class ProductModule {
  constructor(private readonly productSeed: ProductSeed) {
    // this.seed();
  }
  // private seed = async () => {
  //   await this.productSeed.seedProduct();
  // };
  private async seed() {
    // console.log('categorySeed', categorySeed);
    await this.productSeed.seedProduct();
  }
}
