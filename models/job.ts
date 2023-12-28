/**
 * @swagger
 * components:
 *   schemas:
 *     Job:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - image
 *         - active
 *         - postedAt
 *         - company
 *         - salary
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the job
 *         description:
 *           type: string
 *           description: The description of the job
 *         image:
 *           type: string
 *           description: An image URL for the job
 *         active:
 *           type: boolean
 *           description: The status of the job
 *         postedAt:
 *           type: string
 *           format: date
 *           description: The date the job was posted
 *         company:
 *           type: string
 *           description: The company that posted the job
 *         salary:
 *           type: number
 *           description: The salary of the job
 *       example:
 *         title: Software Engineer
 *         description: We are looking for a software engineer to join our team
 *         image: https://images.unsplash.com/photo-1556742048-ede6c971a8a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcmluZyUyMHNvZnR3YXJlJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80
 *         active: true
 *         postedAt: 2021-07-01T00:00:00.000Z
 *         company: Google
 *         salary: 100000
 */


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