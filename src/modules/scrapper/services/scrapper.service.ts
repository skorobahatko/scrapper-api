import { Injectable } from '@nestjs/common';
import { initialScrapperProcess } from '@helpers';

@Injectable()
export class ScrapperService {
  constructor() {}

  async getResponse(url: string, selectors: string[]) {
    try {
      return await initialScrapperProcess(url, selectors);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }
}
