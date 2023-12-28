import mongoose from "mongoose";
import request from "supertest";
import { app } from "../src/index";
import { Job } from "../models/job";

require("dotenv").config();

let server: any;

beforeAll(() => {
    // Start the server and store the reference
    server = app.listen(3001, () => {
      console.log('Server is running on port 3000');
    });
  });

afterAll((done) => {
    // Close the server and call done when it's closed
    server.close(() => {
      console.log('Server closed');
      done();
    });
  });

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI || "");
})

afterEach(async () => {
    await mongoose.connection.close();
})



let authToken: string;

describe("POST /api/v1/admin/signup", () => {
    it("returns a 201 on successful signup", async () => {
        const response = await request(app).post("/admin/signup").send({
            "email": "testadmin@gmail.com",
            "firstName": "testAdmin",
            "lastName": "first",
            "password": "admintester",
            "role": "admin"
        })
        expect([201, 400].includes(response.status)).toBe(true);
    })})

describe("POST /api/v1/admin/login", () => {
    it("returns a 200 on successful login", async () => {
        const response = await request(app).post("/admin/login").send({
            "email": "testadmin@gmail.com",
            "password": "admintester"})
        authToken = response.header["set-cookie"][0].split(";")[0].split("=")[1];
        expect(response.status).toBe(200);
        expect(response.body.message).toContain("logged in successfully");
    })})    

describe("POST /api/v1/admin/jobs/add", () => {
    it("returns a 201 on successful job addition", async () => {
        const response = await request(app).post("/admin/jobs/add").set("Cookie", [`token=${authToken}`]).send({
            "title": "test job",
            "description": "test job description",
            "image": "https://images.unsplash.com/photo-1556742048-ede6c971a8a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcmluZyUyMHNvZnR3YXJlJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            "active": true,
            "postedAt": "2021-07-01T00:00:00.000Z",
            "company": "test company",
            "salary": 10000})
        expect(response.status).toBe(201);
        expect(response.body.message).toContain("Job created successfully");
    })})

describe("GET /api/v1/admin/jobs", () => {
    it("returns a 200 on successful job view", async () => {
        const response = await request(app).get("/admin/jobs").set("Cookie", [`token=${authToken}`]);
        expect(response.status).toBe(200);
        expect(response.body.message).toContain("All jobs")
        expect(response.body.jobs).toBeDefined();
    })})

describe("DELETE /api/v1/admin/jobs/delete/:id", () => {
    // first add a job to delete
    it("returns a 201 on successful job addition", async () => {
        const response = await request(app).post("/admin/jobs/add").set("Cookie", [`token=${authToken}`]).send({
            "title": "test job to be deleted",
            "description": "test job description",
            "image": "https://images.unsplash.com/photo-1556742048-ede6c971a8a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcmluZyUyMHNvZnR3YXJlJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            "active": true,
            "postedAt": "2021-07-01T00:00:00.000Z",
            "company": "test company",
            "salary": 10000})
        expect(response.status).toBe(201);
        expect(response.body.message).toContain("Job created successfully");

        // now get the id of the job to delete
        // for testing, we just retrieve the id of the job with title "test job to be deleted" using mongoose
        const job = await Job.findOne({title: "test job to be deleted"});
        const jobId = job?._id;

        // now delete the job
        const deleteResponse = await request(app).delete(`/admin/jobs/delete/${jobId}`).set("Cookie", [`token=${authToken}`]);
        expect(deleteResponse.status).toBe(200);
        expect(deleteResponse.body.message).toContain("Job deleted successfully");

    }, 15000)
})