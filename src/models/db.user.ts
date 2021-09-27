import { Document } from 'mongoose';

export interface UserInterface {
  _id: string;

  username: string;

  created_at: string;
  updated_at: string;
}

export interface CreateUserInterface {
  username: string;
}

export type UserDocument = UserInterface & Document;
