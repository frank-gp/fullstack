import server from "./server";
import { PORT } from "./cofig/envs";
import "reflect-metadata";
import { AppDataSource } from "./cofig/data-source";
import { preloadUserFunc, preloadVehicleFunc } from "./helpers/preloadData";

const initializeApp = async () => {
  await AppDataSource.initialize();
  await preloadUserFunc().then(() => console.log("Data loaded successfully"));
  await preloadVehicleFunc().then(() => console.log("Data loaded successfully"));
  await server.listen(PORT, () => console.log("Server listening on port " + PORT));
};

initializeApp();
