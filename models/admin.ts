/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - email
 *         - firstName
 *         - lastName
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the admin
 *         firstName:
 *           type: string
 *           description: The first name of the admin
 *         lastName:
 *           type: string
 *           description: The last name of the admin
 *         password:
 *           type: boolean
 *           description: The password of the admin
 *         listings:
 *           type: string
 *           format: date
 *           description: The jobs the admin has listed
 *         role:
 *           type: string
 *           description: The role of the user (either user or admin)
 * 
 *       example:
 *        email: example@gmail.com
 *        firstName: John
 *        lastName: Doe
 *        password: helloworld
 *        role: admin
 */

import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const schema = new mongoose.Schema({
    email: { type: String, 
             required: [true, "Please enter an email"], 
             unique: [true, "This email already exists!"],
             validate: validator.isEmail }, // validates email using the validator package
    firstName: { type: String, 
                required: [true, "Please enter a first name"] },
    lastName: { type: String, 
                required: [true, "Please enter a last name"] },
    password: { type: String, 
                required: [true, "Please enter a password"],
                select: false }, // this will prevent the password from being returned in any query
    listings: [{ type: mongoose.Schema.Types.ObjectId, ref: "jobs" }],
    role: { type: String, 
            enum: ["user", "admin"], 
            default: "user" }
})

schema.pre("save", async function() {
    // hash the password before saving the user
    this.password = await bcrypt.hash(this.password, 12);
})

schema.methods.comparePassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

schema.methods.generateToken = function () {
return jwt.sign({_id: this._id, role: this.role}, process.env.JWT_SECRET || "", {
    expiresIn: "2d"
})
}

export const Admin = mongoose.model("Admin", schema);