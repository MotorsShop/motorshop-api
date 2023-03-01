import { PrismaClient } from '@prisma/client';
import { sessionRequest } from '../../interfaces/session';
import { compare } from 'bcryptjs';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();
// import 'dotenv/config';

const createSessionService = async ({ email, password }: sessionRequest) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw createError.NotFound('Invalid user or password');
  }

  const passwordMatch = await compare(password, user.password);
  const emailMatch = await compare(password, user.email);

  if (!passwordMatch || !emailMatch) {
    throw createError.Unauthorized('Invalid user or password');
  }

  const token = jwt.sign(
    {
      expiresIn: '15h',
      subject: user.id,
    },
    process.env.SECRET_KEY as string,
  );

  return { ...user, token };
};

export default createSessionService;
