import { getStreamers } from "../controllers/streamer.controllers";
import { Router } from "express";

const streamerRouter = Router()

streamerRouter
.get('/streamer', getStreamers)


export {streamerRouter}