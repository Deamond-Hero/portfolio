import { Router } from "express";
import { sendComment } from "./controllers";


export const postRouter = Router()

postRouter.post("/send",sendComment)