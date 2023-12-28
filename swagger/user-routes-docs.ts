// user/signup
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /user/signup:
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
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 *
 */

// user/login
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /user/login:
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
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 *
 */

// user/jobs/:id/apply
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /user/jobs/{id}/apply:
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
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       500:
 *         description: Internal server error
 *
 */

// user/jobs/:id
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /user/jobs/{id}:
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
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       500:
 *         description: Internal server error
 *
 */

// user/jobs
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /user/jobs:
 *   get:
 *     summary: View all jobs
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       500:
 *         description: Internal server error
 *
 */

// user/me/applications
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /user/me/applications:
 *   get:
 *     summary: View my applications
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       500:
 *         description: Internal server error
 *
 */

// user/me
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /user/me:
 *   get:
 *     summary: View my profile
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 *
 */