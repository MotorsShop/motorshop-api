import {
  AnouncementRequest,
  AnouncementResponse,
} from '../../interfaces/anouncement';
import { PrismaClient } from '@prisma/client';
import { url } from 'inspector';
const prisma = new PrismaClient();
const createAnouncementService = async (data: AnouncementRequest) => {
  const {
    title,
    year,
    km,
    price,
    description,
    vehicle_type,
    ad_type,
    published,
    sold,
    cover_img,
    userId,
    images,
  } = data;

  if (images){
   
    const createImages = await prisma.image.create({
    data:{ images[0]},
  });
  }
  console.log(createImages);
  const newAnouncement = await prisma.anouncement.create({
    data: {
      //id,
      title,
      year,
      km,
      price,
      description,
      vehicle_type,
      ad_type,
      published,
      sold,
      cover_img,
      userId,

      //images: ['url1'],
      // create: {
      //   data: {
      //     url: url, //images.map(image => ({ url: image.url })),
      //   },
      // },
      //},
      //created
    },
  });
  return newAnouncement;
};

export default createAnouncementService;
