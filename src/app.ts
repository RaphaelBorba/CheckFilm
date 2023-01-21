import express from 'express';
import { moviesRouter } from './routes/index'

const app = express()
app.use(express.json())

app.get('/health', (req, res) => { res.sendStatus(200) })
    .use(moviesRouter)


const port = 4000
app.listen(port, () => console.log("Server on " + port))