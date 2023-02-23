import { PrismaClient } from "@prisma/client";
import { AnouncementRequest } from "../../interfaces/anouncement";

const prisma = new PrismaClient()

const updateAnouncimentService = async (id:string, anouncdata:AnouncementRequest) =>{

    const anouncement = await prisma.anouncement.update({
        where: { id: Number(id) },
        data:{...anouncdata},
    })
    
    return anouncement
}

export default updateAnouncimentService

    