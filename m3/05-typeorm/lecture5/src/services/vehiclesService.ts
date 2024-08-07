import { UserModelEntity, VehicleModelEntity } from "../cofig/data-source";
import CreateVehicleDto from "../dto/CreateVehicleDto";
import { VehicleEntity } from "../entities/VehicleEntity";

export const getVehiclesService = async (): Promise<VehicleEntity[]> => {
  const vehicles = await VehicleModelEntity.find({relations: {user123: true}});
  return vehicles;
};

export const createVehicleService = async (vehicle: CreateVehicleDto): Promise<VehicleEntity> => {
  const newVehicle = await VehicleModelEntity.create(vehicle);
  await VehicleModelEntity.save(newVehicle);

  const user = await UserModelEntity.findOneBy({ id: vehicle.userId });

  if (user) {
    newVehicle.user123 = user;
    await VehicleModelEntity.save(newVehicle);
  }

  return newVehicle;
};
