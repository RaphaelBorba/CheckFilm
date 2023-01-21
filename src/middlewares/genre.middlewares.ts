import { GenreOrStreamerSchema } from "../schemas/movies.schemas";
import { NextFunction, Request, Response } from "express";
import { checkGenre } from "../repositories/genre.repositories";


export async function validateGenre(req: Request, res: Response, next: NextFunction) {

    const body = req.body

    const { error } = GenreOrStreamerSchema.validate(body)

    if (error) { return res.sendStatus(400) }

    const check = await checkGenre(body.name)

    if (check.rows[0]) { return res.sendStatus(409) }

    next()
}