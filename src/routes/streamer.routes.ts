import { createStreamer, getStreamers } from "../controllers/streamer.controllers";
import { Router } from "express";
import { validateStreamerByName } from "../middlewares/movies.middlewares";

const streamerRouter = Router()

streamerRouter
.get('/streamer', getStreamers)
.post('/streamer', validateStreamerByName, createStreamer)


export {streamerRouter}