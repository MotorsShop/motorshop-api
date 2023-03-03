import { PrismaClient } from '@prisma/client';
import { commentRequest } from '../../interfaces/comment';

const prisma = new PrismaClient();
const createCommentService = async (data: commentRequest, id: string) => {
  const { comment, authorId } = data;
  const newComment = await prisma.comment.create({
    data: {
      anouncement: { connect: { id: id } },
      comment,
      author: { connect: { id: authorId } },
    },
  });
  return newComment;
};
export default createCommentService;
