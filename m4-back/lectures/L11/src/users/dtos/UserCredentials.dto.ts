import { PickType } from '@nestjs/swagger';
import { CreateUserDto } from './CreateUser.dto';

export class UserCredentialsDto extends PickType(CreateUserDto, [
  'email',
  'password',
]) {}
