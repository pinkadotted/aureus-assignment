import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { Admin } from "../models/admin";
import { connectDB } from "../db";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET || "");

    if (typeof decodedData === 'string') return res.status(401).json({ success: false, message: 'Unauthorized' });

  // Use the User or Admin model based on the type
  const userModel = (decodedData.role === 'admin') ? Admin : User;

  connectDB();

  if (userModel === Admin) {
    const admin = await Admin.findById(decodedData._id);
    req.user = admin;

  } else if (userModel === User) {
    console.log("User model: ", userModel)
    const user = await User.findById(decodedData._id);
    req.user = user;
  }

    console.log("IsAuth passing next: ", req.user)
    next();
}

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const {role} = req.user;

    if (role !== "admin") return res.status(403).json({ success: false, message: 'Forbidden' });
    
    next();
}

export const isUser = async (req: Request, res: Response, next: NextFunction) => {
    const {role} = req.user;

    if (role !== "user") return res.status(403).json({ success: false, message: 'Forbidden' });
    
    next();
}