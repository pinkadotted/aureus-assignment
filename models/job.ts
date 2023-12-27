import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: { type: String, required: [true, "Please enter a title"] },
    description: { type: String, required: [true, "Please enter a description"] },
    image: { type: String, required: [true, "Please enter an imageurl"] }, // for simplicity, we will just store the url of the image
    active: { type: Boolean, default: true },
    postedAt: { type: Date, default: Date.now },
    company: { type: String, required: [true, "Please enter a company"] },
    salary: { type: Number, required: [true, "Please enter a salary"] },
})

export const Job = mongoose.model("Job", schema);