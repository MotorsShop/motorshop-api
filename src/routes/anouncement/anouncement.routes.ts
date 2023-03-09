import { Router } from 'express';
import {
  createAnouncementControllers,
  listAnouncementControllers,
  retrieveAnouncementControllers,
  deleteAnouncementControllers,
  updateAnouncementControllers,
} from '../../controllers/anouncement.controller';
import ensureAnnouncementeMiddlewareOwner from '../../middlewares/ensureAnnouncementOwner.middleware';
import ensureAuthMiddleware from '../../middlewares/ensureAuth.middleware';

const anouncementRoutes = Router();

anouncementRoutes.post('', ensureAuthMiddleware, createAnouncementControllers);
anouncementRoutes.get(
  '',
  ensureAuthMiddleware,
  ensureAnnouncementeMiddlewareOwner,
  listAnouncementControllers,
);
anouncementRoutes.get(
  '/:id',
  ensureAuthMiddleware,
  ensureAnnouncementeMiddlewareOwner,
  retrieveAnouncementControllers,
);
anouncementRoutes.delete(
  '/:id',
  ensureAuthMiddleware,
  ensureAnnouncementeMiddlewareOwner,
  deleteAnouncementControllers,
);
anouncementRoutes.patch(
  '/:id',
  ensureAuthMiddleware,
  ensureAnnouncementeMiddlewareOwner,
  updateAnouncementControllers,
);

export default anouncementRoutes;
