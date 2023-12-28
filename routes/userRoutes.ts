// routes/userRoutes.ts
import express from 'express';
// all the controllers
import { userLogin, userRegister } from "../controllers/authController";
import { getAllJobs } from "../controllers/commonController";
import { applyForJob, viewAllApplications, viewJobDetails, viewProfile } from "../controllers/user";
import { isAuthenticated, isUser } from "../controllers/auth";

const router = express.Router();

router.post('/signup', userRegister);
router.post('/login', userLogin);
router.post('/jobs/:id/apply', isAuthenticated, isUser, applyForJob);
router.get('/jobs/:id', isAuthenticated, isUser, viewJobDetails);
router.get('/jobs', isAuthenticated, isUser, getAllJobs);
router.get('/me/applications', isAuthenticated, isUser, viewAllApplications);
router.get('/me', isAuthenticated, isUser, viewProfile);

export default router;
