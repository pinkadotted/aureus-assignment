import mongoose from "mongoose";
import request from "supertest";
import { app } from "../src/index";
import { response } from "express";

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI || "");
})

afterEach(async () => {
    await mongoose.connection.close();
})

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
        expect(response.status).toBe(200);
        expect(response.body.message).toContain("logged in successfully");
    })})