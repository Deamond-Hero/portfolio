import express from 'express';
import { server } from './src/app'


export const port = 3000 || 3001;

server.get('/', (req, res) => {
    res.send('Hola Mundo! Lanzando en servidor 3000!')
})


server.listen(port, () => {
    console.log(`Servidor escuchando en puerto https://localhost:${port}`)
})