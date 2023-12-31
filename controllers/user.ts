import { Request, Response } from 'express';
import { connectDB } from "../db";
import { User } from "../models/user";
import { Job } from '../models/job';

// user can view their own profile
export const viewProfile = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        return res.status(200).json({ success: true, message: 'User found', user });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }

}

// user can view more details about a job
export const viewJobDetails = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        connectDB();

        // find the job
        const job = await Job.findById(id);

        if (!job) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }

        return res.status(200).json({ success: true, message: 'Job found', job });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
}

// user can view all applications
export const viewAllApplications = async (req: Request, res: Response) => {
    try {
        const { _id } = req.user;
    
        connectDB();
    
        // find the user
        const user = await User.findById(_id);
    
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
    
        // find all the jobs
        const jobs = await Job.find({ _id: { $in: user.applications } });
    
        return res.status(200).json({ success: true, message: 'Your applications found', jobs });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }

}

// user can apply for a job
export const applyForJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { _id } = req.user;

        connectDB();

        // find the job
        const job = await Job.findById(id);

        if (!job) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }

        // find the user
        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // check if the user has already applied for the job
        const hasApplied = user.applications.includes(id as any);

        if (hasApplied) {
            return res.status(400).json({ success: false, message: 'You have already applied for this job' });
        }

        // apply for the job
        await User.findByIdAndUpdate(_id, { $push: { applications: id } });

        return res.status(200).json({ success: true, message: 'Successfully applied for the job' });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
}
