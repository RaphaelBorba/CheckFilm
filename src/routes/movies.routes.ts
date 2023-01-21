import { createMovie, getMovies } from "../controllers/movies.controllers";
import { Router } from "express";
import { validateMovieBody } from "../middlewares/movies.middlewares";

const moviesRouter = Router()

moviesRouter
    .get('/movies', getMovies)
    .post('/movies', validateMovieBody, createMovie)



export { moviesRouter }