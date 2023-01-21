import { db } from "../data/db";


export function createStreamerDB(name: string) {

    return db.query(`INSERT INTO streamer(name) VALUES ($1)`, [name.toLowerCase()])
}

export function getStreamersDB(){

    return db.query(`SELECT * FROM streamer`)
}

export function checkStreamerBynameDB(name:string){

    return db.query(`SELECT * FROM streamer WHERE name = ($1)`, [name.toLowerCase()])
}