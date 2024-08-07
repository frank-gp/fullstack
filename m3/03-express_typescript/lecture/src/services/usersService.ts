import UserDto from "../dto/UserDto";
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

export const createUserService = async (userData: UserDto): Promise<IUser> => {
  // recibir los datos del usuario
  // crear un nuevo usuario
  // incluir el nuevo usuario dentro del arreglo
  // retornar el objeto nuevo
  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    active: userData.active,
    age: userData.age,
  };
  users.push(newUser);
  id++;
  return newUser;
};

export const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

export const deleteUserService = async (id: number): Promise<void> => {
  users = users.filter((user: IUser) => {
    return user.id !== id;
  });
};
