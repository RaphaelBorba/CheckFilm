import { GenreOrStreamer } from "@/protocols";
import { db } from "../data/db";


export function getMoviesDB(){
    const promise = db.query(`SELECT * FROM movies;`)
    return promise
}

export function createGenreDB(name:GenreOrStreamer){

    db.query(`INSERT INTO genre(name) VALUES $1`, [name])
}
export function createStreamerDB(name:GenreOrStreamer){
    
    db.query(`INSERT INTO streamer(name) VALUES $1`, [name])
}
export function createMovieDB(){
    
    
}