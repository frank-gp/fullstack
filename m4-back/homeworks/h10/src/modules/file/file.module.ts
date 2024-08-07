import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { CloudinaryConfig } from '../../config/cloudinary';
import { CloudinaryService } from './cloudinary.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../products/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [FileController],
  providers: [
    FileService,
    CloudinaryConfig,
    CloudinaryService,
    //
  ],
})
export class FileModule {}
