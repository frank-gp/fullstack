import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeorm';
import { UserModule } from './module/user/user.module';
import { OrderModule } from './module/order/order.module';
import { OrderDetailModule } from './module/order-detail/order-detail.module';
import { ProductModule } from './module/product/product.module';
import { CategoryModule } from './module/category/category.module';
import { SeederModule } from './seed/seeder.module';
import { SystemModule } from './system/system.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    CategoryModule,
    ProductModule,
    UserModule,
    OrderModule,
    OrderDetailModule,
    SystemModule,
    // SeederModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
