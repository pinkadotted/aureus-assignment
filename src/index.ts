// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "../db";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());


// root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

import { adminLogin, adminRegister, userLogin, userRegister } from "../controllers/authController";
import { addJob, deleteJob } from "../controllers/admin";
import { getAllJobs } from "../controllers/commonController";
import { applyForJob, viewAllApplications, viewJobDetails, viewProfile } from "../controllers/user";
import { isAdmin, isAuthenticated, isUser } from "../controllers/auth";

// routes for the user
app.post("/user/signup", userRegister)
app.post("/user/login", userLogin)
app.get("/user/jobs",isAuthenticated, isUser, getAllJobs)
app.get("/user/jobs/:id",isAuthenticated, isUser, viewJobDetails)
app.post("/user/jobs/:id/apply",isAuthenticated, isUser, applyForJob)
app.get("/user/applications",isAuthenticated, isUser, viewAllApplications)
app.get("/user/me", isAuthenticated, isUser, viewProfile)



// routes for the admin
app.post("/admin/signup", adminRegister)
app.post("/admin/login", adminLogin)
app.post("/admin/add-job",isAuthenticated, isAdmin, addJob)
app.get("/admin/all-jobs",isAuthenticated, isAdmin, getAllJobs)
app.delete("/admin/delete-job/:id",isAuthenticated, isAdmin, deleteJob)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});