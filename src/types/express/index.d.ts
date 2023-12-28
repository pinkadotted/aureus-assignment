import { User } from '../../models/user';
import { Request } from 'express';

declare global {
  namespace Express {
    export interface Request {
      user: any;
    }
  }
}