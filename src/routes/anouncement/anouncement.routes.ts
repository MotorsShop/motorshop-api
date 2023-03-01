import { Router } from 'express';
import {
  createAnouncementControllers,
  listAnouncementControllers,
  retrieveAnouncementControllers,
  deleteAnouncementControllers,
  updateAnouncementControllers,
} from '../../controllers/anouncement.controller';

const anouncementRoutes = Router();

anouncementRoutes.post('', createAnouncementControllers);
anouncementRoutes.get('', listAnouncementControllers);
anouncementRoutes.get('/:id', retrieveAnouncementControllers);
anouncementRoutes.delete('/:id', deleteAnouncementControllers);
anouncementRoutes.patch('/:id', updateAnouncementControllers);

export default anouncementRoutes;
