import { transporter } from "./utils/nodeMailer";
import dotenv from 'dotenv';
dotenv.config()

interface EmailProps {
    message: string | undefined;
    subject: string | undefined;
    from: string | undefined;
    name: string | undefined
}

let emailStatus: string | undefined;


export async function sendEmail({ message, subject, from, name }: EmailProps): Promise<void> {
    if (message && subject && from) {
        try {
            await transporter.sendMail({
                from: process.env.MAIL,
                to: process.env.MAIL,
                subject: "NUEVO CORREO!!:" + subject,
                text: 'Remitente:' + name + 'Mensaje:' + message + 'from' + from,
                html: `<div>
                <p>Remitente: ${name},
                <>
                email: ${from}</p>
                <h1>${subject}</h1>
                <br>
                <p>${message}</p>
            </div>`
            });
        } catch (err) {
            let error: { message?: string } = err || {};
            emailStatus = error.message;
            throw new Error('¡Parece que hubo un error!');
        }
    }
}