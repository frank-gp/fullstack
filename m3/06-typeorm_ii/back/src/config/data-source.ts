import { DataSource } from "typeorm";
import { CredentialEntity } from "../entities/CredentialEntity";
import { TurnEntity } from "../entities/TurnEntity";
import { UserEntity } from "../entities/UserEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "soyhenry_db",
  // dropSchema: true, // reset database
  synchronize: true,
  // logging: false, // display logs
  logging: [/* "query", */ "error"], // display logs
  entities: [CredentialEntity, TurnEntity, UserEntity],
  subscribers: [],
  migrations: [],
});

export const CredentialModelRepository = AppDataSource.getRepository(CredentialEntity);
export const TurnModelRepository = AppDataSource.getRepository(TurnEntity);
export const UserModelRepository = AppDataSource.getRepository(UserEntity);
