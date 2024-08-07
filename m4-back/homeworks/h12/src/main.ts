import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middleware/logger.middleware';
import { ProductSeederService } from './modules/products/product.seed';
import { CategorySeederService } from './modules/categories/category.seed';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest Demo')
    .setDescription('The Nest Demo API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);


  const categorySeeder = app.get(CategorySeederService);
  await categorySeeder.seed();

  const productSeeder = app.get(ProductSeederService);
  await productSeeder.seed();

  await app.listen(3000);
}
bootstrap();
