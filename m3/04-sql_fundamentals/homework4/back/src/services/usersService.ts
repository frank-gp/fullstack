import credentialDto from "../dto/CredentialDto";
import { UserDto } from "../dto/UserDto";
import { IUser } from "../interfaces/IUser";
import { createCredentialService, validateCredentialService } from "./credentialsSevice";

const usersData: IUser[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    birthdate: new Date("1990-01-01"),
    nDni: 12345678,
    credentialsID: 1,
  },
];

export const getAllUsersService = async () => {
  return usersData;
};

export const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
  const foundUser = usersData.find((user) => user.id === id);
  return foundUser;
};

export const createUserService = async (userObject: UserDto): Promise<IUser | undefined> => {
  const { name, email, birthdate, nDni, password } = userObject;
  const newCredentialsId = await createCredentialService({ username: name, password });

  const newUser = {
    id: usersData.length + 1,
    name,
    email,
    birthdate,
    nDni,
    credentialsID: newCredentialsId,
  };

  usersData.push(newUser);
  return newUser;
};

export const loginUserService = async (userObject: credentialDto): Promise<undefined | number> => {
  try {
    const { username, password } = userObject;
    const credentialsID = await validateCredentialService({ username, password });
    return credentialsID;
  } catch (error) {
    return undefined;
  }
};
