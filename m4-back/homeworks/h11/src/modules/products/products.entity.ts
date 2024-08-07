import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from '../categories/categories.entity';
import { OrderDetail } from '../order-details/order-details.entity';
// import { OrderDetail } from '../order-details/order-details.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({ length: 50 })
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('int')
  stock: number;

  @Column({ default: 'https://bit.ly/fgpImg1' })
  imgUrl: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @ManyToMany(() => OrderDetail, orderDetail => orderDetail.product_id)
  @JoinTable({name: "product_order_details"})
  orderDetails: OrderDetail[];

  // @CreateDateColumn()
  // createdAt: Date;

  // @UpdateDateColumn()
  // updatedAt: Date;
}

/* 

Products

id: debe ser un valor único generado automáticamente en formato UUID. No puede ser nulo y actúa como la clave primaria de la entidad.
name: debe ser una cadena de texto de máximo 50 caracteres y no puede ser nulo.
description: debe ser un texto y no puede ser nulo.
price: debe ser un número decimal con una precisión de 10 dígitos y una escala de 2 dígitos. No puede ser nulo.
stock: debe ser un valor numérico. No puede ser nulo.
imgUrl: debe ser una cadena de texto, en caso de no recibir un valor debe asignar una imagen por defecto.
category_id  (Relación 1:N).
Relación N:N con orderDetails.

*/