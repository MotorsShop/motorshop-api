import { Request, Response } from 'express';
import { IEmailRequest } from '../interfaces/email';
import sendEmailService from '../Services/Email/sendEmail.service';

const sendEmailControllers = async (req: Request, res: Response) => {
  try {
    const { subject, to, text }: IEmailRequest = req.body;
    await sendEmailService({ subject, to, text });
    return res.status(201).json({
      message: 'Email enviado com sucesso',
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export { sendEmailControllers };
