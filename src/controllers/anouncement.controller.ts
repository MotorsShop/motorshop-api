import { Request, Response } from 'express';
import createAnouncementService from '../Services/Anouncement/createAnouncement.service';
import listAnouncementService from '../Services/Anouncement/listAnouncement.service';
import retrieveAnouncementService from '../Services/Anouncement/retrieveAnouncement.service';
import deleteAnouncimentService from '../Services/Anouncement/deleteAnouncement.service';
import updateAnouncimentService from '../Services/Anouncement/updateAnouncement.service';

const createAnouncementControllers = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    const newAnouncement = await createAnouncementService(data);
    return res.status(201).json(newAnouncement);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listAnouncementControllers = async (req: Request, res: Response) => {
  try {
    const listAnouncement = await listAnouncementService();
    return res.json(listAnouncement);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const retrieveAnouncementControllers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const retrieveAnouncement = await retrieveAnouncementService(id);

    return res.json(retrieveAnouncement);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const deleteAnouncementControllers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteAnouncement = await deleteAnouncimentService(id);

    return res.status(204).json(deleteAnouncement);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const updateAnouncementControllers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const anouncDate = req.body;
    const updateAnouncement = await updateAnouncimentService(id, anouncDate);

    return res.status(200).json(updateAnouncement);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export {
  createAnouncementControllers,
  listAnouncementControllers,
  retrieveAnouncementControllers,
  deleteAnouncementControllers,
  updateAnouncementControllers,
};
