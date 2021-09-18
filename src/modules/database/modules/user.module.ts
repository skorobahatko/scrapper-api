import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { config } from '@configs';
@Module({
  imports: [MongooseModule.forFeature([{name: '', schema: {}}], config.MONGODB_CONNECTION_NAME)] // TODO add user schema and name
})

export class UserModule {};