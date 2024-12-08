import dotenv from "dotenv"
import express from 'express'
import https from 'https'
import path from 'path'
import fs from 'fs'

dotenv.config()
const expInstance = express();

const port = process.env.PORT

expInstance.use('/', (req, res, next)=>{
    res.send('Hello from the SSL server')
})

const app = https.createServer({
    key: '',
    cert: ''
}, expInstance)

app.listen(port, () => {
    console.log(`Secure Server running on ${port}`)
})