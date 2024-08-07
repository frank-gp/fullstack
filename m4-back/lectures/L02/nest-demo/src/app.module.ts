import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UsersModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
