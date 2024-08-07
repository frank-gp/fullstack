import { TurnDto } from "../dto/TurnDto";
import { ITurn } from "../interfaces/ITurn";

const turnDemo: ITurn[] = [
  {
    id: 1,
    date: new Date("2024-05-05"),
    time: "10:00 AM",
    userId: 1,
    status: "pending",
  },
];

const getAllTurnsService = async (): Promise<ITurn[]> => {
  return turnDemo;
};

const getTurnByIdService = async (id: number): Promise<ITurn | undefined> => {
  const foundTurnId = turnDemo.find((turn) => turn.id === id);
  return foundTurnId;
};

const createTurnsService = async (turnObject: TurnDto): Promise<ITurn> => {
  const { date, time, userId } = turnObject;
  const newTurn = {
    id: turnDemo.length + 1,
    date,
    time,
    userId,
    status: "pending",
  };
  turnDemo.push(newTurn);
  return newTurn;
};

const cancelTurnService = async (id: number): Promise<ITurn | string> => {
  const foundTurnId = turnDemo.find((turn) => turn.id === id);
  if (foundTurnId) {
    foundTurnId.status = "cancelled";
    return foundTurnId;
  }
  return "error turn not found";
};

export default {
  getAllTurnsService,
  getTurnByIdService,
  createTurnsService,
  cancelTurnService,
};
