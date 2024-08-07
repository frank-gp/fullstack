// src/users/user.types.ts
import { IUser } from './users.interfaces';

export type UserWithoutPassword = Omit<IUser, 'password'>;
