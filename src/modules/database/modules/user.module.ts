import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { config } from '@configs';
import { User, UserSchema } from '../schemas/user-schema';
import { UserService } from '../services/user.service';
import { UserController } from 'src/modules';

// MongoDB User module defining.
@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      config.MONGODB_CONNECTION_NAME,
    ),
  ], // TODO check forFeatureAsync
  // controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
