import { AppDataSource } from "../cofig/data-source";
import IUser from "../intefaces/IUser";
import UserRepository from "../repositories/UserRepository";
import VehicleRepository from "../repositories/VehicleRepository";
const preloadUsersData = [
  { name: "Frank", email: "user@mail.com", age: 32, active: true },
  { name: "Henry", email: "user@mail.com", age: 32, active: true },
  { name: "Ana", email: "user@mail.com", age: 32, active: true },
  { name: "Gio", email: "user@mail.com", age: 32, active: true },
];
const preloadVehiclesData = [
  { brand: "Toyota", model: "Corolla", year: 2020, color: "blue", userId: 1 },
  { brand: "Toyota", model: "Corolla", year: 2020, color: "blue", userId: 2 },
  { brand: "Toyota", model: "Corolla", year: 2020, color: "blue", userId: 3 },
  { brand: "Toyota", model: "Corolla", year: 2020, color: "blue", userId: 5 },
];

export const preloadUserFunc = async () => {
  AppDataSource.manager.transaction(async (transactionalEntityManager) => {
    const foundUsers = await UserRepository.find();
    console.log("foundUsers.length", foundUsers.length);
    if (foundUsers.length) return console.log("Data already loaded");

    preloadUsersData.forEach((user) => {
      const newUser = UserRepository.create(user);
      transactionalEntityManager.save(newUser);
    });

    console.log("preload User Data successfully");
  });
};

export const preloadVehicleFunc = async () => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  const promisesVehicles = preloadVehiclesData.map(async (vehicle) => {
    const newVehicle = await VehicleRepository.create(vehicle);
    await queryRunner.manager.save(newVehicle);
    const foundUser = await UserRepository.findOneBy({ id: vehicle.userId });
    if (!foundUser) throw Error("User not found (preloadData.ts)");
    newVehicle.usersManyToOne = foundUser;
    await queryRunner.manager.save(newVehicle);
  });

  await queryRunner.startTransaction();

  try {
    await Promise.all(promisesVehicles);
    console.log("preload Vehicle Data successfully (preloadData.ts)");
    await queryRunner.commitTransaction();
  } catch (error) {
    console.log("Error in preload Vehicle Data");
    await queryRunner.rollbackTransaction();
  } finally {
    console.log("finally in preload Vehicle Data");
    await queryRunner.release();
  }
};

export const preloadVehicleFuncBackup = async () => {
  AppDataSource.manager.transaction(async (transactionalEntityManager) => {
    for await (const vehicle of preloadVehiclesData) {
      const newVehicle = VehicleRepository.create(vehicle);
      await transactionalEntityManager.save(newVehicle);
      const foundUser = await UserRepository.findOneBy({ id: vehicle.userId });
      if (foundUser) {
        newVehicle.usersManyToOne = foundUser;
        transactionalEntityManager.save(newVehicle);
      } else {
        // console.log("User not found (preloadData.ts)");
        throw Error("User not found (preloadData.ts)");
      }
    }
    console.log("preload Vehicle Data successfully (preloadData.ts)");
  });
};
