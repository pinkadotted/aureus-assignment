import mongoose from "mongoose";
import request from "supertest";
import { app } from "../src/index";

require("dotenv").config();

let server: any;
let randomJobId: string;

beforeAll(() => {
  // Start the server and store the reference
  server = app.listen(3002, () => {
    console.log('Server is running on port 3002');
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

describe("POST /api/v1/user/signup", () => {
    it("returns a 201 on successful signup", async () => {
        const response = await request(app).post("/user/signup").send({
            "email": "test4@gmail.com",
            "firstName": "test",
            "lastName": "test",
            "password": "password",
            "role": "user"
        })
        expect([201, 400].includes(response.status)).toBe(true);    
    })})


describe("POST /api/v1/user/login", () => {
    it("returns a 200 on successful login", async () => {
        const response = await request(app).post("/user/login").send({
            "email": "test4@gmail.com",
            "password": "password",
        })
        authToken = response.header["set-cookie"][0].split(";")[0].split("=")[1];
        expect(response.status).toBe(200);
        expect(response.body.message).toContain("logged in successfully");
    })})

describe("POST /api/v1/user/me", () => {
    it("returns a 200 on successful profile view", async () => {
        const response = await request(app).get("/user/me").set("Cookie", [`token=${authToken}`]);
        expect(response.status).toBe(200);
        expect(response.body.message).toContain("User found");
    })})

describe("GET /api/v1/user/applications", () => {
    it("returns a 200 on successful application view", async () => {
        const response = await request(app).get("/user/me/applications").set("Cookie", [`token=${authToken}`]);
        expect(response.status).toBe(200);
        expect(response.body.message).toContain("Your applications found")
        expect(response.body.jobs).toBeDefined();
    })})

describe("GET /api/v1/user/jobs", () => {
    it("returns a 200 on successful job view", async () => {
        const response = await request(app).get("/user/jobs").set("Cookie", [`token=${authToken}`]);

        // get a random job id from the response to use in the next test
        randomJobId = response.body.jobs[0]._id;
        expect(response.status).toBe(200);
        expect(response.body.message).toContain("All jobs");
    })})

describe("GET /api/v1/user/jobs/:id", () => {
    it("returns a 200 on successful job view", async () => {
        const response = await request(app).get(`/user/jobs/${randomJobId}`).set("Cookie", [`token=${authToken}`]);
        expect(response.status).toBe(200);
        expect(response.body.message).toContain("Job found");
    })})

// "658d0659055476dc4699159b" this is an existing job id, you can change it to any existing job id
describe("POST /api/v1/user/jobs/{id}/apply", () => {
    it("returns a 201 on successful job application", async () => {
        const response = await request(app).post(`/user/jobs/${randomJobId}/apply`).set("Cookie", [`token=${authToken}`]);
        expect([200, 400].includes(response.status)).toBe(true);    
    })})
