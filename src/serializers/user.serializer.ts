import * as yup from 'yup';

const createUserSerializer = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  date_of_birth: yup.string().required(),
  description: yup.string().required(),
  type: yup.string().required(),
  password: yup.string().required(),
  id: yup.string().notRequired(),
});

export { createUserSerializer };
