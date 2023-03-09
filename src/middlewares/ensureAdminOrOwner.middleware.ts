import { Request, Response, NextFunction } from 'express';

import 'dotenv/config';
import createError from 'http-errors';

const ensureAdminOrOwner = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const idUser = req.user.id;
  const isAdm = req.user.type;
  const { id } = req.params;

  if (isAdm !== 'admin' && id !== idUser) {
    throw createError.Forbidden('User is not admin or owner of the resource');
  }

  return next();
};

export default ensureAdminOrOwner;
