import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { UsersRepository } from './users.repository';

// const mockUserService = {
//   getUsers: () => 'Esto es un servicio mock de usuarios',
// };

@Module({
  providers: [
    // {
    //   provide: UsersService,
    //   useValue: mockUserService,
    // },
    UsersService,
    UsersRepository,
    {
      provide: 'API_USERS',
      useFactory: async () => {
        const apiUsers = await fetch ("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        return apiUsers.map((user) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          }
        })
      }
    }
  ],
  controllers: [UsersController],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes("users");
  }
}
