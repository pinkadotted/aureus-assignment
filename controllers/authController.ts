import { Request, Response } from 'express';
import { connectDB } from '../db';
import { Document, Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { User } from '../models/user';
import { Admin } from '../models/admin';

interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    applications: ObjectId[];
    role: string;
    comparePassword: (password: string) => Promise<boolean>;
    generateToken: () => string;
}

interface IAuthController {
    register: (req: Request, res: Response) => void;
    login: (req: Request, res: Response) => void;
}

export function createAuthController(Model: Model<Document>): IAuthController {
    return {
        async register(req: Request, res: Response) {
            try {
                const { email, firstName, lastName, password, role } = req.body;

                // connect to the database
                connectDB();

                // check if the user already exists
                let user = await Model.findOne({ email });

                if (user) {
                    return res.status(400).json({ success: false, message: 'User already exists' });
                }

                // if the user does not exist, create a new user
                user = await Model.create({ email, firstName, lastName, password, role });

                res.status(201).json({ success: true, message: `${(user as IUser).firstName} registered successfully!`, user });
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        },

        async login(req: Request, res: Response) {
            try {
                const { email, password } = req.body;

                // connect to the database
                connectDB();

                // check if the user already exists
                const user = await Model.findOne({ email }).select('+password');

                if (!user) {
                    return res.status(400).json({ success: false, message: 'User does not exist' });
                }

                const isMatch = await (user as IUser).comparePassword(password);

                if (!isMatch) {
                    return res.status(400).json({ success: false, message: 'Incorrect password' });
                }

                const token = (user as IUser).generateToken();

                res.status(200).cookie("token", token, {
                    expires: new Date(Date.now() + 86400000),
                }).json({ success: true, message: `${(user as IUser).firstName} logged in successfully!`});
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        },
    };
}

const userAuthController = createAuthController(User as any);
const adminAuthController = createAuthController(Admin as any);

export const userRegister = userAuthController.register;
export const userLogin = userAuthController.login;

export const adminRegister = adminAuthController.register;
export const adminLogin = adminAuthController.login;