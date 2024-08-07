import { AppDataSource } from "../cofig/data-source";
import VehicleRepository from "../repositories/VehicleRepository";
import UserRepository from "../repositories/UserRepository";
import CreateVehicleDto from "../dto/CreateVehicleDto";
import { VehicleEntity } from "../entities/VehicleEntity";

export const getVehiclesService = async (): Promise<VehicleEntity[]> => {
  const vehicles = await VehicleRepository.find({ relations: { usersManyToOne: true } });
  return vehicles;
};

export const createVehicleService = async (vehicle: CreateVehicleDto): Promise<VehicleEntity | void> => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  try {
    await queryRunner.startTransaction();


    const newVehicle = await VehicleRepository.create(vehicle);
    await queryRunner.manager.save(newVehicle);

    // const foundUser = await UserRepository.findOneBy({ id: vehicle.userId });
    const existBoolean = await UserRepository.checkById(vehicle.userId);
    
    // if (!existBoolean) throw Error("User not found, no create vehicle");
    
    const foundUser = await UserRepository.findById(vehicle.userId);
    
    newVehicle.usersManyToOne = foundUser;
    await queryRunner.manager.save(newVehicle);

    await queryRunner.commitTransaction();
    return newVehicle;
  } catch (error) {
    console.log("Error in create vehicle service");
    await queryRunner.rollbackTransaction();
    throw Error("Error in create vehicle service");
  } finally {
    await queryRunner.release();
  }
};

export const createVehicleServiceBackup = async (vehicle: CreateVehicleDto): Promise<VehicleEntity> => {
  const newVehicle = await VehicleRepository.create(vehicle);
  await VehicleRepository.save(newVehicle);

  const user = await UserRepository.findOneBy({ id: vehicle.userId });

  if (user) {
    newVehicle.usersManyToOne = user;
    await VehicleRepository.save(newVehicle);
  }

  return newVehicle;
};
