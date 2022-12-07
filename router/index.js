const Controller = require("../controller/user");
const userRouter = require("./user");
const youtubeRouter = require("./youtube");
const router = require("express").Router();

router.get("/", Controller.welcome);
router.use("/user", userRouter);
router.use("/youtube", youtubeRouter);

module.exports = router;
