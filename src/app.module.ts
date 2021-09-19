import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from '@configs';
import { UserModule } from './modules';

@Module({
  imports: [
    MongooseModule.forRoot(config.MONGODB_HOST, {
      connectionName: config.MONGODB_CONNECTION_NAME,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
