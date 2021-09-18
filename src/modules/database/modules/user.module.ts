import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeature([{name: '', schema: {}}], 'scrapper-api-main-connection')] // TODO add user schema and name
})

export class UserModule {};