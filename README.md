
# Backend Developer Assignment

## Overview
This is a nodeJS application for a Job Portal. It is primarily written using ExpressJS and Typescript, with a help of a few other npm packages. 




## Quick start

Go to the root directory of the project: aureus-assignment

```bash
  npm install
```
### Running Tests
To run the test suite:
```
npm run test
```
You should see 12 (passing) test cases. You may modify the test files placed inside the "tests" directory. 

The tests for the admin routes run on port 3001 while the tests for the user routes run on port 3002.

### Run Locally
```
npm run dev
```
Once the server has started, open <localhost:3000> on your browser and visit <localhost:3000/docs> to view the SwaggerUI Docs. 


## Features

### User
- Create an account with email, first name, last name, and a password
    - The password is hashed using the bcrypt package
- Login with the created account
- View all the jobs on the platform
- View more details of a selected job
- Apply for a selected job by providing the job id
- View all the jobs I have applied for
- View my profile details

### Admin
- Create an account with email, first name, last name, and a password
    - The password is hashed using the bcrypt package
- Login with the created account
- View all the jobs on the platform
- Post a job with title, description, image url, active status, posted at time, company and salary to the platform
- Delete a job by providing the job id




## API Routes

### Users

#### Register a new user
```bash
  POST /api/v1/user/signup
```
#### Login a user
```bash
  POST /api/v1/user/login
```
#### Apply for a job
```bash
  POST /api/v1/user/jobs/{id}/apply
```
#### View job details
```bash
  GET /api/v1/user/jobs/{id}
```
#### View all jobs
```bash
  GET /api/v1/user/jobs
```
#### View my applications
```bash
  GET /api/v1/user/me/applications
```
#### View my profile
```bash
  GET /api/v1/user/me
```

### Admins 

#### Register a new admin
```bash
  POST /api/v1/admin/signup
```
#### Login an admin
```bash
  POST /api/v1/admin/login
```
#### Add a new job
```bash
  POST /api/v1/admin/jobs/add
```
#### Delete a job
```bash
  DELETE /api/v1/admin/jobs/delete/{id}
```
#### View all jobs
```bash
  GET /api/v1/admin/jobs
```


## Documentation

[SwaggerUI Documentation](http://localhost:3000/docs)

### Some important functions


## Conclusion


