import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const listCommentForAnouncementService = async (id: string) => {
  const listComments = await prisma.comment.findMany({
    where: { AnouncementId: id },
    include: {
      author: true,
    },
  });
  return listComments;
};

export default listCommentForAnouncementService;
