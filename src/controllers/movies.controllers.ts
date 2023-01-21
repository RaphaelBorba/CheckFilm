import { createGenreDB, getMoviesDB } from "../repositories/movies.repositories";
import { Request, Response } from "express";


export async function getMovies(req:Request, res:Response){

    try {
        
        const movies = await getMoviesDB()

        res.status(200).send(movies.rows)

    } catch (error) {
        
        console.log(error)
        res.sendStatus(500)
    }
}


export async function createGenre(req:Request, res:Response){

    const {body} = req

    try {

        await createGenreDB(body.name)

        res.sendStatus(201)
        
    } catch (error) {
        
        console.log(error)
        res.sendStatus(500)
    }
}

export async function createStreamer(req:Request, res:Response){
    
}

export async function createMovie(req:Request, res:Response){
    
}