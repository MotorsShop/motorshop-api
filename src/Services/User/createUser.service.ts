import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import console from 'console';
import { UserRequest } from '../../interfaces/user';
import { createUserSerializer } from '../../serializers';

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
