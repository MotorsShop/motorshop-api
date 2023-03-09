import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import { UserRequest } from '../../interfaces/user';
import { createUserSerializer } from '../../serializers';
import createError from 'http-errors';

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

  if (userAlreadyExists) {
    throw createError.BadRequest('User already exists!');
  }

  const hashedPassword = await hash(password, 10);

  await prisma.user.create({
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
  });

  return { email, name, cpf, phone, description, type, date_of_birth };
};

export default createUserService;
