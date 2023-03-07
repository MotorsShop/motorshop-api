import { Request, Response } from 'express';
import createUserService from '../Services/User/createUser.service';
import deleteUserService from '../Services/User/deleteUser.service';
import listUserService from '../Services/User/listUsers.service';
import retrieveUserService from '../Services/User/retrieveUser.service';
import updateUserService from '../Services/User/updateUser.service';

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

const retrieveUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const idParsed = id;
    const user = await retrieveUserService(idParsed);
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const idParsed = id;
    const data = req.body;
    const user = await updateUserService(idParsed, data);
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};
const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const idParsed = id;
    await deleteUserService(idParsed);
    return res.status(204).json({ message: 'User deleted succesfully!' });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export {
  createUserController,
  listUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
};
