import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  listUserController,
  retrieveUserController,
  updateUserController,
} from '../../controllers/user.controller';

const userRoutes = Router();

userRoutes.post('', createUserController);
userRoutes.get('', listUserController);
userRoutes.get('/:id', retrieveUserController);
userRoutes.patch('/:id', updateUserController);
userRoutes.delete('/:id', deleteUserController);

export default userRoutes;
