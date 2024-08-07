import {
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { FileService } from './file.service';
import { CloudinaryService } from './cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { MinSizeValidatorPipe } from './pipes/min-size-validator.pipe';

@Controller('files')
export class FileController {
  constructor(
    private readonly fileService: FileService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get()
  getFileController() {
    return this.fileService.getFileService();
  }

  @Post('uploadImage/:id')
  @UseInterceptors(FileInterceptor('image'))
  // @UsePipes(MinSizeValidatorPipe)
  // @UseGuards(AuthGuard)
  async uploadImageController(
    @Param('id', ParseUUIDPipe) id: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1000 * 1000,
            message: 'El archivo es demasiado grande',
          }),
          new FileTypeValidator({
            // fileType: 'image/*',
            fileType: /(jpg|jpeg|png|webp)$/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    // return file
    const cloudinaryResult = await this.cloudinaryService.uploadImage(file);
    const { url } = cloudinaryResult;

    const updateProduct = await this.fileService.uploadProductImage(id, url);
    return updateProduct;
  }
}
