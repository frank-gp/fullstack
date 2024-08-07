import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../products/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  getFileService() {
    return 'getFileService';
  }

  async uploadProductImage(productId: string, url: string) {
    const foundProduct = await this.productsRepository.findOne({
      where: { id: productId },
    });
    if (!foundProduct) {
      throw new NotFoundException('Product not found');
    }

    foundProduct.imgUrl = url;

    return await this.productsRepository.save(foundProduct);
  }
}
