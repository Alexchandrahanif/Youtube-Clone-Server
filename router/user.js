const Controller = require("../controller/user");
const userRouter = require("express").Router();

userRouter.get("/", Controller.getUsers);
userRouter.get("/:id", Controller.getUser);
userRouter.post("/login", Controller.login);
userRouter.post("/register", Controller.register);
userRouter.patch("/:id", Controller.editUser);
userRouter.delete("/:id", Controller.deleteUser);

module.exports = userRouter;
