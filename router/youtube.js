const Controller = require("../controller/youtube");

const youtubeRouter = require("express").Router();

youtubeRouter.get("/search/:search", Controller.search);
youtubeRouter.get("/videoDetail/:id", Controller.videoDetail);
youtubeRouter.get("/comments/:id", Controller.comments);
youtubeRouter.get("/channelDetail/:id", Controller.channelDetail);
youtubeRouter.get("/channelVideos/:id", Controller.channelVideos);
youtubeRouter.get("/movieTrailer", Controller.getTrailerMovie);
youtubeRouter.get("/reactJs", Controller.getReactJs);

module.exports = youtubeRouter;
