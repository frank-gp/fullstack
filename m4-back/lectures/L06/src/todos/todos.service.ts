import { Inject, Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(
    private todosRepository: TodosRepository,
    @Inject('ACCESS_TOKEN') private accessToken: string,
  ) {}
  getTodos() {
    return this.accessToken === 'ESTA ES MI CLAVE SECRETA'
      ? this.todosRepository.getTodo()
      : 'No tiene acceso a esta informacion';
  }
}
