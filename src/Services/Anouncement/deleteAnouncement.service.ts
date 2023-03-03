import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteAnouncimentService = async (id: string) => {
  const anouncement = await prisma.anouncement.delete({
    where: { id: id },
  });

  return anouncement;
};

export default deleteAnouncimentService;
