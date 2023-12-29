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
        return res.status(201).json({ success: true, message: 'Job created successfully', job });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

// deleting a job
export const deleteJob = async (req: Request, res: Response) => {
    let job;
    try {
        const id  = req.params.id;
    
        connectDB();
    
        // checking if the job exists
        try {
            const paramID = new mongoose.Types.ObjectId(id);
            const job = await Job.findById({ _id: paramID });
            if (!job) {
                return res.status(404).json({ success: false, message: 'Job not found' });
            }
        } catch (error) {
            return res.status(400).json({ success: false, message: "Please enter an existing job's id" });
        }
    
        // deleting the job
        const jobID = new mongoose.Types.ObjectId(id);
        await Job.findByIdAndDelete(jobID);
    
        // sending the response
        return res.status(200).json({ success: true, message: 'Job deleted successfully', job });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}