import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from '@configs';

@Module({
  imports: [MongooseModule.forRoot(config.MONGODB_HOST, {
    connectionName: config.MONGODB_CONNECTION_NAME
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
