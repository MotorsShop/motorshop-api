import { Router } from 'express';
import { sendEmailControllers } from '../../controllers/email.controller';

const emailRoutes = Router();

emailRoutes.post('', sendEmailControllers);
export default emailRoutes;
