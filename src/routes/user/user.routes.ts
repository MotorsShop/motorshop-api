import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  listUserController,
  retrieveUserController,
  updateUserController,
} from '../../controllers/user.controller';
import ensureAdminOrOwner from '../../middlewares/ensureAdminOrOwner.middleware';
import ensureAuthMiddleware from '../../middlewares/ensureAuth.middleware';
import {
  sendUserResetPasswordController,
  resetPasswordController,
} from '../../controllers/user.controller';
const userRoutes = Router();

userRoutes.post('', createUserController);
userRoutes.get(
  '',

  listUserController,
);
userRoutes.get('/:id', retrieveUserController);
userRoutes.patch(
  '/:id',
  ensureAuthMiddleware,
  ensureAdminOrOwner,
  updateUserController,
);
userRoutes.delete(
  '/:id',
  ensureAuthMiddleware,
  ensureAdminOrOwner,
  deleteUserController,
);

userRoutes.patch('/password/:token', resetPasswordController);

userRoutes.post('/resetpassword', sendUserResetPasswordController);

export default userRoutes;
