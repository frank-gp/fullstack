import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders.entity';
import { User } from '../users/user.entity';
import { OrderDetail } from '../order-details/order-details.entity';
import { Product } from '../products/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, OrderDetail, Product])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
