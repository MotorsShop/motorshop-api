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
commentRoutes.get(
  '',
  ensureAuthMiddleware,
  ensureAdminOrOwner,
  listCommentControllers,
);
commentRoutes.get(
  '/anouncement/:id',
  ensureAuthMiddleware,
  ensureAdminOrOwner,
  listCommentsForAnoucementControllers,
);
commentRoutes.get(
  '/:id',
  ensureAuthMiddleware,
  ensureAdminOrOwner,
  retrieveCommentControlers,
);
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
