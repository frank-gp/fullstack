import { Test, TestingModule } from '@nestjs/testing';
import { FileService } from './file.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from '../products/products.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

describe('FileService', () => {
  let fileService: FileService;
  let productsRepository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FileService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    fileService = module.get<FileService>(FileService);
    productsRepository = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  describe('getFileService', () => {
    it('should return "getFileService"', () => {
      const result = fileService.getFileService();
      expect(result).toBe('getFileService');
    });
  });

  describe('uploadProductImage', () => {
    it('should upload product image and return updated product', async () => {
      const productId = '1';
      const url = 'http://example.com/image.jpg';
      const product = { id: productId, name: 'Product 1', imgUrl: null };

      jest.spyOn(productsRepository, 'findOne').mockResolvedValue(product as any);
      jest.spyOn(productsRepository, 'save').mockResolvedValue({ ...product, imgUrl: url } as any);

      const result = await fileService.uploadProductImage(productId, url);
      expect(result).toEqual({ ...product, imgUrl: url });
    });

    it('should throw NotFoundException if product is not found', async () => {
      const productId = '1';
      const url = 'http://example.com/image.jpg';

      jest.spyOn(productsRepository, 'findOne').mockResolvedValue(null);

      await expect(fileService.uploadProductImage(productId, url)).rejects.toThrow(NotFoundException);
    });
  });
});
