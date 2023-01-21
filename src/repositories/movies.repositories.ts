import { Movies } from "../protocols";
import { db } from "../data/db";


export function getMoviesDB() {
    const promise = db.query(`SELECT * FROM movies;`)
    return promise
}

export function checkMovieByNameDB(name: string) {

    return db.query(`SELECT * FROM movies WHERE title = ($1)`, [name.toLowerCase()])
}

export function createMovieDB(body: Movies) {

    return db.query(`INSERT INTO movies(title, genre, streamer, status) VALUES ($1,$2,$3,$4) `,
        [body.title, body.genre, body.streamer, false])
}