import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const listAnouncementService = async () => {
  const anouncement = await prisma.anouncement.findMany({
    include: {
      comments: {
        include: {
          author: true,
        },
      },
      user: true,
      images: true,
    },
  });

  return anouncement;
};

export default listAnouncementService;
