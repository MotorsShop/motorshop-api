import { PrismaClient } from '@prisma/client';
import { sessionRequest } from '../../interfaces/session';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();
import 'dotenv/config';
import { AppError } from '../../errors/appError';

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
    throw new AppError('Invalid user or password', 401);
  }
  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError('Invalid user or password', 401);
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

  return { user, token };
};

export default createSessionService;
