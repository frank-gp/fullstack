import { Injectable } from '@nestjs/common';
import { IProduct } from './products.interfaces';

@Injectable()
export class ProductsRepository {
  private products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'desc 1',
      price: 100,
      stock: true,
      imgUrl: 'url 1',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'desc 2',
      price: 200,
      stock: false,
      imgUrl: 'url 2',
    },
  ];

  async getProducts(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedUsers = this.products.slice(startIndex, endIndex);
    return paginatedUsers;
  }

  async getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  async createProduct(product: Omit<IProduct, 'id'>) {
    let id = this.products.length + 1;
    const newProduct = { id, ...product };
    this.products.push(newProduct);
    return newProduct.id;
  }

  async updateProduct(id: number, product: Partial<IProduct>) {
    const index = this.products.findIndex((prod) => prod.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...product };
      return id;
    }
    return null;
  }

  async deleteProduct(id: number) {
    const index = this.products.findIndex((prod) => prod.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return id;
    }
    return null;
  }
}
