import  express  from "express";
import { authUser } from "../controllers/UserController.js";


const router = express.Router()

router.get('/test', authUser)




export default router;
