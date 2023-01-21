import { createGenre } from "../controllers/genre.controllers";
import { Router } from "express";
import { validateGenre } from "../middlewares/movies.middlewares";

const genreRoutes = Router()

genreRoutes
    .post('/genre', validateGenre, createGenre)



export { genreRoutes }