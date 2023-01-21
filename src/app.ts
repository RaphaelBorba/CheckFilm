import express from 'express';

const app = express()

app.get('/health', (req, res)=>{

    res.sendStatus(200)
})

const port = 4000
app.listen(port, ()=>console.log("Server on "+port))