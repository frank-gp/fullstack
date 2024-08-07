import { ProductEntity } from 'src/module/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  // Relación: N:1 con products. ❌ ******
  // Relación: 1:N con products. ✅
  @OneToMany(() => ProductEntity, (product) => product.category, {
    onDelete: 'CASCADE',
  })
  products: ProductEntity[];
}
