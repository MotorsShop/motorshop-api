import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const deleteUserService = (userId: number) => {
  const userToBeDeleted = prisma.user.delete({
    where: { id: userId },
  });

  return userToBeDeleted;
};

export default deleteUserService;
