import { Request, Response } from 'express';
import { AppError } from '../errors/appError';
import createUserService from '../Services/User/createUser.service';
import deleteUserService from '../Services/User/deleteUser.service';
import listUserService from '../Services/User/listUsers.service';
import retrieveUserService from '../Services/User/retrieveUser.service';
import updateUserService from '../Services/User/updateUser.service';
import sendResetPasswordServices from '../Services/User/sendResetPassword.services';
import resetPasswordServices from '../Services/User/resetPassword.services';
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
    if (error instanceof AppError) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const retrieveUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await retrieveUserService(id);
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
    const data = req.body;
    const user = await updateUserService(id, data);
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
    await deleteUserService(id);
    return res.status(204).json({ message: 'User deleted succesfully!' });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const sendUserResetPasswordController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const protocol = req.protocol;
    const host = req.get('host');
    await sendResetPasswordServices(email, protocol, host);
    return res.json({ message: 'token send' });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const resetPasswordController = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;
    await resetPasswordServices(token, newPassword);
    return res.json({ message: 'password changed' });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export {
  sendUserResetPasswordController,
  resetPasswordController,
  createUserController,
  listUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
};
