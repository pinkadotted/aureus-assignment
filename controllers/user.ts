import { Request, Response } from 'express';
import { connectDB } from "../db";
import { User } from "../models/user";
import { Job } from '../models/job';

// user can view their own profile
export const viewProfile = async (req: Request, res: Response) => {
    const user = req.user;
    res.status(200).json({ success: true, message: 'User found', user });
}

// user can view more details about a job
export const viewJobDetails = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // connect to the database
        connectDB();

        // find the job
        const job = await Job.findById(id);

        if (!job) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }

        res.status(200).json({ success: true, message: 'Job found', job });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// user can view all applications
export const viewAllApplications = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // connect to the database
        connectDB();

        // find the user
        const user = await User.findById(id).populate('applications');

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, message: 'User found', user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// user can apply for a job
