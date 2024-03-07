import express from 'express';
import { server } from './src/app'
import dotenv from 'dotenv'
dotenv.config()


export const port = process.env.PORT;

server.get('/', (req, res) => {
    res.send('Hola Mundo! Lanzando en servidor 3000!')
})


server.listen(port, () => {
    console.log(`Servidor escuchando en puerto https://localhost:${port}`)
})