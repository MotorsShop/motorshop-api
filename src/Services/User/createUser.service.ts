import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import { UserRequest } from '../../interfaces/user';
import {
  createUserSerializer,
  userNotPasswordSerializer,
} from '../../serializers';
import { AppError } from '../../errors/appError';

const prisma = new PrismaClient();

const createUserService = async (data: UserRequest) => {
  const serializerUser = await createUserSerializer.validate(data, {
    stripUnknown: true,
    abortEarly: false,
  });

  const {
    name,
    email,
    cpf,
    phone,
    description,
    type,
    password,
    date_of_birth,
  } = serializerUser;

  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const cpfAlreadyExists = await prisma.user.findUnique({
    where: {
      cpf,
    },
  });

  if (userAlreadyExists) {
    throw new AppError('User already exists!', 403);
  }
  if (cpfAlreadyExists) {
    throw new AppError('Cpf already exists!', 403);
  }

  const hashedPassword = await hash(password, 10);

  const createData = await prisma.user.create({
    data: {
      name,
      email,
      cpf,
      phone,
      description,
      type,
      password: hashedPassword,
      date_of_birth,
    },
    include: {
      anouncements: true,
    },
  });
  await userNotPasswordSerializer.validate(createData, {
    stripUnknown: true,
  });

  return createData;
};

export default createUserService;
