import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const listUserService = async () => {
  const getUser = await prisma.user.findMany({
    include: {
      anouncements: true,
      comments: true,
    },
  });

  return getUser;
};

export default listUserService;
