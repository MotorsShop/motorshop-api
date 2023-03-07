import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const deleteUserService = (userId: string) => {
  const userToBeDeleted = prisma.user.delete({
    where: { id: userId },
  });

  return userToBeDeleted;
};

export default deleteUserService;
