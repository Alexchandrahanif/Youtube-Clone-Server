const Controller = require("../controller/user");
const authentication = require("../midleware/authentication");
const userRouter = require("express").Router();

userRouter.post("/login", Controller.login);
userRouter.post("/register", Controller.register);

userRouter.get("/", authentication, Controller.getUsers);
userRouter.get("/:id", Controller.getUser);
userRouter.patch("/:id", Controller.editUser);
userRouter.delete("/:id", Controller.deleteUser);

module.exports = userRouter;
