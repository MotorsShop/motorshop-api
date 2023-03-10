import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import { UserRequest } from '../../interfaces/user';
import {
  createUserSerializer,
  userNotPasswordSerializer,
} from '../../serializers';
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

  const userWithoutPassword = exclude(createData, ['password']);

  return userWithoutPassword;
};

function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[],
): Omit<User, Key> {
  for (const key of keys) {
    delete user[key];
  }
  return user;
}

export default createUserService;
