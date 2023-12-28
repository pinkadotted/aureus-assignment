// routes/adminRoutes.ts
import express from 'express';
// all the controllers
import { adminLogin, adminRegister} from "../controllers/authController";
import { addJob, deleteJob } from "../controllers/admin";
import { getAllJobs } from "../controllers/commonController";
import { isAdmin, isAuthenticated } from "../controllers/auth";

const router = express.Router();

router.post('/signup', adminRegister);
router.post('/login', adminLogin);
router.post('/jobs/add', isAuthenticated, isAdmin, addJob);
router.delete('/jobs/delete/:id', isAuthenticated, isAdmin, deleteJob);
router.get('/jobs', isAuthenticated, isAdmin, getAllJobs);

export default router;
