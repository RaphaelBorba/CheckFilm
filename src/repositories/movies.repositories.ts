import { db } from "../data/db";


export function getMoviesDB(){
    const promise = db.query(`SELECT * FROM movies;`)
    return promise
}