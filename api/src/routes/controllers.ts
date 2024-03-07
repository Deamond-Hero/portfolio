import { Request, Response } from 'express'
import { sendEmail } from "../services";


export const sendComment = async (request: Request, response: Response) => {
    try {
        if (request.body) {
            const { from, message, subject, name } = request.body;
            try {
                if (from && message && subject && name) {
                    sendEmail({ message, subject, from, name })
                }
            } catch (err) {
                let error: {menssage?: string} = err || {};
                console.log(error)
                response.status(500).json({ success: false, menssage: "Faltan datos para poder enviar el mensaje" })
            }
        }

    } catch (err) {
        let error: { menssage?: string } = err || {};
        console.log(error)
        response.status(500).json({ success: false, message: "Error al enviar el mensaje" })
        new Error('Hubo un problema al enviar el mensaje')

    }

}