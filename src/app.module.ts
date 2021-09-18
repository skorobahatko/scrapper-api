import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://localhost/scrapper-api`, {
    connectionName: 'scrapper-api-main-connection'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
