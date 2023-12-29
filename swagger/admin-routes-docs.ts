// admin/signup
/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admin managing API
 * /api/v1/admin/signup:
 *   post:
 *     summary: Register a new admin
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
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
 *
 */

// admin/login
/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admin managing API
 * /api/v1/admin/login:
 *   post:
 *     summary: Login an admin
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
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
 */

// admin/jobs/add
/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admin managing API
 * /api/v1/admin/jobs/add:
 *   post:
 *     summary: Add a new job
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       201:
 *         description: Successful addition.
 *         content:
 *           application/json:
 *            example:
 *             success: true
 *             message: Job created successfully
 *             job: {
 *              _id: 5f9d4b5b6c6b4b2b6c6b4b2b,
 *              title: "Software Engineer",
 *              description: "We are looking for a software engineer",
 *              image: "https://images.unsplash.com/photo-1556742048-ede6c971a8a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcmluZyUyMHNvZnR3YXJlJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
 *              active: true,
 *              postedAt: 2021-07-01T00:00:00.000Z,
 *              company: "Google",
 *              salary: 100000,}
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *            example:
 *              success: false
 *              message: Internal Server Error
 */

// admin/jobs/delete/:id
/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admin managing API
 * /api/v1/admin/jobs/delete/{id}:
 *   delete:
 *     summary: Delete a job
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job id
 *     responses:
 *       200:
 *         description: Successful deletion.
 *         content:
 *           application/json:
 *            example:
 *             success: true
 *             message: Job deleted successfully
 *             job: {
 *              _id: 5f9d4b5b6c6b4b2b6c6b4b2b,
 *              title: "Software Engineer",
 *              description: "We are looking for a software engineer",
 *              image: "https://images.unsplash.com/photo-1556742048-ede6c971a8a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcmluZyUyMHNvZnR3YXJlJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
 *              active: true,
 *              postedAt: 2021-07-01T00:00:00.000Z,
 *              company: "Google",
 *              salary: 100000,}
 *       400:
 *        description: Please enter an existing job's id
 *        content:
 *          application/json:
 *           example:
 *            success: false
 *            message: Please enter an existing job's id
 *       404:
 *        description: Job not found
 *        content:
 *          application/json:
 *           example:
 *            success: false
 *            message: Job not found
 * 
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *            example:
 *              success: false
 *              message: Internal Server Error
 *
 */

// admin/jobs
/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admin managing API
 * /api/v1/admin/jobs:
 *   get:
 *     summary: View all jobs
 *     tags: [Admins]
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
 */