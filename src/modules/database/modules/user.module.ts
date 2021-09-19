import { Controller, Get, Module, Param, Query } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { config } from '@configs';
import { User, UserSchema } from '../schemas/user-schema';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';

// MongoDB User module defining.
@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema, collection: 'users' }],
      config.MONGODB_CONNECTION_NAME,
    ),
  ], // TODO check forFeatureAsync
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
