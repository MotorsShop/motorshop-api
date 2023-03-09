import { PrismaClient } from '@prisma/client';
import { UserUpdate } from '../../interfaces/user';
const prisma = new PrismaClient();

const updateUserService = async (userId: string, data: UserUpdate) => {
  const updateUser = await prisma.user.update({
    where: { id: userId },
    data: data,
  });
  return updateUser;
};

export default updateUserService;
