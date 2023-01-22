import { MoviesSchema } from "../schemas/movies.schemas";
import { NextFunction, Request, Response } from "express";
import { checkMovieByIdDB, checkMovieByNameDB } from "../repositories/movies.repositories";
import { checkGenreByIdDB } from "../repositories/genre.repositories";
import { checkStreamerByIdDB } from "../repositories/streamer.repositories";



export async function validateMovieBody(req: Request, res: Response, next: NextFunction) {

    const { body } = req

    const { error } = MoviesSchema.validate(body, { abortEarly: false })

    if (error) { return res.status(400).send(error.details.map(e => e.message)) }

    const checkTitle = await checkMovieByNameDB(body.title)

    const checkGenre = await checkGenreByIdDB(body.genre)

    const checkStreamer = await checkStreamerByIdDB(body.streamer)

    if (checkTitle.rows[0] || !checkGenre.rows[0] || !checkStreamer.rows[0]) {
        return res.status(409).send('Gênero ou streamer não existem, ou titulo já usado')
    }

    next()
}

export async function validateMovieById(req: Request, res: Response, next: NextFunction) {

    const { id } = req.params

    const checkId = await checkMovieByIdDB(id)

    if(!checkId.rows[0]) { return res.sendStatus(404)}

    next()
}