import  express  from "express";
import 
{ 
    loginUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    logoutUser,
} 
from "../controllers/UserController.js";
import {protect} from '../middlewares/authMiddleware.js'



const router = express.Router()

router.post('/login', loginUser)
router.post('/register', registerUser)
router.post('/logout', logoutUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);





export default router;
