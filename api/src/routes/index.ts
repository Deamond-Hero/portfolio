import { Router } from "express";
import { postRouter } from './postRouter'



export const router = Router();


router.use('/', postRouter);