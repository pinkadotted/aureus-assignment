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
import { viewProfile } from "../controllers/user";
import { isAuthenticated } from "../controllers/auth";

// routes for the user
app.post("/user/signup", userRegister)
app.post("/user/login", userLogin)
app.get("/user/all-jobs", getAllJobs)
app.get("/user/view-profile", isAuthenticated, viewProfile)


// routes for the admin
app.post("/admin/signup", adminRegister)
app.post("/admin/login", adminLogin)
app.post("/admin/add-job", addJob)
app.get("/admin/all-jobs", getAllJobs)
app.delete("/admin/delete-job/:id", deleteJob)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});