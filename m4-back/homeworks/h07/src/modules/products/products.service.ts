// src/products/product.service.ts
import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { IProduct } from './products.interfaces';

@Injectable()
export class ProductService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async createProduct(product: Omit<IProduct | any, 'id'>): Promise<number> {
    return await this.productsRepository.createProduct(product);
  }

  async getAllProducts(
    page: number = 1,
    limit: number = 5,
  ): Promise<IProduct[]> {
    return await this.productsRepository.getProducts(page, limit);
  }

  async getProductById(id: number): Promise<IProduct> {
    return await this.productsRepository.getProductById(id);
  }

  async updateProduct(id: number, product: Partial<IProduct>): Promise<number> {
    return await this.productsRepository.updateProduct(id, product);
  }

  async deleteProduct(id: number): Promise<number> {
    return await this.productsRepository.deleteProduct(id);
  }
}
