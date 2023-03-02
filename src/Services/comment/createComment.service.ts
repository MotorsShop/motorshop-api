import { PrismaClient } from '@prisma/client';
import { commentRequest, commentResponse } from '../../interfaces/comment';

const prisma = new PrismaClient();
const createCommentService = async (data: commentRequest) => {
  const { comment, authorId } = data;
  const newComment = await prisma.comment.create({
    data: {
      comment,
      author: { connect: { id: authorId } },
    },
  });
  return newComment;
};
export default createCommentService;
