import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET || "");

    if (typeof decodedData === 'string') return res.status(401).json({ success: false, message: 'Unauthorized' });

    req.user = await User.findById(decodedData._id);
  
    next();
}