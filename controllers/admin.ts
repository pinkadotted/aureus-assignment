import { Request, Response } from 'express';
import { connectDB } from '../db';
import { Job } from '../models/job';


// adding a job 
export const addJob = async (req: Request, res: Response) => {
    // connect to DB
    connectDB();
    // saving the job
    const job = await Job.create(req.body);
    // sending the response
    res.status(201).json({ success: true, message: 'Job created successfully', job });
}

// getting all jobs
export const getAllJobs = async (req: Request, res: Response) => {
    // connect to DB
    connectDB();
    // getting all jobs
    const jobs = await Job.find();
    // sending the response
    res.status(200).json({ success: true, message: 'All jobs', jobs });
}

// deleting a job
export const deleteJob = async (req: Request, res: Response) => {
    // connect to DB
    connectDB();
    // deleting the job
    const job = await Job.findByIdAndDelete(req.params.id);
    // sending the response
    res.status(200).json({ success: true, message: 'Job deleted successfully', job });
}