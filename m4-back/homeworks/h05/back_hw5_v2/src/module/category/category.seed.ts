import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export const categorySeed: Partial<CategoryEntity>[] = [
  {
    id: 'category-0001-abcd-efgh-36characters',
    name: 'smartphone',
  },
  {
    id: 'category-0002-abcd-efgh-36characters',
    name: 'monitor',
  },
  {
    id: 'category-0003-abcd-efgh-36characters',
    name: 'keyboard',
  },
  {
    id: 'category-0004-abcd-efgh-36characters',
    name: 'mouse',
  },
];

@Injectable()
export class CategorySeed {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async seedCategory() {
    for (const element of categorySeed) {
      const existCategory = await this.categoryRepository.findOneBy({
        name: element.name,
      });
      // if (existCategory) throw new Error('category already exist');
      if (existCategory) continue;

      const saveCategory = await this.categoryRepository.save(element);

      // console.log('saveCategory', saveCategory);
    }

    const findCategory = await this.categoryRepository.find({ take: 1 });
    // console.log('findCategory', findCategory);
    return findCategory;
  }
}
