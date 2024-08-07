import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TodosRepository } from './todos.repository';

const ACCESS = "ESTA ES MI CLAVE SECRETA";

@Module({
  providers: [
    TodosService,
    TodosRepository,
    {
      provide: 'ACCESS_TOKEN',
      useValue: ACCESS,
    },
  ],
  controllers: [TodosController],
})
export class TodosModule {}
