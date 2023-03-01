import { Router } from 'express';
import {
  createUserController,
  listUserController,
} from '../../controllers/user.controller';

const userRoutes = Router();

userRoutes.post('', createUserController);
userRoutes.get('', listUserController);

export default userRoutes;
