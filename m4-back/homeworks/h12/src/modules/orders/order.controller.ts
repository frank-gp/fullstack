// src/modules/orders/order.controller.ts

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dtos/create-order.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiBearerAuth()
  @Post()
  @UseGuards(AuthGuard)
  async addOrderController(@Body() order: CreateOrderDto) {
    const result = await this.orderService.addOrderService(order);
    return result;
  }

  @Get()
  async getOrderController() {
    const result = await this.orderService.getOrderService();
    return result;
  }

  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(AuthGuard)
  async getOrderByIdController(@Param('id') id: string) {
    const result = await this.orderService.getOrderByIdService(id);
    return result;
  }
}
