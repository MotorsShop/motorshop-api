import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const listCommentService = async () => {
  const listComments = await prisma.comment.findMany();
  return listComments;
};

export default listCommentService;
