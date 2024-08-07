import { Test } from '@nestjs/testing';
import { ProductsDbService } from './productsDb.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { NotFoundException } from '@nestjs/common';

describe('ProductsService', () => {
  let productsDbService: ProductsDbService;
  let productsRepository: Repository<Product>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ProductsDbService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    productsDbService = module.get<ProductsDbService>(ProductsDbService);
    productsRepository = module.get<Repository<Product>>(
      getRepositoryToken(Product),
    );
  });

  describe('helloProduct', () => {
    it('should return "hello Product Service"', async () => {
      const result = await productsDbService.helloProduct();
      expect(result).toBe('hello Product Service');
    });
  });

  describe('createProduct', () => {
    it('should create and return a product', async () => {
      const productData = { name: 'Test Product', stock: 10 };
      const savedProduct = { id: '1', ...productData };

      jest
        .spyOn(productsRepository, 'create')
        .mockReturnValue(savedProduct as any);
      jest
        .spyOn(productsRepository, 'save')
        .mockResolvedValue(savedProduct as any);

      const result = await productsDbService.createProduct(productData);
      expect(result).toEqual(savedProduct);
    });
  });

  // describe('getAllProducts', () => {
  //   it('should return paginated products', async () => {
  //     const products = [{ id: '1', name: 'Test Product', stock: 10 }];
  //     const findAndCountSpy = jest
  //       .spyOn(productsRepository, 'findAndCount')
  //       .mockResolvedValue([products, 1]);

  //     const result = await productsDbService.getAllProducts(1, 5);
  //     expect(result.data).toEqual(products);
  //     expect(result.count).toBe(1);
  //     expect(result.currentPage).toBe(1);
  //     expect(result.totalPages).toBe(1);
  //   });
  // });

  describe('findByName', () => {
    it('should return the product with the given name', async () => {
      const product = { id: '1', name: 'Test Product', stock: 10 };
      jest
        .spyOn(productsRepository, 'findOne')
        .mockResolvedValue(product as any);

      const result = await productsDbService.findByName('Test Product');
      expect(result).toEqual(product);
    });
  });

  describe('getProductById', () => {
    it('should return the product with the given id', async () => {
      const product = { id: '1', name: 'Test Product', stock: 10 };
      jest
        .spyOn(productsRepository, 'findOne')
        .mockResolvedValue(product as any);

      const result = await productsDbService.getProductById('1');
      expect(result).toEqual(product);
    });

    it('should throw NotFoundException if the product is not found', async () => {
      jest.spyOn(productsRepository, 'findOne').mockResolvedValue(null);

      await expect(productsDbService.getProductById('1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('updateProduct', () => {
    it('should update and return the product', async () => {
      const product = { id: '1', name: 'Test Product', stock: 10 };
      const updatedProduct = { ...product, name: 'Updated Product' };

      jest
        .spyOn(productsRepository, 'findOne')
        .mockResolvedValue(product as any);
      jest
        .spyOn(productsRepository, 'save')
        .mockResolvedValue(updatedProduct as any);

      const result = await productsDbService.updateProduct('1', {
        name: 'Updated Product',
      });
      expect(result).toEqual(updatedProduct);
    });

    it('should throw NotFoundException if the product is not found', async () => {
      jest.spyOn(productsRepository, 'findOne').mockResolvedValue(null);

      await expect(
        productsDbService.updateProduct('1', { name: 'Updated Product' }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('deleteProduct', () => {
    it('should delete the product and return the result', async () => {
      jest
        .spyOn(productsRepository, 'delete')
        .mockResolvedValue({ affected: 1 } as any);

      const result = await productsDbService.deleteProduct('1');
      expect(result).toEqual({ affected: 1 });
    });

    it('should throw NotFoundException if the product is not found', async () => {
      jest
        .spyOn(productsRepository, 'delete')
        .mockResolvedValue({ affected: 0 } as any);

      await expect(productsDbService.deleteProduct('1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
