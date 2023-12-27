import { Request, Response } from 'express';
import { connectDB } from "../db";
import { Job } from "../models/job";


// getting all jobs
export const getAllJobs = async (req: Request, res: Response) => {
    // connect to DB
    connectDB();
    // getting all jobs
    const jobs = await Job.find();
    // sending the response
    res.status(200).json({ success: true, message: 'All jobs', jobs });
}