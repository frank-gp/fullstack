import { TurnEntityModel, UserEntityModel } from "../config/data-source";
import { TurnDto } from "../dto/TurnDto";
import { TurnEntity } from "../entities/TurnEntity";

export default {
  getAllTurnsService: async (): Promise<TurnEntity[]> => {
    const turns_table = await TurnEntityModel.find({ relations: { userId: true } });
    return turns_table;
  },

  getTurnByIdService: async (id: number): Promise<TurnEntity | null> => {
    const foundUser = await TurnEntityModel.findOneBy({ id });
    return foundUser;
  },

  createTurnsService: async (turnObject: TurnDto): Promise<TurnEntity> => {
    const { date, time, userId } = turnObject;

    const foundUserId = await UserEntityModel.findOneBy({ id: userId });

    if (!foundUserId) throw Error("user not found");

    const newTurn = { date, time, status: "active", userId: foundUserId };

    const newTurnCreate = TurnEntityModel.create(newTurn);
    const newTurnSave = await TurnEntityModel.save(newTurnCreate);

    return newTurnSave;
  },

  cancelTurnService: async (id: number): Promise<TurnEntity | string> => {
    const foundTurnId = await TurnEntityModel.findOneBy({ id });
    if (foundTurnId) {
      foundTurnId.status = "cancelled";
      await TurnEntityModel.save(foundTurnId);
      return foundTurnId;
    }

    return "error turn not found";
  },

  deleteTurnService: async (id: number) => {
    const foundTurnId = await TurnEntityModel.findOneBy({ id });
    if (foundTurnId) {
      const deletedTurnId = await TurnEntityModel.delete({ id });
      return deletedTurnId;
    }
    return "error turn not found";
  },
};
