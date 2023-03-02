import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const deleteCommentService = async (id: string) => {
  const deleteComment = await prisma.comment.delete({
    where: { id: Number(id) },
  });
  return deleteComment;
};

export default deleteCommentService;
