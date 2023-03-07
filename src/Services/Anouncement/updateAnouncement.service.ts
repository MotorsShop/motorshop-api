import { PrismaClient } from '@prisma/client';
import { AnouncementUpdated } from '../../interfaces/anouncement';
const prisma = new PrismaClient();

const updateAnouncimentService = async (
  id: string,
  anouncdata: AnouncementUpdated,
) => {
  const array = [];
  const {
    ad_type,
    cover_img,
    description,
    km,
    price,
    published,
    sold,
    title,
    year,
    images,
  } = anouncdata;
  const anouncement = await prisma.anouncement.update({
    where: { id: id },
    data: {
      description,
      cover_img,
      price,
      km,
      year,
      title,
      published,
      sold,
      ad_type,
    },
  });

  await prisma.image.deleteMany({
    where: { anouncementId: anouncement.id },
  });

  if (images) {
    for (const image of images) {
      array.push({
        url: image,
        anouncementId: anouncement.id,
      });
    }

    await prisma.image.createMany({
      data: array,
    });
  }

  return anouncement;
};

export default updateAnouncimentService;
