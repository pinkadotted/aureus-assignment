import { Request, Response } from 'express';
import { connectDB } from '../db';
import { Job } from '../models/job';
import mongoose from 'mongoose';


// adding a job 
export const addJob = async (req: Request, res: Response) => {
    try {
        connectDB();
        // creating the job
        const job = await Job.create(req.body);
        // sending the response
        res.status(201).json({ success: true, message: 'Job created successfully', job });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

// deleting a job
export const deleteJob = async (req: Request, res: Response) => {
    try {
        const id  = req.params.id;
    
        connectDB();
    
        // checking if the job exists
        const job = await Job.findById(id);
        if (!job) {
            res.status(404).json({ success: false, message: 'Job not found' });
        }
        // deleting the job
        const jobID = new mongoose.Types.ObjectId(id);
        await Job.findByIdAndDelete(jobID);
    
        // sending the response
        res.status(200).json({ success: true, message: 'Job deleted successfully', job });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}