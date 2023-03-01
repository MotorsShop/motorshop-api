import { PrismaClient } from '@prisma/client';
import { UserRequest } from '../../interfaces/user';

const prisma = new PrismaClient();

const createUserService = async (data: UserRequest) => {
  const {
    name,
    email,
    cpf,
    phone,
    description,
    type,
    password,
    date_of_birth,
  } = data;

  await prisma.user.create({
    data: {
      name,
      email,
      cpf,
      phone,
      description,
      type,
      password,
      date_of_birth,
    },
  });

  return { email, name, cpf, phone, description, type, date_of_birth };
};

export default createUserService;
