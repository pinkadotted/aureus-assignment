
# Backend Developer Assignment

## Overview
This is a nodeJS application for a Job Portal. It is primarily written using ExpressJS and Typescript, with the help of a few other npm packages. 




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


## Documentation

[SwaggerUI Documentation](http://localhost:3000/docs)

### Some important functions

| Function name       | Description                                                                                                                                                                           |   |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| register            | Takes an Express Request object containing  {  email ,  firstName ,  lastName ,  password ,  role  } and registers a user if the provided email is not already found in the database. |   |
| isAuthenticated     | A middleware that parses the JWT from the request's cookie and sets the "user" property of the request, to be subsequently used when viewing profile.                                 |   |
| isUser              | A middleware that ensures the requester's role is "user".                                                                                                                             |   |
| isAdmin             | A middleware that ensures the requester's role is "admin".                                                                                                                            |   |
| login               | Takes an Express Request object containing {email, password} and if the credentials are valid, returns a cookie containing a JWT.                                                     |   |
| addJob              | Takes an Express Request object containing {title, description, image, active, postedAt, company, salary} and creates a ob in the database.                                           |   |
| deleteJob           | Takes a job's id in the request parameter, checks if it exists and if it does, deletes the job from the database.                                                                     |   |
| getAllJobs          | Returns the "jobs" property that contains all the jobs found in the database.                                                                                                         |   |
| applyForJob         | Takes a job's id in the request parameter, checks if it exists and if it does, adds the job's id (with a reference to the Job object) to the user's "applications" array.             |   |
| viewJobDetails      | Takes a job's id in the request parameter, checks if it exists and if it does, returns the job's full details.                                                                        |   |
| viewAllApplications | Returns the requester's "applications" array.                                                                                                                                         |   |
| viewProfile         | Returns the requester's "user" property, which contains their full details.                                                                                                           |   |

## Conclusion/Some thoughts 

Overall, I believe I have written the APIs conforming to the standard practices that I am currently aware of. 

I have chosen to use 2 different models for Users and Admins instead of combining them into 1 and differentiating them using just the role as both types of users have multiple differring properties, and it would be difficult to encapsulate them neatly by using just 1 model. Perhaps, this can be further looked into to find some optimisations. 


For future improvements, users and admins may be allowed to be able to edit their personal details, as well as edit their job applications. More comprehensive test coverage is another improvement that can be looked into. 
