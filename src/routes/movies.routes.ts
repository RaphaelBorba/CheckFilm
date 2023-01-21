import { createGenre, getMovies } from "../controllers/movies.controllers";
import { Router } from "express";
import { validateGenre } from "../middlewares/movies.middlewares";

const moviesRouter = Router()

moviesRouter
    .get('/movies', getMovies)
    .post('/genre', validateGenre, createGenre)



export { moviesRouter }