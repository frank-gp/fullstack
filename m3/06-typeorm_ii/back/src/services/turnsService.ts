import { TurnModelRepository, UserModelRepository } from "../config/data-source";
import { TurnDto } from "../dto/TurnDto";
import { TurnEntity } from "../entities/TurnEntity";

export default {
  getAllTurnsService: async (): Promise<TurnEntity[]> => {
    const allTurnsData = await TurnModelRepository.find({ relations: { userId: true } });

    const newArray = allTurnsData.map((obj) => {
      const {
        userId: { credentialsID, ...restUserId },
        ...restObj
      } = obj;
      return { ...restObj, userId: restUserId };
    });

    return newArray;
  },

  getTurnByIdService: async (idParam: number): Promise<TurnEntity | null> => {
    const foundUser = await TurnModelRepository.findOneOrFail({ where: { id: idParam }, relations: ["userId"] });

    const {
      userId: { credentialsID, ...restUserId },
      ...restFoundUser
    } = foundUser;
    const newFoundUser = { ...restFoundUser, userId: restUserId };

    return newFoundUser;
  },

  createTurnsService: async (turnObject: TurnDto) /* : Promise<TurnEntity> */ => {
    const { date, time, userId } = turnObject;

    const foundUserId = await UserModelRepository.findOneBy({ id: userId });

    if (!foundUserId) throw Error("user not found");

    const newTurn = { date, time, status: "active", userId: foundUserId };

    const newTurnCreate = TurnModelRepository.create(newTurn);
    const newTurnSave = await TurnModelRepository.save(newTurnCreate);

    return newTurnSave;

    // const foundUserId = await UserModelRepository.findOneBy({ id: 1 });
    // if (foundUserId)
    // TurnModelRepository.create({
    //   date:"2022-10-10",
    //   time: "2022-10-10",
    //   status: "active",
    //   userId: foundUserId
    // });
  },

  cancelTurnService: async (id: number): Promise<TurnEntity | string> => {
    const foundTurnId = await TurnModelRepository.findOneBy({ id });
    if (foundTurnId) {
      foundTurnId.status = "cancelled";
      await TurnModelRepository.save(foundTurnId);
      return foundTurnId;
    }

    return "error turn not found";
  },

  deleteTurnService: async (id: number) => {
    const foundTurnId = await TurnModelRepository.findOneBy({ id });
    if (foundTurnId) {
      const deletedTurnId = await TurnModelRepository.delete({ id });
      return deletedTurnId;
    }
    return "error turn not found";
  },
};
