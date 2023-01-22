import { createMovie, deleteMovieById, getMovies } from "../controllers/movies.controllers";
import { Router } from "express";
import { validateMovieBody, validateMovieById } from "../middlewares/movies.middlewares";

const moviesRouter = Router()

moviesRouter
    .get('/movies', getMovies)
    .post('/movies', validateMovieBody, createMovie)
    .delete('/movies/:id', validateMovieById, deleteMovieById)



export { moviesRouter }