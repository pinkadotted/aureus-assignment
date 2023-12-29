// user/signup
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /api/v1/user/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successful registration.
 *         content:
 *           application/json:
 *            example:
 *              success: true
 *              message: User registered successfully!
 *       400:
 *        description: Admin already exists
 *        content:
 *         application/json:
 *           example:
 *             success: false
 *             message: User already exists
 *       500:
 *         description: Internal server error
 *         content:
 *          application/json:
 *           example:
 *              success: false
 *              message: Internal Server Error
 */

// user/login
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /api/v1/user/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the admin
 *               password:
 *                 type: string
 *                 description: The password of the admin
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successful login.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       400:
 *         description: Incorrect password
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Incorrect password
 *       401:
 *         description: User does not exist
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: User does not exist
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *            example:
 *              success: false
 *              message: Internal Server Error
 * 
 *
 */

// user/jobs/:id/apply
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /api/v1/user/jobs/{id}/apply:
 *   post:
 *     summary: Apply for a job
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job id
 *     responses:
 *       200:
 *         description: Successful application.
 *         content:
 *           application/json:
 *             example:
 *              success: true
 *              message: Successfully applied for the job
 *       400:
 *        description: You have already applied for this job
 *        content:
 *          application/json:
 *           example:
 *            success: false
 *            message: You have already applied for this job
 *       404:
 *        description: Job not found
 *        content:
 *         application/json:
 *          example:
 *           success: false
 *           message: Job not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *            example:
 *              success: false
 *              message: Internal Server Error
 *
 */

// user/jobs/:id
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /api/v1/user/jobs/{id}:
 *   get:
 *     summary: View job details
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job id
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *            example:
 *              success: true
 *              message: Job found
 *              job: {
 *               _id: 5f9d4b5b6c6b4b2b6c6b4b2b,
 *               title: "Software Engineer",
 *               description: "We are looking for a software engineer",
 *               image: "https://images.unsplash.com/photo-1556742048-ede6c971a8a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcmluZyUyMHNvZnR3YXJlJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
 *               active: true,
 *               postedAt: 2021-07-01T00:00:00.000Z,
 *               company: "Google",
 *               salary: 100000,}
 *       404:
 *         description: Job not found
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Job not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Internal Server Error
 *
 */

// user/jobs
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /api/v1/user/jobs:
 *   get:
 *     summary: View all jobs
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful retrieval.
 *         content:
 *           application/json:
 *             example:
 *              success: true
 *              message: All jobs
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *            example:
 *              success: false
 *              message: Internal Server Error
 *
 */

// user/me/applications
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /api/v1/user/me/applications:
 *   get:
 *     summary: View my applications
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *            example:
 *             success: true
 *             message: Your applications found
 *            jobs: [
 *                      {
 *                       _id: 5f9d4b5b6c6b4b2b6c6b4b2b,
 *                       title: "Software Engineer",
 *                       description: "We are looking for a software engineer",
 *                       image: "https://images.unsplash.com/photo-1556742048-ede6c971a8a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcmluZyUyMHNvZnR3YXJlJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
 *                       active: true,
 *                       postedAt: 2021-07-01T00:00:00.000Z,
 *                       company: "Google",
 *                       salary: 100000,}]
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *            example:
 *              success: false
 *              message: Internal Server Error
 *
 */

// user/me
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /api/v1/user/me:
 *   get:
 *     summary: View my profile
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User found
 *               user: {
 *                _id: 5f9d4b5b6c6b4b2b6c6b4b2b,
 *                firstName: "John",
 *                lastName: "Doe",
 *                email: "john@gmail.com",
 *                role: "user"}
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *            example:
 *              success: false
 *              message: Internal Server Error
 *
 */