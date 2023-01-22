import { createMovieDB, deleteMovieByIdDB, getMoviesDB } from "../repositories/movies.repositories";
import { Request, Response } from "express";


export async function getMovies(req: Request, res: Response) {

    try {

        const movies = await getMoviesDB()

        res.status(200).send(movies.rows)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)
    }
}

export async function createMovie(req: Request, res: Response) {

    const { body } = req

    try {

        await createMovieDB(body)

        res.sendStatus(201)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)
    }
}

export async function deleteMovieById( req:Request, res:Response){

    const {id} = req.params

    try {

        await deleteMovieByIdDB(id)

        res.sendStatus(200)
        
    } catch (error) {
        
        console.log(error)
        res.sendStatus(500)
    }
}