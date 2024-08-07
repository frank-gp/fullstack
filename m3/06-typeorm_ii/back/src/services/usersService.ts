import { AppDataSource, UserModelRepository } from "../config/data-source";
import credentialDto from "../dto/CredentialDto";
import { UserDto } from "../dto/UserDto";
import { UserEntity } from "../entities/UserEntity";
import { createCredentialService, validateCredentialService } from "./credentialsSevice";

export default {
  getAllUsersService: async (): Promise<UserEntity[] | null> => {
    const allUsers = await UserModelRepository.find({ relations: { turnsIds: true } });
    const newAllUsers = allUsers.map((user) => {
      const { id, name, email, birthdate, nDni, turnsIds } = user;
      return { id, name, email, birthdate, nDni, turnsIds };
    });
    return newAllUsers;
    // return allUsers;
  },

  getUserByIdService: async (idParam: number): Promise<UserEntity | null> => {
    try {
      const foundUser = await UserModelRepository.findOneOrFail({ where: { id: idParam }, relations: ["turnsIds"] });

      const { id, name, email, birthdate, nDni, turnsIds } = foundUser;
      const newFoundUser = { id, name, email, birthdate, nDni, turnsIds };

      return newFoundUser;
      // return foundUser;
    } catch (error) {
      throw new Error("user not found");
    }
  },

  createUserService: async (userObject: UserDto): Promise<UserEntity | undefined> => {
    const { name, username, email, birthdate, nDni, password } = userObject;
    const credentialsID = await createCredentialService({ username, password });

    const newUser = { name, email, birthdate, nDni, credentialsID };

    UserModelRepository.create(newUser);
    const newUserSave = await UserModelRepository.save(newUser);
    return newUserSave;
  },

  loginUserService: async (userObject: credentialDto): Promise<UserEntity | null> => {
    try {
      const { username, password } = userObject;
      const credentialsID = await validateCredentialService({ username, password });
      const foundUser = await UserModelRepository.findOneByOrFail({ id: credentialsID });

      const { id, name, email, birthdate, nDni, turnsIds } = foundUser;
      const newFoundUser = { id, name, email, birthdate, nDni, turnsIds };

      return newFoundUser;
      // return foundUser;
    } catch (error) {
      throw Error("user not found");
    }
  },

  deleteUserByIdService: async (id: number) => {
    const deletedUser = await UserModelRepository.delete({ id });
    console.log(deletedUser);
    return deletedUser;
  },

  dropSchemaService: async () => {
    // Drop the entire schema
    await AppDataSource.dropDatabase();

    console.log("Schema dropped successfully.");

    // After dropping, synchronize the entities to recreate the schema
    await AppDataSource.synchronize();

    return "Schema recreated successfully.";
  },

  // resetAllTablesService: async (): Promise<void> => {
  //   try {
  //     await TurnEntityModel.clear();
  //     await UserEntityModel.clear();
  //     // await CredentialEntityModel.clear();

  //     console.log("All tables have been reset.");
  //   } catch (error) {
  //     console.error("Error resetting tables:", error);
  //   }
  // },
};
