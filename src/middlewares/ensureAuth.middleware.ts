import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import createError from 'http-errors';

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw createError.Unauthorized('Missing token authorization');
  }

  token = token.split(' ')[1];

  jwt.verify(token, String(process.env.SECRET_KEY), (error, decoded: any) => {
    if (error) throw createError.Unauthorized('Invalid token authorization');

    req.user = {
      id: decoded.id,
      email: decoded.email,
      type: decoded.type,
    };

    return next();
  });
};

export default ensureAuthMiddleware;
