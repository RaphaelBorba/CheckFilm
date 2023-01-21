import { GenreOrStreamer } from "../protocols";
import { db } from "../data/db";


export function createStreamerDB(name: GenreOrStreamer) {

    db.query(`INSERT INTO streamer(name) VALUES ($1)`, [name])
}

export function getStreamersDB(){

    return db.query(`SELECT * FROM streamer`)
}