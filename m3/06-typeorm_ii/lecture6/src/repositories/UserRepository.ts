import { AppDataSource } from "../cofig/data-source";
import { UserEntity } from "../entities/UserEntity";

const UserRepository = AppDataSource.getRepository(UserEntity).extend({
  async findById(id: number): Promise<UserEntity> {
    const foundUser = await this.findOneBy({ id });
    if (foundUser) return foundUser;
    else throw Error("User not found by Id");
  },

  checkById: async function (id: number): Promise<boolean> {
    const foundUser = await this.findOneBy({ id });
    // if (!foundUser) return true;
    // else return false;
    return !!foundUser;
  },
});

export default UserRepository;
