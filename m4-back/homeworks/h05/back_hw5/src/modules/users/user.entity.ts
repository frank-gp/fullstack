import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Order } from '../orders/orders.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  // @PrimaryGeneratedColumn()
  // id: number;

  @Column({ length: 50 })
  name: string;

  // @Column({ length: 50, unique: true })
  @Column({ length: 50, unique: false })
  email: string;

  @Column({ length: 20 })
  password: string;

  @Column('int')
  phone: number;

  @Column({ length: 50, nullable: true })
  country: string;

  @Column('text', { nullable: true })
  address: string;

  @Column({ length: 50, nullable: true })
  city: string;

  @OneToMany(() => Order, (order) => order.user_id)
  orders: Order[];

  // @CreateDateColumn()
  // createdAt: Date;

  // @UpdateDateColumn()
  // updatedAt: Date;
}
