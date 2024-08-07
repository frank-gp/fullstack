import { OrderEntity } from 'src/module/order/entities/order.entity';
import { ProductEntity } from 'src/module/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  totalPrice: number;

  // order_id: Relación 1:1 con orders.
  @OneToOne(() => OrderEntity, (o) => o.orderDetails, {
    onDelete: 'CASCADE',
    nullable: false
  })
  order: OrderEntity;

  // Relación N:N con products.
  @ManyToMany(() => ProductEntity, (p) => p.orderDetails, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  products: ProductEntity[];
}
