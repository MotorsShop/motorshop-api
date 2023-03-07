import * as yup from 'yup';

const createUserSerializer = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().email().required(),
  cpf: yup.string().required().min(11),
  phone: yup.string().required(),
  date_of_birth: yup.string().required(),
  description: yup.string().required().min(10),
  type: yup.string().required(),
  password: yup.string().required(),
  id: yup.string().notRequired(),
});

const userNotPasswordSerializer = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  cpf: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  date_of_birth: yup.string().notRequired(),
  description: yup.string().notRequired(),
  type: yup.string().notRequired(),
  id: yup.string().notRequired(),
});

export { createUserSerializer, userNotPasswordSerializer };
