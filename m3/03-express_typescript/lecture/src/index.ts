import server from "./server";
import { PORT } from "./cofig/envs";

server.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
