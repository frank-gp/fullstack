// userRouter.js

const { Router } = require("express");
const usersController = require("../controllers/usersController.js");
const validateUser = require("../middlewares/validateUser");

const userRouter = Router();

userRouter.get("/", usersController.getUsers);

userRouter.post("/", validateUser, usersController.createUser);

module.exports = userRouter;
