import { PrismaClient } from '@prisma/client';
import { commentRequest, commentResponse } from '../../interfaces/comment';

const prisma = new PrismaClient();
const createCommentService = async (data: commentRequest) => {
  const { comment } = data;
  const newComment = await prisma.comment.create({ data: { comment } });
  return newComment;
};
export default createCommentService;
