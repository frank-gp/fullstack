// src/modules/orders/order.controller.ts

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async addOrderController(@Body() order: any) {
    const result = await this.orderService.addOrderService(order);
    return result;
  }

  @Get()
  async getOrderController() {
    const result = await this.orderService.getOrderService();
    return result;
  }

  @Get(':id')
  async getOrderByIdController(@Param('id') id: string) {
    const result = await this.orderService.getOrderByIdService(id);
    return result;
  }
}
