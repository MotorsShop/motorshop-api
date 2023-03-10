import { PrismaClient } from '@prisma/client';
import { AppError } from '../../errors/appError';
const prisma = new PrismaClient();

const retrieveUserService = async (id: string) => {
  const retrieveUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      anouncements: true,
    },
  });
  if (!retrieveUser) {
    throw new AppError('user not found', 400);
  }

  return retrieveUser;
};

export default retrieveUserService;
