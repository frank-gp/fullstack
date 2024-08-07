import { DataSource } from "typeorm";
import { UserEntity } from "../entities/UserEntity";
import { VehicleEntity } from "../entities/VehicleEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "demo_typeorm",
  dropSchema: true, //reset db
  synchronize: true,
  logging: false, // display logs
  entities: [UserEntity, VehicleEntity],
  subscribers: [],
  migrations: [],
});

// export const UserModelEntity = AppDataSource.getRepository(UserEntity);
// export const VehicleModelEntity = AppDataSource.getRepository(VehicleEntity);
