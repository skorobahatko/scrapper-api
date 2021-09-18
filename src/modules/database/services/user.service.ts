import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService {
  // constructor(@InjectModel() private userModel: Model<UserDocument>) {} // TODO add userDocument and other actions

  // async getById(id: string): Promise<UserDocument | undefined> {
  //   return this.userModel.findOne({id}).lean()
  // }
}