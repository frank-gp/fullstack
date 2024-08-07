import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}
  getProducts() {
    const dbProducts = this.productsRepository.getProducts();
    return dbProducts;
  }
}
