import server from "./server";
import { PORT } from "./cofig/envs";
import "reflect-metadata";
import { AppDataSource } from "./cofig/data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server listening on port " + PORT);
    });
  });
