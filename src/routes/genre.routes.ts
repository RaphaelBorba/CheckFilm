import { createGenre, deleteGenreById } from "../controllers/genre.controllers";
import { Router } from "express";
import { validateGenreById, validateGenreByName } from "../middlewares/genre.middlewares";

const genreRoutes = Router()

genreRoutes
    .post('/genre', validateGenreByName, createGenre)
    .delete('/genre/:id', validateGenreById, deleteGenreById)



export { genreRoutes }