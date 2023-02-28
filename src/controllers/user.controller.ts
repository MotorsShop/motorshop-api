import { Request, Response } from 'express';
import createUserService from '../Services/User/createUser.service';
import listUserService from '../Services/User/listUser.service';

const createUserController = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    const newUser = await createUserService(data);
    return res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listUserController = async (req: Request, res: Response) => {
  try {
    const user = await listUserService();
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export { createUserController, listUserController };
