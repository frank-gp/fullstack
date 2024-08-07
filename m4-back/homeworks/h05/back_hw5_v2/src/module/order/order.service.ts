import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { ProductEntity } from '../product/entities/product.entity';
import { OrderDetailEntity } from '../order-detail/entities/order-detail.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    @InjectRepository(OrderDetailEntity)
    private readonly orderDetailRepository: Repository<OrderDetailEntity>,
  ) {}

  async create(createOrderDto: any) {
    const foundUser = await this.userRepository.findOneBy({
      id: createOrderDto.userId,
    });

    let totalPrice = 0;
    let productArray = [];

    for (const element of createOrderDto.products) {
      // ========== Find Product ==========
      const findProduct = await this.productRepository.findOneBy({
        id: element.id,
      });

      if (!findProduct)
        throw new NotFoundException(`Product ${element.id} not found`);

      // ========== Update Stock ==========
      if (findProduct.stock < 1)
        throw new BadRequestException('Product out of stock');

      findProduct.stock -= 1;
      await this.productRepository.save(findProduct);

      // ========== Total Price ==========
      totalPrice += findProduct.price;

      // ========== productArray ==========
      productArray.push(findProduct);
    }
    // ========== Create Order Detail ==========
    const saveOrderDetail = this.orderDetailRepository.create({
      totalPrice,
      // products: productArray,
      products: createOrderDto.products,
    });

    // ========== Create Order ==========
    const saveOrder = await this.orderRepository.save({
      user: foundUser,
      orderDetails: saveOrderDetail,
    });

    return saveOrder;
  }

  async findAll() {
    return this.orderRepository.find();
  }

  async findOne(id: number) {
    return this.orderRepository.findOneBy({ id });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto);
  }

  async remove(id: number) {
    return this.orderRepository.delete(id);
  }
}
