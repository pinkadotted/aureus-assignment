import { ObjectId } from "mongoose";
import { connectDB } from "../db";
import { User } from "../models/user";
import { Request, Response } from "express";
import bcrypt from "bcrypt";



interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    applications: ObjectId[];
    comparePassword: (password: string) => Promise<boolean>; 
    generateToken: () => string;  
}

export const registerUser = async (req: Request, res: Response) => {
    // extract the user data from the request body
    const { email, firstName, lastName, password } = req.body;

    // connect to the database
    connectDB();
    // check if the user already exists
    let user = await User.findOne({ email });

    if (user) {
        return res.status(400).json({ success: false, message: "User already exists" });
    }

    // if the user does not exist, create a new user
    user = await User.create({ email, firstName, lastName, password });

    res.status(201).json({ success: true, message: `${user.firstName} registered successfully!`, user });
}



export const loginUser = async (req: Request, res: Response) => {
    // extract the user data from the request body
    const { email, password } = req.body;

    // connect to the database
    connectDB();
    // check if the user already exists
    let user: IUser = await User.findOne({ email }).select("+password");

    if (!user) {
        return res.status(400).json({ success: false, message: "User does not exist" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(400).json({ success: false, message: "Incorrect password" });
    }

    const token = user.generateToken();

    res.status(200).json({ success: true, message: `${user.firstName} logged in successfully!`, token });
}