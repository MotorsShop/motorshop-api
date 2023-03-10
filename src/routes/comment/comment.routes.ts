import { Router } from 'express';
import {
  createCommitControllers,
  listCommentControllers,
  retrieveCommentControlers,
  updateCommentControlers,
  deleteCommentControlers,
  listCommentsForAnoucementControllers,
} from '../../controllers/comment.controllers';
import ensureAdminOrOwner from '../../middlewares/ensureAdminOrOwner.middleware';
import ensureAuthMiddleware from '../../middlewares/ensureAuth.middleware';

const commentRoutes = Router();

commentRoutes.post('/:id', ensureAuthMiddleware, createCommitControllers);
commentRoutes.get('', listCommentControllers);
commentRoutes.get('/anouncement/:id', listCommentsForAnoucementControllers);
commentRoutes.get('/:id', retrieveCommentControlers);
commentRoutes.patch(
  '/:id',
  ensureAuthMiddleware,
  ensureAdminOrOwner,
  updateCommentControlers,
);
commentRoutes.delete(
  '/:id',
  ensureAuthMiddleware,
  ensureAdminOrOwner,
  deleteCommentControlers,
);

export default commentRoutes;
