import { GenreOrStreamerSchema } from "../schemas/movies.schemas";
import { NextFunction, Request, Response } from "express";
import { checkGenreByIdDB, checkGenreByNameDB } from "../repositories/genre.repositories";


export async function validateGenreByName(req: Request, res: Response, next: NextFunction) {

    const body = req.body

    const { error } = GenreOrStreamerSchema.validate(body)

    if (error) { return res.sendStatus(400) }

    const check = await checkGenreByNameDB(body.name)

    if (check.rows[0]) { return res.sendStatus(409) }

    next()
}

export async function validateGenreById(req: Request, res: Response, next: NextFunction) {

    const {id} = req.params

    const check = await checkGenreByIdDB(id)

    if (!check.rows[0]) { return res.sendStatus(409) }

    next()
}
