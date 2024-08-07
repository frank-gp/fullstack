// src/users/user.service.ts
import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserWithoutPassword } from './user.types';
import { IUser } from './users.interfaces';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  /**
   * Crea un nuevo usuario.
   * @param user - Datos del nuevo usuario sin el ID.
   * @returns El ID del nuevo usuario creado.
   */
  async createUser(user: Omit<IUser, 'id'>): Promise<number> {
    return await this.usersRepository.createUser(user);
  }

  /**
   * Obtiene una lista paginada de todos los usuarios sin sus contraseñas.
   * @param page - Número de la página (por defecto 1).
   * @param limit - Cantidad de usuarios por página (por defecto 5).
   * @returns Lista de usuarios sin contraseñas.
   */
  async getAllUsers(
    page: number = 1,
    limit: number = 5,
  ): Promise<UserWithoutPassword[]> {
    const users = await this.usersRepository.getUsers(page, limit);
    return users.map(({ password, ...rest }) => rest);
  }

  /**
   * Obtiene un usuario por su ID sin su contraseña.
   * @param id - ID del usuario.
   * @returns El usuario sin la contraseña.
   */
  async getUserById(id: number): Promise<UserWithoutPassword | undefined> {
    const user = await this.usersRepository.getUserById(id);
    if (!user) return undefined;
    const { password, ...rest } = user;
    return rest;
  }

  /**
   * Actualiza los datos de un usuario existente.
   * @param id - ID del usuario a actualizar.
   * @param user - Datos a actualizar.
   * @returns El ID del usuario actualizado o null si no se encuentra.
   */
  async updateUser(id: number, user: Partial<IUser>): Promise<number | null> {
    return await this.usersRepository.updateUser(id, user);
  }

  /**
   * Elimina un usuario por su ID.
   * @param id - ID del usuario a eliminar.
   * @returns El ID del usuario eliminado o null si no se encuentra.
   */
  async deleteUser(id: number): Promise<number | null> {
    return await this.usersRepository.deleteUser(id);
  }

  /**
   * Busca un usuario por su email.
   * @param email - Email del usuario.
   * @returns El usuario con el email dado.
   */
  async findUserByEmail(email: string): Promise<IUser | undefined> {
    return await this.usersRepository.findUserByEmail(email);
  }
}
