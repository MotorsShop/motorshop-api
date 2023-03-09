import { PrismaClient } from '@prisma/client';
import { sessionRequest } from '../../interfaces/session';
import { compare } from 'bcryptjs';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();
import 'dotenv/config';

const createSessionService = async ({ email, password }: sessionRequest) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      anouncements: true,
      comments: true,
    },
  });
  if (!user) {
    throw createError.NotFound('Invalid user or password');
  }
  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw createError.Unauthorized('Invalid user or password');
  }


  const decoded = {
    email: user.email,
    id: user.id,
    type: user.type,
  };

  const options = {
    expiresIn: '15h',
    subject: user.id,
  };

  const token = jwt.sign(decoded, process.env.SECRET_KEY as string, options);

  return { ...user, token };

};

export default createSessionService;
