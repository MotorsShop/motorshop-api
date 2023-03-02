import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const retrieveCommentService = async (id: string) => {
  const retrieveComment = prisma.comment.findUnique({
    where: { id: Number(id) },
  });

  return retrieveComment;
};

export default retrieveCommentService;