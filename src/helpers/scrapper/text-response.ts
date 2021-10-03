import { CheerioAPI } from 'cheerio';
import { TextTags } from '@models';
import { createScrapperInitialInstance } from './initial';

export class ScrapperTextResponse {
  private api: CheerioAPI | null = null;

  constructor(private url: string) {
    this.api = createScrapperInitialInstance(url);
  }

  private processSelector(api: typeof this.api, selector: string) {
    return api(selector).text();
  }

  get(): string[] {
    const api = this.api;

    return Object.values(TextTags)
      .map((tag) => this.processSelector(api, tag))
      .filter((i) => !!i);
  }
}
