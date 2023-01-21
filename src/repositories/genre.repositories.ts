import { GenreOrStreamer } from "../protocols";
import { db } from "../data/db";


export function createGenreDB(name: GenreOrStreamer) {

    return db.query(`INSERT INTO genre(name) VALUES ($1)`, [name])
}

export function checkGenre(name: string) {
    const promise = db.query(`SELECT * FROM genre WHERE name = $1`, [name])
    return promise
}
