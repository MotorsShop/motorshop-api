import { Request, Response } from 'express';
import { sessionRequest } from '../interfaces/session';
import createSessionService from '../Services/Session/session.service';

const createSessionController = async (req: Request, res: Response) => {
  try {
    const dataSession: sessionRequest = req.body;
    const session = await createSessionService(dataSession);

    return res.json(session);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default createSessionController;
