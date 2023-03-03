import { Router } from 'express';
import {
  createCommitControllers,
  listCommentControllers,
  retrieveCommentControlers,
  updateCommentControlers,
  deleteCommentControlers,
} from '../../controllers/comment.controllers';

const commentRoutes = Router();

commentRoutes.post('/:id', createCommitControllers);
commentRoutes.get('', listCommentControllers);
commentRoutes.get('/:id', retrieveCommentControlers);
commentRoutes.patch('/:id', updateCommentControlers);
commentRoutes.delete('/:id', deleteCommentControlers);

export default commentRoutes;
