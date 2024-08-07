// order-detail.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn, ManyToMany } from 'typeorm';
import { Order } from '../orders/orders.entity';
import { Product } from '../products/products.entity';
import { v4 as uuid } from 'uuid';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  // @Column('decimal', { precision: 10, scale: 2 })
  // price: number;

  // @ManyToOne(() => Order, (order) => order.orderDetails)
  // order_id: Order;

  // @ManyToOne(() => Product)
  // products: Product;
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ManyToOne(() => Order, (order) => order.orderDetails)
  @JoinColumn({ name: 'order_id' }) // Explicitly specify the foreign key column name
  order_id: Order;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' }) // Explicitly specify the foreign key column name
  product_id: Product;

  // @ManyToMany(() => Product)
  // @JoinColumn({ name: 'product_id' }) // Explicitly specify the foreign key column name
  // product_id: Product;
}

/* 

OrderDetails

id: debe ser un valor único generado automáticamente en formato UUID. No puede ser nulo y actúa como la clave primaria de la entidad.
price: debe ser un número decimal con una precisión de 10 dígitos y una escala de 2 dígitos. No puede ser nulo. 
order_id: Relación 1:1 con orders.
Relación N:N con products.

 */
