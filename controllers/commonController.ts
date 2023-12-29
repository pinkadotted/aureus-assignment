import { Request, Response } from 'express';
import { connectDB } from "../db";
import { Job } from "../models/job";


// getting all jobs
export const getAllJobs = async (req: Request, res: Response) => {
    try {
        connectDB();
        // getting all jobs
        const jobs = await Job.find();
        
        return res.status(200).json({ success: true, message: 'All jobs', jobs });
    } catch (err) { 
        console.log(err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}