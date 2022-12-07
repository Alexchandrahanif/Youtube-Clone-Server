const Controller = require("../controller/user");
const userRouter = require("./user");
const router = require("express").Router();

router.get("/", Controller.welcome);
router.use("/user", userRouter);

module.exports = router;
