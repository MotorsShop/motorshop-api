import { query, Request, Response } from 'express';
import createCommentService from '../Services/comment/createComment.service';
import listCommentService from '../Services/comment/listComment.service';
import retrieveCommentService from '../Services/comment/retrieveComment.service';
import updateCommentService from '../Services/comment/updateComment.service';
import deleteCommentService from '../Services/comment/deleteComment.service';

const createCommitControllers = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    const newComment = await createCommentService(data);
    return res.status(201).json(newComment);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listCommentControllers = async (req: Request, res: Response) => {
  try {
    const listComments = await listCommentService();
    return res.json(listComments);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const retrieveCommentControlers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const retrieveComment = await retrieveCommentService(id);
    return res.json(retrieveComment);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const updateCommentControlers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateComment = await updateCommentService(id, data);
    return res.status(200).json(updateComment)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const deleteCommentControlers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteComment = await deleteCommentService(id);
    return res.json(deleteComment);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export {
  createCommitControllers,
  listCommentControllers,
  retrieveCommentControlers,
  updateCommentControlers,
  deleteCommentControlers,
};
