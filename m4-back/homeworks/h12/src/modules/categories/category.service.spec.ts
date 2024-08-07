import { Test } from '@nestjs/testing';
import { CategoryService } from './categories.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';
import { ConflictException } from '@nestjs/common';

describe('CategoryService', () => {
  let categoryService: CategoryService;
  let categoryRepository: Repository<Category>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: getRepositoryToken(Category),
          useClass: Repository,
        },
      ],
    }).compile();

    categoryService = module.get<CategoryService>(CategoryService);
    categoryRepository = module.get<Repository<Category>>(
      getRepositoryToken(Category),
    );
  });

  describe('getCategories', () => {
    it('should return an array of categories', async () => {
      const categories = [{ id: 1, name: 'Category 1' }];
      jest
        .spyOn(categoryRepository, 'find')
        .mockResolvedValue(categories as any);

      const result = await categoryService.getCategories();
      expect(result).toEqual(categories);
    });
  });

  describe('addCategories', () => {
    it('should add and return a category', async () => {
      const category = { id: 1, name: 'Category 1' };
      jest.spyOn(categoryRepository, 'findOne').mockResolvedValue(null);
      jest.spyOn(categoryRepository, 'save').mockResolvedValue(category as any);

      const result = await categoryService.addCategories(category as any);
      expect(result).toEqual(category);
    });

    it('should throw ConflictException if category already exists', async () => {
      const category = { id: 1, name: 'Category 1' };
      jest
        .spyOn(categoryRepository, 'findOne')
        .mockResolvedValue(category as any);

      await expect(
        categoryService.addCategories(category as any),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('findByName', () => {
    it('should return the category with the given name', async () => {
      const category = { id: 1, name: 'Category 1' };
      jest
        .spyOn(categoryRepository, 'findOneBy')
        .mockResolvedValue(category as any);

      const result = await categoryService.findByName('Category 1');
      expect(result).toEqual(category);
    });
  });

  describe('update', () => {
    it('should update the category', async () => {
      const category = { id: 1, name: 'Updated Category' };
      const updateSpy = jest
        .spyOn(categoryRepository, 'update')
        .mockResolvedValue({} as any);

      await categoryService.update(1, category as any);
      expect(updateSpy).toHaveBeenCalledWith(1, category);
    });
  });

  describe('delete', () => {
    it('should delete the category', async () => {
      const deleteSpy = jest
        .spyOn(categoryRepository, 'delete')
        .mockResolvedValue({} as any);

      await categoryService.delete(1);
      expect(deleteSpy).toHaveBeenCalledWith(1);
    });
  });
});
