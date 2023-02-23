import { Router } from "express"
import anouncementRoutes from "./anouncement/anouncement.routes"
    
const routes = Router()

routes.use('/anouncement', anouncementRoutes)


export default routes