import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const retrieveUserService = async (id: number) => {
  const retrieveUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      anouncements: true,
    },
  });

  return retrieveUser;
};

export default retrieveUserService;
