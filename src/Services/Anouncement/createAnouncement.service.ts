import { PrismaClient } from '@prisma/client';
import { AnouncementRequest } from '../../interfaces/anouncement';
import { createAnouncementSerializer } from '../../serializers';
const prisma = new PrismaClient();

const createAnouncementService = async (data: AnouncementRequest) => {
  const array = [];
  await createAnouncementSerializer.validate(data, {
    stripUnknown: true,
    abortEarly: false,
  });

  const {
    title,
    year,
    km,
    price,
    description,
    vehicle_type,
    ad_type,
    cover_img,
    userId,
    images,
  } = data;

  const newAnouncement = await prisma.anouncement.create({
    data: {
      ad_type,
      cover_img,
      description,
      km,
      price,
      sold: false,
      published: true,
      title,
      vehicle_type,
      year,
      user: { connect: { id: userId } },
    },
    include: {
      comments: true,
      images: true,
      user: true,
    },
  });

  for (const image of images) {
    array.push({
      url: image,
      anouncementId: newAnouncement.id,
    });
  }

  await prisma.image.createMany({
    data: array,
  });

  return newAnouncement;
};

export default createAnouncementService;
