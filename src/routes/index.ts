import { Router } from 'express';
import anouncementRoutes from './anouncement/anouncement.routes';
import userRoutes from './user/user.routes';

const routes = Router();

routes.use('/anouncement', anouncementRoutes);
routes.use('/user', userRoutes);

export default routes;
