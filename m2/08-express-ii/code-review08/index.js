// ========== index.js ==========

// const { app } = require("./src/server");
// const { router } = require("./src/routes/movies");
import { app } from "./src/server.js";
import { router } from "./src/routes/moviesRouter.js";

const PORT = 3000;

app.use(router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
