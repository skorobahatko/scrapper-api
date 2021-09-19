import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment';

import {
  UserInterface as UserModel,
  UserDocument,
  CreateUserInterface,
  UserInterface,
} from '@models';
import { User } from '../schemas/user-schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  // Fn which add or update additional timestamps for UserModel.
  private insertTimeStamps(userModel: CreateUserInterface | UserModel): UserModel {
    const updatedUserInterface = userModel as UserModel;

    if (!updatedUserInterface?.created_at) {
      updatedUserInterface.created_at = moment().format();
    }
    if (!updatedUserInterface?.updated_at) {
      updatedUserInterface.updated_at = moment().format();
    }
    if (
      moment(updatedUserInterface?.created_at).unix() >
      moment(updatedUserInterface?.updated_at).unix()
    ) {
      updatedUserInterface.updated_at = updatedUserInterface.created_at;
    }
    return updatedUserInterface;
  }

  // Getting one User row by id.
  async getById(_id: string): Promise<UserDocument | undefined> {
    try {
      return this.userModel.findOne({ _id }).lean();
    } catch (err) {
      throw new Error(err.message || 'Something goes wrong while get MongoDB request');
    }
  }

  // Creating new user using mongodb UserModel.
  async create(user: CreateUserInterface) {
    try {
      return new this.userModel(this.insertTimeStamps(user));
    } catch (err) {
      throw new Error(err.message || 'Something goes wrong while create MongoDB request');
    }
  }

  // Deleting one User row by id.
  async deleteById(id: string) {
    try {
      return this.userModel.deleteOne({ _id: id });
    } catch (err) {
      throw new Error(err.message || 'Something goes wrong while delete by id MongoDB request');
    }
  }

  // Updating one user by full user interface.
  async update(user: UserInterface) {
    try {
      const updatedUserWithTimeStapms = this.insertTimeStamps(user);

      return this.userModel.updateOne(
        { _id: updatedUserWithTimeStapms._id },
        {
          username: updatedUserWithTimeStapms.username,
          updated_at: updatedUserWithTimeStapms.updated_at,
        },
      );
    } catch (err) {
      throw new Error(err.message || 'Something goes wrong while update MongoDB request');
    }
  }
}
