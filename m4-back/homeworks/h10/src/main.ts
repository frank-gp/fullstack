import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middleware/logger.middleware';
import { ProductSeederService } from './modules/products/product.seed';
import { CategorySeederService } from './modules/categories/category.seed';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerGlobal);
    app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      exceptionFactory: (errors) => {
        const cleanedErrors = errors.map((error) => {
          return { property: error.property, constraints: error.constraints };
        });
        return new BadRequestException({
          alert: 'Se han detectado los siguientes errores',
          errors: cleanedErrors,
        });
      },
    }),
  );

  const categorySeeder = app.get(CategorySeederService);
  await categorySeeder.seed();

  const productSeeder = app.get(ProductSeederService);
  await productSeeder.seed();

  await app.listen(3000);
}
bootstrap();
