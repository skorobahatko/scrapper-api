import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { User as UserModel, UserDocument } from '@models';
import moment from 'moment';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user-schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  // Fn which add or update additional timestamps for UserModel.
  private insertTimeStamps(userModel: UserModel): UserModel {
    if (!userModel?.created_at) {
      userModel.created_at = moment().format();
    }
    if (!userModel?.updated_at) {
      userModel.updated_at = moment().format();
    }
    if (moment(userModel?.created_at).unix() < moment(userModel?.updated_at).unix()) {
      userModel.updated_at = userModel.created_at;
    }
    return userModel;
  }

  // Getting one User row by id.
  async getById(id: string): Promise<UserDocument | undefined> {
    try {
      return this.userModel.findOne({ _id: id }).lean();
    } catch (err) {
      throw new Error(err.message || 'Something goes wrong while get MongoDB request');
    }
  }

  // Creating new user using mongodb UserModel.
  async create(user: UserModel) {
    try {
      return new this.userModel(this.insertTimeStamps(user));
    } catch (err) {
      throw new Error(err.message || 'Something goes wrong while create MongoDB request');
    }
  }

  // Deleting one User row by id.
  async deleteById(id: string) {
    try {
      return this.userModel.deleteOne({ id });
    } catch (err) {
      throw new Error(err.message || 'Something goes wrong while delete by id MongoDB request');
    }
  }
}
