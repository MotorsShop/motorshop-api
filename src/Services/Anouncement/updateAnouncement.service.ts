import { PrismaClient } from '@prisma/client';
import { AnouncementUpdated } from '../../interfaces/anouncement';
const prisma = new PrismaClient();

const updateAnouncimentService = async (
  id: string,
  anouncdata: AnouncementUpdated,
) => {
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

  return anouncement;
};

export default updateAnouncimentService;
