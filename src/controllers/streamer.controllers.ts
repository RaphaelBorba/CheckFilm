import { getStreamersDB } from "../repositories/streamer.repositories";
import { Request, Response } from "express";




export async function createStreamer(req: Request, res: Response) {

}

export async function getStreamers(req:Request, res:Response){

    try {

        const genres = await getStreamersDB()

        res.status(200).send(genres.rows)
        
    } catch (error) {
        
        console.log(error)
        res.sendStatus(500)
    }
}