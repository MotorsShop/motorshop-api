import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
const prisma = new PrismaClient();

const resetPasswordServices = async (token: string, newPassword: string) => {
  const retrieveUser = await prisma.user.findFirst({
    where: {
      token_reset_password: token,
    },
  });

  if (retrieveUser) {
    const hashedPassword = await hash(newPassword, 10);
    await prisma.user.update({
      where: {
        email: retrieveUser.email,
      },
      data: {
        token_reset_password: '',
        password: hashedPassword,
      },
    });
  }
};
export default resetPasswordServices;
