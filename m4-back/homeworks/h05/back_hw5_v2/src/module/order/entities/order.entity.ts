import { OrderDetailEntity } from 'src/module/order-detail/entities/order-detail.entity';
import { UserEntity } from 'src/module/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // user_id:  (Relación 1:N) con users. ❌ ******
  // user_id:  (Relación N:1) con users. ✅
  @ManyToOne(() => UserEntity, (u) => u.orders, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @CreateDateColumn()
  createdAt: Date;

  // Relación 1:1 con orderDetails.
  @OneToOne(() => OrderDetailEntity, (od) => od.order, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  orderDetails: OrderDetailEntity;
}
