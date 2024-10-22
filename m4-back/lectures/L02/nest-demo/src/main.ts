import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {  loggerGlobal } from './middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerGlobal)
  await app.listen(3000);
}
bootstrap();
