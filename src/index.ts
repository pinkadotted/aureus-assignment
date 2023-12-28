import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import { specs } from "../swagger/setup";
import userRoutes from '../routes/userRoutes';
import adminRoutes from '../routes/adminRoutes';

// .env config
dotenv.config();

export const app: Express = express();
export const port = process.env.PORT || 3000;

// middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', adminRoutes);

// swagger docs
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

// root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});