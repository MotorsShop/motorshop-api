import * as yup from 'yup';

const createAnouncementSerializer = yup.object().shape({
  title: yup.string().required().min(2),
  year: yup.number().required(),
  km: yup.number().required(),
  price: yup.number().required(),
  description: yup.string().required().min(5),
  vehicle_type: yup.string().required(),
  ad_type: yup.string().required(),
  published: yup.boolean().required(),
  sold: yup.boolean().required(),
  cover_img: yup.string().required(),
  userId: yup.string().required(),
  images: yup.array(),
});

export { createAnouncementSerializer };
