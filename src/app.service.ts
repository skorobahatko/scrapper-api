import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  defaultResponse(): string {
    return new Date().toDateString();
  }
}
