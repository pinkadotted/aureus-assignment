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
    listings: [{ type: mongoose.Schema.Types.ObjectId, ref: "jobs" }]
})

schema.pre("save", async function() {
    // hash the password before saving the user
    this.password = await bcrypt.hash(this.password, 12);
})

schema.methods.comparePassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

schema.methods.generateToken = function () {
return jwt.sign({_id: this._id}, process.env.JWT_SECRET || "", {
    expiresIn: "2d"
})
}

export const Admin = mongoose.model("admin", schema);