import { Router } from 'express';
import anouncementRoutes from './anouncement/anouncement.routes';
import commentRoutes from './comment/comment.routes';
import sessionRoutes from './session/session.routes';
import emailRoutes from './email/email.routes';
import userRoutes from './user/user.routes';

const routes = Router();

routes.use('/anouncement', anouncementRoutes);
routes.use('/comment', commentRoutes);
routes.use('/user', userRoutes);
routes.use('/login', sessionRoutes);
routes.use('/email', emailRoutes);
export default routes;
