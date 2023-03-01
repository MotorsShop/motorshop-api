import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const listAnouncementService = async () => {
  const anouncement = await prisma.anouncement.findMany();

  return anouncement;
};

export default listAnouncementService;
