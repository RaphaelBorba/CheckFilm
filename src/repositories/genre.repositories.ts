import { GenreOrStreamer } from "../protocols";
import { db } from "../data/db";


export function createGenreDB(name: GenreOrStreamer) {

    return db.query(`INSERT INTO genre(name) VALUES ($1)`, [name])
}

export function checkGenreByNameDB(name: string) {
    const promise = db.query(`SELECT * FROM genre WHERE name = $1`, [name])
    return promise
}

export function checkGenreByIdDB(id: string) {
    const promise = db.query(`SELECT * FROM genre WHERE id = $1`, [id])
    return promise
}

export function deleteGenreByIdDB(id:string){

    return db.query(`DELETE FROM genre WHERE id = ($1) `, [id])
}

export function getGenresDB(){

    const promise = db.query(`SELECT * FROM genre`)
    return promise
}