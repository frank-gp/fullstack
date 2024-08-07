import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middlewares/logger.middleware';
import { AuthGuard } from './guards/auth.guard';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { config as auth0Config } from './config/auth0.config';
import { auth } from 'express-openid-connect';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new AuthGuard());
  // app.useGlobalInterceptors(new MyInterceptor());
  app.use(auth(auth0Config));
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
  app.use(loggerGlobal);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest Demo')
    .setDescription('The Nest Demo API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
