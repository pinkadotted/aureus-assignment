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

// deleting a job
export const deleteJob = async (req: Request, res: Response) => {
    const { id } = req.params;

    connectDB();

    // checking if the job was posted by the admin
    const job = await Job.findById(id);
    if (!job) {
        res.status(404).json({ success: false, message: 'Job not found' });
    }
    // deleting the job
    await Job.findByIdAndDelete(id);

    // sending the response
    res.status(200).json({ success: true, message: 'Job deleted successfully', job });
}