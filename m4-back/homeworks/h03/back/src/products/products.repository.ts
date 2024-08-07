import { Injectable } from '@nestjs/common';

/* 
Products

id:number
name: string
description: string
price: number
stock: boolean
imgUrl: string

 */

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

  async getProducts() {
    return this.products;
  }
}
