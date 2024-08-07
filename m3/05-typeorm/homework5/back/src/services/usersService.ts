import { UserEntityModel } from "../config/data-source";
import credentialDto from "../dto/CredentialDto";
import { UserDto } from "../dto/UserDto";
import { UserEntity } from "../entities/UserEntity";
import { createCredentialService, validateCredentialService } from "./credentialsSevice";

export default {
  getAllUsersService: async () => {
    const allUsers = await UserEntityModel.find({ relations: { turnsIds: true } });
    const newAllUsers = allUsers.map((user) => {
      const { id, name, email, birthdate, nDni, turnsIds } = user;
      return { id, name, email, birthdate, nDni, turnsIds };
    });
    // return newAllUsers;
    return allUsers;
  },

  getUserByIdService: async (idParam: number) : Promise<UserEntity | null> => {
    try {
      const foundUser = await UserEntityModel.findOneOrFail({ where: { id: idParam }, relations: ["turnsIds"] });

      const { id, name, email, birthdate, nDni, turnsIds } = foundUser;
      const newFoundUser = { id, name, email, birthdate, nDni, turnsIds };

      // return newFoundUser;
      return foundUser;
    } catch (error) {
      throw new Error("user not found");
    }
  },

  createUserService: async (userObject: UserDto): Promise<UserEntity | undefined> => {
    console.log(userObject);
    const { name, username, email, birthdate, nDni, password } = userObject;
    const credentialsID = await createCredentialService({ username, password });

    const newUser = { name, email, birthdate, nDni, credentialsID };

    UserEntityModel.create(newUser);
    const newUserSave = await UserEntityModel.save(newUser);
    return newUserSave;
  },

  loginUserService: async (userObject: credentialDto) : Promise<UserEntity | null> => {
    try {
      const { username, password } = userObject;
      const credentialsID = await validateCredentialService({ username, password });
      const foundUser = await UserEntityModel.findOneByOrFail({ id: credentialsID });

      const { id, name, email, birthdate, nDni, turnsIds } = foundUser;
      const newFoundUser = { id, name, email, birthdate, nDni, turnsIds };

      // return newFoundUser;
      return foundUser;
    } catch (error) {
      throw Error("user not found");
    }
  },

  deleteUserByIdService: async (id: number) => {
    const deletedUser = await UserEntityModel.delete({ id });
    console.log(deletedUser);
    return deletedUser;
  },
};
