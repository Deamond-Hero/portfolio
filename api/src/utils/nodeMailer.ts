import nodemailer, { Transporter } from 'nodemailer';
import dotenv from 'dotenv';
import { google } from 'googleapis';

dotenv.config();

interface AccountTransport {
  service: string;
  auth: {
    type: string;
    user: string;
    clientId: string;
    clientSecret: string;
    refreshToken: string;
    accessToken: string | null;  // Corregido aquí
  };
  tls: {
    rejectUnauthorized: boolean;  // Corregido aquí
  };
}

const OAuth2 = google.auth.OAuth2;

export const accountTransport: AccountTransport = {
  service: process.env.SERVICE || '',
  auth: {
    type: process.env.AUTH_TYPE || '',
    user: process.env.USER || '',
    clientId: process.env.CLIENT_ID || '',
    clientSecret: process.env.CLIENT_SECRET || '',
    refreshToken: process.env.REFRESH_TOKEN || '',
    accessToken: process.env.ACCESSTOKEN || null, 
  },
  tls: {
    rejectUnauthorized: false,
  },
};

export const mail_rover = async (callback: (transporter: Transporter) => void) => {
  const oauth2Client = new OAuth2(
    accountTransport.auth.clientId,
    accountTransport.auth.clientSecret,
    'https://developers.google.com/oauthplayground'
  );
  oauth2Client.setCredentials({
    refresh_token: accountTransport.auth.refreshToken,
  });
  oauth2Client.getAccessToken((err, token) => {
    if (err) {
      return console.log(err);
    }
    accountTransport.auth.accessToken = token || null;
    callback(nodemailer.createTransport(accountTransport.service));
  });
};