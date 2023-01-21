import { createGenreDB } from "../repositories/genre.repositories"
import { Request, Response } from "express"



export async function createGenre(req: Request, res: Response) {

    const { body } = req

    try {

        await createGenreDB(body.name)

        res.sendStatus(201)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)
    }
}