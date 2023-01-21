import { getMovies } from "../controllers/movies.controllers";
import { Router } from "express";

const moviesRouter  = Router()

moviesRouter.get('/movies', getMovies)


export {moviesRouter}