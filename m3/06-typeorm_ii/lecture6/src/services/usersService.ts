import { AppDataSource } from "../cofig/data-source";
import UserRepository from "../repositories/UserRepository";
import UserDto from "../dto/UserDto";
import { UserEntity } from "../entities/UserEntity";
import IUser from "../intefaces/IUser";

let users: IUser[] = [
  {
    id: 1,
    name: "Frank",
    email: "user@mail.com",
    age: 32,
    active: true,
  },
];

let id: number = 1;

export const createUserService = async (userData: UserDto): Promise<UserEntity> => {
  const newUser = await UserRepository.create(userData);
  const result = await UserRepository.save(newUser);
  return newUser;
};

export const getUsersService = async (): Promise<UserEntity[]> => {
  // const users = await AppDataSource.getRepository(UserEntity).find();
  const users = await UserRepository.find({ relations: { vehiclesOneToMany: true } });
  return users;
};

export const getUserByIdService = async (id: number): Promise<UserEntity | null> => {
  const user = await AppDataSource.getRepository(UserEntity).findOneBy({ id });
  // const user = await UserRepository.findOneBy({ id });
  return user;
};

export const deleteUserService = async (id: number): Promise<void> => {
  users = users.filter((user: IUser) => {
    return user.id !== id;
  });
};
