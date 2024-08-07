import { CategoryEntity } from 'src/module/category/entities/category.entity';
import { OrderDetailEntity } from 'src/module/order-detail/entities/order-detail.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: 'int', nullable: false })
  stock: number;

  @Column({ type: 'varchar', default: 'https://bit.ly/fgpImg1' })
  imgUrl: string;

  // category_id  (Relación 1:N). ❌ ******
  // category_id  (Relación N:1). ✅ 
  @ManyToOne(() => CategoryEntity, (c) => c.products, {
    eager: true,
    cascade: true,
  })
  category: CategoryEntity;

  // Relación N:N con orderDetails.
  @ManyToMany(() => OrderDetailEntity, (od) => od.products, {
    onDelete: 'CASCADE',
  })
  // @JoinTable({
  //   name: 'ProductOrderDetail',
  //   joinColumn: {
  //     name: 'productId',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'orderDetailId',
  //     referencedColumnName: 'id',
  //   },
  // })
  orderDetails: OrderDetailEntity[];
}
