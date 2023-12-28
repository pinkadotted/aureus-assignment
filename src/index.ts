// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { adminLogin, adminRegister, userLogin, userRegister } from "../controllers/authController";
import { addJob, deleteJob } from "../controllers/admin";
import { getAllJobs } from "../controllers/commonController";
import { applyForJob, viewAllApplications, viewJobDetails, viewProfile } from "../controllers/user";
import { isAdmin, isAuthenticated, isUser } from "../controllers/auth";

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

// routes for the user
app.post("/user/signup", userRegister)
app.post("/user/login", userLogin)
app.post("/user/jobs/:id/apply",isAuthenticated, isUser, applyForJob)
app.get("/user/jobs/:id",isAuthenticated, isUser, viewJobDetails)
app.get("/user/jobs",isAuthenticated, isUser, getAllJobs)
app.get("/user/me/applications",isAuthenticated, isUser, viewAllApplications)
app.get("/user/me", isAuthenticated, isUser, viewProfile)

// routes for the admin
app.post("/admin/signup", adminRegister)
app.post("/admin/login", adminLogin)
app.post("/admin/jobs/add",isAuthenticated, isAdmin, addJob)
app.delete("/admin/jobs/delete/:id",isAuthenticated, isAdmin, deleteJob)
app.get("/admin/jobs",isAuthenticated, isAdmin, getAllJobs)


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});