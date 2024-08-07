import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorySeed } from 'src/module/category/category.seed';
import { CategoryEntity } from 'src/module/category/entities/category.entity';
import { ProductEntity } from 'src/module/product/entities/product.entity';
import { ProductSeed } from 'src/module/product/product.seed';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, ProductEntity])],
  providers: [CategorySeed, ProductSeed],
})
export class SeederModule {
  constructor(
    private readonly categorySeed: CategorySeed,
    private readonly productSeed: ProductSeed,
  ) {
    // console.log('SeederModule');
    this.seed();
  }

  private async seed() {
    await this.categorySeed.seedCategory();
    await this.productSeed.seedProduct();
  }
}
