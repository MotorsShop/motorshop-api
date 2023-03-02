import { PrismaClient } from '@prisma/client';
import { commentRequest } from '../../interfaces/comment';
const prisma = new PrismaClient();

const updateCommentService = async (
  id: string,
  commentData: commentRequest,
) => {
  const updateComment = await prisma.comment.update({
    where: { id: Number(id) },
    data: { ...commentData },
  });
  return updateComment
};

export default updateCommentService
