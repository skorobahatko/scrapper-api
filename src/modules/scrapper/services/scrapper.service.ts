import { Injectable } from '@nestjs/common';
import { pureResponse } from '@helpers';
import { ScrapperTextResponse } from 'src/helpers/scrapper/text-response';

@Injectable()
export class ScrapperService {
  constructor() {}

  async getPure(url: string) {
    try {
      return await pureResponse(url);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getText(url: string) {
    try {
      const instance = new ScrapperTextResponse(url);

      return instance.get();
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
