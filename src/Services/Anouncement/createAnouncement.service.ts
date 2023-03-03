import { Anouncement } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const createAnouncementService = async (data: Anouncement) => {
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
  } = data;

  const newAnouncement = await prisma.anouncement.create({
    data: {
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
    },
    include: {
      comments: true,
    },
  });
  return newAnouncement;
};

export default createAnouncementService;
