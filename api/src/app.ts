import express from 'express'
import { Response, Request, NextFunction } from 'express';
import  morgan  from 'morgan';
import { router } from './routes'




export const server = express();
export const serverName = 'API';



server.get('/', (req, res) => {
    res.send('Hola Mundo! Lanzando en servidor 3000!')
})

server.use(express.urlencoded({extended:true, limit: "50mb"}));
server.use(express.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
  
  server.use(router);

  server.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status: number = err.status || 500;
    const message = err.message || 'Internal Server Error';
    console.error(err);
    res.status(status).send(message);
});

