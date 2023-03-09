import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import createError from 'http-errors';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const ensureAnnouncementeMiddlewareOwner = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const isAdm = req.user.type;

  const { id } = req.params;

  const anouncement = await prisma.anouncement.findFirst({
    where: {
      userId: id,
    },
  });

  if (isAdm !== 'admin' && anouncement?.userId === id) {
    throw createError.Forbidden('User is not admin or owner of the resource');
  }

  return next();
};

export default ensureAnnouncementeMiddlewareOwner;
