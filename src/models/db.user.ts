import { Document } from 'mongoose';

export interface User {
  id: string;

  username: string;

  created_at: string;
  updated_at: string;
}

export type UserDocument = User & Document;