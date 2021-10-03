import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from '@configs';
import { DatabaseModule, ScrapperModule } from './modules';

@Module({
  imports: [
    MongooseModule.forRoot(config.MONGODB_HOST, {
      connectionName: config.MONGODB_CONNECTION_NAME,
    }),
    DatabaseModule,
    ScrapperModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
