import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const listUserService = async () => {
  const getUser = await prisma.user.findMany({
    include: {
      anouncements: true,
    },
  });
  // const user = await prisma.user.findMany();

  return getUser;
};

export default listUserService;
