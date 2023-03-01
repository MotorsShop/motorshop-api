import { Router } from "express"
import anouncementRoutes from "./anouncement/anouncement.routes"
import commentRoutes from "./comment/comment.routes"
    
const routes = Router()

routes.use('/anouncement', anouncementRoutes)
routes.use("/comment", commentRoutes)


export default routes