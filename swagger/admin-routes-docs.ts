// admin/signup
/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admin managing API
 * /admin/signup:
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
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       500:
 *         description: Internal server error
 *
 */

// admin/login
/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admin managing API
 * /admin/login:
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
 *       500:
 *         description: Internal server error
 *
 */

// admin/jobs/add
/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admin managing API
 * /admin/jobs/add:
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
 *       200:
 *         description: Successful addition.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       500:
 *         description: Internal server error
 *
 */

// admin/jobs/delete/:id
/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admin managing API
 * /admin/jobs/delete/{id}:
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
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       500:
 *         description: Internal server error
 *
 */

// admin/jobs
/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admin managing API
 * /admin/jobs:
 *   get:
 *     summary: View all jobs
 *     tags: [Admins]
 *     responses:
 *       200:
 *         description: Successful retrieval.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       500:
 *         description: Internal server error
 *
 */